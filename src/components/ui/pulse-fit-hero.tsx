import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProgramCard {
    image: string;
    category: string;
    title: string;
    onClick?: () => void;
}

interface PulseFitHeroProps {
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    programs?: ProgramCard[];
    className?: string;
    children?: React.ReactNode; // Extra elements like timers and CTAs
}

export function PulseFitHero({
    title,
    subtitle,
    programs = [],
    className,
    children,
}: PulseFitHeroProps) {
    return (
        <section
            className={cn(
                "relative w-full min-h-screen flex flex-col overflow-hidden bg-rice-white pt-[110px] md:pt-[150px]",
                className
            )}
            role="banner"
            aria-label="Hero section"
        >
            {/* Ambient Background Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-kyoto-gold/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary-red/5 rounded-full blur-3xl pointer-events-none"></div>

            {/* Background Circle Pattern */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    opacity: 0.07,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg stroke='%23c0b090' stroke-width='1' fill='none'%3E%3Ccircle cx='40' cy='40' r='10'/%3E%3Ccircle cx='40' cy='40' r='20'/%3E%3Ccircle cx='40' cy='40' r='30'/%3E%3Ccircle cx='40' cy='40' r='40'/%3E%3Ccircle cx='0' cy='80' r='10'/%3E%3Ccircle cx='0' cy='80' r='20'/%3E%3Ccircle cx='0' cy='80' r='30'/%3E%3Ccircle cx='0' cy='80' r='40'/%3E%3Ccircle cx='80' cy='80' r='10'/%3E%3Ccircle cx='80' cy='80' r='20'/%3E%3Ccircle cx='80' cy='80' r='30'/%3E%3Ccircle cx='80' cy='80' r='40'/%3E%3Ccircle cx='80' cy='0' r='10'/%3E%3Ccircle cx='80' cy='0' r='20'/%3E%3Ccircle cx='80' cy='0' r='30'/%3E%3Ccircle cx='80' cy='0' r='40'/%3E%3Ccircle cx='0' cy='0' r='10'/%3E%3Ccircle cx='0' cy='0' r='20'/%3E%3Ccircle cx='0' cy='0' r='30'/%3E%3Ccircle cx='0' cy='0' r='40'/%3E%3C/g%3E%3C/svg%3E")`
                }}
            />

            {/* Vertical Japanese Watermarks */}
            <div className="absolute left-8 md:left-14 top-1/3 pointer-events-none hidden lg:block select-none">
                <p className="text-kyoto-gold font-serif text-5xl tracking-widest opacity-25" style={{ writingMode: 'vertical-rl' }}>
                    成長
                </p>
            </div>
            <div className="absolute right-8 md:right-14 top-[40%] pointer-events-none hidden lg:block select-none">
                <p className="text-kyoto-gold font-serif text-5xl tracking-widest opacity-25" style={{ writingMode: 'vertical-rl' }}>
                    規律
                </p>
            </div>

            {/* Floating Sakura Particles */}
            <motion.div
                animate={{ y: [0, -22, 0], x: [0, 10, 0], rotate: [0, 45, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 right-[18%] w-3 h-3 rounded-tr-xl rounded-bl-xl bg-primary-red/20 blur-[1px] pointer-events-none hidden md:block"
            />
            <motion.div
                animate={{ y: [0, 28, 0], x: [0, -14, 0], rotate: [0, -45, 0] }}
                transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-1/3 left-[14%] w-4 h-4 rounded-tl-xl rounded-br-xl bg-kyoto-gold/25 blur-[1px] pointer-events-none hidden md:block"
            />
            <motion.div
                animate={{ y: [0, -16, 0], x: [0, 8, 0], rotate: [0, 30, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                className="absolute top-[60%] right-[30%] w-2 h-2 rounded-full bg-kyoto-gold/30 blur-[0.5px] pointer-events-none hidden md:block"
            />

            {/* Main Content */}
            <div className="relative z-10 flex-1 flex flex-col items-center justify-start px-4 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="flex flex-col items-center text-center max-w-7xl mx-auto w-full"
                    style={{ gap: "24px" }}
                >
                    {/* Title */}
                    {title && (
                        <div className="w-full">
                            {title}
                        </div>
                    )}

                    {/* Subtitle */}
                    {subtitle && (
                        <div className="w-full max-w-3xl mx-auto">
                            {subtitle}
                        </div>
                    )}

                    {/* Action Area / Children (Timer, 4 Pillars, CTAs) */}
                    {children && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="w-full mt-4"
                        >
                            {children}
                        </motion.div>
                    )}
                </motion.div>
            </div>

            {/* Program Cards Carousel (The Destinations) */}
            {programs.length > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="relative z-10 w-full mt-12 md:mt-24"
                    style={{
                        paddingTop: "20px",
                        paddingBottom: "60px",
                        overflowX: "hidden",
                        overflowY: "visible",
                    }}
                >
                    {/* Gradient Overlays for smooth scrolling edges */}
                    <div
                        className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none w-16 md:w-32"
                        style={{
                            background: "linear-gradient(90deg, #F9F8F6 0%, rgba(249, 248, 246, 0) 100%)",
                        }}
                    />
                    <div
                        className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none w-16 md:w-32"
                        style={{
                            background: "linear-gradient(270deg, #F9F8F6 0%, rgba(249, 248, 246, 0) 100%)",
                        }}
                    />

                    {/* Embedded Style for Marquee Animation */}
                    <style dangerouslySetInnerHTML={{
                        __html: `
                            @keyframes marquee {
                                0% { transform: translateX(0); }
                                100% { transform: translateX(-33.3333%); }
                            }
                            .animate-marquee {
                                animation: marquee ${programs.length * 8}s linear infinite;
                            }
                            .animate-marquee:hover {
                                animation-play-state: paused;
                            }
                        `
                    }} />

                    {/* Scrolling Container */}
                    <div
                        className="flex items-center animate-marquee"
                        style={{
                            gap: "24px",
                            width: "max-content"
                        }}
                    >
                        {/* Duplicate programs for seamless loop */}
                        {[...programs, ...programs, ...programs].map((program, index) => (
                            <div
                                key={index}
                                onClick={program.onClick}
                                className="flex-shrink-0 cursor-default relative overflow-hidden group transition-all duration-500 ease-out hover:-translate-y-4 hover:shadow-2xl"
                                style={{
                                    width: "320px",
                                    height: "440px",
                                    borderRadius: "20px",
                                    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
                                }}
                            >
                                {/* Image */}
                                <img
                                    src={program.image}
                                    alt={program.title}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                    onError={(e) => {
                                        e.currentTarget.src = "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&q=80";
                                    }}
                                />

                                {/* Gradient Overlay */}
                                <div
                                    className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-90"
                                    style={{
                                        background: "linear-gradient(180deg, rgba(0,0,0,0) 20%, rgba(0,0,0,0.85) 100%)",
                                    }}
                                />

                                {/* Text Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-2 transform transition-transform duration-500 group-hover:-translate-y-2">
                                    <span className="font-sans text-[10px] font-bold text-kyoto-gold tracking-[0.2em] uppercase">
                                        {program.category}
                                    </span>
                                    <h3 className="font-serif text-2xl font-medium text-white leading-tight">
                                        {program.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            )}
        </section>
    );
}
