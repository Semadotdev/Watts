const { Resend } = require('resend')

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  const { name, email, message } = JSON.parse(event.body)

  if (!name || !email || !message) {
    return { statusCode: 400, body: JSON.stringify({ error: 'All fields are required' }) }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ error: 'RESEND_API_KEY not configured' }) }
  }

  const resend = new Resend(apiKey)

  const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background-color:#f5f5f5;font-family:Inter,-apple-system,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f5f5;padding:40px 20px;">
<tr><td align="center">
<table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
<tr><td style="background-color:#102120;padding:32px 36px 28px;">
<span style="font-family:Orbitron,'Courier New',monospace;font-size:14px;font-weight:700;letter-spacing:3px;color:#D6AB34;">WATTS INNOVATION</span>
<h1 style="font-family:Inter,sans-serif;font-size:20px;font-weight:600;color:#fff;margin:12px 0 0;">New Contact Form Submission</h1>
</td></tr>
<tr><td style="padding:36px;">
<table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
<tr><td style="font-family:Inter,sans-serif;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#102120;padding-bottom:6px;">Name</td></tr>
<tr><td style="font-family:Inter,sans-serif;font-size:15px;font-weight:500;color:#333;line-height:1.5;background-color:#f9f9f9;padding:12px 16px;border-radius:8px;">${name}</td></tr>
</table>
<table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
<tr><td style="font-family:Inter,sans-serif;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#102120;padding-bottom:6px;">Email</td></tr>
<tr><td style="font-family:Inter,sans-serif;font-size:15px;font-weight:500;color:#333;line-height:1.5;background-color:#f9f9f9;padding:12px 16px;border-radius:8px;"><a href="mailto:${email}" style="color:#276468;text-decoration:none;">${email}</a></td></tr>
</table>
<table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:8px;">
<tr><td style="font-family:Inter,sans-serif;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#102120;padding-bottom:6px;">Message</td></tr>
<tr><td style="font-family:Inter,sans-serif;font-size:15px;color:#333;line-height:1.7;background-color:#f9f9f9;padding:12px 16px;border-radius:8px;white-space:pre-wrap;">${message}</td></tr>
</table>
</td></tr>
<tr><td style="border-top:1px solid #e5e7eb;padding:20px 36px;">
<p style="font-family:Inter,sans-serif;font-size:12px;color:#9ca3af;margin:0;text-align:center;">Sent from your portfolio</p>
</td></tr>
</table>
</td></tr>
</table>
</body>
</html>`

  try {
    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'jiroluis.bizz@gmail.com',
      subject: `New contact from ${name}`,
      html,
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    }
  } catch (err) {
    console.error('Resend error:', err)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
    }
  }
}
