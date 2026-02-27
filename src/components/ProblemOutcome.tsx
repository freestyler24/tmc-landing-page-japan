"use client";

import { motion } from 'framer-motion';

export default function ProblemOutcome() {
    return (
        <section className="bg-alt-offwhite ma-spacing-mob ma-spacing-desk border-b border-gray-200 overflow-hidden">
            <div className="container-max max-w-5xl">

                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                    {/* Problem Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif text-charcoal leading-tight">
                            Because Academics Alone Are No Longer Enough.
                        </h2>
                        <div className="w-12 h-1 bg-primary-red"></div>
                        <p className="text-base md:text-lg text-gray-600">
                            Your child lives in a world that rewards more than grades. It rewards adaptability, cultural awareness, and composure under uncertainty.
                        </p>
                        <p className="text-base md:text-lg text-gray-600">
                            Yet most exposure today is filtered through screens. Real-world systems thinking is rarely observed firsthand.
                        </p>
                        <p className="text-base md:text-lg text-gray-600">
                            Japan offers a rare opportunity to experience a society where heritage and innovation evolve together.
                        </p>
                    </motion.div>

                    {/* Outcome Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white p-8 md:p-12 shadow-md border-l-4 border-primary-red"
                    >
                        <h3 className="text-2xl font-serif text-charcoal mb-4">
                            What Students Gain
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Students do not simply see Japan. They observe systems. They experience discipline. They learn through immersion.
                        </p>
                        <ul className="space-y-4 text-sm text-charcoal font-medium">
                            {[
                                "Confidence in unfamiliar environments",
                                "Exposure to structured global systems",
                                "Cultural awareness beyond textbooks",
                                "Guided independence within supervision"
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.4 + (i * 0.1) }}
                                    className="flex items-start gap-3"
                                >
                                    <span className="text-primary-red text-lg">■</span>
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Orientation CTA Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 md:mt-24 bg-charcoal p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden"
                >
                    {/* Decorative accent */}
                    <div className="absolute top-0 left-0 w-2 h-full bg-primary-red"></div>

                    <div className="flex-1 space-y-3 relative z-10 w-full md:w-auto">
                        <h3 className="text-2xl md:text-3xl font-serif text-white leading-tight">
                            See the Structure. Ask Your Questions. Decide with Confidence.
                        </h3>
                        <p className="text-gray-300 text-base max-w-2xl">
                            The Parent Orientation walks you through itinerary, safety, supervision, and investment — clearly and transparently.
                        </p>
                    </div>
                    <div className="w-full md:w-auto flex-shrink-0 relative z-10">
                        <a
                            href="#register"
                            className="block w-full text-center bg-primary-red text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-red transition-all duration-300 group"
                        >
                            <span className="inline-block mr-2 group-hover:translate-x-1 transition-transform">👉</span>
                            Attend the Orientation Session
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
