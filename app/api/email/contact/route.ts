import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import z from "zod";

import {
    ContactAdminEmailTemplate,
    ContactSenderEmailTemplate,
} from "@/components/email-templates/contact";

const schema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.email(),
    phone: z.string(),
    message: z.string(),
});

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const resend = new Resend(process.env.RESEND_API_KEY);
        const { success, data } = schema.safeParse(body);

        if (!success || !data) {
            return new NextResponse("Incorrect data", { status: 400 });
        }

        const adminEmail = await resend.emails.send({
            from: `${data.firstName} ${data.lastName} <website@zapli.co.il>`,
            to: ["admin@zapli.co.il"],
            subject: 'מישהו חדש נרשם בטופס "צרו קשר"',
            react: ContactAdminEmailTemplate(data),
        });

        if (adminEmail.error) {
            return new NextResponse(
                `Something went wrong when trying to send the admin email: ${adminEmail.error}`,
                {
                    status: 500,
                },
            );
        }

        const senderEmail = await resend.emails.send({
            from: `צוות זאפלי <noreply@zapli.co.il>`,
            to: [data.email],
            subject: "קיבלנו את ההודעה שלך",
            react: ContactSenderEmailTemplate({ firstName: data.firstName }),
        });

        if (senderEmail.error) {
            return new NextResponse(
                `Something went wrong when trying to send the sender email: ${JSON.stringify(senderEmail.error)}`,
                {
                    status: 500,
                },
            );
        }

        return NextResponse.json({
            admin: adminEmail.data,
            sender: senderEmail.data,
        });
    } catch (error) {
        return new NextResponse(`Internal Server Error: ${error}`, {
            status: 500,
        });
    }
}
