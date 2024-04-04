import { sql } from '@/lib/postgresSQL';
import { BasicInfo } from '@/types/my-types';
import { type NextRequest  } from 'next/server'

export async function GET(req: NextRequest, { params: { locale } }: { params: { locale: string } }) {
    try {
        const ar_query = await sql`SELECT "name_ar" as "name", "label_ar" as "label", "summary_ar" as "summary", "location_address_ar" as "location_address","image","email","phone","phone2" FROM basics`;
        const en_query = await sql`SELECT "name_en" as "name", "label_en" as "label", "summary_en" as "summary", "location_address_en" as "location_address","image","email","phone","phone2" FROM basics`;
    
        const query = locale === 'ar-EG' ? ar_query : en_query;
        const  rows  = query;
        const response: { success: 'success'; data: BasicInfo } = { success: 'success', data: rows[0] as BasicInfo };

        return Response.json(response);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        const response: { success: 'error'; error: string } = { success: 'error', error: 'Unable to connect to the database' };
        return Response.json(response);
    }
}