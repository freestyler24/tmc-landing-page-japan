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
        <section
            className="bg-[#F9F6F0] relative overflow-hidden pt-[100px] pb-14 md:pt-[160px] md:pb-[120px]"
        >
            {/* Background Pattern with reduced opacity */}
            <div
                className="absolute inset-0 opacity-[0.35] md:opacity-50 pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg stroke='%23d8c8b8' stroke-width='1.5' fill='none'%3E%3Ccircle cx='40' cy='40' r='10'/%3E%3Ccircle cx='40' cy='40' r='20'/%3E%3Ccircle cx='40' cy='40' r='30'/%3E%3Ccircle cx='40' cy='40' r='40'/%3E%3Ccircle cx='0' cy='80' r='10'/%3E%3Ccircle cx='0' cy='80' r='20'/%3E%3Ccircle cx='0' cy='80' r='30'/%3E%3Ccircle cx='0' cy='80' r='40'/%3E%3Ccircle cx='80' cy='80' r='10'/%3E%3Ccircle cx='80' cy='80' r='20'/%3E%3Ccircle cx='80' cy='80' r='30'/%3E%3Ccircle cx='80' cy='80' r='40'/%3E%3Ccircle cx='80' cy='0' r='10'/%3E%3Ccircle cx='80' cy='0' r='20'/%3E%3Ccircle cx='80' cy='0' r='30'/%3E%3Ccircle cx='80' cy='0' r='40'/%3E%3Ccircle cx='0' cy='0' r='10'/%3E%3Ccircle cx='0' cy='0' r='20'/%3E%3Ccircle cx='0' cy='0' r='30'/%3E%3Ccircle cx='0' cy='0' r='40'/%3E%3C/g%3E%3C/svg%3E")`
                }}
            ></div>

            {/* Soft radial gradient mask to ensure text is fully legible */}
            <div className="absolute inset-0 bg-radial-gradient from-[#F9F6F0]/90 via-[#F9F6F0]/60 to-transparent pointer-events-none"></div>

            <div className="container-max relative z-10 flex flex-col items-center text-center">

                {/* Core Messaging */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="max-w-[100vw] px-2 sm:px-4 md:px-0 md:max-w-4xl mx-auto mb-10 md:mb-12"
                >
                    <motion.h1 variants={fadeUp} className="text-[2.2rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl font-serif text-charcoal mb-6 md:mb-8 font-bold tracking-tight hyphens-auto break-words sm:break-normal">
                        09 DAYS. 04 CITIES.<br className="hidden sm:block" />
                        <span className="sm:hidden"> </span>ONE TRANSFORMATIONAL<br className="hidden sm:block" />
                        <span className="sm:hidden"> </span>EDUCATIONAL JOURNEY.
                    </motion.h1>
                    <motion.p variants={fadeUp} className="text-base md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
                        This is not a holiday. It is a structured international learning experience.
                    </motion.p>
                    <motion.p variants={fadeUp} className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto mt-4 mb-10">
                        Your child will not just visit Japan. They will observe how a high-functioning society thinks, moves, and operates.
                    </motion.p>
                </motion.div>

                {/* 4 Benefit Cards — 1-col mobile, 2x2 tablet, 4-col desktop */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-12 md:mb-16 w-full max-w-4xl px-4 md:px-0"
                >
                    {[
                        { title: 'Confidence', desc: 'Confidence in unfamiliar environments.' },
                        { title: 'Global Exposure', desc: 'Exposure to structured global systems.' },
                        { title: 'Cultural Awareness', desc: 'Cultural awareness beyond textbooks.' },
                        { title: 'Guided Independence', desc: 'Guided independence within supervision.' }
                    ].map((benefit, i) => (
                        <motion.div variants={fadeUp} key={i} className="bg-white/80 backdrop-blur-sm p-4 md:p-6 border border-[#e6dac3] shadow-sm text-left relative overflow-hidden group hover:shadow-md transition-shadow">
                            <div className="w-1 h-full bg-[#9e8f79] absolute left-0 top-0 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                            <h3 className="text-[#7a6c56] font-serif font-bold text-sm md:text-lg mb-1 md:mb-2">{benefit.title}</h3>
                            <p className="text-gray-600 text-xs md:text-sm">{benefit.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Countdown Timer */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="flex justify-center gap-4 sm:gap-6 md:gap-10 mb-12 md:mb-16 text-center"
                >
                    {[
                        { label: 'Days', value: '234' },
                        { label: 'Hours', value: '14' },
                        { label: 'Minutes', value: '45' }
                    ].map((time, i) => (
                        <motion.div
                            variants={{
                                hidden: { scale: 0.8, opacity: 0 },
                                visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 100 } }
                            }}
                            key={i}
                            className="flex flex-col items-center"
                        >
                            <div className="border-[4px] md:border-[6px] border-[#a89b83] text-[#7a6c56] bg-[#F9F6F0]/90 backdrop-blur-md font-serif font-bold text-2xl sm:text-3xl md:text-4xl w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 flex items-center justify-center rounded-full shadow-lg border-opacity-90">
                                {time.value}
                            </div>
                            <span className="text-[10px] sm:text-xs md:text-sm font-bold tracking-widest text-[#7a6c56] mt-2 sm:mt-3 uppercase">{time.label}</span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Primary CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="mb-16"
                >
                    <a
                        href="#register"
                        className="inline-block bg-primary-red text-white px-8 md:px-12 py-3 md:py-4 rounded-sm text-sm md:text-lg font-semibold hover:bg-black transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        Register
                    </a>
                </motion.div>

                {/* School Logos (Partner Layer) */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className="flex flex-wrap items-center justify-center gap-6 md:gap-12 opacity-[0.85] mix-blend-multiply border-y border-gray-300 py-6 px-6 sm:px-12 w-full max-w-5xl mx-auto"
                >
                    <Image src="/images/TMC logo.png" alt="TMC Logo" width={160} height={80} className="object-contain h-10 sm:h-12 md:h-16 w-auto" />
                    <Image src="/images/DPS School Logo.png" alt="DPS Logo" width={160} height={80} className="object-contain h-10 sm:h-12 md:h-16 w-auto" />
                    <Image src="/images/SOI Logo.jpg" alt="SOI Logo" width={160} height={80} className="object-contain h-10 sm:h-12 md:h-16 w-auto mix-blend-multiply" />
                </motion.div>

            </div>
        </section>
    );
}
