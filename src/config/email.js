// EmailJS Configuration for Hostinger + Apple Mail
// Sign up at https://www.emailjs.com/ and replace these values
// 
// PERFECT SETUP: Hostinger email → Apple Mail
// Your professional domain email will receive contact form submissions

export const emailConfig = {
  serviceID: 'service_dxc1muc',     // From EmailJS dashboard
  templateID: 'template_ukf85tl',   // From EmailJS dashboard  
  publicKey: '3hjDPmspFHhhL5UMN'      // From EmailJS dashboard
}

// How it works with Hostinger + Apple Mail:
// 1. Visitor submits form → EmailJS processes it
// 2. Email sent via Hostinger SMTP → Professional domain email
// 3. Email appears in Apple Mail → Connected to your Hostinger mailbox
// 4. You reply from Apple Mail → Professional email address
//
// Hostinger SMTP Settings for EmailJS:
// - Server: smtp.hostinger.com
// - Port: 587 (TLS) or 465 (SSL)
// - Username: your-email@yourdomain.com
// - Password: your email password
//
// Benefits of this setup:
// ✅ Professional domain email (not Gmail)
// ✅ All emails in Apple Mail
// ✅ Easy replies from Apple Mail
// ✅ Branded email communications

// Email template variables that will be sent:
// - from_name: Customer's name
// - from_email: Customer's email
// - company: Customer's company
// - service: Selected service (Website/AI Software/AI Automation)
// - message: Customer's message
// - to_email: Your Hostinger email (e.g., info@stratigo.id) 