import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactEmailPayload {
  name: string;
  email: string;
  interest: string;
  message: string;
}

export async function sendContactEmail(payload: ContactEmailPayload) {
  const { name, email, interest, message } = payload;

  return resend.emails.send({
    from: 'Analytica Studio <onboarding@resend.dev>',
    to: ['patrycjazurawska@hotmail.com'],
    reply_to: email,
    subject: `[Portfolio] Nowa wiadomość od ${name}`,
    html: `
      <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #F5F2EE; border-radius: 16px;">
        <h2 style="color: #1A1A1A; font-size: 24px; margin-bottom: 24px;">Nowa wiadomość z portfolio</h2>

        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #888; font-size: 14px; width: 30%;">Imię</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #1A1A1A; font-size: 14px;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #888; font-size: 14px;">Email</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #1A1A1A; font-size: 14px;">
              <a href="mailto:${email}" style="color: #1A1A1A;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #888; font-size: 14px;">Zainteresowanie</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #1A1A1A; font-size: 14px;">${interest}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; color: #888; font-size: 14px; vertical-align: top;">Wiadomość</td>
            <td style="padding: 12px 0; color: #1A1A1A; font-size: 14px; line-height: 1.6;">${message.replace(/\n/g, '<br/>')}</td>
          </tr>
        </table>

        <div style="margin-top: 32px; padding: 16px; background: #C9B8F0; border-radius: 12px;">
          <p style="margin: 0; color: #1A1A1A; font-size: 13px;">
            Odpowiedz bezpośrednio na ten email — wiadomość trafi do ${email}
          </p>
        </div>
      </div>
    `,
  });
}
