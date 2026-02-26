export default function TrustSafety() {
    return (
        <section id="safety" className="bg-alt-offwhite ma-spacing-mob ma-spacing-desk border-b border-gray-200">
            <div className="container-max">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
                        Structured for Safety. Designed for Growth.
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Your child&apos;s well-being is non-negotiable.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
                    {[
                        {
                            title: '1:20 Supervision Ratio',
                            desc: 'Dedicated teacher-to-student supervision ensuring personalized attention throughout all activities.'
                        },
                        {
                            title: 'Trained Tour Directors',
                            desc: 'Experienced tour directors and English-speaking local guides at every location.'
                        },
                        {
                            title: '4-Star Accommodation',
                            desc: 'Twin-sharing accommodation in vetted 4-star properties throughout the journey.'
                        }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-8 border border-gray-100 shadow-sm text-center">
                            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-primary-red text-xl font-serif">{i + 1}</span>
                            </div>
                            <h3 className="text-xl font-serif text-charcoal mb-3">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Full framework list */}
                <div className="max-w-3xl mx-auto">
                    <h3 className="text-xl font-serif text-charcoal mb-6 text-center">Framework Includes:</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            '1:20 teacher-to-student supervision ratio',
                            'Trained tour directors',
                            '4-star twin-sharing accommodation',
                            'Return international airfare',
                            'Visa processing',
                            'English-speaking local guides',
                            'Private transportation',
                            'Travel insurance',
                            'Maximum 45 students per batch'
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3 text-sm text-charcoal">
                                <span className="text-primary-red text-lg mt-[-2px]">■</span>
                                {item}
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <p className="text-gray-600 font-serif italic text-lg">
                            Independence within structure. Freedom within supervision.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
