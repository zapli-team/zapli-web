interface PolicySectionProps {
    title: string;
    children: React.ReactNode;
}

function PolicySection({ title, children }: PolicySectionProps) {
    return (
        <div className="space-y-3">
            <h2 className="text-xl font-bold">{title}</h2>
            {children}
        </div>
    );
}

export { PolicySection };
