import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Skill } from "../[locale]/api/skill-set/route";
import { SkillLevel } from "./skill-level";

export  function SkillCard({ name, level, icon , }: Skill) {
    return (
        <Card className="not-prose w-max min-w-[150px] mx-2 grid place-items-center ">
            <CardHeader>
                <Image src={icon} width={48} height={48} alt={name + " icon"} className="not-prose" />
            </CardHeader>
            <CardContent>
                <CardTitle className="min-h-[60px]">{name}</CardTitle>
{/*               
                <SkillLevel level={level} /> */}
                
            </CardContent>

        </Card>
    )

}