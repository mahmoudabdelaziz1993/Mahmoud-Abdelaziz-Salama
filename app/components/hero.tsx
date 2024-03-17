"use client"
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import React from "react";

export function BackgroundGradientAnimationDemo() {
    const t = useTranslations('Hero');

    return (
        <BackgroundGradientAnimation>
            <article className="absolute z-10 inset-0 flex flex-col items-center justify-center  font-bold  max-w-xl pointer-events-none text-center  prose dark:prose-invert  prose-sm md:prose-base mx-auto prose-a:no-underline prose-a:capitalize prose-a:font-bold prose-p:mt-0  ">
                <h1 className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-br from-foreground/80 to-foreground/50" aria-level={2}>
                    {t('headline')}                </h1>
                <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-br from-foreground to-foreground/50 " aria-level={3}>
                    {t('description')}
                </p>
                <Button variant="outline" asChild>
                    <a href="mailto:mahmoudabdelaziz1993@outlook.com" className="w-fit pointer-events-auto inline-flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" aria-labelledby="Send me an email to contact me">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                        </svg>

                        {t('callToAction')}
                    </a>
                </Button>
            </article>
        </BackgroundGradientAnimation>
    );
}
