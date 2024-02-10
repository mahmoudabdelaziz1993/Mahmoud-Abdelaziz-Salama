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
        <Card className='prose prose-h3:text-4xl dark:prose-invert ' >
            <CardHeader>
                <CardTitle>
                    {name}
                </CardTitle>
                <CardDescription>
                    {label}
                </CardDescription>
            </CardHeader>
            <CardContent className=''>
                <p>{summary}</p>
            </CardContent>
            <CardFooter>
                <div className="grid max-w-xs prose dark:prose-invert prose-p:p-0 prose-p:m-0 prose-p:line-clamp-1">
                    <p>{location_address}</p>
                    <p className='break-all'>{email.split('@')[0]}{"@"+email.split('@')[1]}</p>
                    <p>{`+${phone} / +${phone2}`}</p>
                </div>
            </CardFooter>
        </Card>

    )
}