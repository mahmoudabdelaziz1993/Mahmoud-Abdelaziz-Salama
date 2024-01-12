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
        <Card >
            <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{label}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{summary}</p>
            </CardContent>
            <CardFooter>
                <div className="flex flex-col text-sm">
                    <p>{location_address}</p>
                    <p>{email}</p>
                    <p>+{phone} / +{phone2}</p>
                </div>
                
            </CardFooter>
        </Card>

    )
}