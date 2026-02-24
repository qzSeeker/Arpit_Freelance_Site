import { motion } from "framer-motion";

interface SectionLabelProps {
    text: string;
    className?: string;
}

export default function SectionLabel({ text, className = "" }: SectionLabelProps) {
    return (
        <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`flex items-center gap-3 mb-6 ${className}`}
        >
        <span className="w-6 h-px bg-[#FF4D00] block" />
        <span className="font-syne text-[11px] font-bold tracking-[3px] uppercase text-[#FF4D00]">
            {text}
        </span>
        </motion.div>
    );
}