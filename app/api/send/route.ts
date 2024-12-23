import EmailTemplate from "@/app/emails/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, phone, message } = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["ziv.kali656@gmail.com"],
      subject: "הודעה חדשה מאתר שלנו",
      react: EmailTemplate({
        name,
        email,
        phone,
        message,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
