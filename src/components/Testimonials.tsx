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
        <section className="bg-alt-charcoal ma-spacing-mob ma-spacing-desk relative overflow-hidden">
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
                    {testimonials.map((t, i) => (
                        <motion.div
                            variants={itemVariants}
                            key={i}
                            className="bg-gray-900 border border-gray-800 p-6 md:p-8 flex flex-col justify-between hover:border-gray-700 transition-colors cursor-default"
                        >
                            <div>
                                <div className="flex text-kyoto-gold mb-6 text-sm">
                                    ★★★★★
                                </div>
                                <p className="text-gray-300 font-serif italic text-lg leading-relaxed mb-8">
                                    &quot;{t.quote}&quot;
                                </p>
                            </div>
                            <p className="text-primary-red font-bold text-sm uppercase tracking-wider">
                                — {t.author}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="text-center"
                >
                    <a
                        href="#register"
                        className="inline-block bg-primary-red text-white px-8 py-3 rounded-sm text-sm font-semibold hover:bg-white hover:text-primary-red transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        Join the 2026 Cohort
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
