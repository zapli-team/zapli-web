import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { WHATSAPP_BOT_URL } from "@/utils/consts";

function ChatbotSection() {
    return (
        <section
            id="chatbot"
            className="relative flex min-h-screen items-center pt-16 md:py-32"
        >
            <div className="max-w-8xl mx-auto space-y-8 md:space-y-16">
                <h2 className="relative z-10 max-w-xl px-6 text-4xl font-medium lg:text-5xl">
                    צ'אטבוט וואטסאפ מקצועי עם הודעות קוליות
                </h2>
                <div className="relative z-10 px-6 md:w-1/2">
                    <p className="font-rubik">
                        צ'אטבוט הוואטסאפ שלנו מגיב בתוך שניות, מדבר בעברית טבעית
                        וזורמת, מבין ועונה להודעות קוליות, מטפל בכל הפניות ומבצע
                        פעולות אוטומטית — ברמה שהוואטסאפ בארץ עוד לא פגש.
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
                <div className="h-fit md:absolute md:bottom-0 md:left-0">
                    <Image
                        src="/media/chatbot.png"
                        className="h-[50vh] w-auto object-cover sm:h-[80vh]"
                        alt="צ'אטבוט וואטסאפ של זאפלי – שיחה אוטומטית עם לקוח בעברית כולל הודעות קוליות"
                        width={1024}
                        height={1024}
                    />
                </div>
            </div>
        </section>
    );
}

export { ChatbotSection };
