"use client";

import { motion } from 'framer-motion';

export default function FinalCTA() {
    return (
        <section className="bg-primary-red ma-spacing-mob ma-spacing-desk text-center relative overflow-hidden">
            {/* Subtle dark gradient overlay */}
            <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, transparent 50%, rgba(0,0,0,0.2) 100%)' }}></div>
            {/* Firefly wave texture */}
            <div className="absolute inset-0 z-0 pointer-events-none" style={{ opacity: 0.08, backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg stroke='%23ffffff' stroke-width='1' fill='none'%3E%3Ccircle cx='40' cy='40' r='10'/%3E%3Ccircle cx='40' cy='40' r='20'/%3E%3Ccircle cx='40' cy='40' r='30'/%3E%3Ccircle cx='40' cy='40' r='40'/%3E%3C/g%3E%3C/svg%3E")` }}></div>

            <div className="container-max max-w-5xl relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.2 } }
                    }}
                >
                    <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-4xl md:text-6xl font-serif text-white mb-8 md:mb-10 leading-tight">
                        Understand the Structure <br className="hidden md:block" />Before You Decide.
                    </motion.h2>

                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="w-12 h-1 bg-white mx-auto mb-8" style={{ opacity: 0.5 }}></motion.div>

                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
                        <div className="text-white px-6 py-3 rounded-full text-xs md:text-sm font-bold tracking-widest" style={{ border: '1px solid rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.1)' }}>
                            09 DAYS. 04 CITIES.
                        </div>
                        <div className="hidden md:block w-12 h-px bg-white" style={{ opacity: 0.4 }}></div>
                        <div className="text-white font-serif text-lg md:text-xl italic" style={{ opacity: 0.9 }}>
                            One Transformational Educational Journey.
                        </div>
                    </motion.div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-base md:text-lg text-white font-medium mb-12" style={{ opacity: 0.9 }}>
                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="flex flex-col items-center">
                            <span className="text-4xl font-serif text-white mb-2" style={{ opacity: 0.4 }}>1</span>
                            <span className="tracking-wide">Join Parent Orientation</span>
                        </motion.div>
                        <motion.div variants={{ hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } } }} className="hidden md:block text-2xl" style={{ opacity: 0.4 }}>→</motion.div>
                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="flex flex-col items-center">
                            <span className="text-4xl font-serif text-white mb-2" style={{ opacity: 0.4 }}>2</span>
                            <span className="tracking-wide">Review the framework</span>
                        </motion.div>
                        <motion.div variants={{ hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } } }} className="hidden md:block text-2xl" style={{ opacity: 0.4 }}>→</motion.div>
                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="flex flex-col items-center">
                            <span className="text-4xl font-serif text-white mb-2" style={{ opacity: 0.4 }}>3</span>
                            <span className="tracking-wide">Decide with clarity</span>
                        </motion.div>
                    </div>

                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
                        <motion.a
                            href="#register"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block bg-white text-primary-red px-8 md:px-12 py-4 md:py-5 rounded-sm font-bold text-sm md:text-lg hover:bg-deep-indigo hover:text-white transition-all uppercase tracking-widest shadow-xl"
                        >
                            Register for the Parent Orientation
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
