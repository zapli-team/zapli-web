import { ArrowLeft, ChartLine, Phone, Volume2, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { PHONE_AGENT_NUMBER } from "@/utils/consts";

function PhoneSection() {
    return (
        <section
            id="phone"
            className="flex min-h-screen items-center overflow-hidden py-16 md:py-32"
        >
            <div className="mx-auto max-w-5xl">
                <div className="relative z-10 max-w-2xl px-6">
                    <h2 className="text-4xl font-semibold lg:text-5xl">
                        הנציג הטלפוני המתקדם בארץ
                    </h2>
                    <p className="font-rubik mt-6 text-lg">
                        נציג ה-AI הטלפוני שלנו עונה ללקוחות 24/7 בעברית טבעית
                        אנושית, מגיב מהר במיוחד, מטפל בכל הפניות *במקביל* ומבצע
                        פעולות אוטומטית — ברמה שלא נעשתה בארץ עד היום.
                    </p>
                </div>
                <Image
                    src="/media/phone-agent.png"
                    className="mx-auto h-[70vh] w-auto object-cover"
                    alt="הדגמת נציג AI טלפוני של זאפלי – ממשק שיחה חכם בעברית"
                    width={540}
                    height={960}
                    priority
                />
                <div className="bg-background relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 px-8 py-6 sm:gap-8 md:rounded-sm lg:grid-cols-4">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Zap className="size-4" />
                            <h3 className="font-medium tracking-wide">
                                מהירות תגובה
                            </h3>
                        </div>
                        <p className="text-muted-foreground font-rubik text-sm">
                            עונה ללקוחות תוך פחות משנייה (400ms~ בממוצע)
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Volume2 className="size-4" />
                            <h3 className="font-medium tracking-wide">
                                עברית טבעית
                            </h3>
                        </div>
                        <p className="text-muted-foreground font-rubik text-sm">
                            מדבר בטון ישראלי זורם שמרגיש כמו בן אדם, לא כמו
                            רובוט.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Phone className="size-4" />
                            <h3 className="font-medium tracking-wide">
                                זמינות 24/7
                            </h3>
                        </div>
                        <p className="text-muted-foreground font-rubik text-sm">
                            מטפל בכל שיחה גם כשאתה ישן/בפגישה/עם הילד
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <ChartLine className="size-4" />
                            <h3 className="font-medium tracking-wide">
                                עקביות מושלמת
                            </h3>
                        </div>
                        <p className="text-muted-foreground font-rubik text-sm">
                            נותן תשובות מדויקות ב-100% מהפעמים לפי מה שהגדרנו
                        </p>
                    </div>
                </div>
                <div className="mt-12 flex flex-col items-center justify-center gap-2 px-6 sm:flex-row">
                    <Button
                        asChild
                        size="lg"
                        className="group h-11 w-full gap-2 px-8! text-lg font-bold sm:w-auto"
                    >
                        <Link
                            href={`tel:${PHONE_AGENT_NUMBER}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            נסו את הנציג הטלפוני שלנו
                            <ArrowLeft className="transition-[margin] group-hover:mr-1" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

export { PhoneSection };
