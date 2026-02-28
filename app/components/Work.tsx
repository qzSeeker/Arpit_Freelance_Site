"use client";

import { motion } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";
import Reveal from "./ui/Reveal";

const projects = [
    {
        type: "Fitness · Business Website",
        name: "Ironspark Gym",
        desc: "Conversion-focused website for a fitness centre — class schedules, trainer profiles, and integrated membership inquiry system.",
        result: "📈 30% increase in membership inquiries after launch",
        icon: "🏋️",
        live: "https://ironspark.vercel.app",
        source: "https://github.com/qzseeker/ironspark",
        concept: true,
    },
    {
        type: "SaaS · Landing Page",
        name: "CloudScale",
        desc: "High-converting landing page for a cloud infrastructure platform — interactive pricing calculator, feature comparison, and A/B-tested CTAs.",
        result: "⚡ 1.2s load time · Conversion-optimised architecture",
        icon: "☁️",
        live: "https://cloudscale-demo.vercel.app",
        source: "https://github.com/qzseeker/cloudscale",
        concept: true,
    },
];

export default function Work() {
    return (
        <section id="work" className="px-8 md:px-12 py-28 md:py-36 bg-black">
        <SectionLabel text="Selected Work" />

        <Reveal>
            <h2
            className="font-syne font-extrabold leading-[1.05] mb-16"
            style={{ fontSize: "clamp(32px, 4.5vw, 60px)", letterSpacing: "-0.04em" }}
            >
            Projects that
            <br />
            <em className="text-[#FF4D00]" style={{ fontStyle: "italic", fontWeight: 400 }}>
                did the job.
            </em>
            </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5">
            {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
                <motion.div
                className="bg-card border border-[#222222] rounded-md overflow-hidden h-full flex flex-col"
                whileHover={{ borderColor: "#333" }}
                transition={{ duration: 0.3 }}
                >
                {/* Image placeholder */}
                <div
                    className="w-full flex items-center justify-center text-5xl border-b border-[#222222] relative"
                    style={{
                    aspectRatio: "16/9",
                    background:
                        "linear-gradient(135deg, #1a1a1a 0%, #222 50%, #1a1a1a 100%)",
                    }}
                >
                    {p.icon}
                    {/* Gradient overlay */}
                    <div
                    className="absolute inset-0"
                    style={{
                        background:
                        "linear-gradient(135deg, rgba(255,77,0,0.07), transparent)",
                    }}
                    />
                    {p.concept && (
                    <span className="absolute top-3 right-3 text-[10px] font-bold tracking-[1px] uppercase bg-black/70 border border-[#222222] text-[#555555] px-2.5 py-1 rounded-sm z-10">
                        Concept Project
                    </span>
                    )}
                </div>

                {/* Body */}
                <div className="p-7 flex flex-col flex-1">
                    <div className="font-syne text-[11px] font-bold tracking-[2px] uppercase text-[#FF4D00] mb-2.5">
                    {p.type}
                    </div>
                    <div className="font-syne font-extrabold text-[22px] tracking-tight mb-2.5">
                    {p.name}
                    </div>
                    <p className="text-[#555555] text-[14px] leading-[1.75] mb-5 flex-1">{p.desc}</p>

                    {/* Result pill */}
                    <div
                    className="text-[13px] font-medium px-3.5 py-2.5 rounded mb-5"
                    style={{
                        background: "rgba(255,77,0,0.08)",
                        border: "1px solid rgba(255,77,0,0.2)",
                        color: "#ff7a40",
                    }}
                    >
                    {p.result}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                    {p.live && (
                        <motion.a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13px] font-semibold text-white bg-accent px-4 py-2 rounded no-underline"
                        whileHover={{ backgroundColor: "#e64400" }}
                        transition={{ duration: 0.2 }}
                        >
                        View Live ↗
                        </motion.a>
                    )}
                    <motion.a
                        href={p.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13px] font-semibold text-[#555555] border border-[#222222] px-4 py-2 rounded no-underline"
                        whileHover={{ borderColor: "#555", color: "#f5f0e8" }}
                        transition={{ duration: 0.2 }}
                    >
                        Source
                    </motion.a>
                    </div>
                </div>
                </motion.div>
            </Reveal>
            ))}
        </div>
        </section>
    );
}