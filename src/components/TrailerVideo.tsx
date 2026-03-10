'use client';

import Script from 'next/script';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function TrailerVideo() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yVideo = useTransform(scrollYProgress, [0, 1], ["20px", "-20px"]);

    return (
        <section ref={containerRef} className="bg-white ma-spacing-mob ma-spacing-desk relative border-t border-b border-border-soft overflow-hidden">
            {/* Atmospheric Background Watermark */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute -right-20 top-20 pointer-events-none opacity-[0.03] z-0"
            >
                <svg className="w-96 h-96 text-text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    <circle cx="12" cy="12" r="3" />
                    <circle cx="12" cy="5.5" r="1.5" />
                    <circle cx="12" cy="18.5" r="1.5" />
                    <circle cx="5.5" cy="12" r="1.5" />
                    <circle cx="18.5" cy="12" r="1.5" />
                    <circle cx="7.4" cy="7.4" r="1.5" />
                    <circle cx="16.6" cy="16.6" r="1.5" />
                    <circle cx="7.4" cy="16.6" r="1.5" />
                    <circle cx="16.6" cy="7.4" r="1.5" />
                </svg>
            </motion.div>

            <div className="container-max flex flex-col items-center text-center relative z-10 px-4">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 md:mb-16 w-full max-w-3xl"
                >
                    <span className="text-primary-red text-[11px] md:text-[13px] uppercase tracking-[0.3em] font-semibold mb-4 block">
                        Interactive Preview
                    </span>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-text-primary mb-6 leading-tight">
                        See the Experience <br className="hidden md:block" />Before You Decide.
                    </h2>
                    <p className="text-base md:text-lg text-text-secondary mb-6 leading-relaxed">
                        Before reading further, take a moment to see what this journey feels like.
                    </p>
                    <div className="flex items-center justify-center gap-4 py-4">
                        <div className="h-px w-12 bg-border-soft"></div>
                        <p className="text-base md:text-lg text-kyoto-gold font-serif italic">
                            Notice the precision. The structure. The quiet discipline. <br className="hidden md:block" />This is not tourism. It is structured exposure.
                        </p>
                        <div className="h-px w-12 bg-border-soft"></div>
                    </div>
                </motion.div>

                {/* Video frame container */}
                <motion.div
                    style={{ y: yVideo }}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full max-w-6xl mb-16 relative group"
                >
                    {/* Dark premium frame matching the flip cards */}
                    <div className="relative bg-rice-white p-2 md:p-3 shadow-md border border-border-soft rounded-sm">
                        {/* Inner accent border */}
                        <div className="absolute inset-1.5 border border-primary-red/20 rounded-sm pointer-events-none z-20"></div>

                        {/* Wistia embed */}
                        <div className="bg-white relative overflow-hidden rounded-sm z-10">
                            <Script src="https://fast.wistia.com/player.js" strategy="afterInteractive" />
                            <Script src="https://fast.wistia.com/embed/zwq5w6rf4r.js" strategy="afterInteractive" type="module" />
                            <Script id="wistia-captions-disable" strategy="afterInteractive">
                                {`
                                window._wq = window._wq || [];
                                _wq.push({id: "zwq5w6rf4r", options: {plugin: {captions: {onByDefault: false } } } });
                                `}
                            </Script>
                            <div dangerouslySetInnerHTML={{
                                __html: `
                            <style>wistia-player[media-id='zwq5w6rf4r']:not(:defined) {background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/zwq5w6rf4r/swatch'); display: block; filter: blur(5px); padding-top:56.25%; }</style>
                            <wistia-player media-id="zwq5w6rf4r" aspect="1.777"></wistia-player>
                            ` }} />
                        </div>
                    </div>
                </motion.div>

                {/* CTA below video */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <motion.a
                        href="#register"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative inline-flex items-center justify-center bg-primary-red text-white px-10 py-4 rounded-sm text-[13px] md:text-[14px] font-semibold uppercase tracking-[0.15em] hover:bg-deep-indigo transition-colors shadow-sm cursor-pointer overflow-hidden group"
                    >
                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-full group-hover:h-56 opacity-10"></span>
                        <span className="relative">Register for Parent Orientation</span>
                    </motion.a>
                </motion.div>

            </div>
        </section>
    );
}
