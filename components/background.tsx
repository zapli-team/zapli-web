"use client";

import { cn } from "@/utils/funcs";

function Background({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            className={cn(
                "pointer-events-none fixed -z-50 flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#030303]",
                className,
            )}
            {...props}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80" />
        </div>
    );
}

export { Background };
