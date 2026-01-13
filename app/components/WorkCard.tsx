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
        className='group relative font-funnel-display border border-[#ffffff]/20 rounded-xl p-6 bg-linear-to-br from-[#ffffff]/5 to-transparent backdrop-blur-sm hover:border-[#ffffff]/40 transition-colors duration-300'
        >
        {/* Header */}
        <div className='flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4'>
            <div>
            <h3 className='text-2xl md:text-3xl font-bold text-black dark:text-white'>
                {project.title}
            </h3>
            <p className='text-sm text-white/60 mt-1'>
                {project.role} • {project.period}
            </p>
            </div>
        </div>

        {/* Description */}
        <p className='text-zinc-700 dark:text-zinc-300 mb-4 leading-relaxed'>
            {project.description}
        </p>

        {/* Stats */}
        <div className='flex flex-wrap gap-3 mb-6'>
            {project.stats.map((stat, i) => (
            <span
                key={i}
                className='px-3 py-1 text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full border border-zinc-200 dark:border-zinc-700'
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
                className='px-3 py-1 text-xs font-medium bg-zinc-800 dark:bg-zinc-700 text-white rounded-md'
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
                className='inline-flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-80 transition-opacity text-sm font-medium'
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
                className='inline-flex items-center gap-2 px-4 py-2 border border-zinc-300 dark:border-zinc-600 text-black dark:text-white rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-sm font-medium'
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
                className='inline-flex items-center gap-2 px-4 py-2 border border-zinc-300 dark:border-zinc-600 text-black dark:text-white rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-sm font-medium'
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