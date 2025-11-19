import type { Metadata } from "next";
import "./globals.css";

import { Roboto, Rubik } from "next/font/google";
import LocalFont from "next/font/local";
import Script from "next/script";

import { Toaster } from "@/components/ui/sonner";
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
    title: { template: "זאפלי | %s", default: "זאפלי" },
    description:
        "מערכות אוטומציה ו-AI פשוטות לעסקים ופרילנסרים בישראל. חוסכים זמן, מצמצמים כאוס ומנהלים את העסק בביטחון – בלי טכנולוגיה מיותרת. זאפלי בונים מערכות חכמות שמחברות בין וואטסאפ, גוגל, CRM ו-AI כדי להוריד עומס מהעסק שלך. פתרונות פשוטים, חכמים, ובעברית – שנבנו במיוחד לעסקים ישראליים.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="he" dir="rtl" className="dark" suppressHydrationWarning>
            <Script
                src="https://cdn.userway.org/widget.js"
                data-language="he"
                data-widget_layout="full"
                data-account="pBMlEOnXjR"
                strategy="afterInteractive"
            />
            <body className={cn("antialiased", ploni.variable, rubik.variable, roboto.variable)}>
                <QueryProvider>{children}</QueryProvider>
                <Toaster />
            </body>
        </html>
    );
}
