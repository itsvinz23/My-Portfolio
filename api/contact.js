export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
};

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests allowed" });
  }

  const name = req.body.name || "";
  const email = req.body.email || "";
  const subject = req.body.subject || "";
  const message = req.body.message || "";

  console.log("📩 New Contact Form Message:");
  console.log({ name, email, subject, message });

  // REQUIRED: Template expects this exact text
  return res.status(200).send("OK");
}
