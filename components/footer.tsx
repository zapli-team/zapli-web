import Link from "next/link";

import { Logo } from "@/components/ui/logo";
import { NAVIGATION, SOCIALS, WHATSAPP_HUMAN_URL } from "@/utils/consts";

function Footer() {
    return (
        <footer className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6">
                <Link
                    href="/"
                    aria-label="זאפלי — חזרה לעמוד הראשי"
                    className="mx-auto block size-fit"
                >
                    <Logo />
                </Link>
                <span className="block text-center text-sm tracking-wide">
                    רוצים לדבר עם בן אדם?{" "}
                    <Link
                        href={WHATSAPP_HUMAN_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-2"
                    >
                        כתבו לנו כאן
                    </Link>
                </span>
                <nav
                    aria-label="ניווט תחתון"
                    className="flex flex-wrap justify-center gap-6 text-sm tracking-wide"
                >
                    {NAVIGATION.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-muted-foreground hover:text-primary block duration-150"
                        >
                            <span>{link.title}</span>
                        </Link>
                    ))}
                </nav>
                <div
                    dir="ltr"
                    aria-label="רשתות חברתיות"
                    className="flex flex-wrap justify-center gap-6 text-sm"
                >
                    {SOCIALS.map((social) => (
                        <Link
                            key={social.href}
                            href={social.href}
                            aria-label={social.title || social.href}
                            className="text-muted-foreground hover:text-primary"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <social.icon size={20} />
                        </Link>
                    ))}
                </div>
                <nav
                    aria-label="מדיניות ותנאים"
                    className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm tracking-wide"
                >
                    <Link
                        href="/privacy"
                        className="text-muted-foreground hover:text-primary duration-150"
                    >
                        מדיניות פרטיות
                    </Link>
                    <Link
                        href="/terms"
                        className="text-muted-foreground hover:text-primary duration-150"
                    >
                        תנאי שימוש
                    </Link>
                    <Link
                        href="/cookies"
                        className="text-muted-foreground hover:text-primary duration-150"
                    >
                        מדיניות עוגיות
                    </Link>
                    <Link
                        href="/accessibility"
                        className="text-muted-foreground hover:text-primary duration-150"
                    >
                        הצהרת נגישות
                    </Link>
                </nav>
                <span className="text-muted-foreground block text-center text-sm">
                    {" "}
                    זאפלי {new Date().getFullYear()} © כל הזכויות שמורות.
                </span>
            </div>
        </footer>
    );
}

export { Footer };
