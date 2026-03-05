import { getTranslations } from "next-intl/server";

import { Section } from "@/components/section";

import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("metadata");
    const title = t("cookies.title");
    const description = t("cookies.description");

    return {
        title,
        description,
        alternates: { canonical: "/cookies" },
        openGraph: {
            title,
            description,
            url: "/cookies",
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

export default async function CookiesPage() {
    const t = await getTranslations("cookies");

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

                    <PolicySection title={t("whatAreCookies.title")}>
                        <p>{t("whatAreCookies.content")}</p>
                    </PolicySection>

                    <PolicySection title={t("typesWeUse.title")}>
                        <p>{t("typesWeUse.content")}</p>
                    </PolicySection>

                    <PolicySection title={t("essential.title")}>
                        <p>{t("essential.content")}</p>
                        <ul className="list-disc space-y-1 pe-5">
                            <li>{t("essential.items.session")}</li>
                            <li>{t("essential.items.csrf")}</li>
                        </ul>
                    </PolicySection>

                    <PolicySection title={t("functional.title")}>
                        <p>{t("functional.content")}</p>
                        <ul className="list-disc space-y-1 pe-5">
                            <li>{t("functional.items.locale")}</li>
                            <li>{t("functional.items.theme")}</li>
                        </ul>
                    </PolicySection>

                    <PolicySection title={t("analytics.title")}>
                        <p>{t("analytics.content")}</p>
                        <ul className="list-disc space-y-1 pe-5">
                            <li>{t("analytics.items.pages")}</li>
                            <li>{t("analytics.items.device")}</li>
                            <li>{t("analytics.items.source")}</li>
                            <li>{t("analytics.items.interactions")}</li>
                        </ul>
                    </PolicySection>

                    <PolicySection title={t("thirdPartyCookies.title")}>
                        <p>{t("thirdPartyCookies.content")}</p>
                        <ul className="list-disc space-y-1 pe-5">
                            <li>{t("thirdPartyCookies.items.google")}</li>
                            <li>{t("thirdPartyCookies.items.vercel")}</li>
                        </ul>
                    </PolicySection>

                    <PolicySection title={t("duration.title")}>
                        <p>{t("duration.content")}</p>
                        <ul className="list-disc space-y-1 pe-5">
                            <li>{t("duration.items.session")}</li>
                            <li>{t("duration.items.persistent")}</li>
                        </ul>
                    </PolicySection>

                    <PolicySection title={t("manage.title")}>
                        <p>{t("manage.content")}</p>
                        <ul className="list-disc space-y-1 pe-5">
                            <li>{t("manage.items.browser")}</li>
                            <li>{t("manage.items.delete")}</li>
                        </ul>
                        <p className="font-medium">{t("manage.note")}</p>
                    </PolicySection>

                    <PolicySection title={t("doNotTrack.title")}>
                        <p>{t("doNotTrack.content")}</p>
                    </PolicySection>

                    <PolicySection title={t("changes.title")}>
                        <p>{t("changes.content")}</p>
                    </PolicySection>

                    <PolicySection title={t("privacy.title")}>
                        <p>{t("privacy.content")}</p>
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
