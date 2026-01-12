'use client';

function Header() {
    return (
        <div className='w-screen border-b border-[#ffffff]/20'>
            {/* Logo */}
            <div className='flex items-center justify-between px-8 py-5 md:py-8'>
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
