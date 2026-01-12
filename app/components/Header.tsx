'use client';

function Header() {
    return (
        <div className='w-screen border-b border-[#ffffff]/20 bg-linear-to-br from-[#ffffff]/5 to-transparent backdrop-blur-sm fixed z-50'>
            {/* Logo */}
            <div className='flex items-center justify-between px-[5%] py-5 md:py-8'>
                <button className='font-funnel-display text-xl font-semibold cursor-pointer'>
                    {`Qzseeker`}
                </button>

                <div className='font-funnel-display text-sm md:text-lg flex items-center gap-3'>
                    <button className='hover:bg-[#101010] dark:hover:opacity-80 transition cursor-pointer'>
                        Work
                    </button>
                    <span>
                        •
                    </span>
                    <button className='hover:bg-[#101010] dark:hover:opacity-80 transition cursor-pointer'>
                        Contact
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header
