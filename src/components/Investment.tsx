"use client";

import { motion } from 'framer-motion';

export default function Investment() {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="investment" className="bg-white ma-spacing-mob ma-spacing-desk relative text-text-primary overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-primary-red/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-[-10%] w-[50%] h-[50%] bg-kyoto-gold/5 rounded-full blur-3xl pointer-events-none"></div>

            {/* Seigaiha Wave Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg stroke='%23ffffff' stroke-width='1' fill='none'%3E%3Ccircle cx='40' cy='40' r='10'/%3E%3Ccircle cx='40' cy='40' r='20'/%3E%3Ccircle cx='40' cy='40' r='30'/%3E%3Ccircle cx='40' cy='40' r='40'/%3E%3Ccircle cx='0' cy='80' r='10'/%3E%3Ccircle cx='0' cy='80' r='20'/%3E%3Ccircle cx='0' cy='80' r='30'/%3E%3Ccircle cx='0' cy='80' r='40'/%3E%3Ccircle cx='80' cy='80' r='10'/%3E%3Ccircle cx='80' cy='80' r='20'/%3E%3Ccircle cx='80' cy='80' r='30'/%3E%3Ccircle cx='80' cy='80' r='40'/%3E%3Ccircle cx='80' cy='0' r='10'/%3E%3Ccircle cx='80' cy='0' r='20'/%3E%3Ccircle cx='80' cy='0' r='30'/%3E%3Ccircle cx='80' cy='0' r='40'/%3E%3Ccircle cx='0' cy='0' r='10'/%3E%3Ccircle cx='0' cy='0' r='20'/%3E%3Ccircle cx='0' cy='0' r='30'/%3E%3Ccircle cx='0' cy='0' r='40'/%3E%3C/g%3E%3C/svg%3E")` }}></div>

            {/* Vertical Typography (Watermarks) */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 0.1 }} viewport={{ once: true }} className="absolute right-8 md:right-16 top-1/4 pointer-events-none hidden lg:block">
                <p className="text-kyoto-gold font-serif text-6xl writing-vertical-rl tracking-widest">
                    投資
                </p>
            </motion.div>

            {/* Sakura Particles */}
            <motion.div animate={{ y: [0, 20, 0], x: [0, -10, 0], rotate: [0, 25, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[20%] left-[10%] w-3 h-3 rounded-bl-xl rounded-tr-xl bg-primary-red/20 blur-[1px] pointer-events-none" />
            <motion.div animate={{ y: [0, -25, 0], x: [0, 15, 0], rotate: [0, -35, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute bottom-[30%] right-[10%] w-4 h-4 rounded-tl-xl rounded-br-xl bg-kyoto-gold/20 blur-[1px] pointer-events-none" />

            <div className="container-max max-w-5xl relative z-10">

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeUp}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-serif mb-4 md:mb-6">
                        Transparent Programme Investment
                    </h2>
                    <div className="w-12 h-px bg-primary-red mx-auto mb-6 opacity-80"></div>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                        The complete cost structure, inclusions, and instalment details will be explained during the parent orientation session.
                    </p>
                </motion.div>

                {/* Instalment Cards */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.15 } }
                    }}
                    className="grid md:grid-cols-3 gap-6 mb-12"
                >
                    {[
                        {
                            num: 1,
                            title: 'First Instalment',
                            subtitle: 'Registration Fee',
                            amount: '₹9,999',
                            note: 'Non-refundable',
                            date: '31st March 2026',
                            payee: 'Travelstall'
                        },
                        {
                            num: 2,
                            title: 'Second Instalment',
                            subtitle: 'Mid-term Payment',
                            amount: '₹1,20,000',
                            note: null,
                            date: '1st July 2026',
                            payee: 'Travelstall'
                        },
                        {
                            num: 3,
                            title: 'Third Instalment',
                            subtitle: 'Final Payment',
                            amount: '₹1,60,000',
                            note: null,
                            date: '1st September 2026',
                            payee: 'TMC Nexus Pvt Ltd'
                        }
                    ].map((inst) => (
                        <motion.div
                            variants={fadeUp}
                            key={inst.num}
                            className={`bg-rice-white text-text-primary rounded-sm shadow-md overflow-hidden border transition-all duration-300 relative ${inst.num === 1
                                ? 'border-primary-red ring-2 ring-primary-red/10 shadow-xl lg:scale-105 z-10'
                                : 'border-border-soft hover:shadow-lg hover:border-kyoto-gold/50 transform hover:-translate-y-1'
                                }`}
                        >
                            {inst.num === 1 && (
                                <div className="absolute top-3 right-3 bg-primary-red/10 text-primary-red text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider">
                                    Start Here
                                </div>
                            )}
                            <div className={`h-1.5 ${inst.num === 1 ? 'bg-primary-red shadow-[0_0_10px_rgba(210,31,43,0.5)]' : 'bg-primary-red/60'}`}></div>
                            <div className="p-6">
                                {/* Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className={`w-9 h-9 rounded-full font-bold text-sm flex items-center justify-center border ${inst.num === 1
                                        ? 'bg-primary-red text-white border-primary-red'
                                        : 'bg-primary-red/10 text-primary-red border-primary-red/20'
                                        }`}>
                                        {inst.num}
                                    </span>
                                    <div>
                                        <h4 className="font-serif font-bold text-lg leading-tight text-text-primary">{inst.title}</h4>
                                        <p className="text-text-secondary text-xs">{inst.subtitle}</p>
                                    </div>
                                </div>

                                {/* Amount */}
                                <p className="text-primary-red text-3xl font-bold mb-1">{inst.amount}</p>
                                {inst.note && (
                                    <p className="text-text-secondary text-xs mb-4">{inst.note}</p>
                                )}
                                {!inst.note && <div className="mb-4"></div>}

                                {/* Meta */}
                                <div className="space-y-2 text-sm text-text-secondary">
                                    <div className="flex items-center gap-2">
                                        <span className="text-text-secondary">📅</span>
                                        {inst.date}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-text-secondary">🏢</span>
                                        {inst.payee}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Inclusions */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-rice-white text-text-primary shadow-lg overflow-hidden border border-border-soft"
                >
                    <div className="p-10 w-full">
                        <h3 className="text-lg font-bold tracking-wider mb-6 text-primary-red uppercase">Indicative Inclusions</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                'International airfare',
                                'Accommodation',
                                'Visa processing',
                                'Internal transportation',
                                'Supervision framework',
                                'Cultural access'
                            ].map((item, i) => (
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.4 + (i * 0.1) }}
                                    key={i}
                                    className="flex items-start gap-3 text-sm text-text-primary font-medium border-b border-border-soft pb-3"
                                >
                                    <span className="text-primary-red text-lg">■</span>
                                    {item}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-12 text-center text-text-secondary text-sm max-w-3xl mx-auto leading-relaxed"
                >
                    <p>
                        All financial details will be shared transparently during orientation.
                    </p>
                </motion.div>

                {/* Orientation CTA Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 bg-white border border-kyoto-gold/40 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-md relative overflow-hidden"
                >
                    {/* Decorative accent */}
                    <div className="absolute top-0 left-0 w-2 h-full bg-primary-red"></div>

                    <div className="flex-1 space-y-3 relative z-10 w-full md:w-auto">
                        <h3 className="text-2xl md:text-3xl font-serif text-text-primary leading-tight">
                            Transparency First. Commitment Later.
                        </h3>
                        <p className="text-text-secondary text-base max-w-2xl">
                            Attend the Parent Orientation to review the complete cost structure and ask your questions directly.
                        </p>
                    </div>
                    <div className="w-full md:w-auto flex-shrink-0 relative z-10">
                        <motion.a
                            href="#register"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="block w-full text-center bg-primary-red text-white px-8 py-4 rounded-sm font-semibold hover:bg-deep-indigo hover:text-white transition-all duration-300 group shadow-md"
                        >
                            Reserve Your Orientation Seat
                        </motion.a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
