import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactEmail = "contact@ojasintl.com.np";

const contactSchema = z.object({
  fullName: z.string().min(2),
  companyName: z.string().optional(),
  phone: z.string().min(7),
  email: z.string().email(),
  requiredService: z.string().min(1),
  projectDetails: z.string().min(10),
  budget: z.string().optional(),
  message: z.string().min(10)
});

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid form submission" }, { status: 400 });
  }

  const data = parsed.data;
  const subject = `New site inspection request: ${data.requiredService}`;
  const messageLines = [
    `Name: ${data.fullName}`,
    `Company: ${data.companyName || "N/A"}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `Service: ${data.requiredService}`,
    `Budget: ${data.budget || "N/A"}`,
    `Project Details: ${data.projectDetails}`,
    `Message: ${data.message}`
  ];

  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.CONTACT_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_TO || contactEmail,
      subject,
      replyTo: data.email,
      text: messageLines.join("\n")
    });

    return NextResponse.json({ ok: true });
  }

  const formSubmitResponse = await fetch(`https://formsubmit.co/ajax/${contactEmail}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      _subject: subject,
      _template: "table",
      _captcha: "false",
      name: data.fullName,
      company: data.companyName || "N/A",
      phone: data.phone,
      email: data.email,
      _replyto: data.email,
      service: data.requiredService,
      budget: data.budget || "N/A",
      projectDetails: data.projectDetails,
      message: data.message,
      summary: messageLines.join("\n")
    })
  });

  if (!formSubmitResponse.ok) {
    return NextResponse.json({ error: "Unable to send form submission" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
