import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { WHATSAPP_BOT_URL } from "@/utils/consts";

function ChatbotSection() {
    return (
        <section id="chatbot" className="pt-16 pb-32 md:pt-32 md:pb-48">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
                    צ'אטבוט וואטסאפ מקצועי עם הודעות קוליות
                </h2>
                <div className="relative">
                    <div className="relative z-10 md:w-1/2">
                        <p className="font-rubik">
                            צ'אטבוט הוואטסאפ שלנו מגיב בתוך שניות, מדבר בעברית
                            טבעית וזורמת, מבין ועונה להודעות קוליות, מטפל בכל
                            הפניות ומבצע פעולות אוטומטית — ברמה שהוואטסאפ בארץ
                            עוד לא פגש.
                        </p>
                        <div className="mt-12 flex w-fit flex-col items-center justify-center gap-2">
                            <Button
                                asChild
                                size="lg"
                                className="group h-11 gap-2 px-8! text-lg font-bold"
                            >
                                <Link
                                    href={WHATSAPP_BOT_URL}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    נסו את הצ'אטבוט שלנו
                                    <ArrowLeft className="transition-[margin] group-hover:mr-1" />
                                </Link>
                            </Button>
                            <p className="font-rubik text-sm">
                                עובד גם עם הודעות קוליות!
                            </p>
                        </div>
                    </div>
                    <div className="mt-12 h-fit md:absolute md:-top-32 md:-left-10 md:mt-0 md:w-2/3 md:mask-r-from-0% md:mask-r-to-95%">
                        <div className="bg-primary/25 absolute top-1/2 left-1/2 -z-10 aspect-square h-1/2 -translate-1/2 rounded-full blur-3xl" />
                        <div className="border-border/50 relative rounded-2xl p-2">
                            <Image
                                src="/media/chatbot-screen.png"
                                className="rounded-[12px]"
                                alt="צ'אטבוט וואטסאפ של זאפלי – שיחה אוטומטית עם לקוח בעברית כולל הודעות קוליות"
                                width={1410}
                                height={1182}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { ChatbotSection };
