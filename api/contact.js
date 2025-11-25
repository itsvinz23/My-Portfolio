export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { name, email, subject, message } = req.body;

  // You will connect email service later (Resend / Nodemailer)
  console.log("Message Received:", { name, email, subject, message });

  return res.status(200).json({ success: true, message: "Message sent successfully!" });
}
