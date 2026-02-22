'use client';
import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { ArrowRight, CheckCircle, Loader2, ChevronDown } from 'lucide-react';

const SERVICES = ["Business Websites", "Landing Pages", "Fullstack Web Apps", "Other"];

const BUDGETS = [
    "Under ₹15,000",
    "₹15,000 – ₹30,000",
    "₹30,000 – ₹60,000",
    "₹60,000+",
    "Not sure yet"
];

function ContactForm() {
    const searchParams = useSearchParams();
    const prefilledService = searchParams.get('service') || '';

    const [form, setForm] = useState({
        name: '',
        email: '',
        service: SERVICES.includes(prefilledService) ? prefilledService : '',
        budget: '',
        timeline: '',
        message: ''
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [serviceOpen, setServiceOpen] = useState(false);
    const [budgetOpen, setBudgetOpen] = useState(false);

    // Pre-fill service from query param
    useEffect(() => {
        if (prefilledService && SERVICES.includes(prefilledService)) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setForm(prev => ({ ...prev, service: prefilledService }));
        }
    }, [prefilledService]);

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!form.name.trim()) newErrors.name = 'Name is required';
        if (!form.email.trim()) newErrors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Enter a valid email';
        if (!form.service) newErrors.service = 'Please select a service';
        if (!form.message.trim()) newErrors.message = 'Tell me a bit about your project';
        return newErrors;
    };

    const handleChange = (field: string, value: string) => {
        setForm(prev => ({ ...prev, [field]: value }));
        if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setStatus('loading');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });

            if (res.ok) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center gap-6 py-24 text-center"
            >
                <div className="p-4 rounded-full bg-green-500/10 border border-green-500/20">
                    <CheckCircle className="w-12 h-12 text-green-500" />
                </div>
                <div>
                    <h2 className="text-3xl font-bold mb-2">Message Received!</h2>
                    <p className="dark:text-[#ededed]/60 text-[#0d0d0d]/60 max-w-sm">
                        Thanks {form.name.split(' ')[0]}! {`I'll review your project details and get back to you within 24 hours.`}
                    </p>
                </div>
                <a
                    href="/services"
                    className="mt-4 px-6 py-2.5 rounded-lg border dark:border-[#ededed]/20 border-[#0d0d0d]/20 text-sm hover:opacity-70 transition-opacity"
                >
                    Back to Services
                </a>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field label="Your Name" error={errors.name}>
                    <input
                        type="text"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={e => handleChange('name', e.target.value)}
                        className={inputClass(!!errors.name)}
                    />
                </Field>
                <Field label="Email Address" error={errors.email}>
                    <input
                        type="email"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={e => handleChange('email', e.target.value)}
                        className={inputClass(!!errors.email)}
                    />
                </Field>
            </div>

            {/* Service Dropdown */}
            <Field label="Service You're Interested In" error={errors.service}>
                <div className="relative">
                    <button
                        type="button"
                        onClick={() => { setServiceOpen(o => !o); setBudgetOpen(false); }}
                        className={`${inputClass(!!errors.service)} flex items-center justify-between w-full text-left`}
                    >
                        <span className={form.service ? '' : 'opacity-40'}>
                            {form.service || 'Select a service'}
                        </span>
                        <ChevronDown className={`w-4 h-4 opacity-50 transition-transform duration-200 ${serviceOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                        {serviceOpen && (
                            <motion.ul
                                initial={{ opacity: 0, y: -4 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -4 }}
                                transition={{ duration: 0.15 }}
                                className="absolute z-20 top-full mt-1 w-full rounded-xl border dark:border-[#ededed]/10 border-[#0d0d0d]/10 dark:bg-[#111] bg-white shadow-xl overflow-hidden"
                            >
                                {SERVICES.map(s => (
                                    <li key={s}>
                                        <button
                                            type="button"
                                            onClick={() => { handleChange('service', s); setServiceOpen(false); }}
                                            className={`w-full text-left px-4 py-3 text-sm transition-colors duration-150
                                                ${form.service === s
                                                    ? 'dark:bg-[#ededed]/10 bg-[#0d0d0d]/5 font-medium'
                                                    : 'dark:hover:bg-[#ededed]/5 hover:bg-[#0d0d0d]/5'
                                                }`}
                                        >
                                            {s}
                                        </button>
                                    </li>
                                ))}
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </div>
            </Field>

            {/* Budget + Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Budget Dropdown */}
                <Field label="Budget Range" error={errors.budget}>
                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => { setBudgetOpen(o => !o); setServiceOpen(false); }}
                            className={`${inputClass(false)} flex items-center justify-between w-full text-left`}
                        >
                            <span className={form.budget ? '' : 'opacity-40'}>
                                {form.budget || 'Select budget'}
                            </span>
                            <ChevronDown className={`w-4 h-4 opacity-50 transition-transform duration-200 ${budgetOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                            {budgetOpen && (
                                <motion.ul
                                    initial={{ opacity: 0, y: -4 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -4 }}
                                    transition={{ duration: 0.15 }}
                                    className="absolute z-20 top-full mt-1 w-full rounded-xl border dark:border-[#ededed]/10 border-[#0d0d0d]/10 dark:bg-[#111] bg-white shadow-xl overflow-hidden"
                                >
                                    {BUDGETS.map(b => (
                                        <li key={b}>
                                            <button
                                                type="button"
                                                onClick={() => { handleChange('budget', b); setBudgetOpen(false); }}
                                                className={`w-full text-left px-4 py-3 text-sm transition-colors duration-150
                                                    ${form.budget === b
                                                        ? 'dark:bg-[#ededed]/10 bg-[#0d0d0d]/5 font-medium'
                                                        : 'dark:hover:bg-[#ededed]/5 hover:bg-[#0d0d0d]/5'
                                                    }`}
                                            >
                                                {b}
                                            </button>
                                        </li>
                                    ))}
                                </motion.ul>
                            )}
                        </AnimatePresence>
                    </div>
                </Field>

                <Field label="Preferred Timeline" error={errors.timeline}>
                    <input
                        type="text"
                        placeholder="e.g. ASAP, 1 month, flexible"
                        value={form.timeline}
                        onChange={e => handleChange('timeline', e.target.value)}
                        className={inputClass(false)}
                    />
                </Field>
            </div>

            {/* Message */}
            <Field label="Tell me about your project" error={errors.message}>
                <textarea
                    rows={5}
                    placeholder="Describe your project, goals, and any specific requirements..."
                    value={form.message}
                    onChange={e => handleChange('message', e.target.value)}
                    className={`${inputClass(!!errors.message)} resize-none`}
                />
            </Field>

            {/* Error Banner */}
            {status === 'error' && (
                <p className="text-sm text-red-500 text-center">
                    Something went wrong. Please try again or email me directly.
                </p>
            )}

            {/* Submit */}
            <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#0d0d0d] dark:bg-[#ededed] text-[#ededed] dark:text-[#0d0d0d] font-medium text-sm hover:opacity-90 transition-opacity duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {status === 'loading' ? (
                    <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                    </>
                ) : (
                    <>
                        Send Message
                        <ArrowRight className="w-4 h-4" />
                    </>
                )}
            </motion.button>
        </form>
    );
}

// Reusable Field wrapper
function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
    return (
        <div className="space-y-1.5">
            <label className="block text-sm font-medium dark:text-[#ededed]/80 text-[#0d0d0d]/80">
                {label}
            </label>
            {children}
            {error && (
                <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-red-500"
                >
                    {error}
                </motion.p>
            )}
        </div>
    );
}

// Input class helper
function inputClass(hasError: boolean) {
    return `w-full px-4 py-3 rounded-xl text-sm border transition-colors duration-200 outline-none bg-transparent
        dark:text-[#ededed] text-[#0d0d0d]
        ${hasError
            ? 'border-red-500/60 focus:border-red-500'
            : 'dark:border-[#ededed]/10 border-[#0d0d0d]/15 dark:focus:border-[#ededed]/40 focus:border-[#0d0d0d]/40'
        }
        dark:placeholder:text-[#ededed]/25 placeholder:text-[#0d0d0d]/30
    `;
}

// Page wrapper with Suspense (required for useSearchParams in Next.js)
export default function ContactPage() {
    return (
        <div className="min-h-screen font-funnel-display flex-row md:flex md:justify-evenly md:items-center w-full">
            {/* Hero */}
            <section className="px-6 py-12 md:py-0 relative top-20 md:top-0">
                <div className="space-y-4">
                    <h1 className="text-[30px] md:text-[50px] font-medium leading-tight">
                        {`Let's Work Together.`}
                    </h1>
                    <p className="text-lg md:text-xl dark:text-[#ededed]/70 text-[#0d0d0d]/70 max-w-xl">
                        {`Fill in the details below and I'll get back to you within 24 hours.`}
                    </p>
                </div>
            </section>

            {/* Form */}
            <section className="px-6 py-20 md:py-0">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl mx-auto border dark:border-[#ededed]/10 border-[#0d0d0d]/10 rounded-2xl p-6 md:p-10 dark:bg-[#ededed]/2 bg-[#0d0d0d]/2"
                >
                    <Suspense fallback={<div className="py-10 text-center opacity-50">Loading form...</div>}>
                        <ContactForm />
                    </Suspense>
                </motion.div>
            </section>
        </div>
    );
}