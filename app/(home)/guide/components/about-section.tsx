import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { WHATSAPP_BOT_URL } from "@/utils/consts";

function AboutSection() {
    return (
        <section id="about" className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl font-bold mb-4">מי אנחנו?</h2>
                <p className="text-muted-foreground mb-6 font-rubik">
                    אנחנו צוות ישראלי קטן שבונה מערכות חכמות וכלי AI לפרילנסרים ובעלי עסקים. אנחנו מתמחים באוטומציות
                    פשוטות שבאמת עובדות — בלי שטויות תאגידיות ובלי סיבוכים מיותרים.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="font-semibold tracking-wide gap-1 w-full sm:w-auto"
                    >
                        <Link href="/contact">
                            דברו איתנו
                            <ChevronLeft className="size-3" />
                        </Link>
                    </Button>
                    <div className="space-y-2 w-full sm:w-auto">
                        <Button asChild size="lg" className="font-semibold tracking-wide gap-1 w-full sm:w-auto">
                            <Link href={WHATSAPP_BOT_URL} target="_blank" rel="noreferrer">
                                דברו עם צ'אטבוט בוואטסאפ
                                <FaWhatsapp />
                            </Link>
                        </Button>
                        <p className="text-sm font-rubik">עובד גם עם הודעות קוליות!</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { AboutSection };
