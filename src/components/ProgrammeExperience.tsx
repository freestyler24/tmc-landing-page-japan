"use client";

import { motion } from 'framer-motion';

const cities = [
    {
        name: 'Tokyo',
        theme: 'Structured Complexity',
        desc: 'Students navigate one of the world\'s most efficient cities while learning how large-scale systems operate seamlessly.',
    },
    {
        name: 'Mt. Fuji & Hakone',
        theme: 'Observation & Perspective',
        desc: 'Standing at Mt. Fuji\'s 5th Station and exploring Hakone teaches reflection, patience, and quiet strength.',
    },
    {
        name: 'Kyoto',
        theme: 'Cultural Continuity',
        desc: 'From temple visits to traditional experiences, students witness how tradition and modernity coexist without conflict.',
    },
    {
        name: 'Nara',
        theme: 'Discipline & Respect',
        desc: 'Institutions where respect is embedded into daily life.',
    },
    {
        name: 'Osaka',
        theme: 'Guided Independence',
        desc: 'Supervised exploration builds confidence within defined boundaries.',
    }
];

export default function ProgrammeExperience() {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="programme" className="bg-alt-charcoal ma-spacing-mob ma-spacing-desk relative">
            <div className="container-max">

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    className="text-center mb-12 md:mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-serif mb-4 md:mb-6 text-offwhite">
                        Cultural Experience Highlights
                    </h2>
                    <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
                        Each location is selected not for tourism, but for its specific educational and developmental outcome.
                    </p>
                </motion.div>

                {/* Top row: 3 cards */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        visible: {
                            transition: { staggerChildren: 0.15 }
                        }
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6"
                >
                    {cities.slice(0, 3).map((city, idx) => (
                        <motion.div
                            variants={fadeUp}
                            key={idx}
                            className="group relative overflow-hidden bg-gray-900 shadow-xl border border-gray-800 cursor-pointer"
                        >
                            <div className="aspect-[5/4] md:aspect-square relative w-full transform group-hover:scale-105 transition-transform duration-700 ease-out">
                                <div className="absolute inset-0 bg-gradient-to-br from-charcoal to-black opacity-80 z-10"></div>
                                <div className="absolute inset-0 bg-primary-red opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10"></div>
                                <div className="relative z-20 p-6 md:p-8 h-full flex flex-col justify-end">
                                    <span className="text-primary-red text-xs md:text-sm font-bold uppercase tracking-wider mb-1 md:mb-2 block transform group-hover:-translate-y-2 transition-transform duration-500">
                                        {city.theme}
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-serif text-white mb-3 md:mb-4 transform group-hover:-translate-y-2 transition-transform duration-500">
                                        {city.name}
                                    </h3>
                                    <div className="w-8 h-1 bg-primary-red mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-2"></div>
                                    <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-500 text-sm transform translate-y-4 group-hover:translate-y-0">
                                        {city.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom row: 2 cards centered */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        visible: {
                            transition: { staggerChildren: 0.2 }
                        }
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-[820px] mx-auto"
                >
                    {cities.slice(3).map((city, idx) => (
                        <motion.div
                            variants={fadeUp}
                            key={idx + 3}
                            className="group relative overflow-hidden bg-gray-900 shadow-xl border border-gray-800 cursor-pointer"
                        >
                            <div className="aspect-[5/4] md:aspect-[4/3] relative w-full transform group-hover:scale-105 transition-transform duration-700 ease-out">
                                <div className="absolute inset-0 bg-gradient-to-br from-charcoal to-black opacity-80 z-10"></div>
                                <div className="absolute inset-0 bg-primary-red opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10"></div>
                                <div className="relative z-20 p-6 md:p-8 h-full flex flex-col justify-end">
                                    <span className="text-primary-red text-xs md:text-sm font-bold uppercase tracking-wider mb-1 md:mb-2 block transform group-hover:-translate-y-2 transition-transform duration-500">
                                        {city.theme}
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-serif text-white mb-3 md:mb-4 transform group-hover:-translate-y-2 transition-transform duration-500">
                                        {city.name}
                                    </h3>
                                    <div className="w-8 h-1 bg-primary-red mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-2"></div>
                                    <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-500 text-sm transform translate-y-4 group-hover:translate-y-0">
                                        {city.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Orientation CTA Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 md:mt-24 bg-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden max-w-5xl mx-auto"
                >
                    {/* Decorative accent */}
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
