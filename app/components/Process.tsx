"use client";

import { motion } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";
import Reveal from "./ui/Reveal";

const steps = [
    {
        num: "01",
        title: "Discovery Call",
        desc: "We jump on a free 30-min call. I understand your business, goals, and what success looks like for you.",
    },
    {
        num: "02",
        title: "Design & Approval",
        desc: "I present wireframes and design direction. You approve before a single line of code is written.",
    },
    {
        num: "03",
        title: "Build & Review",
        desc: "I build in sprints with live previews. You give feedback at every stage — no black box development.",
    },
    {
        num: "04",
        title: "Launch & Support",
        desc: "We go live. I handle deployment, and you get 30 days of free support for fixes and minor tweaks.",
    },
];

export default function Process() {
    return (
        <section
        id="process"
        className="px-8 md:px-12 py-28 md:py-36 bg-[#111111] border-t border-b border-[#222222]"
        >
        <SectionLabel text="How It Works" />

        <Reveal>
            <h2
            className="font-syne font-extrabold leading-[1.05] mb-20"
            style={{ fontSize: "clamp(32px, 4.5vw, 60px)", letterSpacing: "-0.04em" }}
            >
            Simple process,
            <br />
            <em className="text-[#FF4D00]" style={{ fontStyle: "italic", fontWeight: 400 }}>
                zero surprises.
            </em>
            </h2>
        </Reveal>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0">
            {/* Connecting line (desktop only) */}
            <div
            aria-hidden
            className="absolute top-7 left-[12.5%] right-[12.5%] h-px hidden md:block"
            style={{
                background:
                "linear-gradient(90deg, rgba(255,77,0,0.5), rgba(255,184,0,0.5), rgba(255,77,0,0.5))",
            }}
            />

            {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center px-4 md:px-6">
                <motion.div
                    className="w-14 h-14 rounded-full bg-card border border-[#FF4D00] flex items-center justify-center font-syne font-extrabold text-base text-[#FF4D00] mb-7 relative z-10"
                    whileHover={{ scale: 1.08, backgroundColor: "rgba(255,77,0,0.12)" }}
                    transition={{ duration: 0.2 }}
                >
                    {step.num}
                </motion.div>
                <div className="font-syne font-bold text-[16px] mb-2.5">{step.title}</div>
                <p className="text-[#555555] text-[13px] leading-[1.7]">{step.desc}</p>
                </div>
            </Reveal>
            ))}
        </div>
        </section>
    );
}