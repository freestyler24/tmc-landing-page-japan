"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <section className="bg-alt-offwhite relative overflow-hidden pt-[100px] pb-14 md:pt-[160px] md:pb-[120px]">
            <div className="container-max relative z-10 flex flex-col items-center text-center">

                {/* School Logos (Credibility Layer) */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className="flex items-center justify-center gap-4 md:gap-12 mb-8 md:mb-12 opacity-80 mix-blend-multiply"
                >
                    <Image src="/images/TMC logo.png" alt="TMC Logo" width={80} height={40} className="object-contain h-8 md:h-10 w-auto" />
                    <div className="w-px h-6 md:h-8 bg-gray-300"></div>
                    <Image src="/images/DPS School Logo.png" alt="DPS Logo" width={80} height={40} className="object-contain h-8 md:h-10 w-auto" />
                    <div className="w-px h-6 md:h-8 bg-gray-300"></div>
                    <Image src="/images/SOI Logo.jpg" alt="SOI Logo" width={80} height={40} className="object-contain h-8 md:h-10 w-auto mix-blend-multiply" />
                </motion.div>

                {/* Core Messaging */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="max-w-4xl mx-auto mb-6 md:mb-8"
                >
                    <motion.p variants={fadeUp} className="text-primary-red font-semibold tracking-wider text-xs md:text-sm mb-4 md:mb-6 uppercase">
                        October 2026 | Grades 6–12 | Limited to 45 Students
                    </motion.p>
                    <motion.h1 variants={fadeUp} className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif text-charcoal leading-[1.1] mb-6 md:mb-8">
                        09 Days. 04 Cities.<br />
                        <span className="text-primary-red">One Transformational Educational Journey.</span>
                    </motion.h1>
                    <motion.p variants={fadeUp} className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        This is not a holiday. It is a structured international learning experience.<br className="hidden md:block" /><br className="hidden md:block" />
                        Your child will not just visit Japan. They will observe how a high-functioning society thinks, moves, and operates.
                    </motion.p>
                </motion.div>

                {/* 4 Benefit Cards — 2x2 on mobile/tablet, 4-col on desktop */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-12 md:mb-16 w-full max-w-4xl"
                >
                    {[
                        { title: 'Confidence', desc: 'Confidence in unfamiliar environments.' },
                        { title: 'Global Exposure', desc: 'Exposure to structured global systems.' },
                        { title: 'Cultural Awareness', desc: 'Cultural awareness beyond textbooks.' },
                        { title: 'Guided Independence', desc: 'Guided independence within supervision.' }
                    ].map((benefit, i) => (
                        <motion.div variants={fadeUp} key={i} className="bg-white p-4 md:p-6 border border-gray-100 shadow-sm text-left relative overflow-hidden group hover:shadow-md transition-shadow">
                            <div className="w-1 h-full bg-primary-red absolute left-0 top-0 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                            <h3 className="text-charcoal font-serif font-bold text-sm md:text-lg mb-1 md:mb-2">{benefit.title}</h3>
                            <p className="text-gray-600 text-xs md:text-sm">{benefit.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Countdown label */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="text-xs md:text-sm font-semibold text-charcoal uppercase tracking-wider mb-3 md:mb-4"
                >
                    Orientation Registration Closing In:
                </motion.p>

                {/* Countdown Timer */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="flex justify-center gap-3 md:gap-4 mb-10 md:mb-12 text-center"
                >
                    {[
                        { label: 'DAYS', value: '234' },
                        { label: 'HOURS', value: '14' },
                        { label: 'MINUTES', value: '45' }
                    ].map((time, i) => (
                        <motion.div
                            variants={{
                                hidden: { scale: 0.8, opacity: 0 },
                                visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 100 } }
                            }}
                            key={i}
                            className="flex flex-col items-center"
                        >
                            <div className="bg-charcoal text-white font-mono text-2xl md:text-4xl w-14 h-14 md:w-20 md:h-20 flex items-center justify-center rounded-sm shadow-md">
                                {time.value}
                            </div>
                            <span className="text-[10px] md:text-xs font-bold tracking-widest text-gray-500 mt-1.5">{time.label}</span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Primary CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                >
                    <a
                        href="#register"
                        className="inline-block bg-primary-red text-white px-6 md:px-8 py-3 md:py-4 rounded-sm text-sm md:text-lg font-semibold hover:bg-black transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        Register for Parent Orientation
                    </a>
                </motion.div>

            </div>

            {/* Decorative Japanese Minimalist Element (Ma) */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 0.5, x: 0 }}
                transition={{ duration: 1 }}
                className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -z-10 transform skew-x-12 translate-x-1/2 pointer-events-none border-l border-gray-100"
            ></motion.div>
        </section>
    );
}
