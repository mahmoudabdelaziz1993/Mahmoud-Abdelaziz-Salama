
import BasicInfoCard from '../components/Basic-Info-card'
import { GetBasicInfo, GetSkills, GetWork } from '@/utils/request-data-functions'
import { SkillCard } from '../components/Skill-card'
import WorkCard from '../components/Work-Card '
import { countWorkingDays } from '@/utils/working-days'
import BasicInfoSemantic from '../components/semantic-basic-info'
import { BackgroundGradientAnimationDemo } from '../components/hero'
import Skills from '../components/Sections/Skills'
import { Metadata, ResolvingMetadata } from 'next'
import Work from '../components/Sections/Work'

type Props = {
  params: {
    locale: string
  }
}
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { data: BasicInfo, success } = await GetBasicInfo(params.locale)

  return {
    title: BasicInfo.name + ' ' + BasicInfo.label,
    description: BasicInfo.summary,
    openGraph: {
      title: BasicInfo.name + ' ' + BasicInfo.label,
      description: BasicInfo.summary,
      url: process.env.NEXT_PUBLIC_URL + params.locale,
      images: [
        {
          url: 'ma.svg'
        }
      ]
    }
  }
}
export default async function Home({ params: { locale } }: Props) {
  console.log(locale)
  const { data: skills, success: skillsSuccess } = await GetSkills(locale)

  return (
    <>
      <BackgroundGradientAnimationDemo />
      {skillsSuccess && skills && <Skills skills={skills} locale={locale} />}
      {locale && <Work locale={locale} />}
      {/* {success && BasicInfo && <BasicInfoSemantic data={BasicInfo} />} */}
      {/* {success && BasicInfo && <BasicInfoCard name={BasicInfo.name} label={BasicInfo.label} summary={BasicInfo.summary} location_address={BasicInfo.location_address} image={BasicInfo.image} email={BasicInfo.email} phone={BasicInfo.phone} phone2={BasicInfo.phone2} />} */}
      {/* {skillsSuccess && skills && skills.map((skill) => (
        <SkillCard key={skill.id} name={skill.name} level={skill.level} icon={skill.icon} id={skill.id} />
      ))}
      {work && <h3>Woking Days {countWorkingDays({ startDate: new Date(work.slice(-1)[0].startDate), endDate: new Date(work.slice(-1)[0].endDate instanceof Date ? work.slice(-1)[0].endDate : Date.now()) })}</h3>}
      {workSuccess && work && work.map((job) => (
        <WorkCard key={job.name} Work={job} locale={locale} />
      ))} */}
    </>
  )
}
