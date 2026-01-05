# MailerSend Contact Form Setup Guide

This guide will help you set up MailerSend to power your contact form on thefirstcoastal.com.

---

## Why MailerSend?

- **12,000 free emails per month** (more than enough for a contact form)
- No credit card required for free tier
- Professional email delivery
- Easy API integration
- Great documentation

---

## Quick Setup (5 minutes)

### Step 1: Create MailerSend Account

1. Go to [MailerSend.com](https://www.mailersend.com/)
2. Click "Start Free" or "Sign Up"
3. Enter your email and create a password
4. Verify your email address

### Step 2: Add and Verify Your Domain

**Important:** For emails to work properly, you need to verify your domain.

1. In MailerSend dashboard, go to **"Domains"**
2. Click **"Add Domain"**
3. Enter: `thefirstcoastal.com`
4. MailerSend will provide DNS records you need to add

**DNS Records to Add** (these will be shown in MailerSend):
- **TXT record** - for domain verification
- **CNAME records** - for email authentication (SPF, DKIM)
- **MX record** (optional) - for receiving emails

5. Add these records in your domain registrar (GoDaddy, Namecheap, etc.)
6. Wait 10-30 minutes for DNS propagation
7. Click "Verify Domain" in MailerSend

### Step 3: Get Your API Token

1. In MailerSend dashboard, go to **"Settings"** → **"API Tokens"**
2. Click **"Generate New Token"**
3. Name it: `First Coastal Contact Form`
4. **Permissions needed:** Select "Email sending - Full access"
5. Click **"Create Token"**
6. **Copy the token** (you won't see it again!)

### Step 4: Add API Token to Your Project

Open `.env.local` and replace the placeholder:

```env
MAILERSEND_API_KEY=your_actual_api_token_here
CONTACT_EMAIL=info@thefirstcoastal.com
```

**Example:**
```env
MAILERSEND_API_KEY=mlsn.abc123def456ghi789jkl012mno345pqr678stu
CONTACT_EMAIL=info@thefirstcoastal.com
```

### Step 5: Restart Your Dev Server

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

### Step 6: Test the Form

1. Go to `http://localhost:3000/contact`
2. Fill out the form with test data
3. Submit
4. Check your email at `info@thefirstcoastal.com`

---

## Troubleshooting

### "Domain not verified" error
- Wait 30 minutes after adding DNS records
- Check DNS records are correct: `dig TXT thefirstcoastal.com`
- Try the "Verify Domain" button again

### Emails not sending
- Check your API token is correct in `.env.local`
- Make sure you restarted the dev server after adding the token
- Check MailerSend dashboard for error logs

### Emails going to spam
- Make sure domain is fully verified
- Add SPF and DKIM records (provided by MailerSend)
- Consider adding a custom sending email address

### "From" email address issues
The API route uses `contact@thefirstcoastal.com` as the sender. After verifying your domain, this will work automatically.

---

## Domain Verification Details

### Where to Add DNS Records

**If using Vercel:**
1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Click on `thefirstcoastal.com`
3. Add the DNS records provided by MailerSend

**If using another registrar:**
- GoDaddy: DNS Management
- Namecheap: Advanced DNS
- Cloudflare: DNS settings

### What Each Record Does

- **TXT** - Verifies you own the domain
- **DKIM (CNAME)** - Authenticates your emails (prevents spoofing)
- **SPF (TXT)** - Lists authorized mail servers
- **MX (optional)** - Only needed if you want to receive emails at this domain

---

## Email Configuration

### Current Setup

**From:** `contact@thefirstcoastal.com` (Contact Form)
**To:** `info@thefirstcoastal.com` (Your email)
**Reply-To:** Submitter's email (so you can reply directly)

### Customizing

To change the recipient email, update `.env.local`:

```env
CONTACT_EMAIL=your-email@thefirstcoastal.com
```

---

## Free Tier Limits

- **12,000 emails/month** - Way more than you'll need
- **3,000 emails/day** - Also plenty for a contact form
- **No credit card required**
- **No expiration**

Even with 10 contact form submissions per day, you'll only use ~300 emails/month (2.5% of your limit).

---

## Production Deployment

When deploying to Railway/Vercel:

1. **Add environment variables** in your hosting dashboard:
   - `MAILERSEND_API_KEY` = your API token
   - `CONTACT_EMAIL` = info@thefirstcoastal.com

2. **Verify domain** is fully set up (SPF, DKIM, domain verified)

3. **Test on production** after deployment

---

## Monitoring & Logs

### Check Email Status

1. Go to MailerSend dashboard
2. Click **"Activity"** or **"Logs"**
3. See all sent emails, delivery status, opens, clicks

### Failed Emails

If an email fails:
1. Check MailerSend logs for error details
2. Verify domain authentication
3. Check API token permissions

---

## Next Steps

1. ✅ Sign up for MailerSend
2. ✅ Add and verify your domain
3. ✅ Get API token
4. ✅ Add token to `.env.local`
5. ✅ Test the contact form
6. ⏳ Deploy to production
7. ⏳ Add API token to Railway/Vercel environment variables

---

## Support

- [MailerSend Documentation](https://developers.mailersend.com/)
- [API Reference](https://developers.mailersend.com/api/v1/email.html)
- [Support](https://www.mailersend.com/help)

---

## Alternative: Skip Domain Verification (Quick Test)

If you just want to test quickly:

1. MailerSend allows sending from their test domain
2. Change `sentFrom` in `app/api/contact/route.ts`:
   ```typescript
   const sentFrom = new Sender('test@trial.mailersend.com', 'First Coastal Contact');
   ```
3. This works immediately but emails may go to spam

**For production, always verify your domain!**
