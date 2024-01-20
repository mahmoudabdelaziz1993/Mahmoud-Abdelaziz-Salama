"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { useTheme } from "next-themes";
import React from "react";
import { motion } from "framer-motion";
export const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
};
export default function ThemeCustomSwitch() {
    const { setTheme, theme } = useTheme();
    // Toggle State
   
    return (
        <div
            className="flex w-12 p-[2px] my-2 rounded-full cursor-pointer bg-input dark:justify-end"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            <motion.div
                className="grid w-6 h-6 rounded-full shadow-lg bg-background text-foreground place-items-center"
                layout
                transition={spring}
            >
                {theme === "dark" ? (
                    <Icon icon="solar:moon-fog-bold" className="w-4 h-4" />
                ) : (
                    <Icon icon="solar:sun-fog-bold" className="w-4 h-4" />
                )}
            </motion.div>
        </div>
    );
}
