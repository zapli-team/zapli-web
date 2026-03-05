import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { WHATSAPP_BOT_URL } from "@/utils/consts";

function ContactSection() {
    return (
        <section id="contact" aria-label="יצירת קשר" className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-4xl font-semibold text-balance lg:text-5xl">
                        איך אפשר להתחיל?
                    </h2>
                    <p className="font-rubik mt-4 lg:text-lg">
                        דברו איתנו ונקבע שיחת ייעוץ קצרה כדי להבין בדיוק מה העסק
                        שלכם צריך.
                    </p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="w-full gap-1 font-semibold tracking-wide sm:w-auto"
                        >
                            <Link href="/contact">
                                דברו איתנו
                                <ChevronLeft className="size-3" />
                            </Link>
                        </Button>
                        <div className="w-full space-y-2 sm:w-auto">
                            <Button
                                asChild
                                size="lg"
                                className="w-full gap-1 font-semibold tracking-wide sm:w-auto"
                            >
                                <Link
                                    href={WHATSAPP_BOT_URL}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    דברו עם צ'אטבוט בוואטסאפ
                                    <FaWhatsapp />
                                </Link>
                            </Button>
                            <p className="font-rubik text-sm">
                                עובד גם עם הודעות קוליות!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { ContactSection };
