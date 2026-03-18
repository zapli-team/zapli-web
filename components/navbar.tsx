import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { SOCIALS } from "@/utils/consts";
import { cn } from "@/utils/funcs";

function Navbar({ className, ...props }: React.ComponentProps<"header">) {
    return (
        <header
            className={cn(
                "bg-background fixed top-0 z-100 flex w-full items-center justify-between px-4 py-3 sm:px-6",
                className,
            )}
            {...props}
        >
            <Link
                href="/"
                title="עמוד הבית"
                aria-label="זאפלי — חזרה לעמוד הראשי"
            >
                <Logo />
            </Link>
            <nav
                dir="ltr"
                aria-label="רשתות חברתיות"
                className="font-rubik flex items-center justify-center gap-5 max-sm:sr-only"
            >
                {SOCIALS.map((social, index) => (
                    <Link
                        key={social.href}
                        href={social.href}
                        aria-label={social.title || social.href}
                        className={cn(
                            "hover:text-primary relative flex items-center gap-2",
                            index > 2 && "hidden sm:flex",
                        )}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <social.icon size={24} />
                        {social.title && (
                            <span className="hidden text-sm lg:inline-flex">
                                {social.title}
                            </span>
                        )}
                    </Link>
                ))}
            </nav>
            <Button asChild className="gap-1 font-semibold tracking-wide">
                <Link href="/contact">צרו קשר</Link>
            </Button>
        </header>
    );
}

export { Navbar };
