import Link from 'next/link'
import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

type Props = {
    width: number;
    tooltipContent: string;
}
function MahmoudAbdelazizLogo({ width, tooltipContent }: Props) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <Link href='/' className='text-primary'>
                        <svg width={width} height="auto" viewBox="0 0 110 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 25C10 16.7157 16.7157 10 25 10V10V55C25 63.2843 18.2843 70 10 70V70V25Z" fill="currentColor" />
                            <path d="M35 25C35 16.7157 41.7157 10 50 10V10V55C50 63.2843 43.2843 70 35 70V70V25Z" fill="currentColor" />
                            <path d="M60 25C60 16.7157 66.7157 10 75 10V10V55C75 63.2843 68.2843 70 60 70V70V25Z" fill="currentColor" />
                            <path d="M85 10V10C93.2843 10 100 16.7157 100 25V75C100 83.2843 93.2843 90 85 90V90V10Z" fill="currentColor" />
                        </svg>
                    </Link>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{tooltipContent}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>


    )
}

export default MahmoudAbdelazizLogo