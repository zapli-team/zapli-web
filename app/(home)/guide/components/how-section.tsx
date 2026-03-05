import { CheckCircle2, TrendingUp, Zap } from "lucide-react";

function HowSection() {
    return (
        <section id="how" aria-label="למה האוטומציות עובדות" className="bg-background py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">למה זה עובד?</h2>
                    <div className="grid md:grid-cols-3 gap-8 [&_p]:font-rubik">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle2 className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="font-semibold mb-2">פשוט להטמעה</h3>
                            <p className="text-sm text-muted-foreground">
                                כל אוטומציה לוקחת 15-30 דקות להגדיר. לא צריך להיות גיק טכנולוגי.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Zap className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="font-semibold mb-2">תוצאות מיידיות</h3>
                            <p className="text-sm text-muted-foreground">
                                תרגיש את ההבדל כבר ביום הראשון. פחות כאוס, יותר שליטה.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <TrendingUp className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="font-semibold mb-2">ROI ברור</h3>
                            <p className="text-sm text-muted-foreground">
                                5-10 שעות בשבוע ×4 שבועות = 20-40 שעות חזרה אליך כל חודש.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { HowSection };
