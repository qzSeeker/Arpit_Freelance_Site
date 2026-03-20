"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

// ─── Animated digit roller ───────────────────────────────────────────────────
function DigitRoller({ digit, delay = 0 }: { digit: string; delay?: number }) {
    const isNum = !isNaN(Number(digit));
    if (!isNum) return (
        <span className="inline-block font-syne font-extrabold" style={{ color: "#FF4D00" }}>
        {digit}
        </span>
    );

    return (
        <span className="inline-block overflow-hidden" style={{ height: "1.1em", verticalAlign: "bottom" }}>
        <motion.span
            key={digit}
            className="inline-block font-syne font-extrabold"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-110%", opacity: 0 }}
            transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "block" }}
        >
            {digit}
        </motion.span>
        </span>
    );
}

// ─── Main Counter ─────────────────────────────────────────────────────────────
function Counter() {
    const [views, setViews] = useState<number | null>(null);
    const [prevViews, setPrevViews] = useState<number | null>(null);
    const [isNew, setIsNew] = useState(false);
    const [loading, setLoading] = useState(true);
    const pulseRef = useRef(false);

    useEffect(() => {
        const fetchViews = async () => {
        try {
            const alreadyVisited = sessionStorage.getItem("visited");

            const res = await fetch("/api/views", {
            method: alreadyVisited ? "GET" : "POST",
            });

            const data = await res.json();

            setPrevViews(views);
            setViews(data.views);
            setLoading(false);

            if (!alreadyVisited) {
            sessionStorage.setItem("visited", "true");
            setIsNew(true);
            pulseRef.current = true;
            }
        } catch (err) {
            console.error("Failed to fetch views:", err);
            setLoading(false);
        }
        };

        fetchViews();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  // Format number with commas: 12345 → "12,345"
    const formatted = views !== null
        ? views.toLocaleString("en-IN")
        : null;

    const digits = formatted ? formatted.split("") : [];

    return (
        <div
        className="relative flex items-center justify-center bg-[#080808] overflow-hidden"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
        >

        {/* Card */}
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-20 flex flex-col items-center"
            style={{ gap: 0 }}
        >
        {/* Counter display */}
        <div
            className="relative px-6 py-4 rounded-lg border flex flex-col items-center"
            style={{
                background: "#141414",
                borderColor: "#222",
                minWidth: 320,
            }}
            >

            {/* The number */}
            <div
                className="leading-none select-none"
                style={{
                fontSize: "clamp(32px, 10vw, 52px)",
                letterSpacing: "-0.04em",
                minHeight: "1.1em",
                color: "#F5F0E8",
                }}
            >
                <AnimatePresence mode="popLayout">
                {loading ? (
                    /* Loading skeleton */
                    <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                    className="font-syne font-extrabold"
                    style={{ color: "#333", letterSpacing: "-0.04em" }}
                    >
                    — — —
                    </motion.div>
                ) : (
                    <motion.div
                    key="digits"
                    className="flex items-end"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    >
                    {digits.map((d, i) => (
                        <DigitRoller key={`${i}-${d}`} digit={d} delay={i * 0.04} />
                    ))}
                    </motion.div>
                )}
                </AnimatePresence>
            </div>

            {/* "You're visitor #N" badge when new visitor */}
            <AnimatePresence>
                {isNew && views !== null && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 6 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.6, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center gap-2 px-3.5 py-2 rounded mt-1"
                    style={{
                    background: "rgba(255,77,0,0.10)",
                    border: "1px solid rgba(255,77,0,0.25)",
                    }}
                >
                    <span
                    className="block w-1.5 h-1.5 rounded-full"
                    style={{
                        background: "#FF4D00",
                        animation: "pulse_dot 2s ease-in-out infinite",
                    }}
                    />
                    <span
                    className="font-syne font-bold text-[11px] tracking-[1.5px] uppercase"
                    style={{ color: "#ff7a40" }}
                    >
                    You&apos;re visitor #{views.toLocaleString("en-IN")}
                    </span>
                </motion.div>
                )}
            </AnimatePresence>

            {/* Bottom border divider */}
            <div className="w-full h-px mt-7 mb-5" style={{ background: "#222" }} />

            {/* Meta row */}
            <div className="flex items-center justify-between w-full">
                <span className="text-[11px] font-medium tracking-wide" style={{ color: "#555" }}>
                Since launch
                </span>
                <span
                className="font-syne text-[11px] font-bold tracking-[2px] uppercase"
                style={{ color: "#FF4D00" }}
                >
                Live ✦
                </span>
            </div>
            </div>
        </motion.div>
        </div>
    );
}

export default Counter;