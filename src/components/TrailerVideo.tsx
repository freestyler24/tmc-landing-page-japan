"use client";

import Script from 'next/script';
import { motion } from 'framer-motion';

export default function TrailerVideo() {
    return (
        <section className="bg-alt-red ma-spacing-mob ma-spacing-desk relative overflow-hidden">
            <div className="container-max flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-serif text-offwhite mb-4 md:mb-6">
                        See the Experience Before You Decide.
                    </h2>

                    <p className="max-w-2xl text-base md:text-lg text-red-50 mb-3 md:mb-4 opacity-90">
                        Before reading further, take a moment to see what this journey feels like.
                    </p>
                    <p className="max-w-2xl text-base md:text-lg text-red-50 mb-8 md:mb-12 opacity-90">
                        Notice the precision. The structure. The quiet discipline.<br />
                        This is not tourism. It is structured exposure.
                    </p>
                </motion.div>

                {/* Wistia Video Embed */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full max-w-4xl shadow-2xl bg-black mb-12 relative group cursor-pointer border border-red-800 rounded-sm overflow-hidden"
                >
                    <Script src="https://fast.wistia.com/player.js" strategy="afterInteractive" />
                    <Script src="https://fast.wistia.com/embed/zwq5w6rf4r.js" strategy="afterInteractive" type="module" />
                    <Script id="wistia-captions-disable" strategy="afterInteractive">
                        {`
                            window._wq = window._wq || [];
                            _wq.push({ id: "zwq5w6rf4r", options: { plugin: { captions: { onByDefault: false } } } });
                        `}
                    </Script>

                    <div dangerouslySetInnerHTML={{
                        __html: `
                        <style>wistia-player[media-id='zwq5w6rf4r']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/zwq5w6rf4r/swatch'); display: block; filter: blur(5px); padding-top:50.0%; }</style> 
                        <wistia-player media-id="zwq5w6rf4r" aspect="2.0"></wistia-player>
                    ` }} />
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
                        className="inline-block bg-transparent border-2 border-offwhite text-offwhite px-6 md:px-8 py-3 rounded-sm text-sm md:text-lg font-semibold hover:bg-offwhite hover:text-primary-red transition-colors transform hover:-translate-y-1 hover:shadow-lg"
                    >
                        Register for Parent Orientation
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
