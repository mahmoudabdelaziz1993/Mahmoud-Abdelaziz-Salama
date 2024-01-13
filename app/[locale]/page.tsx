
import BasicInfoCard from '../components/Basic-Info-card'
import { GetBasicInfo, GetSkills } from '@/utils/request-data-functions'
import { SkillCard } from '../components/Skill-card'

type Props = {
  params: {
    locale: string
  }
}
export default async function Home({ params: { locale } }: Props) {
console.log(locale)
  const { data: BasicInfo, success } = await GetBasicInfo(locale)
  const { data: skills, success: skillsSuccess } = await GetSkills(locale)
  return (
    <main className="container p-4 mx-auto">

      {success && BasicInfo && <BasicInfoCard name={BasicInfo.name} label={BasicInfo.label} summary={BasicInfo.summary} location_address={BasicInfo.location_address} image={BasicInfo.image} email={BasicInfo.email} phone={BasicInfo.phone} phone2={BasicInfo.phone2} />}
      {skillsSuccess && skills && skills.map((skill) => (
        <SkillCard key={skill.id} name={skill.name} level={skill.level} icon={skill.icon} id={skill.id} />
      ))}
    </main>
  )
}
