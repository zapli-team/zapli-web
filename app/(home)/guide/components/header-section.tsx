import { CheckCircle2 } from "lucide-react";

function HeaderSection() {
    return (
        <section
            id="header"
            aria-label="מדריך אוטומציות לעסקים"
            className="container mx-auto px-4 pb-16 md:pb-24 pt-48"
        >
            <div className="max-w-4xl mx-auto text-center">
                <div className="inline-block mb-4 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    מדריך חינמי להורדה
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    5 משימות שכל בעל עסק צריך לבצע אוטומטית
                    <span className="text-primary"> השבוע</span>
                </h1>
                <p className="text-muted-foreground mb-8 leading-relaxed font-rubik">
                    חסוך 5-10 שעות בשבוע עם אוטומציות פשוטות שאפשר להטמיע היום.
                </p>

                <div className="flex flex-col w-fit mx-auto sm:flex-row justify-center gap-6 mb-12 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <span>ללא עלויות גבוהות</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <span>ללא ידע טכני מתקדם</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <span>תוצאות מיידיות</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { HeaderSection };
