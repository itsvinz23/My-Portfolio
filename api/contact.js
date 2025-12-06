import { IncomingForm } from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Only POST allowed");
  }

  const form = new IncomingForm();

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error("Form parse error:", err);
      return res.status(500).send("Error parsing form");
    }

    const { name, email, subject, message } = fields;

    console.log("📩 NEW MESSAGE:", { name, email, subject, message });

    // MUST return this exact response for template to show "sent-message"
    return res.status(200).send("OK");
  });
}
