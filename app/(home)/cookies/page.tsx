import { PolicySection } from "@/app/(home)/components/policy-section";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "מדיניות עוגיות",
    description:
        "מדיניות העוגיות של זאפלי — סוגי העוגיות שאנו משתמשים בהם, מטרותיהם והאפשרויות לנהל אותן.",
    alternates: { canonical: "/cookies" },
    openGraph: {
        title: "מדיניות עוגיות",
        description:
            "מדיניות העוגיות של זאפלי — סוגי העוגיות שאנו משתמשים בהם, מטרותיהם והאפשרויות לנהל אותן.",
        url: "/cookies",
    },
    twitter: {
        title: "מדיניות עוגיות",
        description:
            "מדיניות העוגיות של זאפלי — סוגי העוגיות שאנו משתמשים בהם, מטרותיהם והאפשרויות לנהל אותן.",
    },
};

export default function CookiesPage() {
    return (
        <article
            aria-label="מדיניות עוגיות"
            className="mx-auto max-w-4xl px-6 py-16 pt-40! max-sm:pt-28! md:py-32"
        >
            <div className="space-y-10">
                <header className="space-y-2">
                    <h1 className="text-4xl font-bold max-sm:text-3xl">
                        מדיניות עוגיות (Cookies)
                    </h1>
                    <p className="text-muted-foreground text-sm">
                        עודכן לאחרונה: מרץ 2026
                    </p>
                </header>

                <div className="text-foreground/85 space-y-8 text-lg leading-relaxed max-sm:text-base">
                    <PolicySection title="כללי">
                        <p>
                            {`אתר zapli.co.il ("האתר") המופעל על ידי זאפלי ("החברה", "אנחנו") משתמש בעוגיות (Cookies) ובטכנולוגיות דומות. מדיניות זו מסבירה מהן עוגיות, למה אנו משתמשים בהן וכיצד תוכלו לנהל אותן. המשך השימוש באתר לאחר קריאת מדיניות זו מהווה הסכמה לשימוש בעוגיות כמפורט במדיניות זו.`}
                        </p>
                    </PolicySection>

                    <PolicySection title="מהן עוגיות?">
                        <p>
                            עוגיות הן קבצי טקסט קטנים הנשמרים במכשיר הקצה שלכם
                            (מחשב, טלפון או טאבלט) בעת ביקור באתר. הן מאפשרות
                            לאתר לזהות את הדפדפן שלכם, לשמור העדפות ולספק חוויית
                            שימוש מותאמת. עוגיות אינן תוכנות מחשב ואינן גורמות
                            נזק למכשירכם.
                        </p>
                    </PolicySection>

                    <PolicySection title="סוגי העוגיות בהן אנו משתמשים">
                        <p>האתר שלנו משתמש בסוגי העוגיות הבאים:</p>
                    </PolicySection>

                    <PolicySection title="עוגיות הכרחיות (חיוניות)">
                        <p>
                            עוגיות אלו חיוניות לתפקוד הבסיסי של האתר ואינן
                            ניתנות לביטול. הן כוללות:
                        </p>
                        <ul className="list-disc space-y-1 pe-5">
                            <li>
                                עוגיות סשן (Session Cookies) — מנהלות את מצב
                                הגלישה ושומרות על העדפות שלכם. נמחקות עם סגירת
                                הדפדפן.
                            </li>
                            <li>
                                עוגיות אבטחה (CSRF Tokens) — מגנות מפני התקפות
                                זיוף בקשות בין-אתרים (Cross-Site Request
                                Forgery).
                            </li>
                        </ul>
                    </PolicySection>

                    <PolicySection title="עוגיות פונקציונליות">
                        <p>
                            עוגיות אלו מאפשרות לאתר לזכור העדפות שלכם ולספק
                            חוויית שימוש מותאמת אישית. לדוגמה:
                        </p>
                        <ul className="list-disc space-y-1 pe-5">
                            <li>
                                שמירת העדפות שפה ואזור (locale) — כדי להציג את
                                האתר בשפה ובכיוון הנכונים.
                            </li>
                            <li>
                                העדפות תצוגה — למשל מצב בהיר/כהה (אם רלוונטי).
                            </li>
                        </ul>
                    </PolicySection>

                    <PolicySection title="עוגיות אנליטיות">
                        <p>
                            עוגיות אלו מסייעות לנו להבין כיצד משתמשים מגיעים
                            לאתר ומשתמשים בו, לצורך שיפור השירותים וחוויית
                            המשתמש. המידע הנאסף הוא מצטבר (אנונימי) וכולל, בין
                            היתר:
                        </p>
                        <ul className="list-disc space-y-1 pe-5">
                            <li>דפים שנצפו ומשך השהייה בכל דף.</li>
                            <li>סוג המכשיר, מערכת הפעלה ורזולוציית מסך.</li>
                            <li>מקור ההפנייה (מהיכן הגעתם לאתר).</li>
                            <li>
                                אינטראקציות עם אלמנטים באתר (כפתורים, קישורים,
                                גלילה).
                            </li>
                        </ul>
                    </PolicySection>

                    <PolicySection title="עוגיות צד שלישי">
                        <p>
                            חלק מהעוגיות באתר מוצבות על ידי צדדים שלישיים
                            המסייעים בתפעול האתר:
                        </p>
                        <ul className="list-disc space-y-1 pe-5">
                            <li>
                                Google — עוגיות הקשורות לשירותי Google המשולבים
                                באתר. לפרטים נוספים:
                                policies.google.com/privacy.
                            </li>
                            <li>
                                Vercel — עוגיות הקשורות לתשתית האירוח
                                ואופטימיזציה של ביצועים (speed insights, web
                                analytics).
                            </li>
                        </ul>
                    </PolicySection>

                    <PolicySection title="משך חיי העוגיות">
                        <p>עוגיות מתחלקות לשני סוגים לפי משך חייהן:</p>
                        <ul className="list-disc space-y-1 pe-5">
                            <li>
                                עוגיות סשן (Session Cookies) — נמחקות אוטומטית
                                עם סגירת הדפדפן.
                            </li>
                            <li>
                                עוגיות קבועות (Persistent Cookies) — נשמרות
                                לתקופה מוגדרת מראש (לרוב בין מספר ימים ל-12
                                חודשים, בהתאם למטרתן). ניתן למחוק אותן ידנית דרך
                                הגדרות הדפדפן.
                            </li>
                        </ul>
                    </PolicySection>

                    <PolicySection title="כיצד לנהל עוגיות">
                        <p>באפשרותכם לנהל את העוגיות בכמה דרכים:</p>
                        <ul className="list-disc space-y-1 pe-5">
                            <li>
                                {`הגדרות דפדפן — רוב הדפדפנים המודרניים (Chrome, Safari, Firefox, Edge) מאפשרים לחסום, למחוק או להגביל עוגיות דרך מנו ההגדרות. חפשו "עוגיות" או "Cookies" בהגדרות הפרטיות או האבטחה.`}
                            </li>
                            <li>
                                מחיקה ידנית — תוכלו בכל עת למחוק עוגיות קיימות
                                דרך הגדרות הדפדפן שלכם.
                            </li>
                        </ul>
                        <p className="font-medium">
                            שימו לב: חסימת עוגיות הכרחיות עלולה לפגוע בתפקוד
                            האתר.
                        </p>
                    </PolicySection>

                    <PolicySection title="Do Not Track">
                        <p>
                            {`חלק מהדפדפנים תומכים באות הנקרא "אל תעקוב" (Do Not Track). נכון לעת, אין תקן תעשייתי אחיד לאותות DNT. אנו עוקבים אחר התפתחויות בתחום ונעדכן את מדיניות זו בהתאם.`}
                        </p>
                    </PolicySection>

                    <PolicySection title="שינויים במדיניות">
                        <p>
                            אנו רשאים לעדכן מדיניות עוגיות זו מעת לעת. שינויים
                            מהותיים יפורסמו באתר ויכנסו לתוקף עם פרסומם. המשך
                            השימוש באתר לאחר עדכון המדיניות מהווה הסכמה
                            לשינויים.
                        </p>
                    </PolicySection>

                    <PolicySection title="מדיניות פרטיות">
                        <p>
                            מדיניות עוגיות זו משלימה את מדיניות הפרטיות שלנו.
                            למידע מפורט על אופן האיסוף, השימוש וההגנה על המידע
                            האישי שלכם, אנא עיינו במדיניות הפרטיות המלאה שלנו.
                        </p>
                    </PolicySection>

                    <PolicySection title="יצירת קשר">
                        <p>
                            לכל שאלה בנוגע למדיניות העוגיות שלנו, ניתן לפנות
                            אלינו:
                        </p>
                        <ul className="space-y-1">
                            <li>{`דוא"ל: contact@zapli.co.il`}</li>
                        </ul>
                    </PolicySection>
                </div>
            </div>
        </article>
    );
}
