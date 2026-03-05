import { getTranslations } from "next-intl/server";

import { Section } from "@/components/section";

import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("metadata");
    const title = t("accessibility.title");
    const description = t("accessibility.description");

    return {
        title,
        description,
        alternates: { canonical: "/accessibility" },
        openGraph: {
            title,
            description,
            url: "/accessibility",
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

export default async function AccessibilityPage() {
    const t = await getTranslations("accessibility");

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

                    <PolicySection title={t("actions.title")}>
                        <p>{t("actions.content")}</p>
                        <ul className="list-disc space-y-1 pe-5">
                            <li>{t("actions.items.semantic")}</li>
                            <li>{t("actions.items.keyboard")}</li>
                            <li>{t("actions.items.skipToContent")}</li>
                            <li>{t("actions.items.focus")}</li>
                            <li>{t("actions.items.altText")}</li>
                            <li>{t("actions.items.contrast")}</li>
                            <li>{t("actions.items.rtl")}</li>
                            <li>{t("actions.items.forms")}</li>
                            <li>{t("actions.items.ariaLabels")}</li>
                        </ul>
                    </PolicySection>

                    <PolicySection title={t("standard.title")}>
                        <p>{t("standard.content")}</p>
                    </PolicySection>

                    <PolicySection title={t("assistiveTech.title")}>
                        <p>{t("assistiveTech.content")}</p>
                        <ul className="list-disc space-y-1 pe-5">
                            <li>{t("assistiveTech.items.screenReaders")}</li>
                            <li>{t("assistiveTech.items.magnification")}</li>
                            <li>{t("assistiveTech.items.keyboardOnly")}</li>
                        </ul>
                    </PolicySection>

                    <PolicySection title={t("knownIssues.title")}>
                        <p>{t("knownIssues.content")}</p>
                    </PolicySection>

                    <PolicySection title={t("thirdParty.title")}>
                        <p>{t("thirdParty.content")}</p>
                    </PolicySection>

                    <PolicySection title={t("contact.title")}>
                        <p>{t("contact.content")}</p>
                        <ul className="space-y-1">
                            <li>{t("contact.email")}</li>
                        </ul>
                        <p className="font-medium">{t("contact.response")}</p>
                    </PolicySection>

                    <PolicySection title={t("enforcement.title")}>
                        <p>{t("enforcement.content")}</p>
                    </PolicySection>

                    <PolicySection title={t("changes.title")}>
                        <p>{t("changes.content")}</p>
                    </PolicySection>
                </div>
            </div>
        </Section>
    );
}
