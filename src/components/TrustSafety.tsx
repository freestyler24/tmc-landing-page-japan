"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function TrustSafety() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

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
                        Structured for Safety. Designed for Growth.
                    </h2>
                    <p className="text-base md:text-lg text-[rgba(255,255,255,0.92)] max-w-2xl mx-auto">
                        Your child&apos;s well-being is non-negotiable.
                    </p>
                </motion.div>

                {/* Safety Framework Grid */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-4xl mx-auto bg-white/5 border border-white/10 shadow-sm p-6 md:p-10 hover:border-white/20 transition-all rounded-sm"
                >
                    <h3 className="text-lg font-bold tracking-wider mb-6 text-primary-red uppercase text-center">Safety & Supervision Framework</h3>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.05 } }
                        }}
                        className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4"
                    >
                        {[
                            '1:20 teacher-to-student supervision ratio',
                            'Trained tour directors',
                            '4-star twin-sharing accommodation',
                            'Return international airfare',
                            'Visa processing',
                            'English-speaking local guides',
                            'Private transportation',
                            'Travel insurance',
                            'Maximum 45 students per batch'
                        ].map((item, i) => (
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, x: -10 },
                                    visible: { opacity: 1, x: 0 }
                                }}
                                key={i}
                                className="flex items-start gap-3 text-sm text-[rgba(255,255,255,0.92)] py-2 border-b border-white/10"
                            >
                                <span className="text-primary-red text-xs mt-1">■</span>
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

                    <div className="flex-1 space-y-3 relative z-10 w-full md:w-auto">
                        <h3 className="text-2xl md:text-3xl font-serif text-white leading-tight">
                            Independence Within Structure Begins with Trust.
                        </h3>
                        <p className="text-white/80 text-base max-w-2xl">
                            Join the Parent Orientation to review the complete safety and operational framework.
                        </p>
                    </div>
                    <div className="w-full md:w-auto flex-shrink-0 relative z-10">
                        <a
                            href="#register"
                            className="block w-full text-center bg-primary-red text-white px-8 py-4 rounded-sm font-semibold hover:bg-white hover:text-primary-red transition-all duration-300 group shadow-sm"
                        >
                            Learn More at the Orientation
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
