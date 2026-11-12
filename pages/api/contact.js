const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const { name, email, message, _honey } = req.body || {};

  // Honeypot: pretend success so bots don't retry.
  if (_honey) return res.status(200).json({ ok: true });

  if (
    typeof name !== 'string' || !name.trim() || name.length > 100 ||
    typeof email !== 'string' || !EMAIL_RE.test(email) || email.length > 200 ||
    typeof message !== 'string' || !message.trim() || message.length > 5000
  ) {
    return res.status(400).json({ ok: false, error: 'Invalid form data' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    return res.status(500).json({ ok: false, error: 'Email service is not configured' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: [to],
        reply_to: email,
        subject: `Portfolio message from ${name.trim().slice(0, 80)}`,
        html: `
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
        `
      })
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error('Resend error:', response.status, detail);
      return res.status(502).json({ ok: false, error: 'Failed to send email' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return res.status(500).json({ ok: false, error: 'Failed to send email' });
  }
}
