import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { BasicInfo } from '@/types/my-types'



export default function BasicInfoCard({ name, label, summary, location_address, image, email, phone, phone2 }: BasicInfo) {
    return (
        <Card  >
            <CardHeader>
                <CardTitle>
                    {name}
                </CardTitle>
                <CardDescription >
                    {label}
                </CardDescription>
            </CardHeader>
            <CardContent className=''>
                <p>{summary}</p>
            </CardContent>
            <CardFooter>
                <div className="grid max-w-xs ">
                    <p>{location_address}</p>
                    <p className='break-all md:line-clamp-none line-clamp-1'>{email.split('@')[0]}{"@"+email.split('@')[1]}</p>
                    <p>{`+${phone} / +${phone2}`}</p>
                </div>
            </CardFooter>
        </Card>

    )
}