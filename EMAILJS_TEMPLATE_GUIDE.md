# EmailJS Template Setup for Hostinger Email

## 🎯 Goal: Send Contact Form Emails to Your Hostinger Email (Apple Mail)

### Step-by-Step Template Configuration:

#### 1. **Template Settings** (Top of EmailJS template page):
```
To Email: info@stratigo.id
From Name: Stratigo Website  
From Email: noreply@stratigo.id
Reply To: {{from_email}}
Subject: New Contact Form - {{service}}
```

#### 2. **Template Content** (Email body):
```
Hello,

You have received a new contact form submission from your Stratigo website:

👤 Name: {{from_name}}
📧 Email: {{from_email}}
🏢 Company: {{company}}
🔧 Service: {{service}}

💬 Message:
{{message}}

---
📞 Reply to this customer at: {{from_email}}
🌐 This email was sent from the Stratigo contact form.
```

### 🔄 **Email Flow:**
```
1. Customer fills form on website
2. EmailJS processes form data
3. Email sent TO: info@stratigo.id
4. Email appears in Apple Mail
5. You reply FROM: info@stratigo.id
```

### ✅ **What You'll See in Apple Mail:**
```
From: Stratigo Website <noreply@stratigo.id>
To: info@stratigo.id
Subject: New Contact Form - Pembuatan Website

Hello,

You have received a new contact form submission...

Name: John Doe
Email: john@example.com
Company: ABC Corp
Service: Pembuatan Website

Message:
I need a website for my business...

---
Reply to this customer at: john@example.com
```

### 🎯 **Key Points:**
- **"To Email"** = Your Hostinger email (where you want to receive emails)
- **"From Email"** = Can be any email from your domain
- **"Reply To"** = Customer's email (so you can reply easily)
- **Template variables** = Data from the contact form

### 🔧 **If Using Gmail Service Instead:**
If you're using Gmail service (easier setup), just change:
- **To Email**: `info@stratigo.id` (your Hostinger email)
- Gmail will send the email TO your Hostinger address
- You'll still receive it in Apple Mail

This way you get the best of both worlds: easy Gmail setup + professional Hostinger email delivery! 