"use client";

import { motion } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";
import Reveal from "./ui/Reveal";

const services = [
    {
        num: "01",
        icon: "🏪",
        name: "Business Website",
        desc: "A professional, mobile-first website for your shop, gym, clinic, or service business. Built to rank on Google and turn visitors into walk-ins and calls.",
        tags: ["Custom Design", "SEO-Ready", "Mobile-First", "CMS", "Analytics"],
        price: "₹29,999",
        delivery: "2–3 weeks",
    },
    {
        num: "02",
        icon: "🎯",
        name: "D2C Landing Page",
        desc: "A high-converting landing page for your product or brand. Built with psychological triggers, strong CTA hierarchy, and speed-optimised for every device.",
        tags: ["Conversion-Focused", "A/B Ready", "Lead Forms", "Fast Load"],
        price: "₹15,999",
        delivery: "1 week",
    },
    {
        num: "03",
        icon: "⚙️",
        name: "Full-Stack Web App",
        desc: "Custom web applications with backend APIs, databases, auth, and cloud deployment. Built for brands that need a product — not just a page.",
        tags: ["Custom APIs", "Database Design", "Auth", "Cloud Deploy", "AI Integration"],
        price: "₹35,999",
        delivery: "4–8 weeks",
    },
];

export default function Services() {
    return (
        <section id="services" className="px-8 md:px-12 py-28 md:py-36 bg-black">
        <SectionLabel text="What I Build" />

        <Reveal>
            <h2
            className="font-syne font-extrabold leading-[1.05] mb-16"
            style={{ fontSize: "clamp(32px, 4.5vw, 60px)", letterSpacing: "-0.04em" }}
            >
            Services{" "}
            <em className="text-[#FF4D00]" style={{ fontStyle: "italic", fontWeight: 400 }}>
                tailored
            </em>
            <br />
            for real businesses.
            </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 border border-[#222222] rounded-lg overflow-hidden">
            {services.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.1}>
                <motion.div
                className="bg-card p-10 md:p-12 h-full flex flex-col relative overflow-hidden group"
                whileHover={{ background: "#1a1a1a" }}
                transition={{ duration: 0.3 }}
                >
                {/* Top accent line */}
                <motion.div
                    className="absolute top-0 left-0 right-0 h-0.5 bg-[#FF4D00] origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />

                <div className="font-syne text-[11px] font-bold tracking-[2px] uppercase text-[#FF4D00] mb-6">
                    {s.num}
                </div>
                <div className="text-4xl mb-5">{s.icon}</div>
                <div className="font-syne font-bold text-[21px] tracking-tight mb-3.5">
                    {s.name}
                </div>
                <p className="text-[#555555] text-[14px] leading-[1.75] mb-7 flex-1">{s.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                    {s.tags.map((t) => (
                    <span
                        key={t}
                        className="text-[11px] font-semibold text-[#555555] bg-white/5 border border-[#222222] px-2.5 py-1 rounded-sm tracking-wide"
                    >
                        {t}
                    </span>
                    ))}
                </div>

                {/* Price */}
                <div>
                    <div className="font-syne font-extrabold text-[28px] tracking-tight leading-none mb-1">
                    {s.price}
                    <span className="text-[#555555] font-dm font-light text-base ml-1">onwards</span>
                    </div>
                    <div className="text-[#555555] text-[12px]">Delivery in {s.delivery}</div>
                </div>
                </motion.div>
            </Reveal>
            ))}
        </div>

        <Reveal delay={0.3}>
            <p className="mt-8 text-center text-[#555555] text-[14px]">
            Not sure what you need?{" "}
            <a
                href="https://cal.com/arpitspace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF4D00] hover:underline"
            >
                Let&apos;s talk for free →
            </a>
            </p>
        </Reveal>
        </section>
    );
}