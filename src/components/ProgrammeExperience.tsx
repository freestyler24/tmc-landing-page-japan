'use client';

import { motion } from 'framer-motion';

const cities = [
    {
        name: 'Tokyo',
        theme: 'Structured Complexity',
        desc: "Students navigate one of the world's most efficient cities while learning how large-scale systems operate seamlessly.",
        icon: () => (
            <svg className="w-20 h-20 text-primary-red mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
        name: 'Mt. Fuji', // shortened for aesthetic
        theme: 'Observation & Perspective',
        desc: "Standing at Mt. Fuji's 5th Station and exploring Hakone teaches reflection, patience, and quiet strength.",
        icon: () => (
            <svg className="w-20 h-20 text-primary-red mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 20h20L12 4 2 20z" />
                <path d="M7.5 13L12 8l4.5 5" fill="currentColor" />
            </svg>
        )
    },
    {
        name: 'Kyoto',
        theme: 'Cultural Continuity',
        desc: "From temple visits to traditional experiences, students witness how tradition and modernity coexist without conflict.",
        icon: () => (
            <svg className="w-20 h-20 text-primary-red mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
        theme: 'Discipline & Respect',
        desc: "Institutions where respect is embedded into daily life.",
        icon: () => (
            <svg className="w-20 h-20 text-primary-red mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
        theme: 'Guided Independence',
        desc: "Supervised exploration builds confidence within defined boundaries.",
        icon: () => (
            <svg className="w-20 h-20 text-primary-red mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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

    return (
        <section id="programme" className="bg-[#1a1a1a] ma-spacing-mob ma-spacing-desk relative">
            <div className="container-max">

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-serif mb-4 md:mb-6 text-[#F9F6F0]">
                        Cultural Highlights
                    </h2>
                    <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
                        Each location is selected not for tourism, but for its specific educational and developmental outcome.
                    </p>
                </motion.div>

                {/* City Cards Grid - stylized as printed cards */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        visible: {
                            transition: { staggerChildren: 0.15 }
                        }
                    }}
                    className="flex flex-wrap justify-center gap-6 md:gap-10 mb-16 md:mb-20 max-w-6xl mx-auto"
                >
                    {cities.map((city, idx) => (
                        <motion.div
                            variants={fadeUp}
                            key={idx}
                            className="group bg-[#222222] border border-gray-700 shadow-lg shadow-black/10 flex flex-col items-center justify-center p-8 w-64 h-72 hover:shadow-xl hover:border-primary-red/50 transition-all duration-300 relative"
                        >
                            {/* Inner inset border for that premium printed ticket feel */}
                            <div className="absolute inset-2 border border-gray-700/30 pointer-events-none"></div>

                            <div className="transform group-hover:scale-110 transition-transform duration-500">
                                {city.icon()}
                            </div>
                            <h3 className="text-2xl font-serif text-[#F9F6F0] mt-2 tracking-wide">
                                {city.name}
                            </h3>
                            <div className="w-12 h-0.5 bg-gray-600 mt-4 overflow-hidden relative">
                                <div className="absolute top-0 left-0 h-full bg-primary-red w-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Orientation CTA Banner (kept intact but colors balanced) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden max-w-5xl mx-auto"
                >
                    <div className="absolute top-0 left-0 w-2 h-full bg-primary-red"></div>

                    <div className="flex-1 space-y-3 relative z-10 w-full md:w-auto">
                        <h3 className="text-2xl md:text-3xl font-serif text-charcoal leading-tight">
                            Every Location Has a Purpose.
                        </h3>
                        <p className="text-gray-600 text-base max-w-2xl">
                            See how this 9-day journey is academically structured, supervised, and outcome-driven.
                        </p>
                    </div>
                    <div className="w-full md:w-auto flex-shrink-0 relative z-10">
                        <a
                            href="#register"
                            className="block w-full text-center bg-primary-red text-white px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-all duration-300 group shadow-lg"
                        >
                            Reserve Your Orientation Seat
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
