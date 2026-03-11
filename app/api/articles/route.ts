import { NextRequest, NextResponse } from "next/server";
import z from "zod";

import { createArticle } from "@/lib/db/articles";

const schema = z.object({
    slug: z.string().min(1),
    title: z.string().min(1),
    content: z.string().min(1),
    excerpt: z.string().min(1),
    metaDescription: z.string().min(1),
    featuredImageUrl: z.string().nullable().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
    publishedAt: z.string().optional(),
});

export async function POST(req: NextRequest) {
    try {
        const authHeader = req.headers.get("authorization");
        const expectedToken = process.env.ARTICLES_API_TOKEN;

        if (!expectedToken || authHeader !== `Bearer ${expectedToken}`) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 },
            );
        }

        const body = await req.json();
        const parsed = schema.safeParse(body);

        if (!parsed.success) {
            return NextResponse.json(
                { error: "Invalid data", details: parsed.error.flatten() },
                { status: 400 },
            );
        }

        const article = await createArticle(parsed.data);

        return NextResponse.json({ article }, { status: 201 });
    } catch (error) {
        console.error("Failed to create article:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 },
        );
    }
}
