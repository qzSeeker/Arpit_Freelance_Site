"use client";

import { motion } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";
import Reveal from "./ui/Reveal";

const stats = [
    { number: "3", unit: "s", label: "Average time before visitors leave a slow website" },
    { number: "75", unit: "%", label: "Users judge business credibility by website design alone" },
    { number: "2", unit: "×", label: "Better conversion with a dedicated landing page" },
    { number: "10", unit: "+", label: "Projects built with measurable client outcomes" },
];

export default function Problem() {
    return (
        <section
        id="problem"
        className="px-8 md:px-12 py-28 md:py-36 bg-[#111111] border-b border-[#222222]"
        >
        <SectionLabel text="The Problem" />

        <Reveal>
            <h2
            className="font-syne font-extrabold leading-[1.05] mb-2"
            style={{ fontSize: "clamp(32px, 4.5vw, 60px)", letterSpacing: "-0.04em" }}
            >
            Your website should be
            <br />
            your{" "}
            <em className="text-[#FF4D00]" style={{ fontStyle: "italic", fontWeight: 400 }}>
                best salesperson.
            </em>
            </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 mt-16 items-center">
            {/* Text */}
            <Reveal delay={0.1}>
            <div className="space-y-5">
                <p className="text-[#555555] text-[17px] leading-[1.8] font-light">
                Most business websites look good but{" "}
                <strong className="text-text-muted font-medium">do nothing.</strong>{" "}
                Slow load times, vague messaging, no clear CTA — and your potential
                customers leave within 5 seconds.
                </p>
                <p className="text-[#555555] text-[17px] leading-[1.8] font-light">
                I build websites engineered to{" "}
                <strong className="text-[#CCCCCC] font-medium">
                    convert visitors into customers
                </strong>{" "}
                — with the right copy structure, fast performance, and full-stack
                capability so your backend actually works too.
                </p>
                <p className="text-[#555555] text-[17px] leading-[1.8] font-light">
                Whether you&apos;re a gym, a D2C brand, or a local business —{" "}
                <strong className="text-[#CCCCCC] font-medium">
                    you deserve a site that works as hard as you do.
                </strong>
                </p>
            </div>
            </Reveal>

            {/* Stats grid */}
            <Reveal delay={0.2}>
            <div className="grid grid-cols-2 gap-0.5">
                {stats.map((s, i) => (
                <motion.div
                    key={i}
                    className="bg-card border border-[#222222] p-8"
                    style={{
                    borderRadius:
                        i === 0 ? "8px 0 0 0"
                        : i === 1 ? "0 8px 0 0"
                        : i === 2 ? "0 0 0 8px"
                        : "0 0 8px 0",
                    }}
                    whileHover={{ background: "#1a1a1a" }}
                    transition={{ duration: 0.2 }}
                >
                    <div
                    className="font-syne font-extrabold text-white leading-none mb-2"
                    style={{ fontSize: "clamp(36px,4vw,52px)", letterSpacing: "-0.04em" }}
                    >
                    {s.number}
                    <span className="text-[#FF4D00]">{s.unit}</span>
                    </div>
                    <div className="text-[#555555] text-[13px] leading-[1.6]">{s.label}</div>
                </motion.div>
                ))}
            </div>
            </Reveal>
        </div>
        </section>
    );
}