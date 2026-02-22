'use client';
import React from 'react';
import { Code, Rocket, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const Services = () => {
    const router = useRouter();

    const services = [
        {
            icon: <Code className="w-8 h-8" />,
            title: "Business Websites",
            slug: "business-websites",
            description: "Professional, responsive websites tailored for your business needs. Built with modern technologies to ensure fast loading times and excellent user experience.",
            features: [
                "Custom design & branding",
                "Mobile-first responsive",
                "SEO optimized",
                "Content management",
                "Fast performance",
                "Analytics integration"
            ],
            technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
            deliveryTime: "2-3 weeks",
            startingPrice: "Starting at ₹29,999"
        },
        {
            icon: <Rocket className="w-8 h-8" />,
            title: "Landing Pages",
            slug: "landing-pages",
            description: "High-converting landing pages designed to capture leads and drive conversions. Perfect for product launches, campaigns, and marketing initiatives.",
            features: [
                "Conversion-focused design",
                "A/B testing ready",
                "Lead capture forms",
                "Analytics & tracking",
                "Fast load times",
                "Mobile optimized"
            ],
            technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
            deliveryTime: "1 week",
            startingPrice: "Starting at ₹15,999"
        },
        {
            icon: <Layers className="w-8 h-8" />,
            title: "Fullstack Web Apps",
            slug: "fullstack-web-apps",
            description: "Complete web applications with both frontend and backend. From concept to deployment, I build scalable solutions that grow with your business.",
            features: [
                "Custom backend APIs",
                "Database design",
                "User authentication",
                "Real-time features",
                "Cloud deployment",
                "Ongoing support"
            ],
            technologies: ["Next.js", "Node.js", "PostgreSQL", "MongoDB", "AWS"],
            deliveryTime: "4-8 weeks",
            startingPrice: "Starting at ₹35,999"
        }
    ];

    const handleGetStarted = (slug: string, title: string) => {
        router.push(`/contact?service=${encodeURIComponent(title)}`);
    };

    return (
        <div className="min-h-screen font-funnel-display">
            {/* Hero Section */}
            <section className="max-w-[90%] mx-auto px-6 py-20">
                <div className="space-y-4">
                    <h1 className="text-[30px] md:text-[50px] max-w-3xl font-medium leading-tight">
                        Services.
                    </h1>
                    <p className="text-lg md:text-xl dark:text-[#ededed]/70 text-[#0d0d0d]/70 max-w-3xl">
                        Professional web development services to bring your digital vision to life.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="max-w-[90%] mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:max-w-[80%] w-full mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="border dark:border-[#ededed]/20 border-[#0d0d0d]/20 rounded-xl p-4 md:p-8 bg-linear-to-br dark:from-[#ededed]/5 from-[#0d0d0d]/10 to-transparent backdrop-blur-sm hover:border-[#ededed]/40 transition-colors duration-300"
                        >
                            {/* Service Header */}
                            <div className="flex flex-col items-center justify-center gap-6 mb-6">
                                <div className="flex items-center justify-center gap-3 p-3 rounded-xl border border-[#0d0d0d]/20 dark:border-[#ededed]/20 bg-linear-to-br from-white/5 to-transparent">
                                    {service.icon}
                                    <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#0d0d0d] dark:text-[#ededed]">{service.title}</h2>
                                </div>
                                <div className="flex-1">
                                    <p className="text-[#0d0d0d]/70 dark:text-[#ededed]/70 text-md md:text-lg">{service.description}</p>
                                </div>
                            </div>

                            {/* Features Grid */}
                            <div className="grid md:grid-cols-2 gap-4 mb-6">
                                {service.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-[#0d0d0d] dark:bg-[#ededed]/50 rounded-full"></div>
                                        <span className="text-[#0d0d0d]/50 dark:text-[#ededed]/50 text-sm md:text-md">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Technologies */}
                            <div className="mb-6">
                                <p className="text-sm text-neutral-500 mb-3">Technologies</p>
                                <div className="flex flex-wrap gap-2">
                                    {service.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 text-xs rounded-full bg-[#0d0d0d]/10 dark:bg-[#ededed]/10 text-[#0d0d0d]/80 dark:text-[#ededed]/80"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-neutral-800">
                                <div className="flex items-center gap-6">
                                    <div>
                                        <p className="text-sm text-neutral-500">Delivery Time</p>
                                        <p className="font-semibold">{service.deliveryTime}</p>
                                    </div>
                                    <div className="w-px h-10 bg-neutral-800"></div>
                                    <div>
                                        <p className="text-sm text-neutral-500">Investment</p>
                                        <p className="font-semibold">{service.startingPrice}</p>
                                    </div>
                                </div>
                                <motion.button
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    onClick={() => handleGetStarted(service.slug, service.title)}
                                    className='mt-6 md:mt-0 px-6 py-2.5 rounded-lg bg-[#0d0d0d] dark:bg-[#ededed] text-[#ededed] dark:text-[#0d0d0d] font-medium text-sm hover:opacity-90 transition-opacity duration-200 cursor-pointer'
                                >
                                    Get Started
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Services;