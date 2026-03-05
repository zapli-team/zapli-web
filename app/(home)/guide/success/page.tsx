import { CheckCircle2 } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "המדריך בדרך אליך!",
    description: "המדריך החינמי עם 5 אוטומציות לעסקים נשלח למייל שלכם. בדקו את תיבת הדואר והתחילו לחסוך זמן כבר היום.",
    robots: { index: false, follow: true },
};

export default function GuideSuccessPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 flex items-center justify-center p-4 pt-20">
            <article aria-label="אישור קבלת המדריך">
                <Card className="max-w-lg w-full">
                    <CardHeader className="text-center">
                        <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                            <CheckCircle2 className="w-10 h-10 text-green-600" />
                        </div>
                        <CardTitle className="text-3xl font-bold">המדריך בדרך אליך!</CardTitle>
                        <CardDescription className="text-base">
                            שלחנו את המדריך המלא למייל שלכם. תבדקו את תיבת הדואר (וגם ספאם, למקרה).
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="bg-muted p-4 rounded-lg font-rubik">
                            <p className="text-sm text-muted-foreground mb-2">בינתיים, כמה דברים שכדאי לכם לדעת:</p>
                            <ul className="text-sm space-y-2">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span>המדריך כולל הוראות מפורטות לכל אחת מ-5 האוטומציות</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span>כל הכלים שמוזכרים הם חינמיים או בעלות נמוכה מאוד</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span>אפשר להתחיל מאוטומציה אחת ולהתקדם בהדרגה</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg">
                            <p className="font-semibold mb-2">צריכים עזרה עם ההטמעה?</p>
                            <p className="text-sm text-muted-foreground mb-3 font-rubik">
                                אם אתם רוצים שנעזור לכם להגדיר את המערכות האלה (או לבנות משהו מותאם אישית), בואו נדבר.
                            </p>
                            <Button className="w-full tracking-wide" asChild>
                                <Link href="/contact">צרו איתנו קשר</Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </article>
        </div>
    );
}
