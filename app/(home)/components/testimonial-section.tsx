import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

function TestimonaiSection() {
    return (
        <section aria-label="המלצות לקוחות" className="py-24 md:py-32">
            <div className="mx-auto flex flex-col px-6 md:grid md:max-w-5xl md:grid-cols-2 md:gap-12">
                <div className="mt-6 flex flex-col gap-12">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-semibold text-balance md:text-4xl lg:text-5xl">
                            מה הלקוחות חושבים עלינו?
                        </h2>
                        <p className="text-muted-foreground font-rubik">
                            בעלי עסקים שכבר עברו לזאפלי מספרים איך סוף-סוף
                            הפסיקו לרדוף אחרי וואטסאפים, משימות ובלגן - והעסק
                            התחיל לזרום.
                        </p>
                        <Button
                            asChild
                            className="gap-1 font-semibold tracking-wide"
                        >
                            <Link href="/contact">
                                צרו קשר
                                <ChevronLeft className="size-3" />
                            </Link>
                        </Button>
                    </div>

                    <div className="mt-auto grid grid-cols-[auto_1fr] gap-3 md:-translate-y-1/2">
                        <div className="flex items-center justify-center">
                            <Image
                                src="/media/clients/claro.jpg"
                                className="size-16 border"
                                alt="לוגו של Claro – מותג אופנה ישראלי"
                                width={512}
                                height={512}
                            />
                        </div>
                        <blockquote>
                            <p>
                                בעל מותג אופנה ישראלי המשלב עיצוב מקורי
                                ואותנטיות שנולדה מהרחוב ומהתרבות הישראלית.
                            </p>
                            <div className="font-rubik mt-2 flex gap-2 text-sm">
                                <cite>ירדן צור</cite>
                                <p className="text-muted-foreground">
                                    Founder, Claro
                                </p>
                            </div>
                        </blockquote>
                    </div>
                </div>

                <div className="-mx-6 mt-8 [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)] px-6 sm:mx-auto sm:max-w-md md:-mx-6 md:mt-0 md:mr-0 md:ml-auto">
                    <div className="bg-background dark:bg-muted/50 rounded-xl border p-3 shadow-lg md:pb-12">
                        <video
                            src="/media/clients/yarden.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            controls
                            aria-label="עדות של ירדן צור ממותג Claro על השירות של זאפלי"
                            className="w-full rounded-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export { TestimonaiSection };
