export default function TrustSafety() {
    return (
        <section id="safety" className="bg-alt-offwhite ma-spacing-mob ma-spacing-desk border-b border-gray-200">
            <div className="container-max">

                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif text-charcoal mb-4 md:mb-6">
                        Structured for Safety. Designed for Growth.
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                        Your child&apos;s well-being is non-negotiable.
                    </p>
                </div>

                {/* Safety Framework Grid */}
                <div className="max-w-4xl mx-auto bg-white border border-gray-100 shadow-sm p-6 md:p-10">
                    <h3 className="text-lg font-bold tracking-wider mb-6 text-primary-red uppercase text-center">Safety & Supervision Framework</h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
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
                            <div key={i} className="flex items-start gap-3 text-sm text-charcoal py-2 border-b border-gray-50">
                                <span className="text-primary-red text-xs mt-1">■</span>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-8 md:mt-10">
                    <p className="text-gray-600 font-serif italic text-base md:text-lg">
                        Independence within structure. Freedom within supervision.
                    </p>
                </div>

            </div>
        </section>
    );
}
