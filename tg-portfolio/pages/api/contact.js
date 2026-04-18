const escapeHtml = (value = '') => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#39;');

const buildHtml = ({
  name,
  email,
  subject,
  message,
}) => {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replaceAll('\n', '<br />');

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <title>Website lead</title>
    </head>
    <body style="margin:0;padding:24px;background:#f8fafc;font-family:Helvetica,Arial,sans-serif;color:#0f172a;">
      <div style="max-width:640px;margin:0 auto;border-radius:24px;background:#ffffff;padding:32px;border:1px solid rgba(15,23,42,0.08);">
        <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.24em;text-transform:uppercase;color:#15803d;">Portfolio lead</p>
        <h1 style="margin:0 0 24px;font-size:28px;line-height:1.2;">New contact form submission</h1>
        <div style="margin-bottom:20px;">
          <p style="margin:0 0 8px;font-size:14px;color:#475569;"><strong>Name:</strong> ${safeName}</p>
          <p style="margin:0 0 8px;font-size:14px;color:#475569;"><strong>Email:</strong> ${safeEmail}</p>
          <p style="margin:0;font-size:14px;color:#475569;"><strong>Subject:</strong> ${safeSubject}</p>
        </div>
        <div style="border-radius:18px;background:#f8fafc;padding:20px;">
          <p style="margin:0 0 12px;font-size:13px;letter-spacing:0.12em;text-transform:uppercase;color:#64748b;">Message</p>
          <p style="margin:0;font-size:16px;line-height:1.7;color:#0f172a;">${safeMessage}</p>
        </div>
      </div>
    </body>
  </html>`;
};

async function sendEmail(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    name = '',
    email = '',
    subject = '',
    message = '',
    company = '',
  } = req.body || {};

  if (company) {
    return res.status(200).json({ success: true });
  }

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL || 'admin@travisg.tech';
  const to = process.env.CONTACT_TO_EMAIL || 'geislinger@proton.me';

  if (!apiKey || !from) {
    console.error('Resend config error', {
      hasApiKey: Boolean(apiKey),
      hasFromEmail: Boolean(from),
    });

    return res.status(500).json({ error: 'Email service is not configured' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `[Lead from website] ${subject}`,
        html: buildHtml({
          name,
          email,
          subject,
          message,
        }),
        text: `New contact form submission\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      }),
    });

    const payload = await response.json();

    if (!response.ok) {
      console.error('Resend send failed', {
        statusCode: response.status,
        payload,
        from,
        to,
        subject,
      });

      return res.status(response.status).json({
        error: payload?.message || payload?.name || 'Failed to send email',
      });
    }

    return res.status(200).json({ success: 'Message sent', id: payload?.id });
  } catch (error) {
    console.error('Resend request failed', {
      message: error.message,
      from,
      to,
      subject,
    });

    return res.status(500).json({ error: 'Failed to send email' });
  }
}

export default sendEmail;
