import { getTranslations } from "next-intl/server";

import { Section } from "@/components/section";

import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("metadata");
    const title = t("privacy.title");
    const description = t("privacy.description");

    return {
        title,
        description,
        alternates: { canonical: "/privacy" },
        openGraph: {
            title,
            description,
            url: "/privacy",
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

export default async function PrivacyPage() {
    const t = await getTranslations("privacy");

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

                    <PolicySection title={t("whoWeAre.title")}>
                        <p>{t("whoWeAre.content")}</p>
                    </PolicySection>

                    <PolicySection title={t("dataCollection.title")}>
                        <p>{t("dataCollection.content")}</p>
                        <ul className="list-disc space-y-1 pe-5">
                            <li>{t("dataCollection.items.account")}</li>
                            <li>{t("dataCollection.items.contact")}</li>
                            <li>{t("dataCollection.items.business")}</li>
                            <li>{t("dataCollection.items.technical")}</li>
                            <li>{t("dataCollection.items.cookies")}</li>
                        </ul>
                    </PolicySection>

                    <PolicySection title={t("purposes.title")}>
                        <p>{t("purposes.content")}</p>
                        <ul className="list-disc space-y-1 pe-5">
                            <li>{t("purposes.items.service")}</li>
                            <li>{t("purposes.items.improvement")}</li>
                            <li>{t("purposes.items.communication")}</li>
                            <li>{t("purposes.items.legal")}</li>
                            <li>{t("purposes.items.security")}</li>
                        </ul>
                    </PolicySection>

                    <PolicySection title={t("legalBasis.title")}>
                        <p>{t("legalBasis.content")}</p>
                    </PolicySection>

                    <PolicySection title={t("thirdParties.title")}>
                        <p>{t("thirdParties.content")}</p>
                        <ul className="list-disc space-y-1 pe-5">
                            <li>{t("thirdParties.items.google")}</li>
                            <li>{t("thirdParties.items.openai")}</li>
                            <li>{t("thirdParties.items.hosting")}</li>
                            <li>{t("thirdParties.items.legal")}</li>
                        </ul>
                    </PolicySection>

                    <PolicySection title={t("aiProcessing.title")}>
                        <p>{t("aiProcessing.content")}</p>
                    </PolicySection>

                    <PolicySection title={t("cookies.title")}>
                        <p>{t("cookies.content")}</p>
                    </PolicySection>

                    <PolicySection title={t("security.title")}>
                        <p>{t("security.content")}</p>
                    </PolicySection>

                    <PolicySection title={t("retention.title")}>
                        <p>{t("retention.content")}</p>
                    </PolicySection>

                    <PolicySection title={t("rights.title")}>
                        <p>{t("rights.content")}</p>
                        <ul className="list-disc space-y-1 pe-5">
                            <li>{t("rights.items.access")}</li>
                            <li>{t("rights.items.correction")}</li>
                            <li>{t("rights.items.deletion")}</li>
                            <li>{t("rights.items.objection")}</li>
                            <li>{t("rights.items.portability")}</li>
                        </ul>
                        <p>{t("rights.howTo")}</p>
                    </PolicySection>

                    <PolicySection title={t("children.title")}>
                        <p>{t("children.content")}</p>
                    </PolicySection>

                    <PolicySection title={t("changes.title")}>
                        <p>{t("changes.content")}</p>
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
