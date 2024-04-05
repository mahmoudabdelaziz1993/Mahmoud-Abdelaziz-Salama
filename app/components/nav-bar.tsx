import { GetBasicInfo } from "@/utils/request-data-functions";
import LocaleSwitch from "./locale-switch";
import MahmoudAbdelazizLogo from "./mahmoud-abdelaziz-logo";
import ThemeCustomSwitch from "./theme-custom-switch";

type props ={
    locale: string
}
export default async function Navbar({ locale }: props) {

    const { data: BasicInfo, success } = await GetBasicInfo(locale)

    return (
        <header className='container sticky top-0 flex max-w-2xl mx-auto  rounded-lg  shadow-lg py-2 backdrop-blur-lg   bg-background/50 text-foreground drop-shadow-md border-foreground z-50'>
            <div className="flex items-center justify-between w-full gap-2 px-2">
                <span className="inline-flex items-center gap-2">
                    <MahmoudAbdelazizLogo width={48} info={BasicInfo} />
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