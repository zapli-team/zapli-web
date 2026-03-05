import type { Metadata } from "next";
import "./globals.css";

import { Roboto, Rubik } from "next/font/google";
import LocalFont from "next/font/local";

import { Toaster } from "@/components/ui/sonner";
import LenisProvider from "@/providers/lenis-provider";
import QueryProvider from "@/providers/query-provider";
import { cn } from "@/utils/funcs";

const ploni = LocalFont({
    src: [
        { path: "../public/fonts/Ploni/UltraLight.otf", weight: "200" },
        { path: "../public/fonts/Ploni/Light.otf", weight: "300" },
        { path: "../public/fonts/Ploni/Regular.otf", weight: "400" },
        { path: "../public/fonts/Ploni/Medium.otf", weight: "500" },
        { path: "../public/fonts/Ploni/SemiBold.otf", weight: "600" },
        { path: "../public/fonts/Ploni/Bold.otf", weight: "700" },
        { path: "../public/fonts/Ploni/UltraBold.otf", weight: "800" },
        { path: "../public/fonts/Ploni/Black.otf", weight: "900" },
    ],
    variable: "--font-ploni",
    display: "swap",
});

const rubik = Rubik({
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    subsets: ["hebrew", "latin"],
    variable: "--font-rubik",
    display: "swap",
});

const roboto = Roboto({
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    variable: "--font-roboto",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://zapli.co.il"),
    title: {
        template: "זאפלי — %s",
        default: "זאפלי — מערכות אוטומציה ובינה מלאכותית לעסקים בישראל",
    },
    description:
        "זאפלי בונה מערכות אוטומציה ו-AI חכמות לעסקים קטנים ובינוניים בישראל. חיבור בין וואטסאפ, גוגל, CRM וכלי AI – לחיסכון בזמן, הפחתת עומס וניהול עסק מסודר. פתרונות פשוטים, בעברית, בהתאמה אישית.",
    alternates: {
        canonical: "https://zapli.co.il",
    },
    keywords: [
        "אוטומציה לעסקים",
        "בינה מלאכותית לעסקים",
        "AI לעסקים בישראל",
        "אוטומציה לעסקים קטנים",
        "צ'אטבוט לעסק",
        "נציג AI טלפוני",
        "חיבור מערכות עסקיות",
        "זאפלי",
        "אוטומציה וואטסאפ",
        "ייעול תהליכי עבודה",
    ],
    openGraph: {
        type: "website",
        locale: "he_IL",
        siteName: "זאפלי",
        title: "זאפלי — מערכות אוטומציה ובינה מלאכותית לעסקים בישראל",
        description:
            "מערכות אוטומציה ו-AI חכמות שחוסכות זמן ומייעלות את העסק שלך. פתרונות בהתאמה אישית לשוק הישראלי.",
    },
    twitter: {
        card: "summary_large_image",
        title: "זאפלי — אוטומציה ו-AI לעסקים בישראל",
        description:
            "מערכות חכמות שמחברות בין וואטסאפ, גוגל, CRM ו-AI כדי להוריד עומס מהעסק שלך.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "זאפלי",
        alternateName: "Zapli",
        url: "https://zapli.co.il",
        email: "contact@zapli.co.il",
        description:
            "זאפלי בונה מערכות אוטומציה ו-AI חכמות לעסקים קטנים ובינוניים בישראל. חיבור בין וואטסאפ, גוגל, CRM וכלי AI.",
        areaServed: {
            "@type": "Country",
            name: "Israel",
        },
        knowsLanguage: ["he", "en"],
        serviceType: [
            "אוטומציה לעסקים",
            "בינה מלאכותית לעסקים",
            "צ'אטבוט וואטסאפ",
            "נציג AI טלפוני",
            "חיבור מערכות עסקיות",
            "ייעוץ טכנולוגי",
        ],
        sameAs: [
            "https://www.facebook.com/zapli.co.il",
            "https://www.instagram.com/roybarzilay1",
            "https://www.youtube.com/@roybarzilay1",
            "https://www.tiktok.com/@roybarzilay1",
        ],
    };

    return (
        <html lang="he" dir="rtl" className="dark" suppressHydrationWarning>
            <body
                className={cn(
                    "antialiased",
                    ploni.variable,
                    rubik.variable,
                    roboto.variable,
                )}
            >
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <LenisProvider>
                    <QueryProvider>{children}</QueryProvider>
                </LenisProvider>
                <Toaster />
            </body>
        </html>
    );
}
