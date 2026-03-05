'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const cities = [
    {
        name: 'Tokyo',
        theme: 'Urban Precision',
        texts: [
            "Your child navigates one of the world's most complex cities with growing independence.",
            "From Asakusa Sensoji Temple to Shibuya Crossing, from school exchanges to TeamLab's digital universe — Tokyo teaches adaptability in real time."
        ],
        benefit: "Exposure to structured complexity builds composure.",
        icon: () => (
            <svg className="w-16 h-16 text-[#B89B5E] mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20" />
                <path d="M7 22h10" />
                <path d="M9 10h6" />
                <path d="M8 16h8" />
                <path d="M10 4L7 22" />
                <path d="M14 4l3 18" />
            </svg>
        )
    },
    {
        name: 'Mt. Fuji',
        theme: 'Observing Power',
        texts: [
            "Standing at Mt. Fuji's 5th Station, students experience quiet strength.",
            "The Hakone Ropeway and Lake Ashi cruise teach something subtle: Profound experiences come from observing, not rushing."
        ],
        benefit: "Depth over distraction.",
        icon: () => (
            <svg className="w-16 h-16 text-[#B89B5E] mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 20h20L12 4 2 20z" />
                <path d="M7.5 13L12 8l4.5 5" fill="currentColor" />
            </svg>
        )
    },
    {
        name: 'Kyoto',
        theme: 'Cultural Continuity',
        texts: [
            "After boarding the Shinkansen at 320 km/h, students arrive in Japan's ancient capital.",
            "Dressed in kimono, walking temple grounds, they witness how tradition evolves without erasing its roots."
        ],
        benefit: "Respect for legacy while embracing innovation.",
        icon: () => (
            <svg className="w-16 h-16 text-[#B89B5E] mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 20h18" />
                <path d="M6 20v-8" />
                <path d="M18 20v-8" />
                <path d="M12 4v8" />
                <path d="M2 12c3-2 6-2 10-2s7 0 10 2" />
                <path d="M5 8c2-1 4-1 7-1s5 0 7 1" />
            </svg>
        )
    },
    {
        name: 'Nara',
        theme: 'Living Reverence',
        texts: [
            "At Todaiji Temple and among Nara's sacred deer, students encounter harmony and discipline."
        ],
        benefit: "Understanding that respect can be institutionalized.",
        icon: () => (
            <svg className="w-16 h-16 text-[#B89B5E] mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 22h16" />
                <path d="M7 22V6h10v16" />
                <path d="M8 12h8" />
                <path d="M8 17h8" />
                <path d="M12 2v4" />
                <path d="M5 6h14" />
                <path d="M9 2h6" />
            </svg>
        )
    },
    {
        name: 'Osaka',
        theme: 'Structured Independence',
        texts: [
            "From Umeda Sky Observatory to Universal Studios Japan, students explore freely within defined boundaries.",
            "With supervised budgeting systems in place, independence becomes tangible."
        ],
        benefit: "Confidence under guidance.",
        icon: () => (
            <svg className="w-16 h-16 text-[#B89B5E] mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18" />
                <path d="M6 21V9" />
                <path d="M18 21V9" />
                <path d="M9 5v4h6V5H9z" />
                <path d="M12 2v3" />
                <path d="M4 9c3-1 5-1 8-1s5 0 8 1" />
                <path d="M5 14h14" />
            </svg>
        )
    }
];

export default function ProgrammeExperience() {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Pixel-based to avoid layout shifts
    // Only apply parallax on md+ screens to prevent overlap on mobile stacked layout
    const [isMd, setIsMd] = useState(false);
    useEffect(() => {
        const check = () => setIsMd(window.innerWidth >= 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    const y1 = useTransform(scrollYProgress, [0, 1], isMd ? ["0px", "-15px"] : ["0px", "0px"]);
    const y2 = useTransform(scrollYProgress, [0, 1], isMd ? ["0px", "-30px"] : ["0px", "0px"]);
    const y3 = useTransform(scrollYProgress, [0, 1], isMd ? ["0px", "-20px"] : ["0px", "0px"]);
    const y4 = useTransform(scrollYProgress, [0, 1], isMd ? ["0px", "-40px"] : ["0px", "0px"]);
    const y5 = useTransform(scrollYProgress, [0, 1], isMd ? ["0px", "-25px"] : ["0px", "0px"]);
    const transforms = [y1, y2, y3, y4, y5];

    return (
        <section id="programme" ref={containerRef} className="bg-rice-white ma-spacing-mob ma-spacing-desk relative overflow-hidden">

            {/* Ambient Background Glows & Particles */}
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary-red/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-kyoto-gold/5 rounded-full blur-3xl pointer-events-none"></div>

            {/* Seigaiha Wave Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg stroke='%23ffffff' stroke-width='1' fill='none'%3E%3Ccircle cx='40' cy='40' r='10'/%3E%3Ccircle cx='40' cy='40' r='20'/%3E%3Ccircle cx='40' cy='40' r='30'/%3E%3Ccircle cx='40' cy='40' r='40'/%3E%3Ccircle cx='0' cy='80' r='10'/%3E%3Ccircle cx='0' cy='80' r='20'/%3E%3Ccircle cx='0' cy='80' r='30'/%3E%3Ccircle cx='0' cy='80' r='40'/%3E%3Ccircle cx='80' cy='80' r='10'/%3E%3Ccircle cx='80' cy='80' r='20'/%3E%3Ccircle cx='80' cy='80' r='30'/%3E%3Ccircle cx='80' cy='80' r='40'/%3E%3Ccircle cx='80' cy='0' r='10'/%3E%3Ccircle cx='80' cy='0' r='20'/%3E%3Ccircle cx='80' cy='0' r='30'/%3E%3Ccircle cx='80' cy='0' r='40'/%3E%3Ccircle cx='0' cy='0' r='10'/%3E%3Ccircle cx='0' cy='0' r='20'/%3E%3Ccircle cx='0' cy='0' r='30'/%3E%3Ccircle cx='0' cy='0' r='40'/%3E%3C/g%3E%3C/svg%3E")` }}></div>

            {/* Vertical Typography (Watermarks) */}
            <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]) }} className="absolute left-4 md:left-12 top-[10%] pointer-events-none hidden md:block opacity-20">
                <p className="text-kyoto-gold font-serif text-6xl xl:text-8xl writing-vertical-rl tracking-widest">
                    文化
                </p>
            </motion.div>

            {/* Sakura Particles */}
            <motion.div animate={{ y: [0, 40, 0], x: [0, 15, 0], rotate: [0, 30, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[30%] left-[20%] w-3 h-3 rounded-tr-xl rounded-bl-xl bg-primary-red/20 blur-[1px] pointer-events-none" />
            <motion.div animate={{ y: [0, -30, 0], x: [0, -20, 0], rotate: [0, -45, 0] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-[20%] right-[15%] w-4 h-4 rounded-tl-xl rounded-br-xl bg-kyoto-gold/20 blur-[1px] pointer-events-none" />

            <div className="container-max relative z-10">

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-serif mb-4 md:mb-6 text-text-primary">
                        Cultural Highlights
                    </h2>
                    <p className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto">
                        Each location is selected not for tourism, but for its specific educational and developmental outcome.
                    </p>
                </motion.div>

                {/* City Cards Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "0px" }}
                    variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
                    className="flex flex-wrap justify-center gap-x-5 gap-y-12 md:gap-y-6 mb-16 md:mb-20 max-w-5xl mx-auto"
                >
                    {cities.map((city, idx) => (
                        <motion.div
                            style={{ y: transforms[idx] }}
                            variants={fadeUp}
                            key={idx}
                            tabIndex={0}
                            className="group [perspective:1200px] w-[260px] h-[340px] flex-shrink-0 cursor-pointer outline-none"
                        >
                            {/* Floating wrapper */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{
                                    y: {
                                        duration: 4 + (idx * 0.5),
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                }}
                                className="w-full h-full"
                            >
                                {/* Flip inner container */}
                                <div className="relative w-full h-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)]">
                                    {/* ── FRONT ── */}
                                    <div
                                        className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-white border border-border-soft shadow-md rounded-sm [backface-visibility:hidden]"
                                    >
                                        <div className="absolute inset-2 border border-border-soft/50 rounded-sm pointer-events-none" />
                                        {city.icon()}
                                        <h3 className="text-2xl font-serif text-text-primary mt-2 tracking-wide text-center">
                                            {city.name}
                                        </h3>
                                        <div className="relative w-10 h-px bg-border-soft mt-5 overflow-hidden">
                                            <div className="absolute inset-0 bg-primary-red -translate-x-full group-hover:translate-x-0 group-focus:translate-x-0 transition-transform duration-500" />
                                        </div>
                                        {/* tap hint – visible on touch devices only */}
                                        <span className="md:hidden absolute bottom-4 left-0 right-0 text-center text-gray-500 text-[10px] uppercase tracking-widest">
                                            Tap to flip
                                        </span>
                                    </div>

                                    {/* ── BACK ── */}
                                    <div
                                        className="absolute inset-0 flex flex-col p-6 bg-rice-white border border-primary-red/40 shadow-xl rounded-sm [backface-visibility:hidden] [transform:rotateY(180deg)]"
                                    >
                                        <div className="absolute inset-1.5 border border-primary-red/10 rounded-sm pointer-events-none" />

                                        {/* Header */}
                                        <div className="pb-3 mb-3 border-b border-border-soft">
                                            <h4 className="text-primary-red font-serif text-lg leading-tight">{city.name}</h4>
                                            <span className="text-text-secondary text-[10px] uppercase tracking-[0.2em]">{city.theme}</span>
                                        </div>

                                        {/* Body */}
                                        <div className="flex-1 overflow-hidden space-y-2.5">
                                            {city.texts.map((text, i) => (
                                                <p key={i} className="text-text-primary text-[12px] leading-relaxed border-l-2 border-border-soft pl-2.5">{text}</p>
                                            ))}
                                        </div>

                                        {/* Derived benefit */}
                                        <div className="mt-3 pt-3 border-t border-border-soft">
                                            <span className="text-[9px] text-text-secondary uppercase tracking-widest block mb-1">Derived Benefit</span>
                                            <p className="text-kyoto-gold text-[12px] font-serif italic leading-snug">&ldquo;{city.benefit}&rdquo;</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Orientation CTA Banner (kept intact but colors balanced) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white border border-[#B89B5E]/40 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden max-w-5xl mx-auto"
                >
                    <div className="absolute top-0 left-0 w-2 h-full bg-primary-red"></div>

                    <div className="flex-1 space-y-3 relative z-10 w-full md:w-auto">
                        <h3 className="text-2xl md:text-3xl font-serif text-text-primary leading-tight">
                            Every Location Has a Purpose.
                        </h3>
                        <p className="text-text-secondary text-base max-w-2xl">
                            See how this 9-day journey is academically structured, supervised, and outcome-driven.
                        </p>
                    </div>
                    <div className="w-full md:w-auto flex-shrink-0 relative z-10">
                        <motion.a
                            href="#register"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="block w-full text-center bg-primary-red text-white px-8 py-4 rounded-lg font-semibold hover:bg-deep-indigo transition-all duration-300 group shadow-sm"
                        >
                            Reserve Your Orientation Seat
                        </motion.a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
