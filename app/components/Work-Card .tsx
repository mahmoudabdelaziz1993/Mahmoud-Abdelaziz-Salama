import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Work } from "../[locale]/api/work/route";

export default async function WorkCard({Work ,locale}:{Work:Work , locale:string}) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{Work.position} @ {Work.name}</CardTitle>
                <CardDescription>{new Date(Work.startDate).toLocaleDateString(locale,{    year: 'numeric', month: 'long', day: 'numeric'})} - {new Date(Work.endDate).toLocaleDateString(locale,{    year: 'numeric', month: 'long', day: 'numeric'})}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{Work.summary}</p>
                <menu className="list-disc">
                {Work.highlights &&Work.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                ))}
                </menu>
            </CardContent>
        </Card>
    )
}