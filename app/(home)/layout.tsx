import { Metadata } from "next";
import React from "react";

import { Background } from "@/components/background";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
    title: {
        template: "זאפלי — %s",
        default: "מערכות אוטומציה ובינה מלאכותית לעסקים בישראל",
    },
    description:
        "נציגי AI טלפוניים, צ'אטבוטים, אוטומציות וואטסאפ ועוד – צוות זאפלי בונה מערכות חכמות שחוסכות 5-10 שעות בשבוע לעסקים ועצמאים בישראל. שיחת ייעוץ ראשונה חינם.",
};

export default function HomeLayout({ children }: React.PropsWithChildren) {
    return (
        <main className="h-full">
            <Background />
            <Navbar />
            {children}
            <Footer />
        </main>
    );
}
