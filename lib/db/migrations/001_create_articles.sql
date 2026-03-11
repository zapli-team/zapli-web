-- Articles table for the /news section
-- Run this migration on your GCP PostgreSQL database

CREATE TABLE IF NOT EXISTS "Articles" (
    id                SERIAL PRIMARY KEY,
    slug              VARCHAR(255) NOT NULL UNIQUE,
    title             TEXT NOT NULL,
    content           TEXT NOT NULL,
    excerpt           TEXT NOT NULL,
    "metaDescription"  TEXT NOT NULL,
    "featuredImageUrl" TEXT,
    category          VARCHAR(100) NOT NULL DEFAULT 'כללי',
    tags              TEXT[] NOT NULL DEFAULT '{}',
    author            VARCHAR(255) NOT NULL DEFAULT 'זאפלי',
    "publishedAt"      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "createdAt"        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updatedAt"        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexes for common queries
CREATE INDEX IF NOT EXISTS idx_articles_published_at ON "Articles" ("publishedAt" DESC);
CREATE INDEX IF NOT EXISTS idx_articles_category ON "Articles" (category);
CREATE INDEX IF NOT EXISTS idx_articles_slug ON "Articles" (slug);
