"use client";

import { motion } from "framer-motion";
import Reveal from "./ui/Reveal";

export default function Contact() {
    return (
        <section
        id="contact"
        className="px-8 md:px-12 py-28 md:py-36 bg-[#111111] border-t border-[#222222] text-center relative overflow-hidden"
        >
        {/* Radial glow */}
        <div
            aria-hidden
            className="absolute -top-40 left-1/2 -translate-x-1/2 w-150 h-150 rounded-full pointer-events-none"
            style={{
            background: "radial-gradient(circle, rgba(255,77,0,0.08) 0%, transparent 70%)",
            }}
        />

        <Reveal>
            <span
            className="inline-block font-syne text-[11px] font-bold tracking-[2px] uppercase text-[#FF4D00] px-4 py-1.5 rounded-full mb-8"
            style={{
                background: "rgba(255,77,0,0.1)",
                border: "1px solid rgba(255,77,0,0.3)",
            }}
            >
            Open to New Projects
            </span>
        </Reveal>

        <Reveal delay={0.1}>
            <h2
            className="font-syne font-extrabold leading-[0.95] mb-5"
            style={{ fontSize: "clamp(36px, 5.5vw, 80px)", letterSpacing: "-0.04em" }}
            >
            Let&apos;s build
            <br />
            something{" "}
            <em className="text-[#FF4D00]" style={{ fontStyle: "italic", fontWeight: 400 }}>
                real.
            </em>
            </h2>
        </Reveal>

        <Reveal delay={0.2}>
            <p className="text-[#555555] text-[17px] font-light leading-[1.75] max-w-md mx-auto mb-12">
            Have a project in mind? Book a free 30-minute call and let&apos;s figure out
            how to turn your website into your best marketing asset.
            </p>
        </Reveal>

        <Reveal delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-3.5 mb-16">
            {/* WhatsApp */}
            <motion.a
                href="https://wa.me/917827667531?text=Hi%20Arpit,%20I%27m%20interested%20in%20working%20with%20you%20on%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-white font-syne font-bold text-[15px] px-9 py-4.5 rounded no-underline"
                style={{ background: "#25D366", padding: "18px 36px" }}
                whileHover={{ backgroundColor: "#1ebe5d", y: -2, boxShadow: "0 12px 32px rgba(37,211,102,0.25)" }}
                transition={{ duration: 0.2 }}
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
            </motion.a>

            {/* Cal.com */}
            <motion.a
                href="https://cal.com/arpitspace"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FF4D00] text-white font-syne font-bold text-sm tracking-wide px-8 py-4 rounded hover:bg-[#FF4D00] hover:no-underline"
                style={{ padding: "18px 32px" }}
                whileHover={{ backgroundColor: "#e64400", y: -1 }}
                transition={{ duration: 0.2 }}
            >
                Book a Free Call →
            </motion.a>

            {/* Email */}
            <motion.a
                href="mailto:arpitspace.dev@gmail.com"
                className="inline-flex items-center gap-2 text-[#cccccc] text-sm border border-[#222222] px-8 py-4 rounded hover:border-[#555555] hover:text-white no-underline"
                style={{ padding: "18px 32px" }}
                whileHover={{ borderColor: "#555", color: "#f5f0e8" }}
                transition={{ duration: 0.2 }}
            >
                Send Email
            </motion.a>
            </div>
        </Reveal>

        {/* Info row */}
        <Reveal delay={0.4}>
            <div className="flex flex-wrap items-center justify-center gap-8">
            {[
                { icon: "✉", label: "arpitspace.dev@gmail.com", href: "mailto:arpitspace.dev@gmail.com" },
                { icon: "in", label: "LinkedIn", href: "https://linkedin.com/in/arpityadav2005" },
                { icon: "⌥", label: "GitHub", href: "https://github.com/qzseeker" },
                { icon: "📍", label: "New Delhi · Remote-friendly", href: null },
            ].map((item) =>
                item.href ? (
                <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#555555] text-[14px] no-underline hover:text-[#CCCCCC] transition-colors"
                >
                    <span className="text-[#FF4D00]">{item.icon}</span>
                    {item.label}
                </a>
                ) : (
                <span key={item.label} className="flex items-center gap-2 text-[#555555] text-[14px]">
                    <span className="text-[#FF4D00]">{item.icon}</span>
                    {item.label}
                </span>
                )
            )}
            </div>
        </Reveal>
        </section>
    );
}