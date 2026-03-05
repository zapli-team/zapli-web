import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: "זאפלי — %s",
        default: "זאפלי — מדריך חינם: 5 אוטומציות שכל בעל עסק חייב להכיר",
    },
    description:
        "הורידו מדריך חינמי עם 5 אוטומציות פשוטות שחוסכות 5-10 שעות בשבוע – בלי ידע טכני, בלי עלויות גבוהות. כולל הוראות מפורטות וכלים חינמיים.",
};

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return children;
}
