import { Metadata } from "next";
import Link from "next/link";
import React from "react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "מדיניות פרטיות",
    description:
        "מדיניות הפרטיות של זאפלי – כיצד אנו אוספים, משתמשים ומגנים על המידע האישי שלכם. זכויות גישה, תיקון ומחיקה בהתאם לחוק הגנת הפרטיות.",
};

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
    return (
        <section id={id} className="scroll-mt-24">
            <h2 className="text-2xl font-semibold tracking-tight mb-3">{title}</h2>
            <div className="text-sm leading-7 space-y-3">{children}</div>
        </section>
    );
}

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen pt-36">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
                <article>
                    <Card className="border-border shadow-sm rounded-2xl">
                        <CardHeader className="space-y-2">
                            <h1>
                                <CardTitle className="text-3xl font-bold">מדיניות פרטיות – זאפלי</CardTitle>
                            </h1>
                            <p className="text-sm text-muted-foreground">עודכן לאחרונה: 30 באוקטובר 2025</p>
                        </CardHeader>
                        <CardContent className="space-y-8">
                            {/* תקציר מהיר */}
                            <div className="rounded-2xl border border-border p-4 bg-muted/40">
                                <h3 className="text-lg font-medium mb-2">בקצרה</h3>
                                <ul className="list-disc pr-5 space-y-1 text-sm">
                                    <li>אנחנו אוספים רק מה שנחוץ להפעלת השירותים, לשיפורם, ולתקשורת אתכם.</li>
                                    <li>נתונים נשמרים בצורה מאובטחת, ונמחקים כשאין בהם צורך עסקי/משפטי.</li>
                                    <li>יש לכם זכויות גישה, תיקון, מחיקה והתנגדות לשימוש בנתונים.</li>
                                    <li>
                                        אנחנו משתפים מידע עם ספקים טכנולוגיים אמינים (כגון Google Workspace, Notion,
                                        וכלי CRM) לצורך מתן השירות.
                                    </li>
                                </ul>
                            </div>

                            {/* תוכן העניינים */}
                            <nav aria-label="תוכן העניינים" className="space-y-2">
                                <h3 className="text-lg font-medium">תוכן העניינים</h3>
                                <ul className="list-decimal pr-5 text-sm leading-7">
                                    <li>
                                        <a className="underline-offset-4 hover:underline" href="#scope">
                                            מי אנחנו ומה מכסה המסמך
                                        </a>
                                    </li>
                                    <li>
                                        <a className="underline-offset-4 hover:underline" href="#data">
                                            אילו נתונים אנו אוספים
                                        </a>
                                    </li>
                                    <li>
                                        <a className="underline-offset-4 hover:underline" href="#use">
                                            כיצד אנו משתמשים בנתונים
                                        </a>
                                    </li>
                                    <li>
                                        <a className="underline-offset-4 hover:underline" href="#legal">
                                            בסיס משפטי והסתמכות
                                        </a>
                                    </li>
                                    <li>
                                        <a className="underline-offset-4 hover:underline" href="#sharing">
                                            שיתוף עם צדדים שלישיים
                                        </a>
                                    </li>
                                    <li>
                                        <a className="underline-offset-4 hover:underline" href="#retention">
                                            שמירה ומחיקה
                                        </a>
                                    </li>
                                    <li>
                                        <a className="underline-offset-4 hover:underline" href="#security">
                                            אבטחה
                                        </a>
                                    </li>
                                    <li>
                                        <a className="underline-offset-4 hover:underline" href="#rights">
                                            הזכויות שלכם
                                        </a>
                                    </li>
                                    <li>
                                        <a className="underline-offset-4 hover:underline" href="#cookies">
                                            עוגיות (Cookies) וכלים דומים
                                        </a>
                                    </li>
                                    <li>
                                        <a className="underline-offset-4 hover:underline" href="#minors">
                                            קטינים
                                        </a>
                                    </li>
                                    <li>
                                        <a className="underline-offset-4 hover:underline" href="#changes">
                                            שינויים במדיניות
                                        </a>
                                    </li>
                                    <li>
                                        <a className="underline-offset-4 hover:underline" href="#contact">
                                            פרטי קשר
                                        </a>
                                    </li>
                                </ul>
                            </nav>

                            <Separator />

                            <Section id="scope" title="מי אנחנו ומה מכסה המסמך">
                                <p>
                                    אנחנו זאפלי – צוות ישראלי שבונה מערכות חכמות ופשוטות לפרילנסרים ולעסקים קטנים.
                                    מדיניות זו מסבירה כיצד אנו אוספים, משתמשים, משתפים ושומרים מידע אישי של מבקרי האתר,
                                    מתעניינים ושלקוחות (יחד: "משתמשים").
                                </p>
                                <p>
                                    המדיניות חלה על האתר, על טפסי יצירת קשר, וככל שרלוונטי – על אינטראקציות דרך כלים כמו
                                    אימייל ו-WhatsApp עסקי שלנו. אם חתמנו אתכם על הסכם שירות – ייתכנו הוראות פרטיות
                                    נוספות/ספציפיות באותו הסכם.
                                </p>
                            </Section>

                            <Section id="data" title="אילו נתונים אנו אוספים">
                                <ul className="list-disc pr-5 space-y-2">
                                    <li>
                                        <span className="font-medium">נתוני קשר</span>: שם, אימייל, טלפון, ותוכן הודעות
                                        שתשלחו אלינו (למשל דרך טופס, אימייל או WhatsApp).
                                    </li>
                                    <li>
                                        <span className="font-medium">נתוני שימוש באתר</span>: כתובות עמודים, זמני
                                        ביקור, ומזהים טכניים (כגון כתובת IP, מזהי מכשיר/דפדפן) לצרכי אבטחה, ניתוח ושיפור
                                        חוויית המשתמש.
                                    </li>
                                    <li>
                                        <span className="font-medium">נתוני עסק</span>: פרטים שתספקו על העסק שלכם כדי
                                        שנוכל להציע פתרון מתאים (למשל מערכות קיימות, זרימות עבודה, יעדים).
                                    </li>
                                    <li>
                                        <span className="font-medium">חומרים תפעוליים</span>: קבצים/מידע שתשתפו כדי
                                        שניישם עבורכם אינטגרציות ואוטומציות (בכפוף להסכמים המתאימים).
                                    </li>
                                </ul>
                            </Section>

                            <Section id="use" title="כיצד אנו משתמשים בנתונים">
                                <ul className="list-disc pr-5 space-y-2">
                                    <li>מתן שירותי ייעוץ, אפיון, יישום ותמיכה.</li>
                                    <li>
                                        תקשורת עם מתעניינים ולקוחות (מענה לפניות, תיאום פגישות, הצעות מחיר, עדכוני
                                        פרויקט).
                                    </li>
                                    <li>שיפור המוצרים והשירותים שלנו והבנת צרכי משתמשים.</li>
                                    <li>אבטחת המידע, מניעת הונאה ושמירה על תקינות המערכות.</li>
                                    <li>עמידה בדרישות חוק, רגולציה וציות חוזי.</li>
                                </ul>
                            </Section>

                            <Section id="legal" title="בסיס משפטי והסתמכות">
                                <p>
                                    אנו מעבדים נתונים על בסיס אחד או יותר מהבאים: (1) ביצוע חוזה או נקיטת צעדים לבקשתכם
                                    לפני כריתתו; (2) אינטרס לגיטימי בהפעלת ושיפור השירותים והאתר; (3) הסכמה מפורשת
                                    במקרים הנדרשים (למשל דיוור שיווקי); ו-(4) עמידה בהתחייבויות משפטיות. אם מתבקש –
                                    תוכלו לבטל הסכמה בכל עת, מבלי לפגוע בלגיטימיות העיבוד שבוצע עד הביטול.
                                </p>
                            </Section>

                            <Section id="sharing" title="שיתוף עם צדדים שלישיים (מעבדי נתונים)">
                                <p>
                                    אנו משתפים מידע במידה הנחוצה בלבד עם ספקים המסייעים לנו להפעיל את השירותים. למשל:
                                    Google Workspace (אימייל/דרייב), Notion (ניהול ידע), מערכות CRM נבחרות, כלי
                                    אוטומציה/אינטגרציה, וספקי ניתוח תעבורה. השיתוף נעשה מכוח הסכמים מתאימים ונקיטת אמצעי
                                    אבטחה מקובלים. לא נמכור את המידע האישי שלכם לצדדים שלישיים.
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    הערה: רשימת הספקים עשויה להשתנות מעת לעת. לבקשה מפורטת – פנו אלינו.
                                </p>
                            </Section>

                            <Section id="retention" title="שמירה ומחיקה">
                                <p>
                                    נשמור נתונים כל עוד יש צורך סביר לתת השירותים, לעמוד בחובות משפטיות/חשבונאיות, ליישב
                                    מחלוקות ולהגן על זכויותינו. כאשר אין עוד צורך – נפעל למחיקה/אנונימיזציה באופן מאובטח
                                    במסגרת זמני שמירה פנימיים.
                                </p>
                            </Section>

                            <Section id="security" title="אבטחה">
                                <p>
                                    אנו מיישמים אמצעי אבטחה טכניים וארגוניים סבירים (כולל בקרות גישה, הצפנה במקום המתאים
                                    וגיבויים) כדי להגן על מידע אישי. יחד עם זאת, אף מערכת אינה חסינה באופן מוחלט; אנו
                                    ממליצים להשתמש בסיסמאות חזקות ולהימנע משליחת מידע רגיש ללא צורך.
                                </p>
                            </Section>

                            <Section id="rights" title="הזכויות שלכם">
                                <p>
                                    בכפוף לדין החל (למשל הדין הישראלי וה-GDPR, ככל שחל), ייתכן ותוכלו לממש זכויות כגון:
                                    גישה למידע, תיקון, מחיקה, הגבלת עיבוד, התנגדות לעיבוד, ניידות נתונים, וביטול הסכמה.
                                    נשתדל להשיב לבקשות בתוך לוחות זמנים סבירים.
                                </p>
                            </Section>

                            <Section id="cookies" title="עוגיות (Cookies) וכלים דומים">
                                <p>
                                    אנו עשויים להשתמש בעוגיות/מזהים דומים להפעלת תכונות חיוניות של האתר, הבנת שימוש
                                    ושיפור ביצועים. תוכלו לנהל העדפות דפדפן (חסימה/מחיקה). חסימה מסוימת עשויה לפגוע
                                    בחוויית השימוש.
                                </p>
                            </Section>

                            <Section id="minors" title="קטינים">
                                <p>
                                    השירותים שלנו מיועדים לבגירים. אם נלמד כי נאסף מידע על קטין ללא הרשאת הורה/אפוטרופוס
                                    כנדרש – נפעל למחיקתו.
                                </p>
                            </Section>

                            <Section id="changes" title="שינויים במדיניות">
                                <p>
                                    אנו עשויים לעדכן מדיניות זו מעת לעת. נציין תאריך עדכון בראש המסמך, ושינויים מהותיים
                                    יודגשו באתר.
                                </p>
                            </Section>

                            <Section id="contact" title="פרטי קשר">
                                <p>
                                    שאלות, בקשות למימוש זכויות או תלונות – נשמח לסייע. פנו אלינו דרך{" "}
                                    <Link href="/contact" className="underline underline-offset-4">
                                        עמוד יצירת קשר
                                    </Link>{" "}
                                    באתר.
                                </p>
                                <Accordion type="single" collapsible className="w-full mt-2">
                                    <AccordionItem value="faq-1" className="border-border">
                                        <AccordionTrigger className="text-right">
                                            אפשר לבקש עותק של כל המידע ששמור עליי?
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            כן. שלחו לנו בקשה מזוהה דרך עמוד יצירת קשר, ונחזיר פירוט בהתאם לדין החל
                                            ובטווחי זמן סבירים.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="faq-2" className="border-border">
                                        <AccordionTrigger className="text-right">
                                            איך מבטלים קבלת דיוור שיווקי?
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            כל הודעת דיוור כוללת קישור הסרה. ניתן גם לפנות ישירות אלינו בבקשה להסרה,
                                            ונטפל בכך.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </Section>
                        </CardContent>
                    </Card>
                </article>
            </div>
        </main>
    );
}
