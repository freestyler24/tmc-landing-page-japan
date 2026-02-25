import Image from 'next/image';

export default function Hero() {
    return (
        <section className="bg-alt-offwhite relative overflow-hidden pt-[120px] pb-20 md:pt-[160px] md:pb-[120px]">
            <div className="container-max relative z-10 flex flex-col items-center text-center">

                {/* School Logos (Credibility Layer) */}
                <div className="flex items-center justify-center gap-6 md:gap-12 mb-12 opacity-80 mix-blend-multiply">
                    <Image src="/images/TMC logo.png" alt="TMC Logo" width={80} height={40} className="object-contain h-10 w-auto" />
                    <div className="w-px h-8 bg-gray-300"></div>
                    <Image src="/images/DPS School Logo.png" alt="DPS Logo" width={80} height={40} className="object-contain h-10 w-auto" />
                    <div className="w-px h-8 bg-gray-300"></div>
                    <Image src="/images/SOI Logo.jpg" alt="SOI Logo" width={80} height={40} className="object-contain h-10 w-auto mix-blend-multiply" />
                </div>

                {/* Core Messaging */}
                <div className="max-w-4xl mx-auto mb-8">
                    <p className="text-primary-red font-semibold tracking-wider text-sm mb-6 uppercase">
                        October 2026 | Grades 6–12 | Limited to 45 Students
                    </p>
                    <h1 className="text-5xl md:text-7xl font-serif text-charcoal leading-[1.1] mb-8">
                        09 Days. 04 Cities.<br />
                        <span className="text-primary-red">One Transformational Journey.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Your child will not just visit Japan. They will experience how a high-functioning society thinks, moves, and operates through structured exposure.
                    </p>
                </div>

                {/* 3 Benefit Bullets (Results Focused) */}
                <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-16 w-full max-w-3xl">
                    {[
                        { title: 'Build Independence', desc: 'Structured self-reliance in real-world environments.' },
                        { title: 'Direct Engagement', desc: 'Mentors guiding students through active scenarios.' },
                        { title: 'Precision Systems', desc: 'Learning efficiency from the Japanese model.' }
                    ].map((benefit, i) => (
                        <div key={i} className="flex-1 bg-white p-6 border border-gray-100 shadow-sm text-left relative overflow-hidden group">
                            <div className="w-1 h-full bg-primary-red absolute left-0 top-0 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                            <h3 className="text-charcoal font-serif font-bold text-lg mb-2">{benefit.title}</h3>
                            <p className="text-gray-600 text-sm">{benefit.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Countdown Timer (Static representation for layout) */}
                <div className="flex justify-center gap-4 mb-12 text-center">
                    {[
                        { label: 'DAYS', value: '234' },
                        { label: 'HOURS', value: '14' },
                        { label: 'MINUTES', value: '45' }
                    ].map((time, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div className="bg-charcoal text-white font-mono text-3xl md:text-4xl w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-sm">
                                {time.value}
                            </div>
                            <span className="text-xs font-bold tracking-widest text-gray-500 mt-2">{time.label}</span>
                        </div>
                    ))}
                </div>

                {/* Primary CTA */}
                <div>
                    <a
                        href="#register"
                        className="inline-block bg-primary-red text-white px-8 py-4 rounded-sm text-lg font-semibold hover:bg-black transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        Secure Your Child&apos;s Seat
                    </a>
                    <p className="text-xs text-gray-400 mt-4 uppercase tracking-wider">Application deadline approaches</p>
                </div>

            </div>

            {/* Decorative Japanese Minimalist Element (Ma) */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -z-10 transform skew-x-12 translate-x-1/2 opacity-50 pointer-events-none border-l border-gray-100"></div>
        </section>
    );
}
