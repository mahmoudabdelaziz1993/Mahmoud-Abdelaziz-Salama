import { BasicInfoResponse } from "@/app/[locale]/api/database-test/route"
import { SkillSetResponse } from "@/app/[locale]/api/skill-set/route"
import { Work, WorkResponse } from "@/app/[locale]/api/work/route"

export async function GetBasicInfo(locale: string) {
const url = `${process.env.NEXT_PUBLIC_URL}/${locale}/api/BasicInfo`
    const response = await fetch(url,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Cookie": `NEXT_LOCALE=${locale}`
        }
    })
    const data:BasicInfoResponse = await response.json()
    return data

}

// get skills data function
export async function GetSkills(locale: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/${locale}/api/skill-set`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Cookie": `NEXT_LOCALE=${locale}`
        }
    })
    const data:SkillSetResponse = await response.json()
    return data
}

// get work data function 
export async function GetWork(locale: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/${locale}/api/work`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Cookie": `NEXT_LOCALE=${locale}`
        }
    })
    const data:WorkResponse = await response.json()
    return data
}
