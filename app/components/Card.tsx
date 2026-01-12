'use client';
import { motion } from 'framer-motion';

function Card({ stat, label, delay = 0, floatIntensity = 'medium' }: { stat: string | number; label: string; delay?: number; floatIntensity?: 'low' | 'medium' | 'high' }) {
  // Define float intensities
    const intensities = {
        low: { x: 5, y: 5 },
        medium: { x: 10, y: 10 },
        high: { x: 15, y: 15 }
    };

    const intensity = intensities[floatIntensity] || intensities.medium;

    return (
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
            opacity: 1, 
            y: 0,
        }}
        transition={{
            duration: 0.6,
            delay: delay,
            ease: "easeOut"
        }}
        >
        <motion.div
            className='border border-[#ffffff]/20 rounded-xl p-6 bg-linear-to-br from-[#ffffff]/5 to-transparent backdrop-blur-sm hover:border-[#ffffff]/40 transition-colors duration-300'
            animate={{
            x: [0, intensity.x, -intensity.x, 0],
            y: [0, -intensity.y, intensity.y, 0],
            }}
            transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: delay,
            }}
            whileHover={{
            scale: 1.05,
            borderColor: "rgba(255, 255, 255, 0.6)",
            }}
        >
            <h2 className='text-5xl font-bold mb-2 bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent'>
            {stat}
            </h2>
            <p className='text-[#ffffff]/70 text-sm'>{label}</p>
        </motion.div>
        </motion.div>
    );
}

export default Card