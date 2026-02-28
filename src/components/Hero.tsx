"use client";

import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const targetDate = new Date('2026-10-01T00:00:00').getTime();

    const [timeLeft, setTimeLeft] = useState(() => {
        // Initialize with zeros or calculated time immediately to avoid hydration mismatch as much as possible, 
        // though typically it's better to just mount first.
        return { days: '234', hours: '14', minutes: '45', seconds: '00' };
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                const updatedTime = {
                    days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(3, '0'),
                    hours: String(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0'),
                    minutes: String(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0'),
                    seconds: String(Math.floor((difference % (1000 * 60)) / 1000)).padStart(2, '0')
                };
                setTimeLeft(updatedTime);
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(timer);
    }, [targetDate]);

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
    const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={containerRef} className="bg-[#111111] relative overflow-hidden pt-[110px] pb-14 md:pt-[170px] md:pb-[120px]">

            {/* Ambient Background Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-kyoto-gold/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary-red/5 rounded-full blur-3xl pointer-events-none"></div>

            {/* Background Pattern with Parallax */}
            <motion.div
                className="absolute inset-0 pointer-events-none origin-top"
                style={{
                    y: yBg,
                    opacity: 0.12,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg stroke='%23c0b090' stroke-width='1' fill='none'%3E%3Ccircle cx='40' cy='40' r='10'/%3E%3Ccircle cx='40' cy='40' r='20'/%3E%3Ccircle cx='40' cy='40' r='30'/%3E%3Ccircle cx='40' cy='40' r='40'/%3E%3Ccircle cx='0' cy='80' r='10'/%3E%3Ccircle cx='0' cy='80' r='20'/%3E%3Ccircle cx='0' cy='80' r='30'/%3E%3Ccircle cx='0' cy='80' r='40'/%3E%3Ccircle cx='80' cy='80' r='10'/%3E%3Ccircle cx='80' cy='80' r='20'/%3E%3Ccircle cx='80' cy='80' r='30'/%3E%3Ccircle cx='80' cy='80' r='40'/%3E%3Ccircle cx='80' cy='0' r='10'/%3E%3Ccircle cx='80' cy='0' r='20'/%3E%3Ccircle cx='80' cy='0' r='30'/%3E%3Ccircle cx='80' cy='0' r='40'/%3E%3Ccircle cx='0' cy='0' r='10'/%3E%3Ccircle cx='0' cy='0' r='20'/%3E%3Ccircle cx='0' cy='0' r='30'/%3E%3Ccircle cx='0' cy='0' r='40'/%3E%3C/g%3E%3C/svg%3E")`
                }}
            />

            {/* Vertical Japanese Typography (Watermarks) */}
            <motion.div
                style={{ y: yText, opacity: opacityFade }}
                className="absolute left-8 md:left-16 top-1/4 pointer-events-none hidden lg:block"
            >
                <p className="text-[#B89B5E] font-serif text-6xl writing-vertical-rl tracking-widest opacity-40">
                    成長
                </p>
            </motion.div>
            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]), opacity: opacityFade }}
                className="absolute right-8 md:right-16 top-1/3 pointer-events-none hidden lg:block"
            >
                <p className="text-[#B89B5E] font-serif text-6xl writing-vertical-rl tracking-widest opacity-40">
                    規律
                </p>
            </motion.div>

            {/* Floating Ambient Particles (Sakura abstraction) */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                    rotate: [0, 45, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 right-[20%] w-3 h-3 rounded-tr-xl rounded-bl-xl bg-primary-red/20 blur-[1px]"
            />
            <motion.div
                animate={{
                    y: [0, 30, 0],
                    x: [0, -15, 0],
                    rotate: [0, -45, 0]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-1/3 left-[15%] w-4 h-4 rounded-tl-xl rounded-br-xl bg-kyoto-gold/30 blur-[1px]"
            />

            <div className="container-max relative z-10 flex flex-col items-center text-center">


                {/* ── STUNNING GLASSMORPHISM V4 HERO ── */}

                {/* Deep Radial Glow Behind Headline - Using Primary Red */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-[#C8102E]/10 rounded-[100%] blur-[100px] pointer-events-none"></div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="max-w-5xl mx-auto px-4 sm:px-6 md:px-0 relative z-10 w-full"
                >
                    {/* The Magnetic Hook */}
                    <motion.div variants={fadeUp} className="text-center mb-10 md:mb-14 relative">
                        <p className="text-[#C8102E] font-sans font-bold tracking-[0.25em] text-[10px] md:text-xs mb-6 uppercase">
                            October 2026 &nbsp;|&nbsp; Grades 6–12 &nbsp;|&nbsp; Limited to 45 Students
                        </p>
                        <h1 className="font-serif leading-[1.05] drop-shadow-2xl">
                            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-2 md:mb-4 text-[#F5F3EF]">09 Days. 04 Cities.</span>
                            <span className="block text-4xl sm:text-6xl md:text-[76px] lg:text-[90px] text-[#B89B5E] italic font-light drop-shadow-md text-shadow-lg leading-tight md:leading-[1.1]">Where Exposure Becomes Perspective.</span>
                        </h1>
                    </motion.div>

                    {/* The Core Message - Frosted Glass Panel */}
                    <motion.div variants={fadeUp} className="relative max-w-3xl mx-auto mb-12 md:mb-16">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#B89B5E]/20 to-transparent blur-md"></div>
                        <div className="relative bg-[#111111]/40 backdrop-blur-xl border border-[#B89B5E]/30 p-6 md:p-10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] text-center">
                            <h2 className="text-[#F5F3EF] font-sans text-lg md:text-2xl lg:text-3xl font-light leading-relaxed mb-4">
                                This is not tourism.<br />
                                <span className="font-semibold text-white">It is guided international exposure.</span>
                            </h2>
                            <p className="text-[#F5F3EF]/70 font-sans text-sm md:text-base max-w-xl mx-auto">
                                Students observe how disciplined societies think, organise, and operate.
                            </p>
                        </div>
                    </motion.div>

                    {/* The 4 Pillars - Interactive Floating Badges */}
                    <motion.div variants={fadeUp} className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-20">
                        {[
                            { title: 'Confidence', desc: 'Composure in unfamiliar environments.' },
                            { title: 'Global Perspective', desc: 'Exposure to structured global systems.' },
                            { title: 'Cultural Awareness', desc: 'Understanding beyond textbooks.' },
                            { title: 'Guided Independence', desc: 'Freedom within supervision.' }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="group relative bg-[#111111]/60 backdrop-blur-md border border-white/5 p-5 md:p-6 rounded-xl hover:border-[#B89B5E]/50 transition-all duration-300 text-center cursor-default shadow-lg overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-[#B89B5E]/0 to-[#B89B5E]/0 group-hover:to-[#B89B5E]/10 transition-colors duration-500"></div>
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-[#C8102E] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-full shadow-[0_0_10px_#C8102E]"></div>
                                <h3 className="text-[#F5F3EF] font-serif font-bold text-base md:text-xl mb-2 relative z-10">{item.title}</h3>
                                <p className="text-[#F5F3EF]/60 font-sans text-[11px] md:text-xs leading-relaxed relative z-10">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* The Action Center - Countdown & CTA */}
                    <motion.div variants={fadeUp} className="flex flex-col items-center bg-gradient-to-t from-[#111111] to-transparent pt-8 pb-4">
                        <p className="text-[#B89B5E] font-sans font-semibold text-[10px] md:text-xs uppercase tracking-[0.2em] mb-6 drop-shadow-md">
                            Parent Orientation Registration Closes In
                        </p>

                        {/* Glass Timer */}
                        <div className="flex justify-center gap-4 sm:gap-6 md:gap-10 mb-10 text-center">
                            {[
                                { label: 'DAYS', value: timeLeft.days },
                                { label: 'HOURS', value: timeLeft.hours },
                                { label: 'MINUTES', value: timeLeft.minutes },
                                { label: 'SECONDS', value: timeLeft.seconds }
                            ].map((time, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <div className="bg-[#111111]/80 backdrop-blur-sm border border-white/10 w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-xl shadow-2xl mb-3 relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#C8102E]/10 to-transparent"></div>
                                        <span className="text-[#F5F3EF] font-serif text-3xl md:text-5xl font-light tabular-nums relative z-10">
                                            {time.value}
                                        </span>
                                    </div>
                                    <span className="text-[9px] md:text-[11px] font-sans font-bold tracking-[0.2em] text-[#F5F3EF]/50">{time.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <motion.a
                            href="#register"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="relative inline-flex items-center justify-center bg-[#C8102E] text-[#F5F3EF] px-10 md:px-14 py-4 md:py-5 rounded-sm overflow-hidden group shadow-[0_0_30px_rgba(200,16,46,0.4)] hover:shadow-[0_0_50px_rgba(200,16,46,0.6)] transition-shadow"
                        >
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-full group-hover:h-56 opacity-10"></span>
                            <span className="relative font-sans text-xs md:text-sm font-bold tracking-[0.15em] uppercase">
                                Attend the Parent Orientation
                            </span>
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* School Logos MOVED to the bottom */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-14 mt-16 md:mt-24 pt-8 md:pt-12 border-t border-gray-800 w-full max-w-4xl"
                >
                    <Image src="/images/TMC logo.png" alt="TMC Logo" width={300} height={150} className="object-contain h-14 sm:h-16 md:h-20 lg:h-24 w-auto opacity-80 hover:opacity-100 transition-opacity" />
                    <div className="hidden sm:block w-px h-10 md:h-16 bg-gray-700"></div>
                    <Image src="/images/updated_dps_logo.png" alt="DPS Logo" width={300} height={150} className="object-contain h-14 sm:h-16 md:h-20 lg:h-24 w-auto opacity-80 hover:opacity-100 transition-opacity" />
                    <div className="hidden sm:block w-px h-10 md:h-16 bg-gray-700"></div>
                    <Image src="/images/SOI Logo.jpg" alt="SOI Logo" width={300} height={150} className="object-contain h-14 sm:h-16 md:h-20 lg:h-24 w-auto opacity-80 hover:opacity-100 transition-opacity" />
                </motion.div>

            </div>
        </section>
    );
}
