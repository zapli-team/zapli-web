import { getTranslations } from "next-intl/server";

import { Section } from "@/components/section";

import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("metadata");
    const title = t("terms.title");
    const description = t("terms.description");

    return {
        title,
        description,
        alternates: { canonical: "/terms" },
        openGraph: {
            title,
            description,
            url: "/terms",
        },
        twitter: {
            title,
            description,
        },
    };
}

interface PolicySectionProps {
    title: string;
    children: React.ReactNode;
}

function PolicySection({ title, children }: PolicySectionProps) {
    return (
        <div className="space-y-3">
            <h2 className="text-xl font-bold">{title}</h2>
            {children}
        </div>
    );
}

export default async function TermsPage() {
    const t = await getTranslations("terms");

    return (
        <Section
            as="article"
            label={t("title")}
            className="max-w-4xl pt-40! max-sm:pt-28!"
        >
            <div className="space-y-10">
                <header className="space-y-2">
                    <h1 className="text-4xl font-bold max-sm:text-3xl">
                        {t("title")}
                    </h1>
                    <p className="text-muted-foreground text-sm">
                        {t("lastUpdated")}
                    </p>
                </header>

                <div className="text-foreground/85 space-y-8 text-lg leading-relaxed max-sm:text-base">
                    <PolicySection title={t("intro.title")}>
                        <p>{t("intro.content")}</p>
                    </PolicySection>

                    <PolicySection title={t("eligibility.title")}>
                        <p>{t("eligibility.content")}</p>
                    </PolicySection>

                    <PolicySection title={t("services.title")}>
                        <p>{t("services.content")}</p>
                        <ul className="list-disc space-y-1 pe-5">
                            <li>{t("services.items.chatbots")}</li>
                            <li>{t("services.items.phone")}</li>
                            <li>{t("services.items.apps")}</li>
                            <li>{t("services.items.automation")}</li>
                        </ul>
                        <p>{t("services.note")}</p>
                    </PolicySection>

                    <PolicySection title={t("account.title")}>
                        <p>{t("account.content")}</p>
                    </PolicySection>

                    <PolicySection title={t("acceptableUse.title")}>
                        <p>{t("acceptableUse.content")}</p>
                        <ul className="list-disc space-y-1 pe-5">
                            <li>{t("acceptableUse.items.illegal")}</li>
                            <li>{t("acceptableUse.items.harmful")}</li>
                            <li>{t("acceptableUse.items.interfere")}</li>
                            <li>{t("acceptableUse.items.reverseEngineer")}</li>
                            <li>{t("acceptableUse.items.scraping")}</li>
                            <li>{t("acceptableUse.items.impersonate")}</li>
                        </ul>
                    </PolicySection>

                    <PolicySection title={t("ai.title")}>
                        <p>{t("ai.content")}</p>
                        <ul className="list-disc space-y-1 pe-5">
                            <li>{t("ai.items.accuracy")}</li>
                            <li>{t("ai.items.review")}</li>
                            <li>{t("ai.items.input")}</li>
                            <li>{t("ai.items.thirdParty")}</li>
                        </ul>
                    </PolicySection>

                    <PolicySection title={t("ip.title")}>
                        <p>{t("ip.content")}</p>
                    </PolicySection>

                    <PolicySection title={t("userContent.title")}>
                        <p>{t("userContent.content")}</p>
                    </PolicySection>

                    <PolicySection title={t("thirdParty.title")}>
                        <p>{t("thirdParty.content")}</p>
                    </PolicySection>

                    <PolicySection title={t("disclaimer.title")}>
                        <p>{t("disclaimer.content")}</p>
                    </PolicySection>

                    <PolicySection title={t("indemnification.title")}>
                        <p>{t("indemnification.content")}</p>
                    </PolicySection>

                    <PolicySection title={t("governingLaw.title")}>
                        <p>{t("governingLaw.content")}</p>
                    </PolicySection>

                    <PolicySection title={t("changes.title")}>
                        <p>{t("changes.content")}</p>
                    </PolicySection>

                    <PolicySection title={t("severability.title")}>
                        <p>{t("severability.content")}</p>
                    </PolicySection>

                    <PolicySection title={t("entireAgreement.title")}>
                        <p>{t("entireAgreement.content")}</p>
                    </PolicySection>

                    <PolicySection title={t("contact.title")}>
                        <p>{t("contact.content")}</p>
                        <ul className="space-y-1">
                            <li>{t("contact.email")}</li>
                        </ul>
                    </PolicySection>
                </div>
            </div>
        </Section>
    );
}
