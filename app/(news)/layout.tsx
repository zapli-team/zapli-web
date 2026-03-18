import { Metadata } from "next";
import React from "react";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
    title: {
        template: "זאפלי — %s",
        default: "חדשות ומאמרים",
    },
};

export default function NewsLayout({ children }: React.PropsWithChildren) {
    return (
        <main className="light-mode bg-background text-foreground min-h-screen">
            <Navbar />
            {children}
            <Footer />
        </main>
    );
}
