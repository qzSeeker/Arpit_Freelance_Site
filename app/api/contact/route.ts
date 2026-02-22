import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, service, budget, timeline, message } = body;

        // Basic server-side validation
        if (!name || !email || !service || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        await resend.emails.send({
            from: 'onboarding@resend.dev',        // ← free tier, keep as-is until you verify a domain
            to: process.env.EMAIL_TO!,             // ← your gmail in .env.local
            replyTo: email,                        // ← so you can reply directly to the client
            subject: `New Inquiry: ${service} from ${name}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9f9f9; border-radius: 12px;">
                    <h2 style="margin-bottom: 24px; font-size: 22px;">New Project Inquiry 🚀</h2>

                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 10px 0; font-weight: bold; width: 140px; color: #555;">Name</td>
                            <td style="padding: 10px 0;">${name}</td>
                        </tr>
                        <tr style="background: #efefef;">
                            <td style="padding: 10px 0; font-weight: bold; color: #555;">Email</td>
                            <td style="padding: 10px 0;"><a href="mailto:${email}">${email}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; font-weight: bold; color: #555;">Service</td>
                            <td style="padding: 10px 0;">${service}</td>
                        </tr>
                        <tr style="background: #efefef;">
                            <td style="padding: 10px 0; font-weight: bold; color: #555;">Budget</td>
                            <td style="padding: 10px 0;">${budget || 'Not specified'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; font-weight: bold; color: #555;">Timeline</td>
                            <td style="padding: 10px 0;">${timeline || 'Not specified'}</td>
                        </tr>
                    </table>

                    <div style="margin-top: 24px; padding: 16px; background: white; border-radius: 8px; border-left: 3px solid #0d0d0d;">
                        <p style="font-weight: bold; color: #555; margin-bottom: 8px;">Message</p>
                        <p style="white-space: pre-wrap; color: #333;">${message}</p>
                    </div>

                    <p style="margin-top: 24px; font-size: 12px; color: #999;">
                        Sent from your portfolio contact form
                    </p>
                </div>
            `
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Contact API error:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}