'use client';

import { useState } from 'react';

const copy = [
    {
        question: "Is this a tourism trip?",
        answer: "No. This is an intensive educational immersion. While students visit iconic locations, the focus is on understanding the systems, history, and discipline that make these places function. Every day has specific learning objectives."
    },
    {
        question: "What is the student-to-mentor ratio?",
        answer: "We maintain a strict 1:20 ratio. Mentors are experienced educators trained in facilitating our specific curriculum and ensuring student safety."
    },
    {
        question: "How are dietary requirements handled?",
        answer: "Japan’s culinary landscape is diverse. Our operational team manages all dietary restrictions (vegetarian, allergies, halal-friendly) meticulously, having vetted all partner restaurants in advance."
    },
    {
        question: "What is the payment schedule?",
        answer: "The programme requires an initial non-refundable deposit of ₹9,999 to secure the seat. The second installment (₹1,20,000) is due by 1 July 2026, and the final installment (₹1,60,000) is due by 1 September 2026."
    },
    {
        question: "Do parents accompany the students?",
        answer: "No. This programme is designed to foster self-reliance and independence in students. Our professional mentors provide all necessary care and supervision."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faqs" className="bg-alt-offwhite ma-spacing-mob ma-spacing-desk relative overflow-hidden">
            <div className="container-max max-w-4xl relative z-10">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
                        Clarity & Expectations
                    </h2>
                    <p className="text-lg text-gray-600">
                        Address your queries regarding the structure and standards of the 2026 cohort.
                    </p>
                </div>

                <div className="space-y-4 mb-16">
                    {copy.map((faq, idx) => (
                        <div
                            key={idx}
                            className="border border-gray-200 bg-white overflow-hidden transition-all duration-300"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                            >
                                <span className="font-serif text-charcoal text-xl pr-8">{faq.question}</span>
                                <span className={`text-primary-red transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100 pb-6 px-6' : 'max-h-0 opacity-0 px-6'
                                    }`}
                            >
                                <p className="text-gray-600 leading-relaxed pt-2 border-t border-gray-100">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

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
