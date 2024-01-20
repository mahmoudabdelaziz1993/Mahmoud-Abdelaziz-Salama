"use client";
import { motion } from 'framer-motion';
import { spring } from './theme-custom-switch';
import { Icon } from '@iconify/react/dist/iconify.js';
import { usePathname, useRouter } from 'next/navigation';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';


export default function LocaleSwitch({ locale }: { locale: string }) {
    const router = useRouter();
    const pathname = usePathname()
    const t = useTranslations('LanguageSwitcher');

    const handleChange = (lang: string) => {

        console.log("lang", lang)
        console.log('condition', lang !== locale)
        if (lang !== locale) {
            router.push(`/${lang}${pathname}`);
        }
    }
    console.log(locale)
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant={'ghost'}
                    size={'icon'}
                    className='rounded-full '
                >
                    {locale == 'ar-EG' ? (
                        <Icon icon="mdi:abjad-arabic" className="w-6 h-6" />
                    ) : (
                        <Icon icon="ri:english-input" className="w-6 h-6" />
                    )}
                </Button>
            </DropdownMenuTrigger >
            <DropdownMenuContent align="center" >
                <DropdownMenuItem onClick={() => handleChange('en')}>
                    {t("English")}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleChange('ar-EG')}>
                    {t("Arabic")}
                </DropdownMenuItem>
            </DropdownMenuContent>


        </DropdownMenu>
        // <div
        //     className={`flex w-12 p-[2px] my-2 rounded-full cursor-pointer bg-input ${locale === 'en' && "justify-end"}`}
        //     onClick={() => handleChange(locale === 'en' ? 'ar-EG' : 'en')}
        // >
        //     <motion.div
        //         className="grid w-6 h-6 rounded-full shadow-lg bg-background text-foreground place-items-center"
        //         layout
        //         transition={spring}
        //     >
        //         {locale == 'ar-EG' ? (
        //             <Icon icon="mdi:abjad-arabic" className="w-4 h-4" />
        //         ) : (
        //             <Icon icon="ri:english-input" className="w-4 h-4" />
        //         )}
        //     </motion.div>
        // </div>
    )
}