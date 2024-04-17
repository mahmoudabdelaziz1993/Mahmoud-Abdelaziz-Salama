"use client"
import { SkillCard } from "../Skill-card"
import Marquee from "react-fast-marquee"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { Skill } from "@/app/[locale]/api/skill-set/route"


type Props = {
  skills: Skill[]
  locale: string
}

export default function Skills({ skills, locale }: Props) {
  const t = useTranslations("Skills")

  return (
    <div 
      className="grid text-center max-w-2xl mx-auto px-4 prose dark:prose-invert prose-p:mt-0 my-8"
    >
      <h2>{t("headline")}</h2>
      <p>{t("description")}</p>
      <Marquee
        gradient={true}
        gradientWidth={24}
        gradientColor="hsl(var(--background))"
        className="rtl:flex-row-reverse cursor-auto"
        pauseOnHover={true}
      >
        {skills.map((skill) => (
          <SkillCard key={skill.id} {...skill} />
        ))}
      </Marquee>
    </div>
  )
}
