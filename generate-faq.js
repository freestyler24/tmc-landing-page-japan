import fs from 'fs';

const faqData = JSON.parse(fs.readFileSync('src/data-faq.json', 'utf8'));

// Format answer to properly handle markdown-like paragraphs (basic)
const formatAnswer = (ans) => {
    return ans.split('\n\n').map(p => {
        return `<p className="mb-2">${p.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br />')}</p>`;
    }).join('\\n');
};

const tsxContent = `
'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = ${JSON.stringify(faqData, null, 4)};

const categories = [
    { id: 'All', name: 'All Questions', icon: '📄' },
    { id: 'Tour Details', name: 'Tour Details', icon: '📍' },
    { id: 'Payments & Pricing', name: 'Payments & Pricing', icon: '💳' },
    { id: 'Safety & Logistics', name: 'Safety & Logistics', icon: '🛡️' },
    { id: 'Registration & Preparation', name: 'Registration', icon: '📝' }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredFaqs = useMemo(() => {
        return faqs.filter(faq => {
            const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
            const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                  faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [searchQuery, activeCategory]);

    const getCategoryCount = (catName: string) => {
        if (catName === 'All') return faqs.length;
        if (catName === 'Registration') catName = 'Registration & Preparation'; // mapping
        return faqs.filter(f => f.category === catName).length;
    };

    return (
        <section id="faqs" className="bg-alt-offwhite ma-spacing-mob ma-spacing-desk relative overflow-hidden">
            <div className="container-max max-w-4xl relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl">
                        Everything you need to know about the Japan 2026 tour
                    </p>
                </motion.div>

                {/* Search Bar */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-xl mx-auto mb-8"
                >
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <span className="text-gray-400 text-lg">🔍</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Search questions..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="block w-full pl-12 pr-4 py-4 rounded-lg border border-gray-200 bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-primary-red transition-shadow shadow-sm"
                        />
                    </div>
                </motion.div>

                {/* Categories */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((cat) => {
                        const count = getCategoryCount(cat.id === 'Registration' ? 'Registration & Preparation' : cat.id);
                        const isActive = activeCategory === (cat.id === 'Registration' ? 'Registration & Preparation' : cat.id);
                        const catId = cat.id === 'Registration' ? 'Registration & Preparation' : cat.id;

                        return (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(catId)}
                                className={\`flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-all \${
                                    isActive 
                                    ? 'bg-primary-red text-white shadow-md' 
                                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                                }\`}
                            >
                                <span className="opacity-80">{cat.icon}</span>
                                <span>{cat.name}</span>
                                <span className={\`text-xs py-0.5 px-2 rounded-full \${isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'}\`}>
                                    {count}
                                </span>
                            </button>
                        );
                    })}
                </motion.div>

                {/* FAQ Accordion list */}
                <motion.div
                    className="space-y-4 mb-16 min-h-[400px]"
                >
                    <AnimatePresence>
                        {filteredFaqs.length === 0 ? (
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center text-gray-500 py-10"
                            >
                                No questions found matching your search.
                            </motion.div>
                        ) : null}
                    </AnimatePresence>

                    {filteredFaqs.map((faq, idx) => {
                        const globalIdx = faqs.findIndex(f => f.question === faq.question);
                        return (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                key={faq.question}
                                className="border border-gray-200 bg-white overflow-hidden transition-shadow hover:shadow-md rounded-lg"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === globalIdx ? null : globalIdx)}
                                    className="w-full flex justify-between items-start p-6 text-left focus:outline-none"
                                >
                                    <span className="font-serif text-charcoal text-lg md:text-xl pr-8 font-medium">{faq.question}</span>
                                    <span
                                        className="text-gray-400 transition-transform duration-300 transform mt-1"
                                        style={{ transform: openIndex === globalIdx ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                    >
                                        ▼
                                    </span>
                                </button>

                                <AnimatePresence>
                                    {openIndex === globalIdx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                                                <div 
                                                    className="text-gray-600 leading-relaxed text-sm md:text-base space-y-4"
                                                    dangerouslySetInnerHTML={{ 
                                                        __html: faq.answer
                                                            .split('\\n\\n')
                                                            .map(p => '<p>' + p.replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>').replace(/\\n/g, '<br />') + '</p>')
                                                            .join('') 
                                                    }}
                                                />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* SEO FAQ Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": faqs.map(faq => ({
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
\`;

fs.writeFileSync('src/components/FAQ.tsx', tsxContent);
