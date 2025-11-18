import { Bot, Cog, Compass, Link, Puzzle } from "lucide-react";
import {
    TbBrandFacebookFilled,
    TbBrandInstagramFilled,
    TbBrandTiktokFilled,
    TbBrandWhatsapp,
    TbBrandYoutubeFilled,
    TbMailFilled,
} from "react-icons/tb";

const DEFAULT_WHATSAPP_MSG = encodeURIComponent("מה קורה? אשמח לדבר איתכם על העסק שלי");
export const WHATSAPP_BOT_NUMBER = "972527018120";
export const WHATSAPP_HUMAN_NUMBER = "972507537633";
export const WHATSAPP_BOT_URL = `https://wa.me/${WHATSAPP_BOT_NUMBER}?text=${DEFAULT_WHATSAPP_MSG}`;
export const WHATSAPP_HUMAN_URL = `https://wa.me/${WHATSAPP_HUMAN_NUMBER}?text=${DEFAULT_WHATSAPP_MSG}`;
export const PHONE_AGENT_NUMBER = "972765997446";

export const NAVIGATION = [
    {
        title: "ראשי",
        href: "/#hero",
    },
    {
        title: "פתרונות",
        href: "/#services",
    },
    {
        title: "עלינו",
        href: "/#about",
    },
    {
        title: "צרו קשר",
        href: "/contact",
    },
];

export const SOCIALS = [
    {
        title: "דברו עם צ'אטבוט",
        icon: TbBrandWhatsapp,
        href: WHATSAPP_BOT_URL,
        color: "#25D366",
    },
    {
        title: "contact@zapli.co.il",
        icon: TbMailFilled,
        href: "mailto:contact@zapli.co.il",
        color: "#D93025",
    },
    {
        icon: TbBrandTiktokFilled,
        href: "https://www.tiktok.com/@roybarzilay1",
        color: "#EE1D52",
    },
    {
        icon: TbBrandInstagramFilled,
        href: "https://www.instagram.com/roybarzilay1",
        color: "#833AB4",
    },
    {
        icon: TbBrandYoutubeFilled,
        href: "https://www.youtube.com/@roybarzilay1",
        color: "#FF0000",
    },
    {
        icon: TbBrandFacebookFilled,
        href: "https://www.facebook.com/zapli.co.il",
        color: "#1877F2",
    },
];

export const CLIENTS = [
    {
        src: "/media/clients/noni.png",
        name: "נוני שושתרי",
    },
    {
        src: "/media/clients/yaakov.png",
        name: "יעקב סאטלר",
    },
    {
        src: "/media/clients/ori.png",
        name: "אורי חרך",
    },
    {
        src: "/media/clients/revital.png",
        name: "רויטל ליליאן",
    },
    {
        src: "/media/clients/moshe.png",
        name: "משה טלית",
    },
    {
        src: "/media/clients/vered.png",
        name: "ורד סולן",
    },
];

export const TEAM = [
    {
        src: "/media/team/roy.png",
        name: "רועי ברזילי",
        title: "מייסד ומפתח מערכות חכמות",
    },
    {
        src: "/media/team/michael.png",
        name: "מיכאל רבינוביץ'",
        title: "מפתח ומומחה תשתיות",
    },
    {
        src: "/media/team/barak.png",
        name: "ברק באטיטו",
        title: "אחראי שיווק וצמיחה עסקית",
    },
];

export const SERVICES = [
    {
        icon: Cog,
        title: "אוטומציה של תהליכי עבודה",
        description:
            "נבנה עבורך תהליכים חכמים שמבצעים פעולות אוטומטיות במקומך – מעקב לידים, תיאומי פגישות, שליחת תזכורות, הפקת דוחות ועוד.",
    },
    {
        icon: Bot,
        title: "שילוב מערכות AI בעסק",
        description:
            'נשלב בינה מלאכותית כדי לחסוך לך זמן: בוטים לשירות לקוחות, עוזרים חכמים לדוא"ל, סיכום פגישות, יצירת תוכן, ועוד.',
    },
    {
        icon: Link,
        title: "חיבור בין מערכות וכלים קיימים",
        description: "נחבר בין WhatsApp, Gmail, Excel, CRM ועוד – כדי שכל המידע יעבוד יחד ויחסוך כאב ראש.",
    },
    {
        icon: Puzzle,
        title: "פיתוח מערכות בהתאמה אישית",
        description:
            "נפתח עבורך פתרונות בהתאמה אישית – ממשקים, לוחות בקרה, או מערכות ניהול פנימיות – פשוטים, נוחים ויעילים.",
    },
    {
        icon: Compass,
        title: "ייעוץ ויישום חכם",
        description:
            "ננתח את תהליכי העבודה שלך, נמליץ על כלים חכמים וניישם אותם יחד, כך שתוכל לנהל את העסק בלי להזדקק לטכנאי צמוד.",
    },
];
