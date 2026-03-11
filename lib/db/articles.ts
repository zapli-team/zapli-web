import { sql } from "@/lib/db";

export type Article = {
    id: number;
    slug: string;
    title: string;
    content: string;
    excerpt: string;
    metaDescription: string;
    featuredImageUrl: string | null;
    category: string;
    tags: string[];
    author: string;
    publishedAt: Date;
    createdAt: Date;
    updatedAt: Date;
};

export type ArticleListItem = Pick<
    Article,
    | "slug"
    | "title"
    | "excerpt"
    | "featuredImageUrl"
    | "category"
    | "author"
    | "publishedAt"
>;

export type CreateArticleInput = {
    slug: string;
    title: string;
    content: string;
    excerpt: string;
    metaDescription: string;
    featuredImageUrl?: string | null;
    category?: string;
    tags?: string[];
    author?: string;
    publishedAt?: string;
};

export async function getArticles(
    limit = 20,
    offset = 0,
): Promise<ArticleListItem[]> {
    return sql<ArticleListItem[]>`
        SELECT slug, title, excerpt, "featuredImageUrl", category, author, "publishedAt"
        FROM "Articles"
        ORDER BY "publishedAt" DESC
        LIMIT ${limit} OFFSET ${offset}
    `;
}

export async function getArticleBySlug(
    slug: string,
): Promise<Article | undefined> {
    const rows = await sql<Article[]>`
        SELECT * FROM "Articles" WHERE slug = ${slug} LIMIT 1
    `;
    return rows[0];
}

export async function getArticleCount(): Promise<number> {
    const rows = await sql<{ count: string }[]>`
        SELECT COUNT(*)::text AS count FROM "Articles"
    `;
    return parseInt(rows[0].count, 10);
}

export async function createArticle(
    input: CreateArticleInput,
): Promise<Article> {
    const rows = await sql<Article[]>`
        INSERT INTO "Articles" (slug, title, content, excerpt, "metaDescription", "featuredImageUrl", category, tags, author, "publishedAt")
        VALUES (
            ${input.slug},
            ${input.title},
            ${input.content},
            ${input.excerpt},
            ${input.metaDescription},
            ${input.featuredImageUrl ?? null},
            ${input.category ?? "כללי"},
            ${input.tags ?? []},
            ${input.author ?? "זאפלי"},
            ${input.publishedAt ? new Date(input.publishedAt) : sql`NOW()`}
        )
        RETURNING *
    `;
    return rows[0];
}
