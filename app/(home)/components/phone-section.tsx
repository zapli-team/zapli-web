import { ArrowLeft, ChartLine, Phone, Volume2, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { DottedMap } from "@/components/dotted-map";
import { Button } from "@/components/ui/button";
import { PHONE_AGENT_NUMBER } from "@/utils/consts";

function PhoneSection() {
    return (
        <section id="phone" className="overflow-hidden py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <div className="relative z-10 max-w-2xl">
                    <h2 className="text-4xl font-semibold lg:text-5xl">הנציג הטלפוני המתקדם בארץ</h2>
                    <p className="mt-6 font-rubik text-lg">
                        נציג ה-AI הטלפוני שלנו עונה ללקוחות 24/7 בעברית טבעית אנושית, מגיב מהר במיוחד, מטפל בכל הפניות
                        *במקביל* ומבצע פעולות אוטומטית — ברמה שלא נעשתה בארץ עד היום.
                    </p>
                </div>
                <div className="mask-b-from-75% mask-x-from-75% mask-b-to-95% mask-x-to-95% relative -mx-4 pl-3 pt-3 md:-mx-12">
                    <div className="perspective-midrange">
                        <div className="rotate-x-6 -skew-6">
                            <div className="aspect-88/36 relative">
                                <DottedMap className="absolute top-10 -z-20 text-primary/80" />
                                <div className="absolute h-full w-32 top-[calc(50%+50px)] left-[calc(50%+50px)] -translate-1/2 bg-black rounded-full blur-2xl -z-10" />
                                <Image
                                    src="/media/phone-screen.png"
                                    className="h-96 object-contain w-fit rounded-2xl border-2 mx-auto shadow-2xl"
                                    alt="phone screen"
                                    width={1080}
                                    height={1920}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Zap className="size-4" />
                            <h3 className="font-medium tracking-wide">מהירות תגובה</h3>
                        </div>
                        <p className="text-muted-foreground font-rubik text-sm">
                            עונה ללקוחות תוך פחות משנייה (400ms~ בממוצע)
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Volume2 className="size-4" />
                            <h3 className="font-medium tracking-wide">עברית טבעית</h3>
                        </div>
                        <p className="text-muted-foreground font-rubik text-sm">
                            מדבר בטון ישראלי זורם שמרגיש כמו בן אדם, לא כמו רובוט.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Phone className="size-4" />
                            <h3 className="font-medium tracking-wide">זמינות 24/7</h3>
                        </div>
                        <p className="text-muted-foreground font-rubik text-sm">
                            מטפל בכל שיחה גם כשאתה ישן/בפגישה/עם הילד
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <ChartLine className="size-4" />
                            <h3 className="font-medium tracking-wide">עקביות מושלמת</h3>
                        </div>
                        <p className="text-muted-foreground font-rubik text-sm">
                            נותן תשובות מדויקות ב-100% מהפעמים לפי מה שהגדרנו
                        </p>
                    </div>
                </div>
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-2">
                    {/* <Button asChild size="lg" className="group font-bold gap-2 px-8! h-11 text-lg w-full sm:w-auto">
                        <Link href={`tel:${PHONE_AGENT_NUMBER}`} target="_blank" rel="noreferrer">
                            נסו את הנציג הטלפוני שלנו
                            <ArrowLeft className="group-hover:mr-1 transition-[margin]" />
                        </Link>
                    </Button> */}
                    <Button
                        asChild
                        size="lg"
                        className="group font-bold gap-2 px-8! h-11 text-lg w-full sm:w-auto pointer-events-none opacity-50"
                    >
                        <Link href={`tel:${PHONE_AGENT_NUMBER}`} target="_blank" rel="noreferrer">
                            נסו את הנציג הטלפוני שלנו
                            <ArrowLeft className="group-hover:mr-1 transition-[margin]" />
                        </Link>
                    </Button>
                    <p className="text-sm font-rubik mr-2">מגיע בימים הקרובים...</p>
                    {/* <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="group font-bold gap-2 px-8! h-11 text-lg w-full sm:w-auto"
                    >
                        <Link href={`tel:${PHONE_AGENT_NUMBER}`} target="_blank" rel="noreferrer">
                            מה המחיר של זה?
                        </Link>
                    </Button> */}
                </div>
            </div>
        </section>
    );
}

export { PhoneSection };
