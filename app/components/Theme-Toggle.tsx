"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Icon } from '@iconify/react';
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeModeToggle() {
    const { setTheme } = useTheme()
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                   { <Icon icon="solar:sun-fog-bold" className="w-6 h-6 transition-all scale-100 rotate-0 dark:-rotate-90 dark:scale-0" />}
                    <Icon icon="solar:moon-fog-bold" className="absolute w-6 h-6 transition-all scale-0 rotate-90 dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
