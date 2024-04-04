import { sql } from '@/lib/postgresSQL';
import { type NextRequest } from 'next/server';







export interface Skill {
    name: string;
    level: number;
    icon: string;
    id: string;
}
export interface SkillSetResponse {
    data?: Skill[],         // data
    error?: string,        // error
    success: boolean,      // success
}

export async function GET(req: NextRequest, { params: { locale } }: { params: { locale: string } }) {

    try {
        const query_ar = await sql`SELECT "name_ar" as "name", "level",  "icon" , "id" FROM skills`;
        const query_en = await sql`SELECT "name_en" as "name", "level",  "icon" , "id" FROM skills`;
        const query = locale === 'ar-EG' ? query_ar : query_en;
        const rows = query
        const response: SkillSetResponse = {
            success: true, data: [...rows].map((row) => ({
                name: row.name,
                level: row.level,
                icon: row.icon, id: row.id.toString()
            }))
        };
        return Response.json(response);
    } catch (error) {
        const response: SkillSetResponse = { success: false, error: 'Unable to connect to the database' };
        return Response.json(response);
    }
}
