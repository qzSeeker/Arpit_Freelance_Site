'use client';

import Image from "next/image";

function Header() {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='w-screen bg-transparent backdrop-blur-sm fixed z-50'>
            {/* Logo */}
            <div className='flex items-center justify-between px-[5%] py-5 md:py-8'>
                <button 
                onClick={() => scrollToSection('home')}
                className='font-funnel-display flex items-center text-md md:text-xl cursor-pointer'>
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={50}
                    height={50}
                    className="rounded-full mr-3"
                />
                    {`Qzseeker`}
                </button>

                <div className='font-funnel-display text-sm md:text-lg flex items-center gap-3'>
                    <button 
                        onClick={() => scrollToSection('work')}
                        className='hover:bg-[#0d0d0d] dark:hover:opacity-80 transition cursor-pointer'>
                        Work
                    </button>
                    <span>
                        •
                    </span>
                    <button 
                        onClick={() => scrollToSection('contact')}
                        className='hover:bg-[#0d0d0d] dark:hover:opacity-80 transition cursor-pointer'>
                        Contact
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header
