import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, phone, city, disease } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"MediEnd Website" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      subject: "New Consultation Request",
      html: `
        <h2>New Patient Request</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>City:</b> ${city}</p>
        <p><b>Disease:</b> ${disease}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Mail Error:", err);
    return Response.json({ success: false }, { status: 500 });
  }
}
