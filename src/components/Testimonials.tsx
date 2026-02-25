export default function Testimonials() {
    const testimonials = [
        {
            quote: "The safety framework gave us confidence. The transformation gave us reassurance.",
            author: "Parent, Grade 8"
        },
        {
            quote: "Japan changed how our child observes systems and responsibility.",
            author: "Parent, Grade 10"
        },
        {
            quote: "It wasn't a trip. It was a structural shift in how they view independence.",
            author: "Parent, Grade 12"
        }
    ];

    return (
        <section className="bg-alt-charcoal ma-spacing-mob ma-spacing-desk relative overflow-hidden">
            <div className="container-max relative z-10">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-offwhite mb-6">
                        They Returned More Independent. More Aware. More Composed.
                    </h2>
                    <div className="w-16 h-1 bg-primary-red mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-gray-900 border border-gray-800 p-8 flex flex-col justify-between">
                            <div>
                                <div className="flex text-kyoto-gold mb-6 text-sm">
                                    ★★★★★
                                </div>
                                <p className="text-gray-300 font-serif italic text-lg leading-relaxed mb-8">
                                    "{t.quote}"
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
