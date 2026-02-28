'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 bg-[#F5F3EF] backdrop-blur-md supports-[backdrop-filter]:bg-[#F5F3EF]/70 ${isScrolled ? 'border-b border-[#e6dac3] shadow-sm' : 'border-b border-transparent'
                }`}
            style={{ height: '100px' }}
        >
            <div className="container-max h-full flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-xl md:text-2xl font-bold font-serif tracking-tight text-charcoal flex items-center gap-2">
                    <span className="text-primary-red text-2xl md:text-3xl font-serif">日本</span>
                    JAPAN 2026
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {['Programme', 'Safety', 'Investment', 'FAQs'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium text-gray-600 hover:text-primary-red transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                {/* CTA */}
                <div className="hidden md:block">
                    <motion.a
                        href="#register"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block bg-primary-red text-white px-6 py-3 rounded-sm text-sm font-semibold hover:bg-black transition-colors"
                    >
                        Register Now
                    </motion.a>
                </div>

                {/* Mobile Menu Toggle & CTA */}
                <div className="md:hidden flex items-center gap-3">
                    <motion.a
                        href="#register"
                        whileTap={{ scale: 0.95 }}
                        className="inline-block bg-primary-red text-white px-4 py-2 rounded-sm text-xs font-semibold hover:bg-charcoal transition-colors whitespace-nowrap"
                    >
                        Register Now
                    </motion.a>
                    <button
                        className="p-2 text-charcoal"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Nav Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-[100px] left-0 w-full bg-[#F5F3EF] backdrop-blur-md supports-[backdrop-filter]:bg-[#F5F3EF]/90 border-b border-[#e6dac3] px-4 py-6 shadow-lg flex flex-col gap-4">
                    {['Programme', 'Safety', 'Investment', 'FAQs'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-lg font-medium text-charcoal py-2 border-b border-gray-100"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
}
