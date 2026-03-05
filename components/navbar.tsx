import { ChevronLeft } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { SOCIALS } from "@/utils/consts";
import { cn } from "@/utils/funcs";

function Navbar({ className, ...props }: React.ComponentProps<"header">) {
    return (
        <header className={cn("flex items-center justify-between w-full py-4 px-4 sm:px-6", className)} {...props}>
            <Link href="/" title="עמוד הבית" aria-label="זאפלי — חזרה לעמוד הראשי">
                <Logo />
            </Link>
            <nav
                dir="ltr"
                aria-label="רשתות חברתיות"
                className="flex items-center justify-center font-rubik gap-5 sm:gap-6 lg:gap-8"
            >
                {SOCIALS.map((social, index) => (
                    <Link
                        key={social.href}
                        href={social.href}
                        aria-label={social.title || social.href}
                        className={cn(
                            "relative flex items-center gap-2 hover:text-primary",
                            index > 2 && "hidden sm:flex",
                        )}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <social.icon size={24} />
                        {social.title && <span className="hidden lg:inline-flex text-sm">{social.title}</span>}
                    </Link>
                ))}
            </nav>
            <Button asChild className="font-semibold tracking-wide gap-1">
                <Link href="/contact">
                    צרו קשר
                    <ChevronLeft className="size-3" />
                </Link>
            </Button>
        </header>
    );
}

export { Navbar };
