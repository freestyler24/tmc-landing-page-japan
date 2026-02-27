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
        <section id="register" className="bg-[#F5F3EF] ma-spacing-mob ma-spacing-desk relative border-t border-[#e6dac3]">
            {/* Subtle wave pattern */}
            <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.08, backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg stroke='%23c0b090' stroke-width='1' fill='none'%3E%3Ccircle cx='40' cy='40' r='10'/%3E%3Ccircle cx='40' cy='40' r='20'/%3E%3Ccircle cx='40' cy='40' r='30'/%3E%3Ccircle cx='40' cy='40' r='40'/%3E%3C/g%3E%3C/svg%3E")` }}></div>
            <div className="container-max max-w-4xl flex flex-col items-center relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">
                        Register for the Parent Orientation <br className="hidden md:block" />— Japan 2026
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-8">
                        Submitting this form reserves your seat for the orientation session where we will cover:
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8 text-left">
                        {[
                            { title: 'Complete Itinerary', desc: 'Review the detailed day-by-day schedule.' },
                            { title: 'Safety Framework', desc: 'Understand our strict 1:20 supervision protocols.' },
                            { title: 'Investment Structure', desc: 'See the full transparent financial breakdown.' },
                            { title: 'Live Q&A', desc: 'Get all your specific questions answered directly.' }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-5 border border-gray-100 shadow-sm relative overflow-hidden group hover:border-gray-200 hover:shadow-md transition-all">
                                <div className="absolute top-0 left-0 w-1 h-full bg-primary-red opacity-50 group-hover:opacity-100 transition-opacity"></div>
                                <h4 className="font-bold text-charcoal text-sm uppercase tracking-wider mb-1">{item.title}</h4>
                                <p className="text-xs text-gray-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="inline-block bg-gray-100 text-gray-600 px-4 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider mb-4">
                        Note: This does not confirm enrolment
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full max-w-2xl bg-white p-8 md:p-12 shadow-lg border-t-4 border-primary-red border border-[#e6dac3]"
                >

                    <div className="flex justify-between mb-8">
                        {[1, 2, 3].map((num) => (
                            <motion.div
                                key={num}
                                animate={{ backgroundColor: step >= num ? '#E31837' : '#E5E7EB' }}
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
                                    <h3 className="text-xl font-bold text-charcoal mb-4">Step 1: Student Information</h3>
                                    <div>
                                        <label className="block text-sm font-bold text-charcoal mb-2">Student Full Name *</label>
                                        <input
                                            type="text"
                                            name="student_name"
                                            required
                                            value={formData.student_name}
                                            onChange={handleChange}
                                            placeholder="Enter student's full name"
                                            className="w-full bg-gray-50 border border-gray-200 text-charcoal px-4 py-3 focus:outline-none focus:border-primary-red focus:bg-white"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-charcoal mb-2">Grade *</label>
                                        <input
                                            type="text"
                                            name="grade"
                                            required
                                            value={formData.grade}
                                            onChange={handleChange}
                                            placeholder="e.g., 8th Grade"
                                            className="w-full bg-gray-50 border border-gray-200 text-charcoal px-4 py-3 focus:outline-none focus:border-primary-red focus:bg-white"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-charcoal mb-2">School *</label>
                                        <select
                                            name="school"
                                            required
                                            value={formData.school}
                                            onChange={handleChange}
                                            className="w-full bg-gray-50 border border-gray-200 text-charcoal px-4 py-3 focus:outline-none focus:border-primary-red focus:bg-white appearance-none"
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
                                        <button
                                            type="button"
                                            onClick={nextStep}
                                            className="w-full bg-charcoal text-white py-4 text-lg font-bold hover:bg-black transition-colors shadow-md transform hover:-translate-y-0.5"
                                        >
                                            Next &rarr;
                                        </button>
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
                                    <h3 className="text-xl font-bold text-charcoal mb-4">Step 2: Parent Information</h3>
                                    <div>
                                        <label className="block text-sm font-bold text-charcoal mb-2">Parent Name *</label>
                                        <input
                                            type="text"
                                            name="parent_name"
                                            required
                                            value={formData.parent_name}
                                            onChange={handleChange}
                                            placeholder="Enter parent's name"
                                            className="w-full bg-gray-50 border border-gray-200 text-charcoal px-4 py-3 focus:outline-none focus:border-primary-red focus:bg-white"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-charcoal mb-2">Email *</label>
                                        <input
                                            type="email"
                                            name="parent_email"
                                            required
                                            value={formData.parent_email}
                                            onChange={handleChange}
                                            placeholder="email@example.com"
                                            className="w-full bg-gray-50 border border-gray-200 text-charcoal px-4 py-3 focus:outline-none focus:border-primary-red focus:bg-white"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-charcoal mb-2">Phone *</label>
                                        <input
                                            type="tel"
                                            name="parent_phone"
                                            required
                                            value={formData.parent_phone}
                                            onChange={handleChange}
                                            placeholder="+91 XXXXX XXXXX"
                                            className="w-full bg-gray-50 border border-gray-200 text-charcoal px-4 py-3 focus:outline-none focus:border-primary-red focus:bg-white"
                                        />
                                    </div>
                                    <div className="flex gap-4 pt-4">
                                        <button
                                            type="button"
                                            onClick={prevStep}
                                            className="w-1/3 bg-gray-200 text-charcoal py-4 text-lg font-bold hover:bg-gray-300 transition-colors shadow-md transform hover:-translate-y-0.5"
                                        >
                                            &larr; Back
                                        </button>
                                        <button
                                            type="button"
                                            onClick={nextStep}
                                            className="w-2/3 bg-charcoal text-white py-4 text-lg font-bold hover:bg-black transition-colors shadow-md transform hover:-translate-y-0.5"
                                        >
                                            Next &rarr;
                                        </button>
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
                                    <h3 className="text-xl font-bold text-charcoal mb-4">Step 3: Passport Information</h3>

                                    <div>
                                        <label className="block text-sm font-bold text-charcoal mb-4">
                                            Is your child's passport valid for 6 months from October 2026 (i.e., valid until May 2027)? *
                                        </label>
                                        <div className="space-y-3">
                                            <label className="flex items-start gap-3 cursor-pointer p-3 border border-gray-200 rounded hover:bg-gray-50 transition-colors">
                                                <input
                                                    type="radio"
                                                    name="passport_status"
                                                    required
                                                    value="Yes, passport is valid until May 2027 or later"
                                                    checked={formData.passport_status === 'Yes, passport is valid until May 2027 or later'}
                                                    onChange={handleChange}
                                                    className="mt-1 w-4 h-4 text-primary-red focus:ring-primary-red border-gray-300"
                                                />
                                                <span className="text-gray-700 text-sm font-medium">Yes, passport is valid until May 2027 or later</span>
                                            </label>
                                            <label className="flex items-start gap-3 cursor-pointer p-3 border border-gray-200 rounded hover:bg-gray-50 transition-colors">
                                                <input
                                                    type="radio"
                                                    name="passport_status"
                                                    required
                                                    value="No, passport expires before May 2027"
                                                    checked={formData.passport_status === 'No, passport expires before May 2027'}
                                                    onChange={handleChange}
                                                    className="mt-1 w-4 h-4 text-primary-red focus:ring-primary-red border-gray-300"
                                                />
                                                <span className="text-gray-700 text-sm font-medium">No, passport expires before May 2027</span>
                                            </label>
                                            <label className="flex items-start gap-3 cursor-pointer p-3 border border-gray-200 rounded hover:bg-gray-50 transition-colors">
                                                <input
                                                    type="radio"
                                                    name="passport_status"
                                                    required
                                                    value="Passport not yet obtained"
                                                    checked={formData.passport_status === 'Passport not yet obtained'}
                                                    onChange={handleChange}
                                                    className="mt-1 w-4 h-4 text-primary-red focus:ring-primary-red border-gray-300"
                                                />
                                                <span className="text-gray-700 text-sm font-medium">Passport not yet obtained</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="bg-red-50 p-5 mt-6 border-l-4 border-primary-red">
                                        <p className="text-sm text-charcoal font-bold mb-1">Important Note:</p>
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            If your child doesn't have a passport or it expires before May 2027, please apply immediately under the Tatkal scheme. Contact us at <a href="mailto:mail@themodernclassroom.in" className="text-primary-red font-medium hover:underline">mail@themodernclassroom.in</a> or <a href="tel:+919900786677" className="text-primary-red font-medium hover:underline">+91-9900786677</a> for assistance.
                                        </p>
                                    </div>

                                    <div className="flex gap-4 pt-4">
                                        <button
                                            type="button"
                                            onClick={prevStep}
                                            className="w-1/3 bg-gray-200 text-charcoal py-4 text-lg font-bold hover:bg-gray-300 transition-colors shadow-md transform hover:-translate-y-0.5"
                                        >
                                            &larr; Back
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-2/3 bg-primary-red text-white py-4 text-lg font-bold hover:bg-black transition-colors shadow-md disabled:bg-opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
                                        >
                                            {isSubmitting ? 'Submitting...' : 'Reserve Orientation Seat'}
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <p className="text-xs text-gray-500 text-center mt-6">
                            Your data is secure. You will be redirected to the confirmation page.
                        </p>

                    </form>
                </motion.div>

            </div>
        </section>
    );
}
