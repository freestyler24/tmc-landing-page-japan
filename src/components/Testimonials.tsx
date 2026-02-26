export default function Testimonials() {
    const testimonials = [
        {
            quote: "It wasn't a tour. It was structured exposure. We saw visible growth in maturity.",
            author: "Parent, Grade 9"
        },
        {
            quote: "The supervision framework gave us complete confidence.",
            author: "Parent, Grade 8"
        },
        {
            quote: "Japan changed how our child observes responsibility and systems.",
            author: "Parent, Grade 10"
        }
    ];

    return (
        <section className="bg-alt-charcoal ma-spacing-mob ma-spacing-desk relative overflow-hidden">
            <div className="container-max relative z-10">

                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif text-offwhite mb-4 md:mb-6">
                        They Returned More Independent. More Composed.
                    </h2>
                    <div className="w-16 h-1 bg-primary-red mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto mb-10 md:mb-16">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-gray-900 border border-gray-800 p-6 md:p-8 flex flex-col justify-between">
                            <div>
                                <div className="flex text-kyoto-gold mb-6 text-sm">
                                    ★★★★★
                                </div>
                                <p className="text-gray-300 font-serif italic text-lg leading-relaxed mb-8">
                                    &quot;{t.quote}&quot;
                                </p>
                            </div>
                            <p className="text-primary-red font-bold text-sm uppercase tracking-wider">
                                — {t.author}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <a
                        href="#register"
                        className="inline-block bg-primary-red text-white px-8 py-3 rounded-sm text-sm font-semibold hover:bg-white hover:text-primary-red transition-colors"
                    >
                        Join the 2026 Cohort
                    </a>
                </div>

            </div>
        </section>
    );
}
