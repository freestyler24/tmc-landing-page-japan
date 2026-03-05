'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import faqDataRaw from '../data-faq.json';

interface FAQ {
    category: string;
    question: string;
    answer: string;
}

const faqs: FAQ[] = faqDataRaw as FAQ[];

const categories = [
    { id: 'All', name: 'All Questions', icon: '📄' },
    { id: 'Tour Details', name: 'Tour Details', icon: '📍' },
    { id: 'Payments & Pricing', name: 'Payments & Pricing', icon: '💳' },
    { id: 'Safety & Logistics', name: 'Safety & Logistics', icon: '🛡️' },
    { id: 'Registration & Preparation', name: 'Registration', icon: '📝' },
];

function formatAnswer(answer: string): string {
    return answer
        .split('\n\n')
        .map(p =>
            '<p>' +
            p.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br />') +
            '</p>'
        )
        .join('');
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredFaqs = useMemo(() => {
        return faqs.filter(faq => {
            const matchesCategory =
                activeCategory === 'All' || faq.category === activeCategory;
            const q = searchQuery.toLowerCase();
            const matchesSearch =
                faq.question.toLowerCase().includes(q) ||
                faq.answer.toLowerCase().includes(q);
            return matchesCategory && matchesSearch;
        });
    }, [searchQuery, activeCategory]);

    const getCategoryCount = (catId: string) => {
        if (catId === 'All') return faqs.length;
        return faqs.filter(f => f.category === catId).length;
    };

    return (
        <section id="faqs" className="bg-deep-indigo ma-spacing-mob ma-spacing-desk relative overflow-hidden border-t border-b border-white/10">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-[-10%] w-[40%] h-[40%] bg-primary-red/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-kyoto-gold/5 rounded-full blur-3xl pointer-events-none"></div>

            {/* Seigaiha Wave Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg stroke='%23ffffff' stroke-width='1' fill='none'%3E%3Ccircle cx='40' cy='40' r='10'/%3E%3Ccircle cx='40' cy='40' r='20'/%3E%3Ccircle cx='40' cy='40' r='30'/%3E%3Ccircle cx='40' cy='40' r='40'/%3E%3Ccircle cx='0' cy='80' r='10'/%3E%3Ccircle cx='0' cy='80' r='20'/%3E%3Ccircle cx='0' cy='80' r='30'/%3E%3Ccircle cx='0' cy='80' r='40'/%3E%3Ccircle cx='80' cy='80' r='10'/%3E%3Ccircle cx='80' cy='80' r='20'/%3E%3Ccircle cx='80' cy='80' r='30'/%3E%3Ccircle cx='80' cy='80' r='40'/%3E%3Ccircle cx='80' cy='0' r='10'/%3E%3Ccircle cx='80' cy='0' r='20'/%3E%3Ccircle cx='80' cy='0' r='30'/%3E%3Ccircle cx='80' cy='0' r='40'/%3E%3Ccircle cx='0' cy='0' r='10'/%3E%3Ccircle cx='0' cy='0' r='20'/%3E%3Ccircle cx='0' cy='0' r='30'/%3E%3Ccircle cx='0' cy='0' r='40'/%3E%3C/g%3E%3C/svg%3E")` }}></div>

            {/* Vertical Typography (Watermarks) */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 0.04 }} viewport={{ once: true }} className="absolute left-8 md:left-16 top-1/4 pointer-events-none hidden lg:block">
                <p className="text-white font-serif text-6xl writing-vertical-rl tracking-widest">
                    質問
                </p>
            </motion.div>

            {/* Sakura Particles */}
            <motion.div animate={{ y: [0, 20, 0], x: [0, 15, 0], rotate: [0, -25, 0] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[15%] right-[20%] w-3 h-3 rounded-bl-xl rounded-tr-xl bg-primary-red/20 blur-[1px] pointer-events-none" />
            <motion.div animate={{ y: [0, -30, 0], x: [0, -10, 0], rotate: [0, 45, 0] }} transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-[25%] left-[10%] w-4 h-4 rounded-tl-xl rounded-br-xl bg-kyoto-gold/20 blur-[1px] pointer-events-none" />

            <div className="container-max max-w-4xl relative z-10 px-4">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="text-primary-red text-[11px] md:text-[13px] uppercase tracking-[0.3em] font-semibold mb-4 block">
                        Clarifications
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
                        Frequently Asked Questions
                    </h2>
                    <div className="w-12 h-px bg-primary-red mx-auto mb-6"></div>
                    <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Everything you need to know about the Japan 2026 tour
                    </p>
                </motion.div>

                {/* Search Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-xl mx-auto mb-10 relative group"
                >
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 group-focus-within:text-primary-red transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Search questions..."
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            setOpenIndex(null);
                        }}
                        className="block w-full pl-14 pr-4 py-4 rounded-sm border border-white/20 bg-white/5 text-white placeholder-white/50 focus:outline-none focus:border-primary-red/50 focus:ring-1 focus:ring-primary-red/50 transition-all shadow-sm"
                    />
                </motion.div>

                {/* Category Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex md:flex-wrap overflow-x-auto gap-3 mb-12 pb-2 md:justify-center px-4 md:px-0 -mx-4 md:mx-0 [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none]"
                >
                    {categories.map((cat) => {
                        const isActive = activeCategory === cat.id;
                        const count = getCategoryCount(cat.id);
                        return (
                            <button
                                key={cat.id}
                                onClick={() => {
                                    setActiveCategory(cat.id);
                                    setOpenIndex(null);
                                }}
                                className={`flex items-center gap-2 px-6 py-3 rounded-sm text-[13px] uppercase tracking-[0.1em] font-semibold transition-all shadow-sm ${isActive
                                    ? 'bg-primary-red text-white border border-primary-red/0'
                                    : 'bg-white/5 text-white/70 border border-white/20 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                <span className={`text-base ${isActive ? 'opacity-100' : 'opacity-70 grayscale'}`}>{cat.icon}</span>
                                <span>{cat.name}</span>
                                <span
                                    className={`ml-1 text-[10px] py-0.5 px-2 rounded-sm ${isActive
                                        ? 'bg-white/20 text-white'
                                        : 'bg-gray-800 text-gray-500'
                                        }`}
                                >
                                    {count}
                                </span>
                            </button>
                        );
                    })}
                </motion.div>

                {/* FAQ Accordion */}
                <motion.div
                    key={activeCategory + searchQuery}
                    initial="hidden"
                    animate="visible"
                    variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
                    className="space-y-4 mb-16 min-h-[400px]"
                >
                    {filteredFaqs.length === 0 && (
                        <div className="text-center text-gray-500 py-10">
                            No questions found matching your search.
                        </div>
                    )}

                    {filteredFaqs.map((faq) => {
                        const globalIdx = faqs.findIndex(f => f.question === faq.question);
                        const isOpen = openIndex === globalIdx;

                        return (
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 15 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
                                }}
                                key={faq.question}
                                className="border border-white/20 bg-white/5 overflow-hidden transition-all hover:border-white/40 rounded-sm"
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : globalIdx)}
                                    className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none group"
                                >
                                    <span className={`font-serif text-lg md:text-xl pr-8 transition-colors ${isOpen ? 'text-primary-red' : 'text-white group-hover:text-white/80'}`}>
                                        {faq.question}
                                    </span>
                                    <span
                                        className={`transition-transform duration-300 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border ${isOpen ? 'rotate-180 border-primary-red/30 bg-primary-red/10 text-primary-red' : 'border-white/20 text-white/50 group-hover:border-white/40 group-hover:text-white/80'}`}
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </span>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-6 pt-2 border-t border-white/10">
                                                <div
                                                    className="text-white/80 leading-relaxed text-[15px] space-y-4"
                                                    dangerouslySetInnerHTML={{ __html: formatAnswer(faq.answer) }}
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
                            '@context': 'https://schema.org',
                            '@type': 'FAQPage',
                            mainEntity: faqs.map(faq => ({
                                '@type': 'Question',
                                name: faq.question,
                                acceptedAnswer: {
                                    '@type': 'Answer',
                                    text: faq.answer,
                                },
                            })),
                        }),
                    }}
                />

            </div>
        </section>
    );
}
