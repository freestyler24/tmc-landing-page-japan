"use client";

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PulseFitHero } from '@/components/ui/pulse-fit-hero';

export default function Hero() {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const targetDate = new Date('2026-05-31T00:00:00').getTime();

    const [timeLeft, setTimeLeft] = useState(() => {
        return { days: '84', hours: '14', minutes: '45', seconds: '00' };
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;
            if (difference > 0) {
                const updatedTime = {
                    days: String(Math.floor(difference / (1000 * 60 * 60 * 24))),
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

    const pillars = [
        {
            title: 'Global Confidence',
            desc: 'Composure and adaptability in unfamiliar environments.',
            icon: (
                <svg className="w-6 h-6 text-primary-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                </svg>
            )
        },
        {
            title: 'Global Perspective',
            desc: 'Exposure to structured global systems and perspectives.',
            icon: (
                <svg className="w-6 h-6 text-primary-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
            )
        },
        {
            title: 'Cultural Awareness',
            desc: 'Deep appreciation of Japanese tradition and etiquette.',
            icon: (
                <svg className="w-6 h-6 text-primary-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21h18" />
                    <path d="M5 21V7l7-4 7 4v14" />
                    <path d="M9 21V11h6v10" />
                    <path d="M12 3v4" />
                </svg>
            )
        },
        {
            title: 'Guided Independence',
            desc: 'Freedom to explore within a safe, structured framework.',
            icon: (
                <svg className="w-6 h-6 text-primary-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                </svg>
            )
        },
    ];

    const logos = [
        { src: '/images/dps_logo.png', alt: 'Delhi Public School' },
        { src: '/images/soi_logo.png', alt: 'School of India' },
        { src: '/images/tmc_logo.png', alt: 'The Modern Classroom' },
    ];

    const heroContent = (
        <div className="relative w-full max-w-[1280px] mx-auto px-6 md:px-10 pt-2 pb-8 lg:pb-12">
            {/* Subtle Background Accent */}
            <div
                className="hidden md:block absolute pointer-events-none z-0"
                style={{
                    right: '-80px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '560px',
                    height: '560px',
                    background: 'radial-gradient(circle, rgba(210,31,43,0.07) 0%, rgba(210,31,43,0.02) 45%, rgba(210,31,43,0) 70%)'
                }}
            />

            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                }}
                className="w-full grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-stretch relative z-10"
            >
                {/* ── LEFT COLUMN ── */}
                <div className="flex flex-col gap-5 text-center items-center">

                    {/* Logos — bigger, left-aligned, uniform height */}
                    <motion.div variants={fadeUp} className="flex items-center justify-center gap-8 flex-wrap">
                        {logos.map((logo, i) => (
                            <Image
                                key={i}
                                src={logo.src}
                                alt={logo.alt}
                                width={200}
                                height={80}
                                quality={100}
                                className="object-contain h-[64px] w-auto mix-blend-multiply"
                            />
                        ))}
                    </motion.div>

                    {/* Meta Line */}
                    <motion.div variants={fadeUp} className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2">
                        <span className="font-sans text-[13px] tracking-[0.08em] uppercase text-text-secondary">
                            October 2026 &nbsp;|&nbsp; Grades 6-12
                        </span>
                        <span className="inline-flex items-center bg-primary-red text-white font-sans font-semibold tracking-[0.04em] text-[12px] px-[12px] py-[5px] rounded-[6px] shadow-sm animate-pulse">
                            Limited to 45 Students per Batch
                        </span>
                    </motion.div>

                    {/* Headline — left-aligned, large */}
                    <motion.h1 variants={fadeUp} className="font-serif text-center leading-[1.05] text-text-primary w-full">
                        <span className="block font-sans text-[18px] md:text-[20px] font-medium tracking-normal text-kyoto-gold mb-1">
                            09 Days. 04 Cities.
                        </span>
                        <span className="block text-[46px] sm:text-[54px] md:text-[60px] italic font-light">
                            Where Exposure<br />Becomes Perspective
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.div variants={fadeUp} className="w-full">
                        <p className="text-text-secondary font-sans text-[16px] leading-[1.65] max-w-[520px] mx-auto text-center">
                            Observe how disciplined societies think, organize, and operate. This is
                            not tourism, but structured, guided international immersion.
                        </p>
                    </motion.div>

                    {/* Mobile Image (hidden on desktop) */}
                    <motion.div variants={fadeUp} className="block lg:hidden w-full">
                        <div className="relative w-full aspect-[4/3] border-[2px] border-kyoto-gold rounded-[12px] overflow-hidden bg-rice-white shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
                            <Image src="/images/japan_hero.png" alt="Japan 2026 Educational Immersion Program" fill className="object-cover" priority />
                            <div className="absolute top-0 left-0 right-0 bg-white/90 backdrop-blur-sm px-5 py-4">
                                <h2 className="font-serif text-[18px] font-bold text-primary-red leading-normal mb-2 pb-1">
                                    Japan 2026 Educational Immersion Program
                                </h2>
                                <p className="font-sans text-[13px] text-text-secondary mt-2">
                                    A Structured Journey into Discipline, Culture, and Independent Thinking
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* 4 Feature Cards */}
                    <motion.div variants={fadeUp} className="grid grid-cols-2 gap-[14px]">
                        {pillars.map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.02, y: -2 }}
                                transition={{ duration: 0.2 }}
                                className="bg-white border border-border-soft rounded-[8px] p-[16px] hover:border-kyoto-gold/40 transition-colors shadow-sm text-left"
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <div className="flex-1">
                                        <h3 className="text-text-primary font-sans font-semibold text-[13px] mb-1 leading-snug">{item.title}</h3>
                                        <p className="text-text-secondary font-sans text-[11px] leading-relaxed">{item.desc}</p>
                                    </div>
                                    <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Countdown + CTA */}
                    <motion.div variants={fadeUp} className="flex flex-col items-center gap-3 pt-5 border-t border-border-soft w-full">
                        <p className="text-text-secondary font-sans font-semibold text-[10px] uppercase tracking-[0.2em]">
                            Parent Orientation Registration Closes In
                        </p>

                        <div className="flex items-end gap-1">
                            {[
                                { label: 'DAYS', value: timeLeft.days },
                                { label: 'HOURS', value: timeLeft.hours },
                                { label: 'MINUTES', value: timeLeft.minutes },
                                { label: 'SECONDS', value: timeLeft.seconds }
                            ].map((time, i) => (
                                <div key={i} className="flex items-end">
                                    <div className="flex flex-col items-center">
                                        <span className="text-text-primary font-serif text-[38px] md:text-[44px] font-semibold tracking-[0.06em] tabular-nums leading-none">
                                            {time.value}
                                        </span>
                                        <span className="text-[9px] font-sans font-bold tracking-[0.2em] text-text-secondary mt-1 uppercase">
                                            {time.label}
                                        </span>
                                    </div>
                                    {i < 3 && (
                                        <span className="text-text-primary font-serif text-[30px] md:text-[36px] font-semibold mx-1 md:mx-2 pb-5 leading-none opacity-70">:</span>
                                    )}
                                </div>
                            ))}
                        </div>

                        <motion.a
                            href="#register"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            animate={{ scale: [1, 1.015, 1] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                            className="relative inline-flex items-center justify-center bg-primary-red text-white py-[14px] px-[32px] rounded-[8px] font-sans font-semibold text-[14px] tracking-wide min-w-[280px] shadow-sm hover:shadow-lg transition-all hover:bg-deep-indigo cursor-pointer overflow-hidden group"
                        >
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-full group-hover:h-56 opacity-10"></span>
                            <span className="relative">Attend Parent Orientation</span>
                        </motion.a>
                    </motion.div>
                </div>

                {/* ── RIGHT COLUMN — matches left column height ── */}
                <motion.div
                    variants={fadeUp}
                    className="hidden lg:flex flex-col h-full"
                >
                    {/* Frame fills the entire column height */}
                    <div className="relative flex-1 border-[2px] border-kyoto-gold rounded-[12px] overflow-hidden bg-rice-white shadow-[0_12px_40px_rgba(0,0,0,0.12)]" style={{ minHeight: '500px' }}>
                        <Image
                            src="/images/japan_hero.png"
                            alt="Japan 2026 Educational Immersion Program"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Title overlay — white bg, red title, dark subtitle */}
                        <div className="absolute top-0 left-0 right-0 bg-white/90 backdrop-blur-sm px-6 py-5">
                            <h2 className="font-serif text-[17px] md:text-[18px] font-bold text-primary-red leading-normal whitespace-nowrap overflow-hidden text-ellipsis mb-2 pb-1">
                                Japan 2026 Educational Immersion Program
                            </h2>
                            <p className="font-sans text-[13px] md:text-[14px] text-text-secondary mt-2 leading-snug">
                                A Structured Journey into Discipline, Culture, and Independent Thinking
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );

    return (
        <div ref={containerRef} className="bg-rice-white w-full overflow-hidden">
            <PulseFitHero title={heroContent} programs={tourDestinations} />
        </div>
    );
}
