import postgres from "postgres";

export const sql = postgres(process.env.DATABASE_URL as string, { ssl: 'require' });
