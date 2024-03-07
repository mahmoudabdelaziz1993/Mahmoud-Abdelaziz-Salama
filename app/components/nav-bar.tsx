import { BackgroundBeams } from "@/components/ui/background-beams";
import LocaleSwitch from "./locale-switch";
import MahmoudAbdelazizLogo from "./mahmoud-abdelaziz-logo";
import ThemeCustomSwitch from "./theme-custom-switch";

type props ={
    locale: string
}
export default function Navbar({ locale }: props) {
    return (
        <header className='container sticky top-0 flex max-w-2xl mx-auto mt-4 rounded shadow-lg lg:top-2 backdrop-blur-sm bg-card/75 text-foreground drop-shadow-md border-foreground'>
            <div className="flex items-center justify-between w-full gap-2 p-2">
                <span className="inline-flex items-center gap-2">
                    <MahmoudAbdelazizLogo width={48} />
                </span>
                <div className="flex items-center gap-2">
                    <ThemeCustomSwitch />
                    <LocaleSwitch locale={locale} />
                </div>

            </div>
            {/* <BackgroundBeams /> */}

        </header>
    )
}