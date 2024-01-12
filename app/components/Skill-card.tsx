import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Skill } from "../[locale]/api/skill-set/route";
import { SkillLevel } from "./skill-level";

export async function SkillCard({ name, level, icon }: Skill) {
    return (
        <Card>
            <CardHeader>
                <Image src={icon} width={48} height={48} alt={name + " icon"} />
            </CardHeader>
            <CardContent>
                <CardTitle>{name}</CardTitle>
              
                <SkillLevel level={level} />
                
            </CardContent>

        </Card>
    )

}