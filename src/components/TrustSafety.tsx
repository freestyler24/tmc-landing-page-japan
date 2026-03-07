"use client";

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, animate } from 'framer-motion';

export default function TrustSafety() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    const countRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(countRef, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            const controls = animate(0, 20, {
                duration: 2,
                ease: "easeOut",
                onUpdate: (latest) => {
                    if (countRef.current) {
                        countRef.current.textContent = `1:${Math.round(latest).toString().padStart(2, '0')}`;
                    }
                }
            });
            return controls.stop;
        }
    }, [isInView]);

    return (
        <section id="safety" ref={containerRef} className="bg-deep-indigo ma-spacing-mob ma-spacing-desk border-b border-white/10 relative overflow-hidden">
            {/* Subtle wave pattern with parallax */}
            <motion.div
                className="absolute inset-0 pointer-events-none origin-top"
                style={{
                    y: yBg,
                    opacity: 0.05,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg stroke='%23ffffff' stroke-width='1' fill='none'%3E%3Ccircle cx='40' cy='40' r='10'/%3E%3Ccircle cx='40' cy='40' r='20'/%3E%3Ccircle cx='40' cy='40' r='30'/%3E%3Ccircle cx='40' cy='40' r='40'/%3E%3C/g%3E%3C/svg%3E")`
                }}
            />

            <div className="container-max relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-serif text-white mb-4 md:mb-6">
                        Engineered for Safety. Designed for Growth.
                    </h2>
                    <p className="text-base md:text-lg text-[rgba(255,255,255,0.92)] max-w-2xl mx-auto">
                        Your child&apos;s safety and well-being are non-negotiable. Every element has been designed with care.
                    </p>
                </motion.div>

                {/* 4 Stat Cards */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
                >
                    {[
                        {
                            icon: (
                                <svg className="w-8 h-8 text-primary-red mx-auto mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                            ),
                            title: '1:20 Teacher Ratio',
                            desc: 'Trained Tour Directors with structured oversight'
                        },
                        {
                            icon: (
                                <svg className="w-8 h-8 text-primary-red mx-auto mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="7" width="20" height="14" rx="2" />
                                    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                                    <line x1="12" y1="12" x2="12" y2="16" />
                                    <line x1="10" y1="14" x2="14" y2="14" />
                                </svg>
                            ),
                            title: '4-Star Hotels',
                            desc: 'Twin sharing rooms ensuring comfort and safety'
                        },
                        {
                            icon: (
                                <svg className="w-8 h-8 text-primary-red mx-auto mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 11l19-9-9 19-2-8-8-2z" />
                                </svg>
                            ),
                            title: 'All Meals Included',
                            desc: 'Mix of Indian, Continental, and Japanese cuisine'
                        },
                        {
                            icon: (
                                <svg className="w-8 h-8 text-primary-red mx-auto mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                                    <line x1="12" y1="22.08" x2="12" y2="12" />
                                </svg>
                            ),
                            title: 'International Flights',
                            desc: 'Return airfare with leading carriers included'
                        }
                    ].map((card, i) => (
                        <motion.div
                            key={i}
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="bg-white/5 border border-white/10 rounded-sm p-6 text-center hover:border-white/20 transition-all"
                        >
                            {card.icon}
                            <h4 className="text-white font-serif font-semibold text-sm md:text-base mb-1">{card.title}</h4>
                            <p className="text-white/60 text-xs leading-relaxed">{card.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* What's Included */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-4xl mx-auto bg-white/5 border border-white/10 shadow-sm p-6 md:p-10 hover:border-white/20 transition-all rounded-sm"
                >
                    <h3 className="text-lg font-serif font-semibold text-white mb-6">What&apos;s Included</h3>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
                        className="grid sm:grid-cols-2 gap-x-8 gap-y-3"
                    >
                        {[
                            'Return international airfare & Japan tourist visa processing',
                            '4-Star hotels with twin sharing rooms',
                            'All meals: Continental breakfast + Indian/Japanese cuisine',
                            'All entrance fees and guided tours',
                            'Bullet train experience (Tokyo to Kyoto)',
                            'Travel insurance & dedicated tour directors',
                            'Private coach with regulated driving hours',
                            'Luggage courier support (Tokyo to Osaka)'
                        ].map((item, i) => (
                            <motion.div
                                variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                                key={i}
                                className="flex items-start gap-3 text-sm text-[rgba(255,255,255,0.85)] py-2 border-b border-white/10"
                            >
                                <svg className="w-4 h-4 text-primary-red mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                                {item}
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center mt-8 md:mt-10"
                >
                    <p className="text-white/80 font-serif italic text-base md:text-lg">
                        Independence within structure. Freedom within supervision.
                    </p>
                </motion.div>

                {/* Orientation CTA Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 md:mt-24 bg-white/5 border border-white/10 rounded-sm p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-md relative overflow-hidden"
                >
                    {/* Decorative accent */}
                    <div className="absolute top-0 left-0 w-2 h-full bg-primary-red"></div>

                    <div className="flex items-center gap-4 flex-1 relative z-10 w-full md:w-auto">
                        <svg className="w-10 h-10 text-primary-red flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                        <div className="space-y-1">
                            <h3 className="text-xl md:text-2xl font-serif text-white leading-tight">
                                Your Child&apos;s Safety is Guaranteed
                            </h3>
                            <p className="text-white/70 text-sm">
                                1:20 teacher ratio, 4-star hotels, comprehensive insurance. Every detail covered.
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-auto flex-shrink-0 relative z-10">
                        <a
                            href="#register"
                            className="block w-full text-center bg-primary-red text-white px-8 py-4 rounded-sm font-semibold hover:bg-white hover:text-primary-red transition-all duration-300 group shadow-sm"
                        >
                            Register for Orientation →
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
