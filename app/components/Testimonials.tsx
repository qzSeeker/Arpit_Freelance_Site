"use client";

import Reveal from "./ui/Reveal";
import SectionLabel from "./ui/SectionLabel";

const testimonials = [
    {
        quote:
        "Arpit built our gym website in under 3 weeks and we started getting more membership inquiries almost immediately. He explained everything clearly and was responsive throughout. Highly recommended.",
        name: "Rahul M.",
        role: "Owner, Ironspark Fitness Centre",
        initials: "R",
    },
];

export default function Testimonials() {
    return (
        <section
        id="testimonials"
        className="px-8 md:px-12 py-28 md:py-36 bg-[#111111] border-t border-b border-[#222222]"
        >
        <SectionLabel text="Social Proof" />

        <Reveal>
            <h2
            className="font-syne font-extrabold leading-[1.05] mb-16"
            style={{ fontSize: "clamp(32px, 4.5vw, 60px)", letterSpacing: "-0.04em" }}
            >
            What clients
            <br />
            <em className="text-[#FF4D00]" style={{ fontStyle: "italic", fontWeight: 400 }}>
                say.
            </em>
            </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
                <div className="bg-card border border-[#222222] rounded-md p-9 flex flex-col h-full">
                <div
                    className="font-syne text-5xl leading-none mb-4 opacity-60"
                    style={{ color: "#FF4D00" }}
                >
                    &ldquo;
                </div>
                <p className="text-[#555555] text-[16px] leading-[1.8] font-light italic flex-1 mb-7">
                    {t.quote}
                </p>
                <div className="flex items-center gap-3.5">
                    <div
                    className="w-11 h-11 rounded-full flex items-center justify-center font-syne font-extrabold text-base text-black"
                    style={{
                        background: "linear-gradient(135deg, #FF4D00, #FFB800)",
                    }}
                    >
                    {t.initials}
                    </div>
                    <div>
                    <div className="font-syne font-bold text-[14px]">{t.name}</div>
                    <div className="text-[#555555] text-[12px] mt-0.5">{t.role}</div>
                    </div>
                </div>
                </div>
            </Reveal>
            ))}

            {/* Placeholder card */}
            <Reveal delay={0.15}>
            <div className="border border-dashed border-[#222222] rounded-md p-9 flex flex-col items-center justify-center text-center gap-4 min-h-60">
                <strong className="font-syne text-[16px] text-[#555555] block">
                Your testimonial could be here.
                </strong>
                <p className="text-[#555555] text-[14px] leading-[1.7] max-w-xs">
                I&apos;m currently taking on new clients. Work with me and share your
                honest experience.
                </p>
                <a
                href="https://wa.me/917827667531"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FF4D00] text-white font-syne font-bold text-[13px] px-6 py-3 rounded mt-2 hover:bg-[#e64400] transition-colors no-underline"
                >
                Let&apos;s Talk →
                </a>
            </div>
            </Reveal>
        </div>
        </section>
    );
}