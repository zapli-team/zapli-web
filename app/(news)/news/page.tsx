import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { getArticles } from "@/lib/db/articles";
import { cn } from "@/utils/funcs";

export const metadata: Metadata = {
    title: "חדשות ומאמרים",
    description:
        "מאמרים, מדריכים וחדשות בנושא אוטומציה, בינה מלאכותית ודיגיטציה לעסקים בישראל — מהצוות של זאפלי.",
    alternates: { canonical: "/news" },
    openGraph: {
        title: "חדשות ומאמרים — זאפלי",
        description:
            "מאמרים, מדריכים וחדשות בנושא אוטומציה, בינה מלאכותית ודיגיטציה לעסקים בישראל.",
        url: "/news",
    },
};

export const dynamic = "force-dynamic";

function formatDate(date: Date) {
    return new Intl.DateTimeFormat("he-IL", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(new Date(date));
}

export default async function NewsPage() {
    const articles = await getArticles();

    return (
        <section className="mx-auto max-w-5xl px-6 py-16 pt-28 md:py-32 md:pt-36">
            <header className="mb-12 space-y-3 text-center">
                <h1 className="text-4xl font-bold lg:text-5xl">
                    חדשות ומאמרים
                </h1>
                <p className="text-muted-foreground font-rubik text-lg">
                    עדכונים, מדריכים ותובנות מעולם האוטומציה והבינה המלאכותית
                </p>
            </header>

            {articles.length === 0 ? (
                <p className="text-muted-foreground font-rubik py-20 text-center text-lg">
                    עדיין אין מאמרים — בקרוב כאן יהיה תוכן חדש!
                </p>
            ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article) => (
                        <Link key={article.slug} href={`/news/${article.slug}`}>
                            <Card className="group flex h-full flex-col gap-4 overflow-hidden rounded-[0.5rem] py-0 transition-colors">
                                {article.featuredImageUrl && (
                                    <img
                                        src={article.featuredImageUrl}
                                        alt={article.title}
                                        className="aspect-video w-full object-cover"
                                    />
                                )}
                                <div
                                    className={cn(
                                        "flex flex-1 flex-col gap-3 p-5",
                                        article.featuredImageUrl && "pt-0",
                                    )}
                                >
                                    <div className="flex items-center gap-2">
                                        <Badge variant="secondary">
                                            {article.category}
                                        </Badge>
                                        <span className="text-muted-foreground text-xs">
                                            {formatDate(article.publishedAt)}
                                        </span>
                                    </div>
                                    <h2 className="text-lg leading-snug font-semibold">
                                        {article.title}
                                    </h2>
                                    <p className="text-muted-foreground font-rubik line-clamp-3 text-sm leading-relaxed">
                                        {article.excerpt}
                                    </p>
                                    <span className="text-primary mt-auto inline-flex items-center gap-1 text-sm font-medium">
                                        קרא עוד
                                        <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />
                                    </span>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            )}
        </section>
    );
}
