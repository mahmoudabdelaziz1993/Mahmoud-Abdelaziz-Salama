import { BasicInfoResponse } from "@/app/[locale]/api/database-test/route"
import { SkillSetResponse } from "@/app/[locale]/api/skill-set/route"

export async function GetBasicInfo(locale: string) {
const url = `${process.env.NEXT_PUBLIC_URL}/${locale}/api/BasicInfo`
    const response = await fetch(url)
    const data:BasicInfoResponse = await response.json()
    return data

}

// get skills data function
export async function GetSkills() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/skill-set`)
    const data:SkillSetResponse = await response.json()
    return data
}