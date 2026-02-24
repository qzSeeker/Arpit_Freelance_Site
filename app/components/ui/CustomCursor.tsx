"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const mouse = useRef({ x: 0, y: 0 });
    const ring = useRef({ x: 0, y: 0 });
    const hovering = useRef(false);

    useEffect(() => {
        const onMove = (e: MouseEvent) => {
        mouse.current = { x: e.clientX, y: e.clientY };
        if (dotRef.current) {
            dotRef.current.style.left = e.clientX + "px";
            dotRef.current.style.top = e.clientY + "px";
        }
        };

        const onEnter = () => {
        hovering.current = true;
        dotRef.current?.classList.add("hovering");
        ringRef.current?.classList.add("hovering");
        };
        const onLeave = () => {
        hovering.current = false;
        dotRef.current?.classList.remove("hovering");
        ringRef.current?.classList.remove("hovering");
        };

        document.addEventListener("mousemove", onMove);

        const interactables = document.querySelectorAll("a, button, [data-hover]");
        interactables.forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
        });

        let animId: number;
        const animate = () => {
        ring.current.x += (mouse.current.x - ring.current.x) * 0.1;
        ring.current.y += (mouse.current.y - ring.current.y) * 0.1;
        if (ringRef.current) {
            ringRef.current.style.left = ring.current.x + "px";
            ringRef.current.style.top = ring.current.y + "px";
        }
        animId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
        document.removeEventListener("mousemove", onMove);
        interactables.forEach((el) => {
            el.removeEventListener("mouseenter", onEnter);
            el.removeEventListener("mouseleave", onLeave);
        });
        cancelAnimationFrame(animId);
        };
    }, []);

    return (
        <>
        <div ref={dotRef} className="cursor-dot" />
        <div ref={ringRef} className="cursor-ring" />
        </>
    );
}