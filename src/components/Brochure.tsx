"use client";

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Brochure() {
    const formRef = useRef<HTMLFormElement>(null);
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const phone = (form.elements.namedItem('phone_number') as HTMLInputElement).value;
        const email = (form.elements.namedItem('email') as HTMLInputElement).value;

        // Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Phone Validation (simple: must have at least 10 digits when non-digits are stripped)
        const phoneDigits = phone.replace(/\D/g, '');
        if (phoneDigits.length < 10) {
            alert("Please enter a valid phone number (at least 10 digits).");
            return;
        }

        // If valid, submit the form with JSON
        setIsSubmitting(true);
        const parentName = (form.elements.namedItem('parent_name') as HTMLInputElement).value;
        const school = (form.elements.namedItem('school') as HTMLSelectElement).value;

        try {
            const res = await fetch('/api/brochure', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    parent_name: parentName,
                    phone_number: phone,
                    email: email,
                    school: school
                })
            });

            if (res.ok) {
                // Redirect user and trigger download via the query string
                router.push(`/thank-you-brochure?download=true&school=${encodeURIComponent(school)}`);
            } else {
                alert("Something went wrong. Please try again.");
                setIsSubmitting(false);
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong. Please try again.");
            setIsSubmitting(false);
        }
    };

    return (
        <section id="brochure" className="bg-rice-white text-text-primary ma-spacing-mob ma-spacing-desk relative text-center border-t border-border-soft">
            <div className="container-max max-w-3xl">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-block border border-primary-red text-primary-red px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-6">
                        STILL EXPLORING?
                    </div>

                    <h2 className="text-3xl md:text-5xl font-serif text-text-primary mb-8">
                        Download the Detailed <br className="hidden md:block" />Programme Overview.
                    </h2>

                    <div className="max-w-3xl mx-auto bg-white border border-border-soft p-6 md:p-8 mb-12 shadow-sm rounded-sm">
                        <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
                            If you would prefer to review the complete itinerary, inclusions, safety framework, and payment structure before attending the orientation, you may request the official brochure.
                        </p>
                        <div className="flex items-center justify-center gap-3 text-primary-red text-xs md:text-sm font-semibold uppercase tracking-widest">
                            <span className="hidden md:block w-16 h-px bg-primary-red opacity-50"></span>
                            Select your school to receive the respective version of the itinerary
                            <span className="hidden md:block w-16 h-px bg-primary-red opacity-50"></span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white border border-kyoto-gold p-8 max-w-md mx-auto relative overflow-hidden shadow-2xl rounded-sm"
                >
                    <div className="w-1 h-full bg-primary-red absolute left-0 top-0"></div>

                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 text-left relative z-10">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Parent's Name</label>
                                <input
                                    type="text"
                                    name="parent_name"
                                    required
                                    placeholder="Enter full name"
                                    className="w-full bg-white border border-border-soft text-text-primary px-4 py-3 transition-all duration-300 focus:outline-none focus:border-primary-red focus:ring-1 focus:ring-primary-red/50 focus:shadow-[0_0_15px_rgba(210,31,43,0.1)]"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone_number"
                                    required
                                    placeholder="+91"
                                    className="w-full bg-white border border-border-soft text-text-primary px-4 py-3 transition-all duration-300 focus:outline-none focus:border-primary-red focus:ring-1 focus:ring-primary-red/50 focus:shadow-[0_0_15px_rgba(210,31,43,0.1)]"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Select School</label>
                                <select
                                    name="school"
                                    required
                                    defaultValue=""
                                    className="w-full bg-white border border-border-soft text-text-primary px-4 py-3 transition-all duration-300 focus:outline-none focus:border-primary-red focus:ring-1 focus:ring-primary-red/50 focus:shadow-[0_0_15px_rgba(210,31,43,0.1)] appearance-none"
                                >
                                    <option value="" disabled>Select your school</option>
                                    <option value="dps">DPS</option>
                                    <option value="soi">School of India</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Parent's Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Enter email address"
                                    className="w-full bg-white border border-border-soft text-text-primary px-4 py-3 transition-all duration-300 focus:outline-none focus:border-primary-red focus:ring-1 focus:ring-primary-red/50 focus:shadow-[0_0_15px_rgba(210,31,43,0.1)]"
                                />
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-primary-red text-white hover:bg-deep-indigo px-6 py-4 font-semibold transition-colors mt-2 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider text-sm shadow-md group"
                        >
                            {isSubmitting ? 'Processing...' : <>Download Programme Brochure <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span></>}
                        </motion.button>
                    </form>

                    <p className="text-xs text-text-secondary mt-4 text-center relative z-10">
                        No obligation. For informed decision-making.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
