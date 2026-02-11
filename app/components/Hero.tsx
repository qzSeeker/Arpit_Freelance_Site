'use client';
import { Github, Twitter } from 'lucide-react';
import Card from './Card'

function Hero() {
    
    return (
        <div id='home' className='w-full max-w-[90%] mx-auto flex flex-col gap-6 relative top-16 py-12 px-4'>
            <div className='flex flex-col md:gap-5'>
                <h1 className="text-[100px] md:text-[190px] max-w-3xl font-md flex flex-col leading-30 md:leading-50 tracking-tight font-funnel-display text-black dark:text-[#ededed]">
                    {`Arpit Yadav.`}
                </h1>

                <h1 className='font-funnel-display text-lg md:text-xl tracking-tight text-[#0d0d0d] dark:text-[#ededed]/80'>
                    {`SDE ► Building AI-powered web applications`}
                </h1>
            </div>

            <div className='flex flex-col md:flex-row text-md md:text-xl gap-4 font-funnel-display mt-6 relative'>
                <div className="absolute flex w-full items-center justify-between gap-4">
                     {/* CTA Button */}
                    <button className="w-fit rounded-xl border border-[#0d0d0d]/20 dark:border-[#ededed]/20 bg-linear-to-br from-white/5 to-transparent px-6 md:px-10 py-4 transition hover:opacity-90">
                        View My Work
                    </button>

                    {/* Social Icons */}
                    <div className="flex items-center gap-3">
                        <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#0d0d0d]/20 dark:border-[#ededed]/20 bg-linear-to-br from-white/5 to-transparent transition hover:opacity-90">
                        <Github size={20} fill='dark:#ededed #0d0d0d' className="dark:text-[#ededed] text-[#0d0d0d]" />
                        </button>

                        <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#0d0d0d]/20 dark:border-[#ededed]/20 bg-linear-to-br from-white/5 to-transparent transition hover:opacity-90">
                        <Twitter size={20} fill='dark:#ededed #0d0d0d' className="dark:text-[#ededed] text-[#0d0d0d]" />
                        </button>
                    </div>
                </div>

                {/* Floating Stats */}
                <div className='w-full flex justify-end mt-20'>
                <div className='flex flex-col md:flex-row gap-6 mt-10 w-full max-w-5xl justify-end'>
                    <Card stat="7+ Mons" label="Profuction" delay={0.2} floatIntensity="medium" />
                    <Card stat="500+" label="Daily Queries" delay={0.4} floatIntensity="medium" />
                    <Card stat="92%" label="AI Accuracy" delay={0.6} floatIntensity="medium" />
                </div>
                </div>
            </div>

        </div>
    )
}

export default Hero