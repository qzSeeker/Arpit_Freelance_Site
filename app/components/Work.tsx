'use client';
import { motion } from "framer-motion";
import ProjectCard from "./WorkCard";

interface Project {
    title: string;
    role: string;
    period: string;
    description: string;
    stats: string[];
    tech: string[];
    links: {
        live?: string;
        code?: string;
        caseStudy?: string;
    };
}

const Work: React.FC = () => {
const projects: Project[] = [
{
    title: 'Nonomate',
    role: 'Founder',
    period: '2025-Present',
    description: 'Building NonoMate — an AI-driven platform to connect students with verified internships and real opportunities. No Free Labor. No Fake Offers. Just Real Internships. Spearheaded frontend development from scratch using Next.js, React.js, Tailwind CSS, JavaScript, and TypeScript.',
    stats: ['1000+ students', 'Full-stack', 'Founder'],
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'AI'],
    links: {
    // caseStudy: '#'
    }
},
    {
    title: 'RightHome AI',
    role: 'Full Stack Engineer',
    period: '2024-2025',
    description: 'Built real-time AI chatbot features using Next.js APIs and OpenAI (ChatGPT) for dynamic property assistance. Developed backend services using Express.js for handling user preferences and real estate data. Integrated voice-based AI assistant using Vapi.ai and built a unified chat interface for web.',
    stats: ['500+ daily queries', '95% accuracy', '35% faster APIs'],
    tech: ['Next.js', 'Express.js', 'OpenAI', 'ChatGPT', 'Vapi.ai'],
    links: {
    // caseStudy: '#'
    }
},
];

return (
<div id="work" className='w-full max-w-[90%] mx-auto flex flex-col gap-12 relative top-16 py-12 px-4'>
    {/* Header */}
    <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className='flex flex-col md:gap-5'
    >
    <h1 className="text-[30px] md:text-[50px] max-w-3xl font-medium flex flex-col leading-tight tracking-tight font-funnel-display text-[#0d0d0d] dark:text-[#ededed]">
        Experience.
    </h1>
    <p className='text-lg md:text-xl text-[#0d0d0d]/70 dark:text-[#ededed]/70 max-w-2xl font-funnel-display'>
        A showcase of my professional work and projects.
    </p>
    </motion.div>

    {/* Projects Grid */}
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full md:max-w-[80%] relative mx-auto'>
    {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
    ))}
    </div>
</div>
);
};

export default Work;