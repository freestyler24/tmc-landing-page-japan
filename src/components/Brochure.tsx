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
                router.push('/thank-you-brochure?download=true');
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
        <section id="brochure" className="bg-alt-charcoal ma-spacing-mob ma-spacing-desk relative text-center border-t border-gray-800">
            <div className="container-max max-w-3xl">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-block border border-kyoto-gold text-kyoto-gold px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-6">
                        STILL EXPLORING?
                    </div>

                    <h2 className="text-3xl md:text-5xl font-serif text-offwhite mb-8">
                        Download the Detailed <br className="hidden md:block" />Programme Overview.
                    </h2>

                    <div className="max-w-3xl mx-auto bg-gray-900 bg-opacity-40 border border-gray-800 p-6 md:p-8 mb-12 shadow-inner">
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
                            If you would prefer to review the complete itinerary, inclusions, safety framework, and payment structure before attending the orientation, you may request the official brochure.
                        </p>
                        <div className="flex items-center justify-center gap-3 text-kyoto-gold text-xs md:text-sm font-semibold uppercase tracking-widest">
                            <span className="w-8 md:w-16 h-px bg-kyoto-gold opacity-50"></span>
                            Select your school to receive the correct branded version
                            <span className="w-8 md:w-16 h-px bg-kyoto-gold opacity-50"></span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-gray-900 border border-gray-800 p-8 max-w-md mx-auto relative overflow-hidden shadow-2xl"
                >
                    <div className="w-1 h-full bg-primary-red absolute left-0 top-0"></div>

                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 text-left relative z-10">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Parent's Name</label>
                                <input
                                    type="text"
                                    name="parent_name"
                                    required
                                    placeholder="Enter full name"
                                    className="w-full bg-charcoal border border-gray-700 text-offwhite px-4 py-3 focus:outline-none focus:border-kyoto-gold focus:ring-1 focus:ring-kyoto-gold transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone_number"
                                    required
                                    placeholder="+91"
                                    className="w-full bg-charcoal border border-gray-700 text-offwhite px-4 py-3 focus:outline-none focus:border-kyoto-gold focus:ring-1 focus:ring-kyoto-gold transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Select School</label>
                                <select
                                    name="school"
                                    required
                                    defaultValue=""
                                    className="w-full bg-charcoal border border-gray-700 text-gray-400 px-4 py-3 focus:outline-none focus:border-kyoto-gold focus:ring-1 focus:ring-kyoto-gold appearance-none transition-colors"
                                >
                                    <option value="" disabled>Select your school</option>
                                    <option value="dps">DPS</option>
                                    <option value="soi">School of India</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Parent's Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Enter email address"
                                    className="w-full bg-charcoal border border-gray-700 text-offwhite px-4 py-3 focus:outline-none focus:border-kyoto-gold focus:ring-1 focus:ring-kyoto-gold transition-colors"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-transparent border border-kyoto-gold text-kyoto-gold hover:bg-kyoto-gold hover:text-charcoal px-6 py-3 font-semibold transition-colors mt-2 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider text-sm"
                        >
                            {isSubmitting ? 'Processing...' : 'Download Programme Brochure'}
                        </button>
                    </form>

                    <p className="text-xs text-gray-500 mt-4 text-center relative z-10">
                        No obligation. For informed decision-making.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
