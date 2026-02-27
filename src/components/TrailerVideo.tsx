'use client';

import Script from 'next/script';
import { motion } from 'framer-motion';

const FilmReelIcon = () => (
    <svg className="w-24 h-24 md:w-32 md:h-32 text-[#d8c8b8] opacity-90 drop-shadow-2xl" viewBox="0 0 24 24" fill="currentColor">
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
);

export default function TrailerVideo() {
    return (
        <section className="bg-charcoal ma-spacing-mob ma-spacing-desk relative overflow-hidden">
            <div className="container-max flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-serif text-[#F9F6F0] mb-4 md:mb-6">
                        See the Experience Before You Decide.
                    </h2>

                    <p className="max-w-2xl text-base md:text-lg text-gray-400 mb-3 md:mb-4">
                        Before reading further, take a moment to see what this journey feels like.
                    </p>
                    <p className="max-w-2xl text-base md:text-lg text-gray-400 mb-10 md:mb-14">
                        Notice the precision. The structure. The quiet discipline.<br />
                        This is not tourism. It is structured exposure.
                    </p>
                </motion.div>

                {/* Video container with golden frame and film reel decor */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full max-w-4xl relative z-10 mb-12 group cursor-pointer"
                >
                    {/* Golden Background Frame */}
                    <div className="bg-[#e2d5c0] p-3 shadow-2xl rounded-sm">
                        {/* Wistia Embed inside the frame */}
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

                    {/* Film Reel Decorative Element */}
                    <div className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 z-20 pointer-events-none transform rotate-12 drop-shadow-2xl">
                        <FilmReelIcon />
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
