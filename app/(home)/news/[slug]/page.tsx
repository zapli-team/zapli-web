import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { getArticleBySlug } from "@/lib/db/articles";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const article = await getArticleBySlug(slug);
    if (!article) return {};

    return {
        title: article.title,
        description: article.metaDescription,
        alternates: { canonical: `/news/${article.slug}` },
        openGraph: {
            title: article.title,
            description: article.metaDescription,
            url: `/news/${article.slug}`,
            type: "article",
            publishedTime: article.publishedAt.toISOString(),
            authors: [article.author],
            ...(article.featuredImageUrl && {
                images: [{ url: article.featuredImageUrl }],
            }),
        },
        twitter: {
            card: "summary_large_image",
            title: article.title,
            description: article.metaDescription,
        },
    };
}

export const revalidate = 300;

function formatDate(date: Date) {
    return new Intl.DateTimeFormat("he-IL", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(new Date(date));
}

export default async function ArticlePage({ params }: Props) {
    const { slug } = await params;
    const article = await getArticleBySlug(slug);

    if (!article) notFound();

    return (
        <article className="mx-auto max-w-3xl px-6 py-16 pt-28 md:py-32 md:pt-36">
            <Link
                href="/news"
                className="text-muted-foreground hover:text-primary mb-8 inline-flex items-center gap-1.5 text-sm transition-colors"
            >
                <ArrowRight className="size-3.5" />
                חזרה לכל המאמרים
            </Link>

            <header className="mb-10 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                    <Badge variant="secondary">{article.category}</Badge>
                    {article.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                            {tag}
                        </Badge>
                    ))}
                </div>

                <h1 className="text-3xl leading-tight font-bold lg:text-4xl">
                    {article.title}
                </h1>

                <div className="text-muted-foreground font-rubik flex items-center gap-3 text-sm">
                    <span>{article.author}</span>
                    <span>·</span>
                    <time dateTime={article.publishedAt.toISOString()}>
                        {formatDate(article.publishedAt)}
                    </time>
                </div>
            </header>

            {article.featuredImageUrl && (
                <img
                    src={article.featuredImageUrl}
                    alt={article.title}
                    className="mb-10 aspect-video w-full rounded-xl object-cover"
                />
            )}

            <div
                className="prose prose-invert font-rubik prose-headings:font-ploni max-w-none leading-relaxed"
                dangerouslySetInnerHTML={{ __html: article.content }}
            />
        </article>
    );
}
