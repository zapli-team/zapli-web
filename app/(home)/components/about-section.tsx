import { ChevronLeft } from "lucide-react";
import Link from "next/link";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { TEAM } from "@/utils/consts";

function AboutSection() {
    return (
        <section id="about" className="py-24 md:py-32 bg-background">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-medium">אנחנו צוות קטן עם תשוקה לטכנולוגיה ועסקים</h2>
                        {/* <div className="mx-4 inline-flex items-center -space-x-2">
                            {TEAM.map((member) => (
                                <Tooltip key={member.src}>
                                    <TooltipTrigger asChild>
                                        <Avatar className="size-10 border">
                                            <AvatarImage src={member.src} alt={member.name} />
                                        </Avatar>
                                    </TooltipTrigger>
                                    <TooltipContent side="bottom">
                                        <p>
                                            <span className="font-semibold">{member.name}</span> {member.title}
                                        </p>
                                    </TooltipContent>
                                </Tooltip>
                            ))}
                        </div> */}
                    </div>
                    <div className="space-y-4 font-rubik">
                        <p>
                            אנחנו צוות קטן של מומחי פיתוח ואוטומציה, שעוזר לעצמאים ועסקים בישראל לעבוד חכם עם טכנולוגיות
                            AI בלי כאב ראש.
                        </p>
                        <p>
                            עם ניסיון רב שנים בפיתוח תוכנה, אינטגרציות ומערכות אוטומציה, אנחנו בונים פתרונות פשוטים
                            וחכמים שמייעלים את העבודה היומיומית וחוסכים זמן ובלאגן.
                        </p>
                        <p>
                            אנחנו מאמינים שטכנולוגיה צריכה לשרת אותך – לא להעמיס עליך. לכן כל מערכת שאנחנו בונים היא
                            ברורה, נוחה לתחזוקה, ומתאימה בדיוק לאופן שבו אתה עובד.
                        </p>
                        <Button asChild variant="secondary" size="sm" className="gap-1 pl-1.5 mt-6">
                            <Link href="/contact#book">
                                <span>לקביעת שיחת ייעוץ חינם</span>
                                <ChevronLeft className="size-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="max-w-full w-fit flex flex-col lg:flex-row mx-auto mt-8 *:text-center md:mt-16 gap-4">
                    {TEAM.map((member) => (
                        <div key={member.name} className="p-4 flex flex-col items-center">
                            <Avatar className="size-20 border">
                                <AvatarImage src={member.src} alt={member.name} />
                            </Avatar>
                            <h2 className="whitespace-nowrap mt-4 font-medium text-lg">{member.name}</h2>
                            <div className="font-rubik text-muted-foreground">{member.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export { AboutSection };
