import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, FileText } from 'lucide-react';

interface ProjectLinks {
    live?: string;
    code?: string;
    caseStudy?: string;
}

interface Project {
    title: string;
    role: string;
    period: string;
    description: string;
    stats: string[];
    tech: string[];
    links: ProjectLinks;
}

interface ProjectCardProps {
    project: Project;
    index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
    return (
        <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className='group relative font-funnel-display border border-[#0d0d0d]/20 dark:border-[#ffffff]/20 rounded-xl p-6 bg-linear-to-br dark:from-[#ededed]/5 from-[#0d0d0d]/10 to-transparent backdrop-blur-sm hover:border-[#ffffff]/40 transition-colors duration-300'
        >
        {/* Header */}
        <div className='flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4'>
            <div>
            <h3 className='text-2xl md:text-3xl font-bold text-[#0d0d0d] dark:text-[#ededed]'>
                {project.title}
            </h3>
            <p className='text-sm text-[#0d0d0d]/60 dark:text-[#ededed]/60 mt-1'>
                {project.role} • {project.period}
            </p>
            </div>
        </div>

        {/* Description */}
        <p className='text-[#0d0d0d]/70 dark:text-[#ededed]/70 mb-4 leading-relaxed'>
            {project.description}
        </p>

        {/* Stats */}
        <div className='flex flex-wrap gap-3 mb-6'>
            {project.stats.map((stat, i) => (
            <span
                key={i}
                className='px-3 py-1 text-sm bg-[#ededed]/20 dark:bg-[#0d0d0d]/20 text-[#0d0d0d] dark:text-[#ededed]/70 rounded-full border border-[#0d0d0d]/20 dark:border-[#ededed]/20'
            >
                {stat}
            </span>
            ))}
        </div>

        {/* Tech Stack */}
        <div className='flex flex-wrap gap-2 mb-6'>
            {project.tech.map((tech, i) => (
            <span
                key={i}
                className='px-3 py-1 text-xs font-medium border border-[#0d0d0d]/20 dark:border-[#ededed]/20 bg-[#0d0d0d]/10 dark:bg-[#0d0d0d]/20 text-[#0d0d0d] dark:text-[#ededed]/70 rounded-md'
            >
                {tech}
            </span>
            ))}
        </div>

        {/* Links */}
        <div className='flex flex-wrap gap-3'>
            {project.links.live && (
            <a
                href={project.links.live}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 px-4 py-2 bg-[#0d0d0d] dark:bg-[#ededed] text-[#ededed] dark:text-[#0d0d0d] rounded-lg hover:opacity-80 transition-opacity text-sm font-medium'
            >
                <ExternalLink size={16} />
                Live Demo
            </a>
            )}
            {project.links.code && (
            <a
                href={project.links.code}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 px-4 py-2 border border-[#0d0d0d]/20 dark:border-zinc-600 text-[#0d0d0d] dark:text-[#ededed] rounded-lg hover:bg-zinc-100 dark:hover:bg-[#0d0d0d]/70 transition-colors text-sm font-medium'
            >
                <Github size={16} />
                Code
            </a>
            )}
            {project.links.caseStudy && (
            <a
                href={project.links.caseStudy}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 px-4 py-2 border border-[#0d0d0d]/20 dark:border-zinc-600 text-[#0d0d0d] dark:text-[#ededed] rounded-lg hover:bg-zinc-100 dark:hover:bg-[#0d0d0d]/70 transition-colors text-sm font-medium'
            >
                <FileText size={16} />
                Case Study
            </a>
            )}
        </div>
        </motion.div>
    );
};

export default ProjectCard;