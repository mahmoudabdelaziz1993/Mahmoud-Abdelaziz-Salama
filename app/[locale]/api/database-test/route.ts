// import { pool } from '@/lib/DB-connection';
// import { type Response, BasicInfo } from '@/types/my-types';
import { sql } from '@/lib/postgresSQL';
import { type NextRequest } from 'next/server';





export interface BasicInfoResponse {
  data?: any,         // data
  error?: string,        // error
  success: 'success' | 'error'
}
// export const runtime = "edge"

export async function GET(req: NextRequest, { params: { locale } }: { params: { locale: string } }) {



  try {
    // define two queries to get data in en and ar

    const ar_query =await sql`SELECT "name_ar" as "name", "label_ar" as "label", "summary_ar" as "summary", "location_address_ar" as "location_address","image","email","phone","phone2" FROM basics`;
    const en_query =  await sql`SELECT "name_en" as "name", "label_en" as "label", "summary_en" as "summary", "location_address_en" as "location_address","image","email","phone","phone2" FROM basics`;

    // const client = await pool.connect();
    const query = locale === 'ar-EG' ? ar_query : en_query;
    const res = query
    

    // pages/api/hello_world.js



    // const { rows } = await client.query(query);
    const response: { success: 'success'; data: any } = { success: 'success', data: res };
    // client.release();
    return Response.json(response);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    const response: { success: 'error'; error: string } = { success: 'error', error: 'Unable to connect to the database' };
    return Response.json(response);
  }
}
