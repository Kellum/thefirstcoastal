# Vonage SMS Integration Setup

This document contains your Vonage API credentials and setup instructions for the "Text Us" feature.

## Your Vonage Credentials

**API Secret**: `gOZfhCMTxlY16T6M`

**API Key**: _[You need to add this from your Vonage dashboard]_

**From Number**: _[Your Vonage phone number - find this in your Vonage dashboard]_

---

## How to Find Your Credentials

1. Log in to [Vonage Dashboard](https://dashboard.nexmo.com/)
2. **API Key & Secret**: Found on the main dashboard page (top section)
3. **Phone Number**: Go to "Numbers" → "Your Numbers" to see your Vonage number

---

## Environment Variables Setup

Add these to your `.env.local` file:

```env
# Vonage SMS API
VONAGE_API_KEY=your_api_key_here
VONAGE_API_SECRET=gOZfhCMTxlY16T6M
VONAGE_FROM_NUMBER=your_vonage_phone_number
YOUR_PHONE_NUMBER=your_personal_phone_number_to_receive_texts
```

**Important**:
- Phone numbers should be in E.164 format (e.g., `+1234567890`)
- Never commit `.env.local` to git (it's already in `.gitignore`)

---

## Pricing

- **Per SMS**: ~$0.0076 per message
- **Free Trial**: €2 credit (~25-30 SMS messages)
- **Monthly Cost**: Only pay for what you use (no monthly fees)

---

## API Usage Example

```javascript
import { Vonage } from '@vonage/server-sdk';

const vonage = new Vonage({
  apiKey: process.env.VONAGE_API_KEY,
  apiSecret: process.env.VONAGE_API_SECRET,
});

async function sendSMS(to, text) {
  const from = process.env.VONAGE_FROM_NUMBER;

  await vonage.sms.send({
    to,
    from,
    text,
  });
}
```

---

## Next Steps

1. ✅ Save API Secret (done - stored in this file)
2. ⏳ Add API Key to this file and `.env.local`
3. ⏳ Add phone numbers to `.env.local`
4. ⏳ Install Vonage SDK: `npm install @vonage/server-sdk`
5. ⏳ Create API route for sending SMS
6. ⏳ Create floating "Text Us" button component
7. ⏳ Create modal form for user input
8. ⏳ Test the integration

---

## Security Notes

- **Never** commit this file to public repositories
- Keep your API secret private
- Consider adding `VONAGE_SETUP.md` to `.gitignore` if sharing code publicly
- Rotate your API secret if it's ever exposed

---

## Support

- [Vonage Documentation](https://developer.vonage.com/)
- [SMS API Reference](https://developer.vonage.com/en/messaging/sms/overview)
- [Node.js SDK Guide](https://github.com/Vonage/vonage-node-sdk)
