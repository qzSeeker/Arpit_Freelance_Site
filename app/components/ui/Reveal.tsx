"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
    children: ReactNode;
    delay?: number;
    className?: string;
    direction?: "up" | "left" | "right";
}

const variants: Variants = {
    hidden: (dir: string) => ({
        opacity: 0,
        y: dir === "up" ? 40 : 0,
        x: dir === "left" ? -40 : dir === "right" ? 40 : 0,
    }),
    visible: {
        opacity: 1,
        y: 0,
        x: 0,
    },
};

export default function Reveal({
    children,
    delay = 0,
    className = "",
    direction = "up",
}: RevealProps) {
    return (
        <motion.div
        custom={direction}
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
        className={className}
        >
        {children}
        </motion.div>
    );
}