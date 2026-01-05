import { NextRequest, NextResponse } from 'next/server';
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    const { name, email, company, message, services } = formData;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if MailerSend is configured
    const mailerSendApiKey = process.env.MAILERSEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL || 'info@thefirstcoastal.com';

    if (!mailerSendApiKey) {
      console.error('MAILERSEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact support.' },
        { status: 500 }
      );
    }

    // Initialize MailerSend
    const mailerSend = new MailerSend({
      apiKey: mailerSendApiKey,
    });

    // Build service-specific content
    let serviceDetails = '';
    let serviceDetailsText = '';

    // Website Development
    if (services?.includes('website')) {
      serviceDetails += `
        <div style="margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #5D878C;">
          <h3 style="margin-top: 0; color: #5D878C;">Website Development</h3>
          <p><strong>Has Existing Website:</strong> ${formData.hasExistingWebsite || 'N/A'}</p>
          ${formData.websiteUrl ? `<p><strong>Current Website:</strong> <a href="${formData.websiteUrl}">${formData.websiteUrl}</a></p>` : ''}
          <p><strong>Timeline:</strong> ${formData.websiteTimeline || 'N/A'}</p>
          <p><strong>Budget:</strong> ${formData.websiteBudget || 'N/A'}</p>
        </div>
      `;

      serviceDetailsText += `\n--- Website Development ---\n`;
      serviceDetailsText += `Has Existing Website: ${formData.hasExistingWebsite || 'N/A'}\n`;
      if (formData.websiteUrl) serviceDetailsText += `Current Website: ${formData.websiteUrl}\n`;
      serviceDetailsText += `Timeline: ${formData.websiteTimeline || 'N/A'}\n`;
      serviceDetailsText += `Budget: ${formData.websiteBudget || 'N/A'}\n`;
    }

    // Social Media
    if (services?.includes('social-media')) {
      const platforms = formData.socialPlatforms?.join(', ') || 'None selected';
      serviceDetails += `
        <div style="margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #5D878C;">
          <h3 style="margin-top: 0; color: #5D878C;">Social Media</h3>
          <p><strong>Platforms:</strong> ${platforms}</p>
          <p><strong>Has Existing Accounts:</strong> ${formData.hasExistingAccounts || 'N/A'}</p>
          <p><strong>Primary Goals:</strong> ${formData.socialGoals || 'N/A'}</p>
        </div>
      `;

      serviceDetailsText += `\n--- Social Media ---\n`;
      serviceDetailsText += `Platforms: ${platforms}\n`;
      serviceDetailsText += `Has Existing Accounts: ${formData.hasExistingAccounts || 'N/A'}\n`;
      serviceDetailsText += `Primary Goals: ${formData.socialGoals || 'N/A'}\n`;
    }

    // SEO
    if (services?.includes('seo')) {
      serviceDetails += `
        <div style="margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #5D878C;">
          <h3 style="margin-top: 0; color: #5D878C;">SEO</h3>
          <p><strong>Website URL:</strong> <a href="${formData.seoWebsiteUrl}">${formData.seoWebsiteUrl}</a></p>
          <p><strong>Previous SEO Work:</strong> ${formData.hasDoneSeo || 'N/A'}</p>
          <p><strong>Target Area:</strong> ${formData.targetArea || 'N/A'}</p>
          ${formData.competitors ? `<p><strong>Competitors:</strong> ${formData.competitors}</p>` : ''}
        </div>
      `;

      serviceDetailsText += `\n--- SEO ---\n`;
      serviceDetailsText += `Website URL: ${formData.seoWebsiteUrl}\n`;
      serviceDetailsText += `Previous SEO Work: ${formData.hasDoneSeo || 'N/A'}\n`;
      serviceDetailsText += `Target Area: ${formData.targetArea || 'N/A'}\n`;
      if (formData.competitors) serviceDetailsText += `Competitors: ${formData.competitors}\n`;
    }

    // Strategy Consulting
    if (services?.includes('consulting')) {
      serviceDetails += `
        <div style="margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #5D878C;">
          <h3 style="margin-top: 0; color: #5D878C;">Strategy Consulting</h3>
          <p><strong>Business Type:</strong> ${formData.businessType || 'N/A'}</p>
          <p><strong>Challenges:</strong></p>
          <p style="white-space: pre-wrap;">${formData.challenges || 'N/A'}</p>
          <p><strong>Preferred Format:</strong> ${formData.consultationFormat || 'N/A'}</p>
        </div>
      `;

      serviceDetailsText += `\n--- Strategy Consulting ---\n`;
      serviceDetailsText += `Business Type: ${formData.businessType || 'N/A'}\n`;
      serviceDetailsText += `Challenges:\n${formData.challenges || 'N/A'}\n`;
      serviceDetailsText += `Preferred Format: ${formData.consultationFormat || 'N/A'}\n`;
    }

    // General Inquiry
    if (services?.includes('general')) {
      serviceDetails += `
        <div style="margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #5D878C;">
          <h3 style="margin-top: 0; color: #5D878C;">General Inquiry</h3>
        </div>
      `;

      serviceDetailsText += `\n--- General Inquiry ---\n`;
    }

    // Create email subject
    const servicesText = services?.length > 0
      ? services.map((s: string) => s.replace('-', ' ')).join(', ')
      : 'General';
    const emailSubject = `New Contact Form: ${servicesText} - ${name}`;

    // Create email content
    const emailBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #222326;">New Contact Form Submission</h2>

        <div style="margin: 20px 0; padding: 15px; background-color: #f0f4f5;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          <p><strong>Services Interested In:</strong> ${servicesText}</p>
        </div>

        ${serviceDetails}

        ${message ? `
          <div style="margin: 20px 0;">
            <h3 style="color: #222326;">Additional Details:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        ` : ''}

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
        <p style="color: #999; font-size: 12px;">Sent from thefirstcoastal.com contact form</p>
      </div>
    `;

    const emailText = `
New Contact Form Submission

--- Contact Information ---
Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ''}
Services Interested In: ${servicesText}

${serviceDetailsText}

${message ? `\n--- Additional Details ---\n${message}\n` : ''}

---
Sent from thefirstcoastal.com contact form
    `;

    // Set up email parameters
    const sentFrom = new Sender('contact@thefirstcoastal.com', 'First Coastal Contact Form');
    const recipients = [new Recipient(contactEmail, 'First Coastal')];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(new Recipient(email, name))
      .setSubject(emailSubject)
      .setHtml(emailBody)
      .setText(emailText);

    // Send email
    await mailerSend.email.send(emailParams);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error sending email:', error);
    console.error('Error details:', {
      message: error.message,
      response: error.response?.body,
      statusCode: error.statusCode,
    });
    return NextResponse.json(
      {
        error: 'Failed to send email. Please try again later.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}
