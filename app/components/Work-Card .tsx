import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Work } from "../[locale]/api/work/route";
import { countWorkingDays } from "@/utils/working-days";

export default async function WorkCard({ Work, locale }: { Work: Work, locale: string }) {
    return (
        <Card >
            <CardHeader>
                <CardTitle>{`${Work.position} @ ${Work.name}`}</CardTitle>
                <CardDescription>
                    <span>{new Date(Work.startDate).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })} - {new Date(Work.endDate instanceof Date ? Work.endDate : Date.now()).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })} </span> <br /> <span>{ countWorkingDays({startDate: new Date(Work.startDate), endDate: new Date( Work.endDate instanceof Date ? Work.endDate : Date.now() )?? Date.now()}) } </span></CardDescription>
            </CardHeader>
            <CardContent>
                <p>{Work.summary}</p>
                <h4 className="">Highlights</h4>
                <ul className="list-disc">
                    {Work.highlights && Work.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}