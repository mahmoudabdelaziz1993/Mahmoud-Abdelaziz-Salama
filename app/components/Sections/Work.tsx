import { GetWork } from "@/utils/request-data-functions"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { countWorkingDays } from "@/utils/working-days"
import WorkHero from "../work-hero-card"

type props = {
    locale: string
}
export default async function Work({ locale }: props) {
    const { data: worklist, success: workSuccess } = await GetWork(locale)


    console.log("worklist", worklist);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-16">
            <WorkHero />
            <Accordion type="single" collapsible className="w-full  col-span-2">
                {workSuccess && worklist && worklist?.length > 0 && worklist.map((job) => (
                    <AccordionItem value={job.name} key={job.name}>
                        <AccordionTrigger>{job.position + "@" + job.name}</AccordionTrigger>
                        <AccordionContent>
                            <h4 className="mb-2 text-muted-foreground">{new Date(job.startDate).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })} - {new Date(job.endDate instanceof Date ? job.endDate : Date.now()).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })} </h4>
                            <p className="line-clamp-3">{job.summary}</p>
                        </AccordionContent>
                    </AccordionItem>
                ))
                }

            </Accordion >
        </div>
    )
}