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
        <section ref={containerRef} className="bg-[#1a1a1a] py-16 md:py-24 relative border-t border-b border-gray-900">
            <div className="container-max flex flex-col items-center text-center">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-10 md:mb-14 w-full"
                >
                    <h2 className="text-3xl md:text-5xl font-serif text-[#F9F6F0] mb-4 md:mb-6">
                        See the Experience Before You Decide.
                    </h2>
                    <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-400 mb-3">
                        Before reading further, take a moment to see what this journey feels like.
                    </p>
                    <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-400">
                        Notice the precision. The structure. The quiet discipline.<br />
                        This is not tourism. It is structured exposure.
                    </p>
                </motion.div>

                {/* Video frame container */}
                <motion.div
                    style={{ y: yVideo }}
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full max-w-4xl mb-12"
                >
                    {/* Golden frame — film reel sits INSIDE this relative container */}
                    <div className="relative bg-[#e2d5c0] p-3 shadow-2xl rounded-sm">

                        {/* Film Reel — anchored inside the top-right corner of the golden frame */}
                        <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute top-3 right-3 z-10 pointer-events-none opacity-60"
                        >
                            <svg className="w-12 h-12 md:w-16 md:h-16 text-[#6b5a3e]" viewBox="0 0 24 24" fill="currentColor">
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

                        {/* Wistia embed */}
                        <div className="bg-black relative overflow-hidden border border-black/20">
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
                            <style>wistia-player[media-id='zwq5w6rf4r']:not(:defined) {background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/zwq5w6rf4r/swatch'); display: block; filter: blur(5px); padding-top:50.0%; }</style>
                            <wistia-player media-id="zwq5w6rf4r" aspect="2.0"></wistia-player>
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
                    <a
                        href="#register"
                        className="inline-block bg-primary-red text-white px-8 md:px-12 py-3 md:py-4 rounded-sm text-sm md:text-lg font-semibold hover:bg-white hover:text-primary-red transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        Register for Parent Orientation
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
