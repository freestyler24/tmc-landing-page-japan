'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const copy = [
    {
        question: "What does registration mean?",
        answer: "Registering reserves your seat for the Parent Orientation session. It does not confirm enrolment."
    },
    {
        question: "When is enrolment confirmed?",
        answer: "Only after attending the orientation and completing the formal enrolment process."
    },
    {
        question: "How many students travel?",
        answer: "Maximum 45 students per batch."
    },
    {
        question: "What is the supervision ratio?",
        answer: "1:20 teacher-to-student supervision."
    },
    {
        question: "Are flights and visa included?",
        answer: "Yes, return international airfare and visa processing are included."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faqs" className="bg-alt-offwhite ma-spacing-mob ma-spacing-desk relative overflow-hidden">
            <div className="container-max max-w-4xl relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
                        Frequently Asked Questions
                    </h2>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } }
                    }}
                    className="space-y-4 mb-16"
                >
                    {copy.map((faq, idx) => (
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, x: -20 },
                                visible: { opacity: 1, x: 0 }
                            }}
                            transition={{ duration: 0.4 }}
                            key={idx}
                            className="border border-gray-200 bg-white overflow-hidden transition-shadow hover:shadow-md"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                            >
                                <span className="font-serif text-charcoal text-xl pr-8">{faq.question}</span>
                                <span
                                    className="text-primary-red transition-transform duration-300"
                                    style={{ transform: openIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                >
                                    ▼
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                                            <p className="text-gray-600 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>

                {/* SEO FAQ Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": copy.map(faq => ({
                                "@type": "Question",
                                "name": faq.question,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": faq.answer
                                }
                            }))
                        })
                    }}
                />

            </div>
        </section>
    );
}
