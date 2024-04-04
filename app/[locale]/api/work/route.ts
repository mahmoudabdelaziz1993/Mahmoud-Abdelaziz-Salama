import { sql } from '@/lib/postgresSQL';
import { type NextRequest } from 'next/server';





export interface Work {
    url: string;
    name: string;
    position: string;
    startDate: Date;
    endDate: Date;
    summary: string;
    highlights?: string[];
    
}

export interface WorkResponse {
    data?: Work[],         // data
    error?: string,        // error
    success: 'success' | 'error'
}

export async function GET(req: NextRequest, { params: { locale } }: { params: { locale: string } }) {



    try {
        // define two queries to get data in en and ar
        const ar_query = await sql`SELECT "name_ar" as "name", "position_ar" as "position", "highlights_ar" as "highlights","startDate_ar" as "startDate","endDate_ar" as "endDate","summary_ar" as "summary" , "url"  FROM work`;
        const en_query = await sql`SELECT "name_en" as "name", "position_en" as "position", "highlights_en" as "highlights","startDate_en" as "startDate","endDate_en" as "endDate","summary_en" as "summary" , "url"  FROM work`;

        const query = locale === 'ar-EG' ? ar_query : en_query;
        const  rows  = query;
        const response: { success: 'success'; data: Work[] } = { success: 'success', data: [...rows] as Work[] };
        return Response.json(response);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        const response: { success: 'error'; error: string } = { success: 'error', error: 'Unable to connect to the database' };
        return Response.json(response);
    }
}
