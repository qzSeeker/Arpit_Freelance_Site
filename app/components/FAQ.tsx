"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";
import Reveal from "./ui/Reveal";

const faqs = [
    {
        q: "How long does it take to build my website?",
        a: "It depends on what you need. Landing pages take about 1 week. Business websites take 2–3 weeks. Full-stack apps take 4–8 weeks. I'll give you a precise timeline after our discovery call, and I stick to it.",
    },
    {
        q: "What do you need from me to get started?",
        a: "Just a clear idea of your business and goals. I'll handle the rest — design, copy direction, development, and deployment. If you have a logo and brand colours, bring those. If not, I can help with basic branding too.",
    },
    {
        q: "How many revisions do I get?",
        a: "I include 2 rounds of revisions at the design stage and 1 round after development. Most clients don't need more than that because I share live previews throughout the build — so there are no big surprises at the end.",
    },
    {
        q: "Do you handle hosting and domain?",
        a: "Yes. I'll handle the full deployment — Vercel, AWS, or your preferred host. Domain costs are separate (usually ₹800–1,500/year) but I'll guide you through purchasing and connecting it. You own everything at the end.",
    },
    {
        q: "What happens after the site launches?",
        a: "You get 30 days of free support for bugs and minor tweaks. After that, I offer monthly maintenance packages if you need ongoing updates, content changes, or performance monitoring. You're never left stranded.",
    },
    {
        q: "Do you work with clients outside Delhi / remotely?",
        a: "Absolutely. All my projects are done remotely — I work with clients across India and internationally. Communication happens over WhatsApp, email, or video calls. Location is never a barrier.",
    },
];

function FaqItem({ faq, isOpen, onToggle }: {
    faq: { q: string; a: string };
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <div className="border-b border-[#222222] last:border-0">
        <button
            onClick={onToggle}
            className="w-full bg-transparent border-none text-white text-left py-7 flex items-center justify-between gap-5 group cursor-pointer"
        >
            <span className="font-syne font-semibold text-[17px] tracking-tight group-hover:text-[#FF4D00] transition-colors duration-200">
            {faq.q}
            </span>
            <motion.span
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-7 h-7 rounded-full border border-[#222222] flex items-center justify-center text-[#FF4D00] text-lg shrink-0"
            >
            +
            </motion.span>
        </button>

        <AnimatePresence initial={false}>
            {isOpen && (
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
            >
                <p className="text-[#555555] text-[15px] leading-[1.85] pb-7 font-light">
                {faq.a}
                </p>
            </motion.div>
            )}
        </AnimatePresence>
        </div>
    );
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="px-8 md:px-12 py-28 md:py-36 bg-black">
        <SectionLabel text="FAQ" />

        <Reveal>
            <h2
            className="font-syne font-extrabold leading-[1.05] mb-16"
            style={{ fontSize: "clamp(32px, 4.5vw, 60px)", letterSpacing: "-0.04em" }}
            >
            Questions you&apos;re
            <br />
            <em className="text-[#FF4D00]" style={{ fontStyle: "italic", fontWeight: 400 }}>
                probably thinking.
            </em>
            </h2>
        </Reveal>

        <Reveal delay={0.1}>
            <div className="max-w-3xl">
            {faqs.map((faq, i) => (
                <FaqItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
            ))}
            </div>
        </Reveal>
        </section>
    );
}