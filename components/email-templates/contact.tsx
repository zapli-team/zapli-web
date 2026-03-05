import { WHATSAPP_BOT_URL } from "@/utils/consts";
import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Link,
    Preview,
    Section,
    Text,
} from "@react-email/components";

import { styles } from "./utils/consts";

export function ContactAdminEmailTemplate({
    firstName,
    lastName,
    email,
    phone,
    message,
}: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
}) {
    return (
        <Html>
            <Head />
            <Preview>
                New contact form: {firstName} {lastName}
            </Preview>
            <Body style={styles.main}>
                <Container style={styles.container}>
                    <Container style={styles.content}>
                        <Heading style={styles.h1}>
                            📬 מישהו חדש נרשם בטופס "צרו קשר"
                        </Heading>

                        <Section style={styles.infoSection}>
                            <Text style={styles.label}>שם מלא:</Text>
                            <Text style={styles.value}>
                                {firstName} {lastName}
                            </Text>
                        </Section>

                        <Section style={styles.infoSection}>
                            <Text style={styles.label}>דוא"ל:</Text>
                            <Text style={{ ...styles.value, direction: "ltr" }}>
                                <Link
                                    href={`mailto:${email}`}
                                    style={styles.emailLink}
                                >
                                    {email}
                                </Link>
                            </Text>
                        </Section>

                        <Section style={styles.infoSection}>
                            <Text style={styles.label}>מס' טלפון:</Text>
                            <Text style={{ ...styles.value, direction: "ltr" }}>
                                <Link
                                    href={`tel:${phone}`}
                                    style={styles.emailLink}
                                >
                                    {phone}
                                </Link>
                            </Text>
                        </Section>

                        <Hr style={styles.hr} />

                        <Section style={styles.infoSection}>
                            <Text style={styles.label}>הודעה:</Text>
                            <Section style={styles.messageBox}>
                                <Text style={styles.messageText}>
                                    {message}
                                </Text>
                            </Section>
                        </Section>
                    </Container>
                </Container>
            </Body>
        </Html>
    );
}

export function ContactSenderEmailTemplate({
    firstName,
}: {
    firstName: string;
}) {
    return (
        <Html dir="rtl">
            <Head />
            <Preview>תודה שפנית אלינו, {firstName}!</Preview>
            <Body style={styles.main}>
                <Container style={styles.container}>
                    <Container style={styles.content}>
                        <Heading style={styles.h1}>
                            תודה שפנית אלינו, {firstName}! 🙏
                        </Heading>

                        <Text style={styles.text}>
                            קיבלנו את ההודעה שלך ונחזור אליך בהקדם האפשרי.
                        </Text>

                        <Text style={styles.text}>
                            בדרך כלל לוקח לנו פחות מ-24 שעות לענות.
                        </Text>

                        <Section style={styles.tipBox}>
                            <Text style={styles.tipText}>
                                <strong>פנייה דחופה?</strong>
                                <br />
                                תרגישו חופשי לפנות אלינו בוואטסאפ:{" "}
                                <Link
                                    href={WHATSAPP_BOT_URL}
                                    style={styles.whatsappLink}
                                >
                                    050-753-7633
                                </Link>
                            </Text>
                        </Section>

                        <Text style={styles.signature}>
                            בברכה,
                            <br />
                            צוות זאפלי
                        </Text>

                        <Hr style={styles.hr} />

                        <Section style={styles.companyInfo}>
                            <Text style={styles.companyText}>
                                <strong>זאפלי</strong> - מערכות חכמות וכלי AI
                                לפרילנסרים ובעלי עסקים
                            </Text>
                            <Text style={styles.companyText}>
                                <Link
                                    href="https://zapli.co.il"
                                    style={styles.link}
                                >
                                    zapli.co.il
                                </Link>
                                {" | "}
                                <Link
                                    href="mailto:contact@zapli.co.il"
                                    style={styles.link}
                                >
                                    contact@zapli.co.il
                                </Link>
                            </Text>
                        </Section>
                    </Container>
                </Container>
            </Body>
        </Html>
    );
}
