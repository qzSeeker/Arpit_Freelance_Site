"use client";

import { motion, cubicBezier } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay, ease: cubicBezier(0.22, 1, 0.36, 1) },
    }),
};

export default function Hero() {
    return (
        <section
        id="hero"
        className="min-h-screen flex flex-col justify-between px-8 md:px-12 pb-20 pt-32 relative overflow-hidden"
        >
        {/* Ghost BG Text */}
        <div
            aria-hidden
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-syne font-extrabold text-[clamp(80px,18vw,260px)] leading-none tracking-tighter pointer-events-none select-none whitespace-nowrap"
            style={{
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.035)",
            letterSpacing: "-0.05em",
            }}
        >
            ARPITSPACE
        </div>

        {/* Radial glow */}
        <div
            aria-hidden
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 rounded-full pointer-events-none"
            style={{
            background: "radial-gradient(circle, rgba(255,77,0,0.06) 0%, transparent 70%)",
            }}
        />

        {/* Availability badge */}
        <motion.div
            custom={0.15}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-2 mb-8"
        >
            <span
            className="w-2 h-2 rounded-full bg-green-400 block animate-pulse_dot"
            style={{ animation: "pulse_dot 2s ease-in-out infinite" }}
            />
            <span className="font-syne text-[11px] font-bold tracking-[2.5px] uppercase text-[#555555]">
            Available for new projects — 2026
            </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
            custom={0.3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-syne font-extrabold leading-[0.93] mb-10"
            style={{
            fontSize: "clamp(40px, 7.5vw, 100px)",
            letterSpacing: "-0.04em",
            }}
        >
            Full-stack dev
            <br />
            who builds sites
            <br />
            that{" "}
            <em className="not-italic text-[#FF4D00]" style={{ fontStyle: "italic", fontWeight: 400 }}>
            actually sell.
            </em>
        </motion.h1>

        {/* Bottom row */}
        <motion.div
            custom={0.5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col md:flex-row md:items-end justify-between gap-10"
        >
            <p className="max-w-md tracking-wide text-[16px] leading-[1.75] font-light text-[#555555] text-muted">
            I&apos;m{" "}
            <strong className="font-medium text-[#CCCCCC]">Arpit Yadav</strong>{" "}
            — a full-stack developer from New Delhi specialising in{" "}
            <strong className="text-text-muted font-medium text-[#CCCCCC]">
                conversion-focused websites
            </strong>{" "}
            for small businesses and D2C brands. Not just pretty pages — systems
            that bring in customers.
            </p>

            <div className="flex flex-col items-start md:items-end gap-3">
            <a
                href="https://cal.com/arpitspace"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#FF4D00] text-white font-syne font-bold text-sm tracking-wide px-8 py-4 rounded hover:bg-[#FF4D00]/80 transition-all duration-200 hover:-translate-y-0.5 no-underline whitespace-nowrap"
            >
                Book Free Consultation →
            </a>
            <a
                href="#work"
                className="inline-flex items-center gap-2.5 text-text-muted font-syne text-sm px-8 py-4 border border-white/40 hover:border-white/80 rounded hover:border hover:text-white transition-all duration-200 no-underline whitespace-nowrap"
            >
                See My Work ↓
            </a>
            </div>
        </motion.div>

        {/* Bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />
        </section>
    );
}