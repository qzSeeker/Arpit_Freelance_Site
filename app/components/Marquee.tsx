const TECHS = [
    "Next.js", "React", "TypeScript", "Node.js", "PostgreSQL",
    "MongoDB", "AWS", "Tailwind CSS", "Framer Motion", "OpenAI API",
    "Express.js", "Figma", "Docker", "Prisma",
];

export default function Marquee() {
    const doubled = [...TECHS, ...TECHS];

    return (
        <div className="border-y border-[#222222] py-4.5 overflow-hidden bg-[#111111]">
        <div className="flex gap-15 animate-marquee whitespace-nowrap" style={{ width: "max-content" }}>
            {doubled.map((tech, i) => (
            <span
                key={i}
                className="font-syne text-[12px] font-bold tracking-[2px] uppercase text-[#555555] inline-flex items-center gap-15"
            >
                {tech}
                <span className="text-[#FF4D00] text-[9px]">✦</span>
            </span>
            ))}
        </div>
        </div>
    );
}