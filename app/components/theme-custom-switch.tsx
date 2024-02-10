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
            className="flex w-16 p-1 my-2 rounded-full cursor-pointer bg-accent dark:justify-end"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            <motion.div
                className="grid w-8 h-8 border rounded-full shadow-lg bg-background text-foreground place-items-center ring-foreground"
                layout
                transition={spring}
            >
                {theme === "dark" ? (
                    <Icon icon="solar:moon-fog-bold" />
                ) : (
                    <Icon icon="solar:sun-fog-bold" />
                )}
            </motion.div>
        </div>
    );
}
