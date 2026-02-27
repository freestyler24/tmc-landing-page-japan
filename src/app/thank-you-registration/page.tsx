import React from 'react';

export default function ThankYouRegistration() {
    return (
        <main className="min-h-screen bg-[#1a1a1a] text-gray-300 py-16 md:py-24 px-4 font-sans selection:bg-primary-red/30">
            <div className="max-w-3xl mx-auto space-y-16">

                {/* Header Section */}
                <section className="text-center space-y-6">
                    <span className="text-primary-red text-[11px] md:text-[13px] uppercase tracking-[0.3em] font-semibold">
                        Confirmation
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#F9F6F0] leading-tight">
                        Intent Received.
                    </h1>
                    <div className="w-16 h-px bg-primary-red mx-auto my-6"></div>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Thank you for registering for the Japan 2026 Parent Orientation.
                        <br className="hidden md:block" />
                        Your seat for the orientation session has been successfully reserved.
                    </p>
                </section>

                <div className="border-t border-gray-800"></div>

                {/* What Happens Next & Important (Grid) */}
                <section className="grid md:grid-cols-2 gap-12 md:gap-8">
                    {/* What Happens Next? */}
                    <div className="bg-[#222222] p-8 md:p-10 border border-gray-800 rounded-sm shadow-xl relative group">
                        <div className="absolute inset-1 border border-primary-red/10 rounded-sm pointer-events-none"></div>
                        <h2 className="text-2xl font-serif text-[#F9F6F0] mb-4">What Happens Next?</h2>
                        <p className="text-gray-400 leading-relaxed text-[15px]">
                            Our team will contact you shortly with the session details and access information.
                            Please keep your phone and email accessible.
                        </p>
                    </div>

                    {/* Important */}
                    <div className="bg-[#222222] p-8 md:p-10 border border-gray-800 rounded-sm shadow-xl relative group">
                        <div className="absolute inset-1 border border-primary-red/10 rounded-sm pointer-events-none"></div>
                        <h2 className="text-2xl font-serif text-[#F9F6F0] mb-4">Important</h2>
                        <p className="text-gray-400 leading-relaxed text-[15px]">
                            This registration confirms attendance for the <span className="text-[#e2d5c0] italic font-serif">Parent Orientation only.</span>
                            <br /><br />
                            Enrolment decisions are made after the session.
                        </p>
                    </div>
                </section>

                <div className="border-t border-gray-800"></div>

                {/* Previous Tours Section */}
                <section className="space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl font-serif text-[#F9F6F0]">Previous Tours</h2>
                        <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
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
