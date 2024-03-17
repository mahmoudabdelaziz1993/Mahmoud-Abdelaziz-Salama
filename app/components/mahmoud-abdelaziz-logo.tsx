"use client";
import Link from 'next/link'
import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { useTranslations } from 'next-intl';

type Props = {
    width: number;
}
function MahmoudAbdelazizLogo({ width }: Props) {

    const t = useTranslations('Info');
    return (
        <span className="inline-flex items-center gap-2 cursor-pointer">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link href='/' className='text-primary'>
                            <svg width={width} height={width} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="MAHMOUD_ABDELZIZ_LOGO">
                                    <g id="BARS_GROUP">
                                        <path id="BAR_1" d="M16.5 44C16.5 39.3501 16.5 37.0252 17.0111 35.1177C18.3981 29.9413 22.4413 25.8981 27.6177 24.5111C29.5252 24 31.8501 24 36.5 24V24V84V84C31.8501 84 29.5252 84 27.6177 83.4889C22.4413 82.1019 18.3981 78.0587 17.0111 72.8823C16.5 70.9748 16.5 68.6499 16.5 64V44Z" fill="#EF1111" />
                                        <path id="BAR_2" d="M41.5 44C41.5 39.3501 41.5 37.0252 42.0111 35.1177C43.3981 29.9413 47.4413 25.8981 52.6177 24.5111C54.5252 24 56.8501 24 61.5 24V24V84V84C56.8501 84 54.5252 84 52.6177 83.4889C47.4413 82.1019 43.3981 78.0587 42.0111 72.8823C41.5 70.9748 41.5 68.6499 41.5 64V44Z" fill="#EF1111" />
                                        <path id="BAR_3" d="M66.5 44C66.5 39.3501 66.5 37.0252 67.0111 35.1177C68.3981 29.9413 72.4413 25.8981 77.6177 24.5111C79.5252 24 81.8501 24 86.5 24V24V84V84C81.8501 84 79.5252 84 77.6177 83.4889C72.4413 82.1019 68.3981 78.0587 67.0111 72.8823C66.5 70.9748 66.5 68.6499 66.5 64V44Z" fill="#EF1111" />
                                        <path id="BAR_4" d="M111.5 84C111.5 88.6499 111.5 90.9748 110.989 92.8823C109.602 98.0587 105.559 102.102 100.382 103.489C98.4748 104 96.1499 104 91.5 104V104V24V24C96.1499 24 98.4748 24 100.382 24.5111C105.559 25.8981 109.602 29.9413 110.989 35.1177C111.5 37.0252 111.5 39.3501 111.5 44V84Z" fill="#EF1111" />
                                    </g>
                                </g>
                            </svg>

                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{t("Name")}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <h6 className='hidden font-bold md:inline bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-br from-foreground to-foreground/50 '>
                {t("Name")}
            </h6>
        </span>
    )
}

export default MahmoudAbdelazizLogo