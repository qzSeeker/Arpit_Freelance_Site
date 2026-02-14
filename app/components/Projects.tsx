'use client';
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Projects = () => {
    const projects = [
        {
            title: "Ironspark Gym",
            category: "Business Website",
            description: "Designed and developed a conversion-focused website for a fitness center, featuring class schedules, trainer profiles, and membership management.",
            image: "/ironspark.png",
            tags: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
            liveUrl: "https://ironspark.vercel.app",
            githubUrl: "https://github.com/qzseeker/ironspark",
            highlights: [
                "30% increase in membership inquiries",
                "Mobile-first responsive design",
                "Integrated booking system",
                "SEO optimized for local search"
            ]
        },
        {
            title: "CloudScale",
            category: "SaaS Landing Page",
            description: "Built a high-converting landing page for a cloud infrastructure platform, optimized for lead generation with interactive pricing calculator and feature comparisons.",
            image: "/projects/saas-landing.jpg",
            tags: ["Next.js", "React", "Tailwind CSS", "Analytics"],
            liveUrl: "https://cloudscale-demo.vercel.app",
            githubUrl: "https://github.com/qzseeker/cloudscale",
            highlights: [
                "45% conversion rate improvement",
                "Interactive pricing calculator",
                "A/B tested CTAs",
                "Fast 1.2s load time"
            ]
        }
    ];

    return (
        <div id='work' className="min-h-screen font-funnel-display">
        {/* Hero Section */}
        <section className="max-w-[90%] mx-auto px-6 py-20">
            <div className="space-y-4">
            <h1 className="text-[30px] md:text-[50px] max-w-3xl font-medium leading-tight">
                Projects.
            </h1>
            <p className="text-lg md:text-xl dark:text-[#ededed]/70 text-[#0d0d0d]/70 max-w-3xl">
                A showcase of my recent work and client projects.
            </p>
            </div>
        </section>

        {/* Projects Grid */}
        <section className="max-w-[90%] mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:max-w-[80%] w-full mx-auto">
            {projects.map((project, index) => (
                <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group border dark:border-[#ededed]/20 border-[#0d0d0d]/20 rounded-xl overflow-hidden bg-linear-to-br dark:from-[#ededed]/5 from-[#0d0d0d]/10 to-transparent backdrop-blur-sm hover:border-[#ededed]/40 transition-all duration-300"
                >
                {/* Project Image */}
                <div className="relative h-64 md:h-80 overflow-hidden bg-linear-to-br dark:from-[#ededed]/10 from-[#0d0d0d]/10 to-transparent">
                    <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-2">
                        <div className="text-4xl font-bold dark:text-[#ededed]/20 text-[#0d0d0d]/20">
                        {project.title}
                        </div>
                        <div className="text-sm dark:text-[#ededed]/30 text-[#0d0d0d]/30">
                        Project Preview Image
                        </div>
                    </div>
                    </div>
                    {/* Uncomment when you have actual images */}
                    <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Project Content */}
                <div className="p-6 md:p-8">
                    {/* Category Badge */}
                    <div className="mb-3">
                    <span className="px-3 py-1 text-xs rounded-full bg-[#0d0d0d]/10 dark:bg-[#ededed]/10 text-[#0d0d0d]/80 dark:text-[#ededed]/80">
                        {project.category}
                    </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    {project.title}
                    </h2>

                    {/* Description */}
                    <p className="dark:text-[#ededed]/70 text-[#0d0d0d]/70 text-base mb-6 leading-relaxed">
                    {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6 space-y-2">
                    {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 dark:bg-[#ededed] bg-[#0d0d0d] rounded-full"></div>
                        <span className="text-sm dark:text-[#ededed]/60 text-[#0d0d0d]/60">
                            {highlight}
                        </span>
                        </div>
                    ))}
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
                        <span 
                            key={idx}
                            className="px-3 py-1 text-xs rounded-full bg-[#0d0d0d]/10 dark:bg-[#ededed]/10 text-[#0d0d0d]/80 dark:text-[#ededed]/80"
                        >
                            {tag}
                        </span>
                        ))}
                    </div>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 pt-6 border-t dark:border-[#ededed]/20 border-[#0d0d0d]/20">
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0d0d0d] dark:bg-[#ededed] text-[#ededed] dark:text-[#0d0d0d] font-medium text-sm hover:opacity-90 transition-opacity duration-200"
                    >
                        <ExternalLink className="w-4 h-4" />
                        View Live
                    </a>
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg border dark:border-[#ededed]/20 border-[#0d0d0d]/20 font-medium text-sm hover:border-[#ededed]/40 transition-colors duration-200"
                    >
                        <Github className="w-4 h-4" />
                        Source
                    </a>
                    </div>
                </div>
                </motion.div>
            ))}
            </div>
        </section>
        </div>
    );
};

export default Projects;