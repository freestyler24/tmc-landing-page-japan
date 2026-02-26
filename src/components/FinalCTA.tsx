"use client";

import { motion } from 'framer-motion';

export default function FinalCTA() {
    return (
        <section className="bg-alt-red py-20 md:py-32 text-center border-t border-red-900 border-opacity-30 relative overflow-hidden">
            <div className="absolute inset-0 z-0 bg-black opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent to-black"></div>

            <div className="container-max max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="border border-white border-opacity-20 p-8 md:p-16 backdrop-blur-md bg-white bg-opacity-5 shadow-2xl"
                >
                    <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 md:mb-10 text-shadow-sm leading-tight">
                        Understand the Structure <br className="hidden md:block" />Before You Decide.
                    </h2>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
                        <div className="bg-white bg-opacity-10 text-white px-6 py-3 rounded-full text-xs md:text-sm font-bold tracking-widest border border-white border-opacity-30 shadow-inner">
                            09 DAYS. 04 CITIES.
                        </div>
                        <div className="hidden md:block w-12 h-px bg-white opacity-40"></div>
                        <div className="text-white text-opacity-90 font-serif text-lg md:text-xl italic">
                            One Transformational Educational Journey.
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-base md:text-lg text-white font-medium mb-12 opacity-90">
                        <div className="flex flex-col items-center">
                            <span className="text-4xl font-serif text-white opacity-40 mb-2">1</span>
                            <span className="tracking-wide">Join Parent Orientation</span>
                        </div>
                        <div className="hidden md:block text-2xl opacity-40">→</div>
                        <div className="flex flex-col items-center">
                            <span className="text-4xl font-serif text-white opacity-40 mb-2">2</span>
                            <span className="tracking-wide">Review the framework</span>
                        </div>
                        <div className="hidden md:block text-2xl opacity-40">→</div>
                        <div className="flex flex-col items-center">
                            <span className="text-4xl font-serif text-white opacity-40 mb-2">3</span>
                            <span className="tracking-wide">Decide with clarity</span>
                        </div>
                    </div>

                    <motion.a
                        href="#register"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block bg-white text-primary-red px-8 md:px-12 py-4 md:py-5 rounded-sm font-bold text-sm md:text-lg hover:bg-black hover:text-white transition-all uppercase tracking-widest shadow-xl ring-4 ring-white ring-opacity-20"
                    >
                        Register for the Parent Orientation
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
