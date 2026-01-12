import React from 'react'

function Hero() {
    return (
        <div className='w-full mx-auto px-6 md:px-8 py-10 md:py-20 flex flex-col gap-12'>
            <div className='flex flex-col md:gap-5'>
                <h1 className="text-[42px] md:text-8xl font-md flex flex-col leading-12 md:leading-20 tracking-tight font-funnel-display text-black dark:text-zinc-50">
                    {`I Build AI-Powered`}
                    <span className=''>
                        {` Web Experiences That Scale`}
                    </span>
                </h1>

                <h1 className='font-funnel-display text-justify text-xl tracking-tight mt-6 text-[#0d0d0d] dark:text-[#ffffff]/80'>
                    {`I'm Arpit, Frontend Engineer specializing in React, Next.js, and intelligent application development. From 0 to 500+ daily users — I turn ambitious ideas into production-ready products.`}
                </h1>
            </div>

            <div className='flex items-center text-md md:text-xl gap-4 font-funnel-display'>
                <button className='hover:bg-[#101010] dark:hover:opacity-80 transition cursor-pointer border border-[#ffffff]/20 px-6 py-4'>
                    {`View My Work`}
                </button>
                <button className='hover:bg-[#101010] dark:hover:opacity-80 transition cursor-pointer'>
                    {`Let's Talk`}
                </button>
            </div>

            {/* Floating Stats */}
            <div className='font-funnel-display w-full flex justify-end mt-20'>
                <div className='flex flex-col gap-12 w-full max-w-6xl'>
                <div className='border-x border-[#ffffff]/20 flex-1'>   
                    <div className='border-y border-[#ffffff]/20 py-8 px-8 my-8 text-center'>
                        <h2 className='text-5xl'>{`500+`}</h2>
                        <p>{`Daily AI Queries Processed`}</p>
                    </div>
                </div>
                <div className='border-x border-[#ffffff]/20 flex-1'>
                    <div className='border-y border-[#ffffff]/20 py-8 px-8 my-8 text-center'>
                        <h2 className='text-5xl'>{`93%`}</h2>
                        <p>{`Chatbot Accuracy Rate`}</p>
                    </div>
                </div>
                <div className='border-x border-[#ffffff]/20 flex-1'>
                    <div className='border-y border-[#ffffff]/20 py-8 px-8 my-8 text-center'>
                        <h2 className='text-5xl'>{`7+`}</h2>
                        <p>{`Months Production Experience`}</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
