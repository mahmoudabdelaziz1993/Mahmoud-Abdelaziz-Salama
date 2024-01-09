import Image from 'next/image'
import Hi from '../components/Hi'
import { type Response } from '@/types/my-types'
import { BasicInfoResponse } from './api/database-test/route'
import BasicInfoCard from '../components/Basic-Info-card'

type Props = {
  params: {
    locale: string
  }
}
export default async function Home({ params: { locale } }: Props) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/${locale}/api/BasicInfo`
  )
  const {data,error,success} :BasicInfoResponse  = await res.json()

  return (
    <main className="container p-4 mx-auto">
   {data && <BasicInfoCard name={data.name} label={data.label} summary={data.summary} location_address={data.location_address} image={data.image} email={data.email} phone={data.phone} phone2={data.phone2}/>}
      {/* <h1>Hello , I&apos;m {JSON.stringify(fetched)}</h1> */}
      {/* <h1>{locale}</h1>
      <Hi /> */}
    </main>
  )
}
