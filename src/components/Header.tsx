'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

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
            className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white ${isScrolled ? 'border-b border-gray-200 shadow-sm' : 'border-b border-transparent'
                }`}
            style={{ height: '80px' }}
        >
            <div className="container-max h-full flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-xl md:text-2xl font-bold font-serif tracking-tight text-charcoal">
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
                    <a
                        href="#register"
                        className="bg-primary-red text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-black transition-colors"
                    >
                        Secure Your Child&apos;s Seat
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-charcoal"
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

            {/* Mobile Nav Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-[80px] left-0 w-full bg-white border-b border-gray-200 px-4 py-6 shadow-lg flex flex-col gap-4">
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
                    <a
                        href="#register"
                        className="mt-4 w-full text-center bg-primary-red text-white px-6 py-4 rounded-lg font-semibold"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Secure Your Child&apos;s Seat
                    </a>
                </div>
            )}
        </header>
    );
}
