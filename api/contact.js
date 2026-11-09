// Vercel serverless function. Sends the contact form through Resend.
// Credentials come from environment variables and never reach the browser.
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { name, email, subject, message, website } = req.body || {};
  if (website) return res.status(200).json({ ok: true }); // honeypot for bots
  if (!name || !email || !subject || !message || !/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ error: "Please fill in every field with a valid email." });
  }

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL) {
    return res.status(503).json({ error: "Email delivery is not configured yet." });
  }

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>",
        to: [CONTACT_TO_EMAIL],
        reply_to: email,
        subject: `[Portfolio] ${String(subject).slice(0, 120)}`,
        text: `From: ${name} <${email}>\n\n${message}`,
      }),
    });
    if (!r.ok) return res.status(502).json({ error: "The email service rejected the message." });
    return res.status(200).json({ ok: true });
  } catch {
    return res.status(502).json({ error: "Could not reach the email service." });
  }
}
