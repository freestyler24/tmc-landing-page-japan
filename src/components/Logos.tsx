"use client";

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Logos() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yVal = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const opacityVal = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={containerRef} className="py-6 md:py-8 bg-white border-b border-border-soft overflow-hidden relative">
            <div className="container-max text-center relative z-10">
                {/* Staggered & Parallax Animated Logos */}
                <motion.div
                    style={{ y: yVal, opacity: opacityVal }}
                    className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-20 max-w-5xl mx-auto"
                >
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center justify-center w-28 h-20 sm:w-32 sm:h-24 md:w-36 md:h-28"
                    >
                        <Image src="/images/TMC logo.png" alt="TMC Logo" width={144} height={112} quality={100} unoptimized className="object-contain w-full h-full mix-blend-multiply transition-all duration-500" />
                    </motion.div>

                    <div className="hidden md:block w-px h-12 md:h-20 bg-border-soft/50"></div>

                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center justify-center w-28 h-20 sm:w-32 sm:h-24 md:w-36 md:h-28"
                    >
                        <Image src="/images/updated_dps_logo.png" alt="DPS Logo" width={144} height={112} quality={100} unoptimized className="object-contain w-full h-full mix-blend-multiply transition-all duration-500" />
                    </motion.div>

                    <div className="hidden md:block w-px h-12 md:h-20 bg-border-soft/50"></div>

                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center justify-center w-28 h-20 sm:w-32 sm:h-24 md:w-36 md:h-28"
                    >
                        <Image src="/images/SOI Logo.jpg" alt="School of India Logo" width={144} height={112} quality={100} unoptimized className="object-contain w-full h-full mix-blend-multiply transition-all duration-500 scale-[1.4]" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
