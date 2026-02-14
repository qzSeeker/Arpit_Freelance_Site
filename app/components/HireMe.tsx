'use client';
import { motion } from 'framer-motion';
import { Briefcase, Code, Rocket } from 'lucide-react';

interface OpportunityCard {
    title: string;
    icon: React.ReactNode;
    description?: string;
    skills: string[];
    available: boolean;
}
function HireMe() {

    const opportunities: OpportunityCard[] = [
        {
            title: 'Frontend Engineer',
            icon: <Code size={24} fill='#ededed' />,
            skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
            available: true
        },
        {
            title: 'Backend Engineer',
            icon: <Briefcase size={24} fill='#ededed' />,
            skills: ['Node.js', 'Python', 'PostgreSQL', 'API Design'],
            available: true
        },
        {
            title: 'Full-Stack Engineer',
            icon: <Rocket size={24} fill='#ededed' />,
            skills: ['React', 'Node.js', 'MongoDB', 'AWS'],
            available: true
        },
        {
            title: 'UI Designer',
            icon: <Briefcase size={24} fill='#ededed' />,
            skills: ['Figma', 'UI/UX', 'Design Systems', 'Prototyping'],
            available: true
        }
    ];

    return (
        <div className='w-full max-w-[90%] relative mx-auto py-12'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='flex flex-col md:gap-5'
            >
                <h1 className="text-[30px] md:text-[50px] max-w-3xl font-medium leading-tight tracking-tight font-funnel-display text-[#0d0d0d] dark:text-[#ededed]">
                Hire me.
                </h1>
                <p className='text-lg md:text-xl dark:text-[#ededed]/70 text-[#0d0d0d]/70 max-w-2xl'>
                Open to new opportunities in full-time, internships, or freelance projects.
                </p>
            </motion.div>
            {/* Opportunity Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 w-full md:max-w-[80%] px-4 mx-auto font-funnel-display relative top-16'>
                {opportunities.map((opp, index) => (
                    <motion.div
                        key={opp.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className='grid md:grid-cols-2 gap-4 border dark:border-[#ededed]/20 border-[#0d0d0d]/20 rounded-xl p-4 md:p-8 bg-linear-to-br dark:from-[#ededed]/5 from-[#0d0d0d]/10 to-transparent backdrop-blur-sm hover:border-[#ededed]/40 transition-colors duration-300'
                    >
                              {/* Role Name with Icon */}
                            <div className='flex items-center justify-center gap-3 border border-[#0d0d0d]/10 dark:border-[#ededed]/10 rounded-lg px-4 py-2 bg-linear-to-br from-white/5 to-transparent'>
                                {/* <div className='text-[#0d0d0d]/80 dark:text-[#ededed]/80'>
                                    {opp.icon}
                                </div> */}
                                <h3 className='text-md md:text-xl font-semibold text-[#0d0d0d] dark:text-[#ededed]'>
                                    {opp.title}
                                </h3>
                            </div>
                        <div className='flex flex-col gap-6'>
                            {/* Skills */}
                            <div className='flex flex-col gap-2'>
                                <p className='text-sm font-medium text-[#0d0d0d]/70 dark:text-[#ededed]/70'>
                                    Key Skills
                                </p>
                                <div className='flex flex-wrap gap-2'>
                                    {opp.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className='px-3 py-1 text-xs rounded-full bg-[#0d0d0d]/10 dark:bg-[#ededed]/10 text-[#0d0d0d]/80 dark:text-[#ededed]/80'
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Available to Hire Button */}
                            <motion.button 
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className='flex items-center justify-center gap-2 w-max mt-auto mx-auto px-6 py-2.5 rounded-lg bg-[#0d0d0d] dark:bg-[#ededed] text-[#ededed] dark:text-[#0d0d0d] font-medium text-sm hover:opacity-90 transition-opacity duration-200'>
                                <div className='w-2 h-2 dark:bg-[#0d0d0d] bg-[#ededed] rounded-full animate-pulse'></div>
                                Available to Hire
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
export default HireMe;