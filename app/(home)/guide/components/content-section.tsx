import { Calendar, Clock, MessageSquare, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { GuideForm } from "./guide-form";

function ContentSection() {
    return (
        <section id="content" aria-label="תוכן המדריך וטופס הורדה" className="container max-w-full mx-auto px-4 pb-16">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-6 max-md:order-1">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">מה תלמדו במדריך?</h2>
                        <div className="space-y-4">
                            <Card className="border-r-4 border-r-primary">
                                <CardContent className="pt-6">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                            <MessageSquare className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">תשובות אוטומטיות בוואטסאפ</h3>
                                            <p className="text-sm text-muted-foreground">
                                                להפסיק לאבד לידים בגלל תשובות איטיות
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-r-4 border-r-primary">
                                <CardContent className="pt-6">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                            <TrendingUp className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">מעקב אחרי לידים בלי CRM</h3>
                                            <p className="text-sm text-muted-foreground">
                                                לעקוב אחרי כל ליד במקום אחד, בלי לשלם אלפי שקלים
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-r-4 border-r-primary">
                                <CardContent className="pt-6">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                            <Calendar className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">תיאום פגישות בקליק אחד</h3>
                                            <p className="text-sm text-muted-foreground">
                                                להפסיק את משחק הפינג-פונג של מתי אתה פנוי
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-r-4 border-r-primary">
                                <CardContent className="pt-6">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                            <Zap className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">תזכורות תשלום אוטומטיות</h3>
                                            <p className="text-sm text-muted-foreground">
                                                לקבל תשלום בזמן בלי לרדוף אחרי לקוחות
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-r-4 border-r-primary">
                                <CardContent className="pt-6">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                            <Clock className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">מאגר לקוחות חכם</h3>
                                            <p className="text-sm text-muted-foreground">
                                                לזכור הכל על כל לקוח ולהיראות סופר מאורגן
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <div className="bg-muted/50 p-6 rounded-lg">
                        <p className="text-sm text-muted-foreground mb-2">💡 בונוס:</p>
                        <p className="font-medium">הכלים והשלבים המדויקים להטמעה + טיפים למעקב ושיפור מתמשך</p>
                    </div>
                </div>

                <div className="md:sticky md:top-8">
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-3xl font-bold">קבלו את המדריך המלא בחינם</CardTitle>
                            <CardDescription>מלאו פרטים ותקבלו את המדריך ישירות למייל תוך דקות ספורות.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <GuideForm />
                        </CardContent>
                    </Card>

                    <div className="flex items-center justify-center mt-6 text-center">
                        <p className="text-sm text-muted-foreground mb-2">
                            יש לכם שאלות?{" "}
                            <Link href="/contact" className="text-primary underline underline-offset-2">
                                צרו איתנו קשר
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { ContentSection };
