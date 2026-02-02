"use client";

import { cn } from "@/utils/funcs";

function Background({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            className={cn(
                "fixed -z-50 pointer-events-none min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]",
                className,
            )}
            {...props}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
        </div>
    );
}

export { Background };
