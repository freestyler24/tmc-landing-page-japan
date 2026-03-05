"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Registration() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Controlled form state for the new fields
    const [formData, setFormData] = useState({
        student_name: '',
        grade: '',
        school: '',
        parent_name: '',
        parent_email: '',
        parent_phone: '',
        passport_status: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const nextStep = () => {
        // Basic validation for Step 1
        if (step === 1 && (!formData.student_name || !formData.grade || !formData.school)) {
            alert("Please fill in all fields before proceeding.");
            return;
        }
        // Basic validation for Step 2
        if (step === 2) {
            if (!formData.parent_name || !formData.parent_email || !formData.parent_phone) {
                alert("Please fill in all fields before proceeding.");
                return;
            }

            // Email Validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.parent_email)) {
                alert("Please enter a valid email address.");
                return;
            }

            // Phone Validation (simple: must have at least 10 digits when non-digits are stripped)
            const phoneDigits = formData.parent_phone.replace(/\D/g, '');
            if (phoneDigits.length < 10) {
                alert("Please enter a valid phone number (at least 10 digits).");
                return;
            }
        }
        setStep(prev => prev + 1);
    };

    const prevStep = () => setStep(prev => prev - 1);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.passport_status) {
            alert("Please select a passport option before submitting.");
            return;
        }

        setIsSubmitting(true);
        try {
            const res = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                router.push('/thank-you-registration');
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
        <section id="register" className="bg-sakura-light ma-spacing-mob ma-spacing-desk relative border-t border-b border-border-soft overflow-hidden">
            {/* Lively Geometric Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M20 0L40 20L20 40L0 20L20 0Z' fill='none' stroke='%23B89B5E' stroke-width='1'/%3E%3C/svg%3E")`, backgroundSize: '40px 40px' }}></div>

            {/* Large Kanji watermark */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 0.5 }} viewport={{ once: true }} className="absolute -left-10 top-1/4 pointer-events-none hidden lg:block">
                <p className="text-white font-serif text-9xl tracking-widest writing-vertical-rl">
                    登録
                </p>
            </motion.div>

            <div className="container-max max-w-4xl flex flex-col items-center relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-text-primary mb-4">
                        Register for the Parent Orientation <br className="hidden md:block" />— Japan 2026
                    </h2>
                    <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto mb-8">
                        Submitting this form reserves your seat for the orientation session where we will cover:
                    </p>


                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full max-w-2xl bg-white p-8 md:p-12 shadow-2xl border border-kyoto-gold relative mx-4 md:mx-auto"
                >

                    <div className="flex justify-between mb-8">
                        {[1, 2, 3].map((num) => (
                            <motion.div
                                key={num}
                                animate={{ backgroundColor: step >= num ? '#C8102E' : '#E5E7EB' }}
                                transition={{ duration: 0.3 }}
                                className={`flex-1 h-2 mx-1 rounded`}
                            />
                        ))}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Hidden Inputs for Next.js Server Action / API Route parsing */}
                        {step !== 1 && (
                            <>
                                <input type="hidden" name="student_name" value={formData.student_name} />
                                <input type="hidden" name="grade" value={formData.grade} />
                                <input type="hidden" name="school" value={formData.school} />
                            </>
                        )}
                        {step !== 2 && (
                            <>
                                <input type="hidden" name="parent_name" value={formData.parent_name} />
                                <input type="hidden" name="parent_email" value={formData.parent_email} />
                                <input type="hidden" name="parent_phone" value={formData.parent_phone} />
                            </>
                        )}
                        {step !== 3 && (
                            <input type="hidden" name="passport_status" value={formData.passport_status} />
                        )}


                        <AnimatePresence mode="wait">
                            {/* STEP 1 */}
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-4"
                                >
                                    <h3 className="text-xl font-bold font-serif text-text-primary mb-4">Step 1: Student Information</h3>
                                    <div>
                                        <label className="block text-sm font-bold text-text-primary mb-2">Student Full Name *</label>
                                        <input
                                            type="text"
                                            name="student_name"
                                            required
                                            value={formData.student_name}
                                            onChange={handleChange}
                                            placeholder="Enter student's full name"
                                            className="w-full bg-rice-white border border-border-soft text-text-primary px-4 py-3 transition-all duration-300 focus:outline-none focus:border-primary-red focus:ring-1 focus:ring-primary-red/50 focus:bg-white focus:shadow-[0_0_15px_rgba(210,31,43,0.1)]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-text-primary mb-2">Grade *</label>
                                        <input
                                            type="text"
                                            name="grade"
                                            required
                                            value={formData.grade}
                                            onChange={handleChange}
                                            placeholder="e.g., 8th Grade"
                                            className="w-full bg-rice-white border border-border-soft text-text-primary px-4 py-3 transition-all duration-300 focus:outline-none focus:border-primary-red focus:ring-1 focus:ring-primary-red/50 focus:bg-white focus:shadow-[0_0_15px_rgba(210,31,43,0.1)]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-text-primary mb-2">School *</label>
                                        <select
                                            name="school"
                                            required
                                            value={formData.school}
                                            onChange={handleChange}
                                            className="w-full bg-rice-white border border-border-soft text-text-primary px-4 py-3 transition-all duration-300 focus:outline-none focus:border-primary-red focus:ring-1 focus:ring-primary-red/50 focus:bg-white focus:shadow-[0_0_15px_rgba(210,31,43,0.1)] appearance-none"
                                        >
                                            <option value="" disabled>Select school</option>
                                            <option value="School of India KR Pet">School of India KR Pet</option>
                                            <option value="DPS North">DPS North</option>
                                            <option value="DPS South">DPS South</option>
                                            <option value="DPS East">DPS East</option>
                                            <option value="DPS West">DPS West</option>
                                            <option value="DPS E-City">DPS E-City</option>
                                            <option value="DPS Mysore">DPS Mysore</option>
                                            <option value="School of India">School of India</option>
                                        </select>
                                    </div>
                                    <div className="pt-4">
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            type="button"
                                            onClick={nextStep}
                                            className="w-full bg-deep-indigo text-white py-4 text-lg font-bold hover:bg-black transition-colors shadow-md group"
                                        >
                                            Next <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                                        </motion.button>
                                    </div>
                                </motion.div>
                            )}

                            {/* STEP 2 */}
                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-4"
                                >
                                    <h3 className="text-xl font-bold font-serif text-text-primary mb-4">Step 2: Parent Information</h3>
                                    <div>
                                        <label className="block text-sm font-bold text-text-primary mb-2">Parent Name *</label>
                                        <input
                                            type="text"
                                            name="parent_name"
                                            required
                                            value={formData.parent_name}
                                            onChange={handleChange}
                                            placeholder="Enter parent's name"
                                            className="w-full bg-rice-white border border-border-soft text-text-primary px-4 py-3 transition-all duration-300 focus:outline-none focus:border-primary-red focus:ring-1 focus:ring-primary-red/50 focus:bg-white focus:shadow-[0_0_15px_rgba(210,31,43,0.1)]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-text-primary mb-2">Email *</label>
                                        <input
                                            type="email"
                                            name="parent_email"
                                            required
                                            value={formData.parent_email}
                                            onChange={handleChange}
                                            placeholder="email@example.com"
                                            className="w-full bg-rice-white border border-border-soft text-text-primary px-4 py-3 transition-all duration-300 focus:outline-none focus:border-primary-red focus:ring-1 focus:ring-primary-red/50 focus:bg-white focus:shadow-[0_0_15px_rgba(210,31,43,0.1)]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-text-primary mb-2">Phone *</label>
                                        <input
                                            type="tel"
                                            name="parent_phone"
                                            required
                                            value={formData.parent_phone}
                                            onChange={handleChange}
                                            placeholder="+91 XXXXX XXXXX"
                                            className="w-full bg-rice-white border border-border-soft text-text-primary px-4 py-3 transition-all duration-300 focus:outline-none focus:border-primary-red focus:ring-1 focus:ring-primary-red/50 focus:bg-white focus:shadow-[0_0_15px_rgba(210,31,43,0.1)]"
                                        />
                                    </div>
                                    <div className="flex gap-4 pt-4">
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            type="button"
                                            onClick={prevStep}
                                            className="w-1/3 bg-gray-200 text-text-primary py-4 text-lg font-bold hover:bg-gray-300 transition-colors shadow-md group"
                                        >
                                            <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">&larr;</span> Back
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            type="button"
                                            onClick={nextStep}
                                            className="w-2/3 bg-deep-indigo text-white py-4 text-lg font-bold hover:bg-black transition-colors shadow-md group"
                                        >
                                            Next <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                                        </motion.button>
                                    </div>
                                </motion.div>
                            )}

                            {/* STEP 3 */}
                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-4"
                                >
                                    <h3 className="text-xl font-bold font-serif text-text-primary mb-4">Step 3: Passport Information</h3>

                                    <div>
                                        <label className="block text-sm font-bold text-text-primary mb-4">
                                            Is your child's passport valid for 6 months from October 2026 (i.e., valid until May 2027)? *
                                        </label>
                                        <div className="space-y-3">
                                            <label className="flex items-start gap-3 cursor-pointer p-3 border border-border-soft rounded hover:bg-rice-white transition-colors">
                                                <input
                                                    type="radio"
                                                    name="passport_status"
                                                    required
                                                    value="Yes, passport is valid until May 2027 or later"
                                                    checked={formData.passport_status === 'Yes, passport is valid until May 2027 or later'}
                                                    onChange={handleChange}
                                                    className="mt-1 w-4 h-4 text-primary-red focus:ring-primary-red border-border-soft"
                                                />
                                                <span className="text-text-primary text-sm font-medium">Yes, passport is valid until May 2027 or later</span>
                                            </label>
                                            <label className="flex items-start gap-3 cursor-pointer p-3 border border-border-soft rounded hover:bg-rice-white transition-colors">
                                                <input
                                                    type="radio"
                                                    name="passport_status"
                                                    required
                                                    value="No, passport expires before May 2027"
                                                    checked={formData.passport_status === 'No, passport expires before May 2027'}
                                                    onChange={handleChange}
                                                    className="mt-1 w-4 h-4 text-primary-red focus:ring-primary-red border-border-soft"
                                                />
                                                <span className="text-text-primary text-sm font-medium">No, passport expires before May 2027</span>
                                            </label>
                                            <label className="flex items-start gap-3 cursor-pointer p-3 border border-border-soft rounded hover:bg-rice-white transition-colors">
                                                <input
                                                    type="radio"
                                                    name="passport_status"
                                                    required
                                                    value="Passport not yet obtained"
                                                    checked={formData.passport_status === 'Passport not yet obtained'}
                                                    onChange={handleChange}
                                                    className="mt-1 w-4 h-4 text-primary-red focus:ring-primary-red border-border-soft"
                                                />
                                                <span className="text-text-primary text-sm font-medium">Passport not yet obtained</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="bg-red-50 p-5 mt-6 border-l-4 border-primary-red">
                                        <p className="text-sm text-text-primary font-bold mb-1">Important Note:</p>
                                        <p className="text-sm text-text-secondary leading-relaxed">
                                            If your child doesn't have a passport or it expires before May 2027, please apply immediately under the Tatkal scheme. Contact us at <a href="mailto:mail@themodernclassroom.in" className="text-primary-red font-medium hover:underline">mail@themodernclassroom.in</a> or <a href="tel:+919900786677" className="text-primary-red font-medium hover:underline">+91-9900786677</a> for assistance.
                                        </p>
                                    </div>

                                    <div className="flex gap-4 pt-4">
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            type="button"
                                            onClick={prevStep}
                                            className="w-1/3 bg-gray-200 text-text-primary py-4 text-lg font-bold hover:bg-gray-300 transition-colors shadow-md group"
                                        >
                                            <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">&larr;</span> Back
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-2/3 bg-primary-red text-white py-4 text-lg font-bold hover:bg-deep-indigo transition-colors shadow-md disabled:bg-opacity-50 disabled:cursor-not-allowed group"
                                        >
                                            {isSubmitting ? 'Submitting...' : <>Reserve Orientation Seat <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span></>}
                                        </motion.button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <p className="text-xs text-text-secondary text-center mt-6">
                            Your data is secure. You will be redirected to the confirmation page.
                        </p>

                    </form>
                </motion.div>

                {/* Repositioned Grid Below Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="w-full max-w-2xl mt-10"
                >
                    <div className="grid sm:grid-cols-2 gap-4 text-left">
                        {[
                            { title: 'Complete Itinerary', desc: 'Review the detailed day-by-day schedule.' },
                            { title: 'Safety Framework', desc: 'Understand our strict 1:20 supervision protocols.' },
                            { title: 'Investment Structure', desc: 'See the full transparent financial breakdown.' },
                            { title: 'Live Q&A', desc: 'Get all your specific questions answered directly.' }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-5 border border-border-soft shadow-sm relative overflow-hidden group hover:border-kyoto-gold/50 hover:shadow-md transition-all">
                                <div className="absolute top-0 left-0 w-1 h-full bg-[#B89B5E] opacity-50 group-hover:opacity-100 transition-opacity"></div>
                                <h4 className="font-bold font-serif text-text-primary text-[15px] uppercase tracking-wider mb-1">{item.title}</h4>
                                <p className="text-xs text-text-secondary font-sans">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
