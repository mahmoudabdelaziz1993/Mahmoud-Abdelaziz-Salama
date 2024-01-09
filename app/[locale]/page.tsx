import Image from 'next/image'
import Hi from '../components/Hi'
import { type Response } from '@/types/my-types'
import { BasicInfoResponse } from './api/database-test/route'

type Props = {
  params: {
    locale: string
  }
}
export default async function Home({ params: { locale } }: Props) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/${locale}/api/database-test`
  )
  const fetched  = await res.json()

console.log("data fetch", fetched)
  return (
    <main className="container p-4 mx-auto">
      <h1>Hello , I&apos;m {JSON.stringify(fetched)}</h1>
      {/* <h1>{locale}</h1>
      <Hi /> */}
    </main>
  )
}
