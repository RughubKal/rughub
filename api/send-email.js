import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// In-memory rate limiting store (resets on function restart)
const rateLimitStore = new Map();

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX_REQUESTS = 3; // 3 requests per window
const MIN_FORM_FILL_TIME = 3000; // 3 seconds minimum

// Spam keywords to check for
const SPAM_KEYWORDS = ['bitcoin', 'crypto', 'seo', 'viagra', 'casino', 'loan', 'mortgage'];

function getClientIP(req) {
  return req.headers['x-forwarded-for']?.split(',')[0] || 
         req.headers['x-real-ip'] || 
         req.connection?.remoteAddress || 
         'unknown';
}

function checkRateLimit(ip) {
  const now = Date.now();
  const userRequests = rateLimitStore.get(ip) || { count: 0, firstRequest: now };
  
  // Reset if window has passed
  if (now - userRequests.firstRequest > RATE_LIMIT_WINDOW) {
    userRequests.count = 0;
    userRequests.firstRequest = now;
  }
  
  userRequests.count++;
  rateLimitStore.set(ip, userRequests);
  
  return userRequests.count <= RATE_LIMIT_MAX_REQUESTS;
}

function validateHoneypot(honeypot) {
  if (!honeypot) return true; // Allow if no honeypot data
  
  // Check if any honeypot field is filled (indicates bot)
  return !honeypot.website && !honeypot.url && !honeypot.company;
}

function validateContent(message) {
  if (!message) return true;
  
  const lowerMessage = message.toLowerCase();
  return !SPAM_KEYWORDS.some(keyword => lowerMessage.includes(keyword));
}

function validateEmail(email) {
  // Basic email validation and common disposable email domains
  const disposableDomains = ['10minutemail.com', 'tempmail.org', 'guerrillamail.com'];
  const emailDomain = email.split('@')[1];
  
  return !disposableDomains.includes(emailDomain);
}

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, service, message, honeypot, formFillTime } = req.body;
    const clientIP = getClientIP(req);

    // Rate limiting check
    if (!checkRateLimit(clientIP)) {
      console.log(`Rate limit exceeded for IP: ${clientIP}`);
      return res.status(429).json({ 
        error: 'Too many requests. Please wait a few minutes before trying again.',
        retryAfter: Math.ceil(RATE_LIMIT_WINDOW / 1000)
      });
    }

    // Validate required fields
    if (!name || !email || !phone) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Honeypot validation
    if (!validateHoneypot(honeypot)) {
      console.log(`Honeypot triggered for IP: ${clientIP}`);
      // Don't reveal why the request was blocked
      return res.status(400).json({ error: 'Invalid form submission' });
    }

    // Form timing validation
    if (formFillTime && formFillTime < MIN_FORM_FILL_TIME) {
      console.log(`Form filled too quickly (${formFillTime}ms) for IP: ${clientIP}`);
      return res.status(400).json({ error: 'Please take more time to fill out the form' });
    }

    // Content validation
    if (!validateContent(message)) {
      console.log(`Spam keywords detected for IP: ${clientIP}`);
      return res.status(400).json({ error: 'Invalid content detected' });
    }

    // Email domain validation
    if (!validateEmail(email)) {
      console.log(`Disposable email detected: ${email} for IP: ${clientIP}`);
      return res.status(400).json({ error: 'Please use a valid email address' });
    }

    // Message length validation
    if (message && message.length > 2000) {
      return res.status(400).json({ error: 'Message is too long' });
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'RugHub Contact Form <noreply@rughubkal.com.au>',
      to: ['admin@rughubkal.com.au'],
      subject: `RugHub Service Inquiry - ${service || 'General'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service || 'Not specified'}</p>
        <h3>Message:</h3>
        <p>${message || 'No message provided'}</p>
        
        <hr>
        <p><em>This email was sent from the RugHub contact form.</em></p>
      `,
    });

    return res.status(200).json({ 
      message: 'Email sent successfully',
      id: data.id 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      error: 'Failed to send email',
      details: error.message 
    });
  }
}