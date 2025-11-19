import { ArrowDown } from "lucide-react";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import { SOCIALS } from "@/utils/consts";

import { ContactForm } from "./contact-form";

export default function ContactPage() {
    return (
        <section className="py-16 md:py-24 space-y-48">
            <div className="mx-auto max-w-3xl px-4 sm:px-8 lg:px-0">
                <h1 className="text-center text-4xl font-semibold lg:text-5xl">צרו איתנו קשר</h1>
                <p className="mt-4 text-center flex items-center justify-center gap-2 font-rubik lg:text-lg">
                    קחו חצי דקה למלא את הטופס ונחזור אליכם בוואטסאפ <ArrowDown className="size-3 hidden md:block" />
                </p>

                <Card className="mx-auto mt-12 max-w-full p-4 pt-8 shadow-md sm:p-16">
                    <div
                        dir="ltr"
                        className="flex items-center justify-center font-rubik gap-6 border-b border-border/25 pb-6"
                    >
                        {SOCIALS.slice(0, 2).map((social) => (
                            <Link
                                key={social.href}
                                href={social.href}
                                className="relative flex items-center gap-2 hover:text-primary"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <social.icon size={20} />
                                {social.title && <span className="hidden md:inline-flex text-sm">{social.title}</span>}
                            </Link>
                        ))}
                    </div>
                    <ContactForm />
                </Card>
            </div>
            <div id="book" className="space-y-12 px-4">
                <h1 className="text-center text-3xl sm:text-4xl font-semibold lg:text-5xl">
                    תתאמו איתנו שיחת ייעוץ חינם
                </h1>
                <div className="bg-white mx-auto max-w-7xl h-[80vh] rounded-2xl overflow-hidden">
                    <iframe
                        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2q1uDPwIvAxsNTUPA5JYpr6VvkRQ2RjevIbD33AhviawJ-fO-Sq2Nv_72em-9j8nfu8YgC_QFk?gv=true&hl=he&ctz=Asia/Jerusalem"
                        className="border-none"
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
        </section>
    );
}
