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
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg stroke='%23e6dac3' stroke-width='1.5' fill='none'%3E%3Ccircle cx='40' cy='40' r='10'/%3E%3Ccircle cx='40' cy='40' r='20'/%3E%3Ccircle cx='40' cy='40' r='30'/%3E%3Ccircle cx='40' cy='40' r='40'/%3E%3Ccircle cx='0' cy='80' r='10'/%3E%3Ccircle cx='0' cy='80' r='20'/%3E%3Ccircle cx='0' cy='80' r='30'/%3E%3Ccircle cx='0' cy='80' r='40'/%3E%3Ccircle cx='80' cy='80' r='10'/%3E%3Ccircle cx='80' cy='80' r='20'/%3E%3Ccircle cx='80' cy='80' r='30'/%3E%3Ccircle cx='80' cy='80' r='40'/%3E%3Ccircle cx='80' cy='0' r='10'/%3E%3Ccircle cx='80' cy='0' r='20'/%3E%3Ccircle cx='80' cy='0' r='30'/%3E%3Ccircle cx='80' cy='0' r='40'/%3E%3Ccircle cx='0' cy='0' r='10'/%3E%3Ccircle cx='0' cy='0' r='20'/%3E%3Ccircle cx='0' cy='0' r='30'/%3E%3Ccircle cx='0' cy='0' r='40'/%3E%3C/g%3E%3C/svg%3E")`
            }}
        >
            <div className="container-max relative z-10 flex flex-col items-center text-center">

                {/* Core Messaging */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="max-w-4xl mx-auto mb-10 md:mb-12"
                >
                    <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-charcoal leading-[1.1] mb-6 md:mb-8 font-bold tracking-tight">
                        09 DAYS. 04 CITIES.<br />
                        ONE TRANSFORMATIONAL<br />
                        EDUCATIONAL JOURNEY.
                    </motion.h1>
                    <motion.p variants={fadeUp} className="text-base md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
                        This is not a holiday. It is a structured international learning experience.
                    </motion.p>
                    <motion.p variants={fadeUp} className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto mt-4 mb-10">
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
                    className="flex justify-center gap-6 md:gap-10 mb-12 md:mb-16 text-center"
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
                            <div className="border-[6px] border-[#9e8f79] text-[#7a6c56] bg-[#F9F6F0]/80 backdrop-blur-sm font-serif font-bold text-3xl md:text-4xl w-20 h-20 md:w-28 md:h-28 flex items-center justify-center rounded-full shadow-lg border-opacity-90">
                                {time.value}
                            </div>
                            <span className="text-xs md:text-sm font-bold tracking-widest text-[#7a6c56] mt-3 uppercase">{time.label}</span>
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
                    className="flex flex-wrap items-center justify-center gap-6 md:gap-12 opacity-80 mix-blend-multiply border-y border-gray-300 py-6 px-12"
                >
                    <Image src="/images/TMC logo.png" alt="TMC Logo" width={80} height={40} className="object-contain h-8 md:h-10 w-auto" />
                    <Image src="/images/DPS School Logo.png" alt="DPS Logo" width={80} height={40} className="object-contain h-8 md:h-10 w-auto" />
                    <Image src="/images/SOI Logo.jpg" alt="SOI Logo" width={80} height={40} className="object-contain h-8 md:h-10 w-auto mix-blend-multiply" />
                </motion.div>

            </div>
        </section>
    );
}
