export default function Footer() {
    return (
        <footer className="border-t border-[#222222] px-8 md:px-12 py-7 flex flex-col md:flex-row items-center justify-between gap-4 bg-black">
        <p className="text-[#555555] text-[13px]">
            © 2026 <strong className="text-[#CCCCCC] font-medium">Arpit Yadav</strong> — All rights reserved.
        </p>
        <div className="flex gap-6">
            {[
            { label: "Top ↑", href: "#hero" },
            { label: "LinkedIn", href: "https://linkedin.com/in/arpityadav2005" },
            { label: "GitHub", href: "https://github.com/qzseeker" },
            ].map((l) => (
            <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-[#555555] text-[13px] no-underline hover:text-white transition-colors"
            >
                {l.label}
            </a>
            ))}
        </div>
        </footer>
    );
}