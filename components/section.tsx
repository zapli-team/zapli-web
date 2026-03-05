import { cn } from "@/utils/funcs";

type SectionProps = {
    as?: React.ElementType;
    label?: string;
    className?: string;
    children: React.ReactNode;
};

function Section({
    as: Component = "section",
    label,
    className,
    children,
}: SectionProps) {
    return (
        <Component
            aria-label={label}
            className={cn("mx-auto max-w-5xl px-6 py-16 md:py-32", className)}
        >
            {children}
        </Component>
    );
}

export { Section };
