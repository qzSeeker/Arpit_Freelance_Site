"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const links = [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 px-8 md:px-12 py-5 flex items-center justify-between transition-all duration-300 ${
            scrolled
            ? "border-b border-[#222222] backdrop-blur-xl bg-black/80"
            : "border-b border-transparent"
        }`}
        >
        {/* Logo */}
        <Link href="#hero" className="font-syne font-extrabold text-2xl tracking-tight text-white no-underline">
            arpit<span className="text-[#FF4D00]">.</span>
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-9 list-none font-syne">
            {links.map((l) => (
            <li key={l.label}>
                <a
                href={l.href}
                className="text-[#CCCCCC] text-[13.5px] font-medium tracking-[1px] hover:text-white transition-colors duration-200 no-underline"
                >
                {l.label}
                </a>
            </li>
            ))}
        </ul>

        {/* CTA */}
        <a
            href="https://cal.com/arpitspace"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF4D00] text-white font-syne font-bold text-[13px] tracking-wide px-5 py-2.5 rounded hover:bg-[#FF4D00]/80 transition-colors duration-200 no-underline"
        >
            Book a Call →
        </a>
        </motion.nav>
    );
}