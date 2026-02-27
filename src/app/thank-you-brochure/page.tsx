"use client";

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function ThankYouContent() {
    const searchParams = useSearchParams();

    // Determine which brochure to download based on the school param
    const school = searchParams.get('school') || '';
    const isSoi = school.toLowerCase() === 'soi';
    const brochureFile = isSoi
        ? '/brochures/SOI-Japan-2026.pdf'
        : '/brochures/DPS-School-Japan-2026.pdf';
    const brochureName = isSoi
        ? 'SOI-Japan-2026-Programme-Brochure.pdf'
        : 'DPS-School-Japan-2026-Programme-Brochure.pdf';

    useEffect(() => {
        // Auto-trigger PDF download on page load
        const link = document.createElement('a');
        link.href = brochureFile;
        link.download = brochureName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, [brochureFile, brochureName]);

    return (
        <main className="min-h-screen bg-[#1a1a1a] text-gray-300 py-16 md:py-24 px-4 font-sans selection:bg-primary-red/30">
            <div className="max-w-3xl mx-auto space-y-16">

                {/* Header Section */}
                <section className="text-center space-y-6">
                    <span className="text-primary-red text-[11px] md:text-[13px] uppercase tracking-[0.3em] font-semibold">
                        Download Complete
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#F9F6F0] leading-tight">
                        Programme Overview Delivered.
                    </h1>
                    <div className="w-16 h-px bg-primary-red mx-auto my-6"></div>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Your Japan 2026 brochure has been downloaded.
                        <br className="hidden md:block" />
                        Take your time reviewing the itinerary, supervision framework, and investment structure.
                    </p>
                    <p className="text-lg md:text-xl text-[#e2d5c0] font-serif italic pt-4">
                        When ready, the next step is simple.
                    </p>
                </section>

                <div className="border-t border-gray-800"></div>

                {/* The Orientation & Secure Seat (Grid) */}
                <section className="grid md:grid-cols-2 gap-12 md:gap-8">
                    {/* The Orientation */}
                    <div className="bg-[#222222] p-8 md:p-10 border border-gray-800 rounded-sm shadow-xl relative group">
                        <div className="absolute inset-1 border border-primary-red/10 rounded-sm pointer-events-none"></div>
                        <h2 className="text-2xl font-serif text-[#F9F6F0] mb-4">The Orientation.</h2>
                        <p className="text-gray-400 leading-relaxed text-[15px] mb-4">
                            The brochure outlines the journey.
                            <br />
                            The Parent Orientation explains the structure behind it.
                        </p>
                        <ul className="text-gray-400 leading-relaxed text-[15px] space-y-1 pl-4 border-l border-gray-700">
                            <li>How cities are integrated.</li>
                            <li>How supervision is designed.</li>
                            <li>How independence is managed.</li>
                            <li>How decisions are made responsibly.</li>
                        </ul>
                    </div>

                    {/* Secure Seat / Download Fallback */}
                    <div className="bg-[#222222] p-8 md:p-10 border border-gray-800 rounded-sm shadow-xl relative group flex flex-col justify-between">
                        <div className="absolute inset-1 border border-primary-red/10 rounded-sm pointer-events-none"></div>

                        <div className="mb-8">
                            <h2 className="text-xl font-serif text-[#F9F6F0] mb-3">Secure Your Orientation Seat</h2>
                            <p className="text-gray-400 leading-relaxed text-[14px]">
                                No obligation.
                                <br />
                                <span className="text-[#e2d5c0] italic font-serif">Enrolment decisions are made only after the session.</span>
                            </p>
                            <a
                                href="/#register"
                                className="inline-block mt-4 bg-primary-red text-[#F9F6F0] px-6 py-3 rounded-sm text-[12px] font-semibold uppercase tracking-[0.1em] hover:bg-[#8b1c1c] transition-colors shadow-lg"
                            >
                                Register Now
                            </a>
                        </div>

                        <div className="pt-6 border-t border-gray-800">
                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2">Didn't Receive the Download?</h3>
                            <p className="text-gray-400 text-[13px] mb-4">
                                If the brochure did not download automatically, you may access it below.
                            </p>
                            <a
                                href={brochureFile}
                                download={brochureName}
                                className="inline-block bg-transparent border border-gray-600 text-[#F9F6F0] px-6 py-2 rounded-sm text-[12px] font-semibold uppercase tracking-[0.1em] hover:bg-gray-800 transition-colors"
                            >
                                Download Overview
                            </a>
                        </div>
                    </div>
                </section>

                <div className="border-t border-gray-800"></div>

                {/* Previous Tours Section */}
                <section className="space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl font-serif text-[#F9F6F0]">Previous Japan Journeys</h2>
                        <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
                            A glimpse into earlier programmes.
                            <br />
                            Observe the structure. The composure. The confidence.
                        </p>
                        <p className="text-gray-500 text-[14px] max-w-xl mx-auto pt-2">
                            While you wait, explore moments from our earlier journeys.
                            These videos offer a glimpse into the structure, supervision, and student experience.
                        </p>
                    </div>

                    {/* Videos Grid */}
                    <div className="grid lg:grid-cols-1 gap-12 max-w-2xl mx-auto">

                        {/* Video 1 */}
                        <div className="bg-[#222222] p-2 border border-gray-800 rounded-sm shadow-2xl relative">
                            <div className="absolute inset-1.5 border border-primary-red/20 pointer-events-none z-10"></div>
                            <div className="aspect-video relative overflow-hidden bg-black z-0">
                                <iframe
                                    className="absolute inset-0 w-full h-full"
                                    src="https://www.youtube.com/embed/TEVtsA30JFQ?si=4DgyI45D2nrxhyj1"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen>
                                </iframe>
                            </div>
                        </div>

                        {/* Video 2 */}
                        <div className="bg-[#222222] p-2 border border-gray-800 rounded-sm shadow-2xl relative">
                            <div className="absolute inset-1.5 border border-primary-red/20 pointer-events-none z-10"></div>
                            <div className="aspect-video relative overflow-hidden bg-black z-0">
                                <iframe
                                    className="absolute inset-0 w-full h-full"
                                    src="https://www.youtube.com/embed/GrjZC9_OKtU?si=-5-yJLmda19D8nKk"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen>
                                </iframe>
                            </div>
                        </div>

                        {/* Video 3 */}
                        <div className="bg-[#222222] p-2 border border-gray-800 rounded-sm shadow-2xl relative">
                            <div className="absolute inset-1.5 border border-primary-red/20 pointer-events-none z-10"></div>
                            <div className="aspect-video relative overflow-hidden bg-black z-0">
                                <iframe
                                    className="absolute inset-0 w-full h-full"
                                    src="https://www.youtube.com/embed/F6SKA3850Iw?si=E58bPPgBdYUh2m6a"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen>
                                </iframe>
                            </div>
                        </div>

                    </div>
                </section>

                <div className="border-t border-gray-800"></div>

                {/* Footer / Questions Section */}
                <section className="text-center space-y-10">
                    <div className="space-y-3">
                        <h3 className="text-xl font-serif text-[#F9F6F0] mb-2">Questions?</h3>
                        <p className="text-primary-red hover:text-white transition-colors cursor-pointer">mail@themodernclassroom.in</p>
                        <p className="text-gray-400">+91-9900786677 | 9886753632</p>
                    </div>

                    <div className="pt-8">
                        {/* We use an img tag without onError to prevent Server Component issues since it's just a thank you page */}
                        <img
                            src="/logo.png"
                            alt="The Modern Classroom"
                            className="h-10 md:h-12 w-auto mx-auto mb-6 opacity-90"
                        />
                        <h2 className="text-2xl font-serif text-[#F9F6F0] mb-2">The Modern Classroom</h2>
                        <span className="text-[11px] md:text-[13px] text-[#e2d5c0] tracking-[0.2em] font-serif italic">
                            Structured. Supervised. Transformational.
                        </span>
                    </div>

                    <div className="pt-8">
                        <a
                            href="/"
                            className="inline-block bg-primary-red text-[#F9F6F0] px-8 py-4 rounded-sm text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.15em] hover:bg-[#8b1c1c] transition-colors shadow-lg"
                        >
                            Return to Homepage
                        </a>
                    </div>
                </section>

            </div>
        </main>
    );
}

export default function ThankYouBrochure() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#1a1a1a] text-primary-red uppercase tracking-widest text-sm">Loading...</div>}>
            <ThankYouContent />
        </Suspense>
    );
}
