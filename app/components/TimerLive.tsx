'use client';

import { useState, useEffect } from 'react';

const TimerLive = () => {
    const [time, setTime] = useState<string>('--:--:--');

    useEffect(() => {
        const updateTime = () => {
        const now = new Date();
        // Convert to IST (UTC+5:30)
        const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
        const indianTime = new Date(utcTime + (5.5 * 60 * 60000));
        
        const hours = indianTime.getHours().toString().padStart(2, '0');
        const minutes = indianTime.getMinutes().toString().padStart(2, '0');
        const seconds = indianTime.getSeconds().toString().padStart(2, '0');
        
        setTime(`${hours}:${minutes}:${seconds}`);
        };

        updateTime();
        const timer = setInterval(updateTime, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="font-funnel-display text-center tracking-wide text-sm md:text-md text-[#0d0d0d]/70 dark:text-[#ededed]/70">
            {time}
        </div>
    );
};

export default TimerLive;