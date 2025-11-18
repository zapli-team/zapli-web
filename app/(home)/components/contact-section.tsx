import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { WHATSAPP_BOT_URL } from "@/utils/consts";

function ContactSection() {
    return (
        <section id="contact" className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">איך אפשר להתחיל?</h2>
                    <p className="mt-4 font-rubik lg:text-lg">
                        דברו איתנו ונקבע שיחת ייעוץ קצרה כדי להבין בדיוק מה העסק שלכם צריך.
                    </p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
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
            </div>
        </section>
    );
}

export { ContactSection };
