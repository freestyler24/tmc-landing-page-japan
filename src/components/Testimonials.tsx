"use client";

import { motion } from 'framer-motion';

export default function Testimonials() {
    const testimonials = [
        {
            quote: "It wasn't a tour. It was structured exposure. We saw visible growth in maturity.",
            author: "Parent, Grade 9"
        },
        {
            quote: "The supervision framework gave us complete confidence.",
            author: "Parent, Grade 8"
        },
        {
            quote: "Japan changed how our child observes responsibility and systems.",
            author: "Parent, Grade 10"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="bg-[#111111] ma-spacing-mob ma-spacing-desk relative overflow-hidden">
            <div className="container-max relative z-10">

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={itemVariants}
                    className="text-center mb-10 md:mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-serif text-offwhite mb-4 md:mb-6">
                        They Returned More Independent. More Composed.
                    </h2>
                    <div className="w-16 h-1 bg-primary-red mx-auto"></div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto mb-10 md:mb-16"
                >
                    {testimonials.map((t, i) => {
                        const rotations = ['md:-rotate-2', 'md:rotate-1', 'md:-rotate-1'];
                        return (
                            <motion.div
                                variants={itemVariants}
                                key={i}
                                className={`relative bg-[#F5F3EF] p-6 md:p-8 flex flex-col justify-between shadow-lg shadow-black/20 hover:shadow-xl transition-all cursor-default ${rotations[i % 3]}`}
                            >
                                {/* Tape effect */}
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/60 shadow-sm border border-black/5 -rotate-2 z-10"></div>

                                <div>
                                    <div className="flex text-primary-red mb-6 text-sm">
                                        ★★★★★
                                    </div>
                                    <p className="text-gray-800 font-serif italic text-lg leading-relaxed mb-8">
                                        &quot;{t.quote}&quot;
                                    </p>
                                </div>
                                <p className="text-charcoal font-bold text-sm uppercase tracking-wider border-t border-gray-300 pt-4">
                                    — {t.author}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Orientation CTA Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden max-w-5xl mx-auto"
                >
                    {/* Decorative accent */}
                    <div className="absolute top-0 left-0 w-2 h-full bg-primary-red"></div>

                    <div className="flex-1 space-y-3 relative z-10 w-full md:w-auto">
                        <h3 className="text-2xl md:text-3xl font-serif text-charcoal leading-tight">
                            Growth Is Designed — Not Accidental.
                        </h3>
                        <p className="text-gray-600 text-base max-w-2xl">
                            Join the Parent Orientation to see how supervision, structure, and exposure work together.
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
