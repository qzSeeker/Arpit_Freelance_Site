'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Briefcase, Code, Rocket } from 'lucide-react';

interface SocialLink {
    name: string;
    icon: React.ReactNode;
    href: string;
    label: string;
}

interface OpportunityCard {
    title: string;
    icon: React.ReactNode;
    description: string
}

const Contact: React.FC = () => {
    const socialLinks: SocialLink[] = [
        {
            name: 'Email',
            icon: <Mail size={20} />,
            href: 'mailto:qzseeker@gmail.com',
            label: 'qzseeker@gmail.com'
        },
        {
            name: 'LinkedIn',
            icon: <Linkedin size={20} />,
            href: 'https://linkedin.com/in/arpityadav2005',
            label: 'View Profile'
        },
        {
            name: 'GitHub',
            icon: <Github size={20} />,
            href: 'https://github.com/qzseeker',
            label: 'Check Repos'
        }
    ];

    const opportunities: OpportunityCard[] = [
        {
            title: 'Full-Time Jobs',
            icon: <Briefcase size={24} />,
            description: 'Looking for full-stack or AI engineering roles'
        },
        {
            title: 'Internships',
            icon: <Code size={24} />,
            description: 'Open to frontend, backend, or AI internships'
        },
        {
            title: 'Freelance Projects',
            icon: <Rocket size={24} />,
            description: 'Available for web dev & AI integration projects'
        }
    ];

    return (
        <div className='w-full max-w-[90%] mx-auto flex flex-col gap-12 relative top-16 py-12 px-4 min-h-screen items-center justify-center'>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='flex flex-col items-center text-center max-w-4xl w-full'
        >
            {/* Header */}
            <h1 className="text-[50px] md:text-[90px] text-[#0d0d0d] dark:text-[#ededed] font-medium leading-tight tracking-tight font-funnel-display mb-6">
            {`Let's Work Together.`}
            </h1>
            
            <p className='text-lg md:text-xl text-[#0d0d0d]/70 dark:text-[#ededed]/70 font-funnel-display mb-4 max-w-2xl'>
            Full-stack developer specializing in AI-powered applications. Currently seeking opportunities to build impactful products.
            </p>

            {/* Availability Badge */}
            <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-950/30 border border-green-300 dark:border-green-800 rounded-full mb-12'
            >
            <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
            <span className='text-sm font-medium text-green-700 dark:text-green-400'>
                Available for work
            </span>
            </motion.div>

            {/* Opportunity Cards */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-12 font-funnel-display'>
            {opportunities.map((opp, index) => (
                <motion.div
                key={opp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`border dark:border-[#ededed]/20 border-[#0d0d0d]/20 rounded-xl p-6 bg-linear-to-br dark:from-[#ededed]/5 from-[#0d0d0d]/10 to-transparent backdrop-blur-sm hover:border-[#ededed]/40 transition-colors duration-300`}
                >
                <div className='flex flex-col items-center text-center gap-3'>
                    <div className='text-[#0d0d0d]/80 dark:text-[#ededed]/80'>
                    {opp.icon}
                    </div>
                    <h3 className='text-lg font-semibold text-[#0d0d0d] dark:text-[#ededed]'>
                    {opp.title}
                    </h3>
                    <p className='text-sm text-[#0d0d0d]/60 dark:text-[#ededed]/60'>
                    {opp.description}
                    </p>
                </div>
                </motion.div>
            ))}
            </div>

            {/* CTA Section */}
            <div className='mb-10 font-funnel-display border border-[#ededed]/20 rounded-xl p-6 bg-linear-to-br from-[#ededed]/5 to-transparent backdrop-blur-sm hover:border-[#ededed]/40 transition-colors duration-300'>
            <h2 className='text-2xl md:text-3xl font-bold text-[#0d0d0d] dark:text-[#ededed] mb-4'>
                Ready to collaborate?
            </h2>
            <p className='text-[#0d0d0d]/70 dark:text-[#ededed]/70 mb-6'>
                {`Drop me a message and let's discuss how we can work together on your next project.`}
            </p>
            
            <a
                href='mailto:your.email@example.com'
                className='inline-flex items-center gap-2 px-6 py-3 border-x border-[#0d0d0d]/20 dark:border-[#ededed]/20 text-[#0d0d0d] dark:text-[#ededed] rounded-full hover:opacity-80 transition-opacity text-base font-medium'
            >
                <Mail size={20} />
                Get in Touch
            </a>
            </div>

            {/* Social Links */}
            <div className='flex flex-wrap items-center justify-center gap-4 w-full'>
            {socialLinks.map((link, index) => (
                <motion.a
                key={link.name}
                href={link.href}
                target={link.name !== 'Email' ? '_blank' : undefined}
                rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className='flex items-center gap-3 px-5 py-3 border dark:border-[#ededed]/20 border-[#0d0d0d]/20 rounded-xl p-6 bg-linear-to-br dark:from-[#ededed]/5 from-[#0d0d0d]/10 to-transparent backdrop-blur-sm hover:border-[#ededed]/40 transition-colors duration-300'
                >
                <div className='text-[#0d0d0d]/80 dark:text-[#ededed]/80'>
                    {link.icon}
                </div>
                <span className='text-sm font-medium text-[#0d0d0d] dark:text-[#ededed]'>
                    {link.label}
                </span>
                </motion.a>
            ))}
            </div>

            {/* Footer Text */}
            <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className='text-sm text-[#0d0d0d]/60 dark:text-[#ededed]/60 font-funnel-display  mt-8'
            >
            Based in New Delhi, India • Open to remote & hybrid opportunities
            </motion.p>
        </motion.div>
        </div>
    );
};

export default Contact;