'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Skill {
    name: string;
    icon: string;
    category: string;
}

const Skills: React.FC = () => {
    const skills: Skill[] = [
        // Frontend
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'Frontend' },
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', category: 'Frontend' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: 'Frontend' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'Frontend' },
        { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', category: 'Frontend' },
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', category: 'Frontend' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', category: 'Frontend' },
        
        // Backend
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'Backend' },
        { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', category: 'Backend' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'Backend' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'Backend' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', category: 'Backend' },
        
        // Tools & Others
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'Tools' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'Tools' },
        { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', category: 'Tools' },
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', category: 'Tools' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'Tools' },
    ];

    // Resume download handler
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'resume/SDE_Arpit_Yadav.pdf';
        link.download = 'SDE_Arpit_Yadav.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const categories = ['Frontend', 'Backend', 'Tools'];

    const getSkillsByCategory = (category: string) => {
        return skills.filter(skill => skill.category === category);
    };

    return (
        <div className='w-full max-w-[90%] mx-auto flex flex-col gap-12 relative top-16 py-12 px-4 font-funnel-display'>
        {/* Header */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='flex flex-col md:gap-5'
        >
            <h1 className="text-[30px] md:text-[50px] max-w-3xl font-medium leading-tight tracking-tight font-funnel-display text-[#0d0d0d] dark:text-[#ededed]">
            Skills.
            </h1>
            <p className='text-lg md:text-xl dark:text-[#ededed]/70 text-[#0d0d0d]/70 max-w-2xl'>
            Technologies I work with.
            </p>
        </motion.div>

        {/* Skills Grid by Category */}
        <div className='flex flex-col gap-12 md:max-w-[80%] w-full mx-auto'>
            {categories.map((category) => (
            <div key={category} className='flex flex-col gap-6'>
                <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className='text-2xl md:text-3xl font-bold text-[#0d0d0d] dark:text-[#ededed] font-funnel-display'
                >
                {category}
                </motion.h2>
                
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
                {getSkillsByCategory(category).map((skill, index) => (
                    <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className='flex flex-col items-center justify-center gap-3 p-6 border border-[#0d0d0d]/20 dark:border-[#ededed]/20 rounded-xl bg-linear-to-br dark:from-[#ededed]/5 from-[#0d0d0d]/10 to-transparent backdrop-blur-sm hover:border-[#ededed]/40 transition-colors duration-300'
                    >
                    <Image 
                        src={skill.icon} 
                        alt={skill.name}
                        className='w-12 h-12 object-contain'
                        height={200}
                        width={200}
                    />
                    <span className='text-sm font-medium font-funnel-display text-center text-zinc-700 dark:text-zinc-300'>
                        {skill.name}
                    </span>
                    </motion.div>
                ))}
                </div>
            </div>
            ))}
        </div>

        <div className='mt-10'>
            <button 
                className='text-sm flex items-center justify-center gap-1 mx-auto md:text-xl rounded-xl bg-linear-to-br dark:from-[#ededed]/5 from-[#0d0d0d]/10 to-transparent backdrop-blur-sm hover:border-[#ededed]/40 transition-colors duration-300 cursor-pointer border border-[#0d0d0d]/20 dark:border-[#ededed]/20 px-10 py-4'
                onClick={handleDownload}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="dark:#0d0d0d #ededed"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>
                {`Resume`}
            </button>
        </div>
        </div>
    );
};

export default Skills;