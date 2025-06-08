# Email Setup Guide for Stratigo Portfolio

## 📧 EmailJS Setup (Recommended)

EmailJS allows you to send emails directly from your website without a backend server.

### Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Email Service

#### For Hostinger Email Users:
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **"Custom SMTP"** or **"Other"**
4. Enter your Hostinger SMTP settings:
   - **SMTP Server**: `smtp.hostinger.com`
   - **Port**: `587` (TLS) or `465` (SSL)
   - **Username**: Your full email (e.g., bryan@yourdomain.com)
   - **Password**: Your email password (NOT cPanel password)
   - **Security**: TLS/STARTTLS (for port 587) or SSL (for port 465)

**IMPORTANT**: If you get authentication errors, try these fixes:
- Use port `587` with TLS (most reliable)
- Make sure you're using the EMAIL password, not cPanel password
- Enable "Less secure app access" in Hostinger email settings
- Try alternative SMTP: `mail.yourdomain.com` instead of `smtp.hostinger.com`

5. Copy the **Service ID**

#### Alternative - Use Gmail (RECOMMENDED for easier setup):
1. Choose **Gmail** service
2. Sign in with your Google account
3. Grant permissions to EmailJS
4. Copy the **Service ID**

**Benefits of using Gmail:**
- ✅ No SMTP configuration needed
- ✅ More reliable authentication
- ✅ Easier setup process
- ✅ Emails still arrive in your Apple Mail (if you forward them)

**To forward Gmail to your Hostinger email:**
1. In Gmail settings → Forwarding and POP/IMAP
2. Add your Hostinger email as forwarding address
3. All contact form emails will appear in Apple Mail

### Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. **IMPORTANT**: Set the "To Email" field to your Hostinger email:

**Template Settings:**
- **To Email**: `info@stratigo.id` (your Hostinger email)
- **From Name**: `Stratigo Website`
- **From Email**: `noreply@stratigo.id` (or the email you're sending from)
- **Subject**: `New Contact Form - {{service}}`

**Template Content:**
```html
Hello,

You have received a new contact form submission from your Stratigo website:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Service Interested: {{service}}

Message:
{{message}}

---
Reply to this customer at: {{from_email}}
This email was sent from the Stratigo contact form.
```

4. **Save** the template
5. Copy the **Template ID**

**Key Point**: The "To Email" field in the template determines where emails are sent. Set this to your Hostinger email address (info@stratigo.id) so all contact form submissions arrive in your Apple Mail.

### Step 4: Get Public Key

1. Go to **Account** → **General**
2. Copy your **Public Key**

### Step 5: Update Configuration

1. Install dependencies:
```bash
npm install
```

2. Edit `src/config/email.js`:
```javascript
export const emailConfig = {
  serviceID: 'your_service_id_here',
  templateID: 'your_template_id_here', 
  publicKey: 'your_public_key_here'
}
```

### Step 6: Test the Form

1. Run your website: `npm run dev`
2. Fill out the contact form
3. Check your email inbox

## 🔧 Alternative Options

### Option 2: Netlify Forms (If hosting on Netlify)

1. Add `netlify` attribute to form:
```html
<form @submit.prevent="submitForm" netlify>
```

2. Add hidden input:
```html
<input type="hidden" name="form-name" value="contact" />
```

### Option 3: Backend API

Create a backend service (Node.js, Python, etc.) with email sending capability:

```javascript
// Example endpoint
POST /api/contact
{
  "name": "John Doe",
  "email": "john@example.com", 
  "company": "ABC Corp",
  "service": "website",
  "message": "Hello..."
}
```

## 🚀 Production Deployment

1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting provider
3. Test the contact form in production

## 📝 Email Template Variables

The following variables are available in your EmailJS template:

- `{{from_name}}` - Customer's name
- `{{from_email}}` - Customer's email  
- `{{company}}` - Customer's company
- `{{service}}` - Selected service
- `{{message}}` - Customer's message
- `{{to_email}}` - Your email (info@stratigo.id)

## 🔒 Security Notes

- EmailJS public key is safe to expose in frontend code
- Consider adding rate limiting for production use
- Set up email filters to organize incoming messages
- Enable email notifications for new submissions

## 📞 Support

If you need help with setup:
- EmailJS Documentation: https://www.emailjs.com/docs/
- Contact form is ready to use once configured! 