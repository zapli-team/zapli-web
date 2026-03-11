import postgres from "postgres";

function createSql() {
    return postgres(process.env.DATABASE_URL!, {
        max: 5,
        idle_timeout: 20,
        connect_timeout: 10,
    });
}

const globalForDb = globalThis as unknown as {
    sql: ReturnType<typeof postgres>;
};

export const sql = globalForDb.sql ?? createSql();

if (process.env.NODE_ENV !== "production") globalForDb.sql = sql;
