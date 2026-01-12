'use client';
import Card from './Card'

function Hero() {
    return (
        <div className='w-full max-w-[90%] mx-auto flex flex-col gap-6 relative top-16 py-12 px-4'>
            <div className='flex flex-col md:gap-5'>
                <h1 className="text-[110px] md:text-[190px] max-w-3xl font-md flex flex-col leading-30 md:leading-50 tracking-tight font-funnel-display text-black dark:text-zinc-50">
                    {`Arpit Yadav.`}
                </h1>

                <h1 className='font-funnel-display text-xl tracking-tight text-[#0d0d0d] dark:text-[#ffffff]/80'>
                    {`SDE ► Building AI-powered web applications`}
                </h1>

                <div>

                </div>
            </div>

            <div className='flex flex-col md:flex-row items-center text-md md:text-xl gap-4 font-funnel-display mt-6'>
                <button className='hover:bg-linear-to-br from-[#ffffff]/5 to-transparent w-full rounded-xl transition cursor-pointer border border-[#ffffff]/20 px-10 py-4'>
                    {`View My Work`}
                </button>
            {/* Floating Stats */}
            <div className='w-full flex justify-end'>
            <div className='flex flex-col md:flex-row gap-6 mt-10 w-full max-w-5xl'>
                <Card stat="7+ Months" label="Profuction" delay={0.2} floatIntensity="medium" />
                <Card stat="500+" label="Daily Queries" delay={0.4} floatIntensity="medium" />
                <Card stat="92%" label="AI Accuracy" delay={0.6} floatIntensity="medium" />
            </div>
            </div>
            </div>

        </div>
    )
}

export default Hero