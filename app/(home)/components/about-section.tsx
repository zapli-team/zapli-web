import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { TEAM } from "@/utils/consts";

function AboutSection() {
    return (
        <section
            id="about"
            aria-label="אודות צוות זאפלי"
            className="bg-background py-24 md:py-32"
        >
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-medium">
                            אנחנו צוות קטן עם תשוקה לטכנולוגיה ועסקים
                        </h2>
                    </div>
                    <div className="font-rubik space-y-4">
                        <p>
                            אנחנו צוות קטן של מומחי פיתוח ואוטומציה, שעוזר
                            לעצמאים ועסקים בישראל לעבוד חכם עם טכנולוגיות AI בלי
                            כאב ראש.
                        </p>
                        <p>
                            עם ניסיון רב שנים בפיתוח תוכנה, אינטגרציות ומערכות
                            אוטומציה, אנחנו בונים פתרונות פשוטים וחכמים שמייעלים
                            את העבודה היומיומית וחוסכים זמן ובלאגן.
                        </p>
                        <p>
                            אנחנו מאמינים שטכנולוגיה צריכה לשרת אותך – לא להעמיס
                            עליך. לכן כל מערכת שאנחנו בונים היא ברורה, נוחה
                            לתחזוקה, ומתאימה בדיוק לאופן שבו אתה עובד.
                        </p>
                        <Button
                            asChild
                            variant="secondary"
                            size="sm"
                            className="mt-6 gap-1 pl-1.5"
                        >
                            <Link href="/contact">
                                <span>לקביעת שיחת ייעוץ חינם</span>
                                <ChevronLeft className="size-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="mx-auto mt-8 flex w-fit max-w-full flex-col gap-4 *:text-center md:mt-16 lg:flex-row">
                    {TEAM.map((member) => (
                        <div
                            key={member.name}
                            className="flex flex-col items-center p-4"
                        >
                            <Avatar className="size-20">
                                <Image
                                    data-slot="avatar-image"
                                    className="aspect-square size-full object-cover"
                                    src={member.src}
                                    alt={member.name}
                                    width={128}
                                    height={128}
                                />
                            </Avatar>
                            <h3 className="mt-4 text-lg font-medium whitespace-nowrap">
                                {member.name}
                            </h3>
                            <p className="font-rubik text-muted-foreground">
                                {member.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export { AboutSection };
