import { Star } from "lucide-react";
import Link from "next/link";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { CLIENTS } from "@/utils/consts";

function HeroSection() {
    return (
        <section id="hero" className="pt-[calc(50vh-300px)] flex justify-center pb-[10vh]">
            <div className="container text-center px-10">
                <div className="mx-auto flex max-w-screen-lg flex-col gap-6">
                    <h1 className="text-4xl font-extrabold lg:text-6xl">שירות לקוחות AI לעסקים בישראל</h1>
                    <p className="text-balance font-rubik text-muted-foreground lg:text-lg">
                        נציגי AI טלפוניים, צ'אטבוטים, וואטסאפ, ועוד... אנחנו לא סוכנות טכנולוגית “גדולה”, אלא צוות שמבין
                        את המציאות של עסקים בישראל. עם ניסיון טכנולוגי צבאי של +5 שנים, נבנה לכם פתרון חכם ופשוט שעובד
                        באמת.
                    </p>
                </div>
                <Button asChild className="mt-10 text-xl font-bold px-12 py-7">
                    <Link href="/contact#book">לשיחת ייעוץ חינם</Link>
                </Button>
                <div className="mx-auto mt-10 flex w-fit flex-col items-center gap-4 sm:flex-row">
                    <span className="mx-4 inline-flex items-center -space-x-2">
                        {CLIENTS.map((client) => (
                            <Tooltip key={client.src}>
                                <TooltipTrigger asChild>
                                    <Avatar className="size-10 border">
                                        <AvatarImage src={client.src} alt={client.name} />
                                    </Avatar>
                                </TooltipTrigger>
                                <TooltipContent side="bottom">
                                    <p>{client.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        ))}
                    </span>
                    <div className="mt-2 flex flex-col items-center">
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, index) => (
                                <Star key={index} className="size-5 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <p className="text-left font-medium text-muted-foreground">+7 שנים ניסיון</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { HeroSection };
