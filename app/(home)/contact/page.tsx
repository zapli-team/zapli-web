import { ArrowDown } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import { SOCIALS } from "@/utils/consts";

import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
    title: "צרו קשר",
    description:
        "רוצים לשדרג את העסק עם אוטומציה ו-AI? מלאו טופס קצר או קבעו שיחת ייעוץ חינם עם צוות זאפלי – נחזור אליכם בוואטסאפ תוך דקות.",
};

export default function ContactPage() {
    return (
        <section className="space-y-48 py-16 md:py-24">
            <div className="mx-auto max-w-3xl px-4 sm:px-8 lg:px-0">
                <h1 className="text-center text-4xl font-semibold lg:text-5xl">
                    צרו איתנו קשר
                </h1>
                <p className="font-rubik mt-4 flex items-center justify-center gap-2 text-center lg:text-lg">
                    קחו חצי דקה למלא את הטופס ונחזור אליכם בוואטסאפ{" "}
                    <ArrowDown className="hidden size-3 md:block" />
                </p>

                <Card className="mx-auto mt-12 max-w-full p-4 pt-8 shadow-md sm:p-16">
                    <div
                        dir="ltr"
                        className="font-rubik border-border/25 flex items-center justify-center gap-6 border-b pb-6"
                    >
                        {SOCIALS.slice(0, 2).map((social) => (
                            <Link
                                key={social.href}
                                href={social.href}
                                className="hover:text-primary relative flex items-center gap-2"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <social.icon size={20} />
                                {social.title && (
                                    <span className="hidden text-sm md:inline-flex">
                                        {social.title}
                                    </span>
                                )}
                            </Link>
                        ))}
                    </div>
                    <ContactForm />
                </Card>
            </div>
        </section>
    );
}
