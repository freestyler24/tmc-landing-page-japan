"use client";

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PulseFitHero } from '@/components/ui/pulse-fit-hero';

export default function Hero() {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const targetDate = new Date('2026-10-01T00:00:00').getTime();

    const [timeLeft, setTimeLeft] = useState(() => {
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

    const containerRef = useRef(null);

    const tourDestinations = [
        {
            image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=600&h=800&fit=crop",
            category: "METROPOLIS",
            title: "Tokyo",
        },
        {
            image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?h=800&fit=crop",
            category: "ICONIC",
            title: "Mount Fuji",
        },
        {
            image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?h=800&fit=crop",
            category: "HERITAGE",
            title: "Kyoto",
        },
        {
            image: "/osaka.jpg",
            category: "CULINARY",
            title: "Osaka",
        },
    ];

    // Decorative corner SVG for the frame
    const FrameCorner = ({ rotate = 0 }: { rotate?: number }) => (
        <svg
            width="60" height="60" viewBox="0 0 60 60" fill="none"
            className="text-kyoto-gold"
            style={{ transform: `rotate(${rotate}deg)` }}
        >
            <line x1="0" y1="0" x2="60" y2="0" stroke="currentColor" strokeWidth="1.5" />
            <line x1="0" y1="0" x2="0" y2="60" stroke="currentColor" strokeWidth="1.5" />
            <line x1="10" y1="10" x2="50" y2="10" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
            <line x1="10" y1="10" x2="10" y2="50" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
            <line x1="8" y1="0" x2="0" y2="8" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
            <line x1="18" y1="0" x2="0" y2="18" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
            <line x1="28" y1="0" x2="0" y2="28" stroke="currentColor" strokeWidth="0.8" opacity="0.2" />
        </svg>
    );

    const heroTitle = (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
            }}
            className="text-center relative w-full"
        >
            {/* ── DECORATIVE GOLD FRAME ── */}
            <motion.div
                variants={fadeUp}
                className="relative mx-auto max-w-3xl"
            >
                {/* Outer border */}
                <div className="relative border border-kyoto-gold/50 p-8 md:p-12">

                    {/* Diagonal hatching background pattern */}
                    <div
                        className="absolute inset-0 pointer-events-none opacity-[0.06]"
                        style={{
                            backgroundImage: `repeating-linear-gradient(
                                45deg,
                                #C8A84B,
                                #C8A84B 1px,
                                transparent 1px,
                                transparent 14px
                            )`
                        }}
                    />

                    {/* Corner ornaments */}
                    <div className="absolute top-0 left-0 -translate-x-px -translate-y-px">
                        <FrameCorner rotate={0} />
                    </div>
                    <div className="absolute top-0 right-0 translate-x-px -translate-y-px">
                        <FrameCorner rotate={90} />
                    </div>
                    <div className="absolute bottom-0 right-0 translate-x-px translate-y-px">
                        <FrameCorner rotate={180} />
                    </div>
                    <div className="absolute bottom-0 left-0 -translate-x-px translate-y-px">
                        <FrameCorner rotate={270} />
                    </div>

                    {/* Inner content */}
                    <div className="relative z-10">
                        <motion.p
                            variants={fadeUp}
                            className="font-sans font-medium tracking-[0.22em] text-[10px] md:text-[11px] mb-5 uppercase"
                            style={{ color: '#D21F2B' }}
                        >
                            October 2026 &nbsp;|&nbsp; Grades 6–12 &nbsp;|&nbsp; Limited to 45 Students
                        </motion.p>

                        <motion.h1 variants={fadeUp} className="font-serif leading-[1.0]">
                            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-kyoto-gold mb-3">
                                09 Days. 04 Cities.
                            </span>
                            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[80px] text-text-primary italic font-light leading-tight md:leading-[1.07]">
                                Where Exposure<br className="hidden md:block" /> Becomes Perspective.
                            </span>
                        </motion.h1>
                    </div>
                </div>

                {/* Thin accent line below frame */}
                <div className="w-px h-6 bg-kyoto-gold/40 mx-auto mt-0" />
            </motion.div>

            {/* Subtitle below frame */}
            <motion.div variants={fadeUp} className="mt-8 text-center">
                <p className="text-text-primary font-sans text-lg md:text-xl lg:text-2xl font-light leading-relaxed">
                    This is not tourism.
                </p>
                <p className="text-primary-red font-sans text-lg md:text-xl lg:text-2xl font-semibold italic leading-relaxed">
                    It is guided international exposure.
                </p>
                <p className="text-text-secondary font-sans text-sm md:text-base mt-3">
                    Students observe how disciplined societies think, organise, and operate.
                </p>
            </motion.div>
        </motion.div>
    );

    return (
        <div ref={containerRef}>
            <PulseFitHero title={heroTitle} programs={tourDestinations}>

                {/* The 4 Pillars */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 mt-10 mb-10"
                >
                    {[
                        { title: 'Confidence', desc: 'Composure in unfamiliar environments.' },
                        { title: 'Global Perspective', desc: 'Exposure to structured global systems.' },
                        { title: 'Cultural Awareness', desc: 'Understanding beyond textbooks.' },
                        { title: 'Guided Independence', desc: 'Freedom within supervision.' }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.04, y: -4 }}
                            transition={{ duration: 0.25 }}
                            className="group relative bg-white border border-kyoto-gold/40 p-5 md:p-6 hover:border-kyoto-gold/70 transition-colors duration-300 text-center cursor-default shadow-md overflow-hidden"
                        >
                            {/* Top accent line on hover */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-kyoto-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <h3 className="text-text-primary font-serif font-semibold text-sm md:text-base mb-2">{item.title}</h3>
                            <p className="text-text-secondary font-sans text-[10px] md:text-xs leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Countdown & CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.55 }}
                    className="flex flex-col items-center pb-6"
                >
                    <p className="text-text-secondary font-sans font-semibold text-[10px] md:text-xs uppercase tracking-[0.25em] mb-6">
                        Parent Orientation Registration Closes In
                    </p>

                    {/* Timer */}
                    <div className="flex justify-center gap-6 sm:gap-10 md:gap-14 mb-10 text-center">
                        {[
                            { label: 'DAYS', value: timeLeft.days },
                            { label: 'HOURS', value: timeLeft.hours },
                            { label: 'MINUTES', value: timeLeft.minutes },
                            { label: 'SECONDS', value: timeLeft.seconds }
                        ].map((time, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <span className="text-text-primary font-serif text-4xl md:text-6xl font-light tabular-nums">
                                    {time.value}
                                </span>
                                <span className="text-[9px] md:text-[10px] font-sans font-bold tracking-[0.22em] text-text-secondary mt-2">
                                    {time.label}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                        animate={{ scale: [1, 1.015, 1] }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <motion.a
                            href="#register"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="relative inline-flex items-center justify-center bg-primary-red text-white px-12 md:px-16 py-4 md:py-5 overflow-hidden group shadow hover:shadow-md transition-shadow"
                        >
                            <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                            <span className="relative font-sans text-xs md:text-sm font-bold tracking-[0.18em] uppercase">
                                Attend the Parent Orientation
                            </span>
                        </motion.a>
                    </motion.div>
                </motion.div>
            </PulseFitHero>
        </div>
    );
}
