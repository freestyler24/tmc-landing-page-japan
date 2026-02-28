"use client";

import { motion } from 'framer-motion';

export default function Investment() {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="investment" className="bg-[#111111] ma-spacing-mob ma-spacing-desk relative text-[#F5F3EF] overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-primary-red/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-[-10%] w-[50%] h-[50%] bg-kyoto-gold/5 rounded-full blur-3xl pointer-events-none"></div>

            {/* Seigaiha Wave Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg stroke='%23ffffff' stroke-width='1' fill='none'%3E%3Ccircle cx='40' cy='40' r='10'/%3E%3Ccircle cx='40' cy='40' r='20'/%3E%3Ccircle cx='40' cy='40' r='30'/%3E%3Ccircle cx='40' cy='40' r='40'/%3E%3Ccircle cx='0' cy='80' r='10'/%3E%3Ccircle cx='0' cy='80' r='20'/%3E%3Ccircle cx='0' cy='80' r='30'/%3E%3Ccircle cx='0' cy='80' r='40'/%3E%3Ccircle cx='80' cy='80' r='10'/%3E%3Ccircle cx='80' cy='80' r='20'/%3E%3Ccircle cx='80' cy='80' r='30'/%3E%3Ccircle cx='80' cy='80' r='40'/%3E%3Ccircle cx='80' cy='0' r='10'/%3E%3Ccircle cx='80' cy='0' r='20'/%3E%3Ccircle cx='80' cy='0' r='30'/%3E%3Ccircle cx='80' cy='0' r='40'/%3E%3Ccircle cx='0' cy='0' r='10'/%3E%3Ccircle cx='0' cy='0' r='20'/%3E%3Ccircle cx='0' cy='0' r='30'/%3E%3Ccircle cx='0' cy='0' r='40'/%3E%3C/g%3E%3C/svg%3E")` }}></div>

            {/* Vertical Typography (Watermarks) */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 0.04 }} viewport={{ once: true }} className="absolute right-8 md:right-16 top-1/4 pointer-events-none hidden lg:block">
                <p className="text-white font-serif text-6xl writing-vertical-rl tracking-widest">
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
                    <div className="w-12 h-px bg-offwhite mx-auto mb-6 opacity-80"></div>
                    <p className="text-lg text-[#F5F3EF]/90 max-w-2xl mx-auto">
                        The complete cost structure, inclusions, and installment details will be explained during the Parent Orientation session.
                    </p>
                </motion.div>

                {/* Installment Cards */}
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
                            title: 'First Installment',
                            subtitle: 'Registration Fee',
                            amount: '₹9,999',
                            note: 'Non-refundable',
                            date: '31st March 2026',
                            payee: 'Travelstall'
                        },
                        {
                            num: 2,
                            title: 'Second Installment',
                            subtitle: 'Mid-term Payment',
                            amount: '₹1,20,000',
                            note: null,
                            date: '1st July 2026',
                            payee: 'Travelstall'
                        },
                        {
                            num: 3,
                            title: 'Third Installment',
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
                            className="bg-[#181818] text-[#F5F3EF] rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.5)] overflow-hidden border border-gray-800 hover:shadow-[0_8px_30px_rgba(0,0,0,0.7)] hover:border-[#B89B5E]/30 transition-all transform hover:-translate-y-1 duration-300"
                        >
                            {/* Red top accent bar */}
                            <div className="h-1.5 bg-primary-red"></div>
                            <div className="p-6">
                                {/* Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="w-9 h-9 rounded-full bg-primary-red/10 text-primary-red font-bold text-sm flex items-center justify-center border border-primary-red/20">
                                        {inst.num}
                                    </span>
                                    <div>
                                        <h4 className="font-serif font-bold text-lg leading-tight text-[#F5F3EF]">{inst.title}</h4>
                                        <p className="text-gray-400 text-xs">{inst.subtitle}</p>
                                    </div>
                                </div>

                                {/* Amount */}
                                <p className="text-primary-red text-3xl font-bold mb-1">{inst.amount}</p>
                                {inst.note && (
                                    <p className="text-gray-400 text-xs mb-4">{inst.note}</p>
                                )}
                                {!inst.note && <div className="mb-4"></div>}

                                {/* Meta */}
                                <div className="space-y-2 text-sm text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-400">📅</span>
                                        {inst.date}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-400">🏢</span>
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
                    className="bg-[#181818] text-[#F5F3EF] shadow-2xl overflow-hidden border border-gray-800"
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
                                    className="flex items-start gap-3 text-sm text-gray-300 font-medium border-b border-gray-800 pb-3"
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
                    className="mt-12 text-center text-[#F5F3EF]/80 text-sm max-w-3xl mx-auto leading-relaxed"
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
                    className="mt-16 bg-[#181818] border border-[#B89B5E]/40 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden"
                >
                    {/* Decorative accent */}
                    <div className="absolute top-0 left-0 w-2 h-full bg-primary-red"></div>

                    <div className="flex-1 space-y-3 relative z-10 w-full md:w-auto">
                        <h3 className="text-2xl md:text-3xl font-serif text-[#F5F3EF] leading-tight">
                            Transparency First. Commitment Later.
                        </h3>
                        <p className="text-gray-600 text-base max-w-2xl">
                            Attend the Parent Orientation to review the complete cost structure and ask your questions directly.
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
