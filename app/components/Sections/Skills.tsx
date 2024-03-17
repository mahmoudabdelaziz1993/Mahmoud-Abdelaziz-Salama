'use client'
// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
// } from "@/components/ui/carousel"
import { SkillCard } from "../Skill-card"
import Marquee from "react-fast-marquee";

import Image from "next/image"
import { useTranslations } from "next-intl";
type props = {
    skills: {
        name: string
        level: number
        icon: string
        id: string
    }[];
    locale: string
}
export default function Skills({ skills , locale}: props) {
    const t = useTranslations('Skills');


    return (
        <article id="skills"  className=" grid text-center max-w-2xl mx-auto px-4  prose  dark:prose-invert prose-p:mt-0 my-8 ">
            <h2 >{t('headline')}</h2>
            <p>{t('description')}</p>
            <Marquee pauseOnHover   gradient={true}  gradientWidth={24} gradientColor="hsl(var(--background))" className="rtl:flex-row-reverse cursor-not-allowed ">
                {skills && skills.map((skill) => (
                  
                    <SkillCard key={skill.id} name={skill.name} level={skill.level} icon={skill.icon} id={skill.id} />))}
            </Marquee>
            {/* <Carousel opts={{ align: 'start', loop: true }} className="max-w-2xl mx-auto"  >
                <CarouselContent >

                    {skills && skills.map((skill) => (
                        <CarouselItem className="w-full  lg:basis-4/12" key={"Card" + skill.id}><SkillCard key={skill.id} name={skill.name} level={skill.level} icon={skill.icon} id={skill.id} /></CarouselItem>
                    ))}

                </CarouselContent>
            </Carousel> */}
        </article>
    )
}