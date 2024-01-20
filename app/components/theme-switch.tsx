'use client';
import { Switch } from "@/components/ui/switch"
import { Label } from "@radix-ui/react-dropdown-menu";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
    const { setTheme } = useTheme()

    return (
        <div className="inline-flex items-center p-2 space-x-2">
          
            <Switch id="theme-toggle" onCheckedChange={(e) => setTheme(e ? 'dark' : 'light')} />
            <Label className="font-normal text-md">Night Mode</Label>
        </div>
    )
}