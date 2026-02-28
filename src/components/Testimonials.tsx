"use client";

import { motion } from 'framer-motion';

export default function Testimonials() {
    const testimonials = [
        {
            quote: "Phenomenal work and meticulous planning by the entire team. They offer an incredible experiential learning approach that truly integrates outbound learning and life skills.",
            author: "Priya S.",
            initials: "P",
            color: "bg-primary-red"
        },
        {
            quote: "The personal involvement and genuineness of the staff gave us complete peace of mind. Safety was clearly their top priority, and the level of supervision was outstanding.",
            author: "Rahul M.",
            initials: "R",
            color: "bg-[#B89B5E]"
        },
        {
            quote: "A truly unique educational experience. The real-world learning and exposure to structured global cultures they provided was completely exceptional.",
            author: "Anjali K.",
            initials: "A",
            color: "bg-primary-red"
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
                    <div className="w-12 h-px bg-primary-red mx-auto"></div>
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
                                className={`relative bg-[#F5F3EF] border border-[#e6dac3] p-6 md:p-8 flex flex-col justify-between shadow-lg shadow-black/20 hover:shadow-xl transition-all cursor-default ${rotations[i % 3]}`}
                            >
                                {/* Large quotation mark background */}
                                <div className="absolute top-2 right-4 text-9xl font-serif text-[#B89B5E]/10 select-none pointer-events-none leading-none">
                                    &rdquo;
                                </div>
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
                                <div className="border-t border-gray-300 pt-4 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-8 h-8 rounded-full ${t.color} text-white flex items-center justify-center font-bold text-sm shadow-sm`}>
                                            {t.initials}
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-charcoal font-bold text-sm uppercase tracking-wider leading-none mb-1">
                                                {t.author}
                                            </p>
                                            <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
                                                <span>Google Review</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                        <motion.a
                            href="#register"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="block w-full text-center bg-primary-red text-white px-8 py-4 rounded-sm font-semibold hover:bg-black hover:text-white transition-all duration-300 group shadow-lg"
                        >
                            Reserve Your Orientation Seat
                        </motion.a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
