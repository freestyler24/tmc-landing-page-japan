export default function ProblemOutcome() {
    return (
        <section className="bg-alt-offwhite ma-spacing-mob ma-spacing-desk border-b border-gray-200">
            <div className="container-max max-w-5xl">

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Problem Side */}
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-serif text-charcoal leading-tight">
                            Because Academics Alone Are No Longer Enough.
                        </h2>
                        <div className="w-12 h-1 bg-primary-red"></div>
                        <p className="text-lg text-gray-600">
                            Your child lives in a world that rewards more than grades. It rewards adaptability, cultural awareness, and composure under uncertainty.
                        </p>
                        <p className="text-lg text-gray-600">
                            Yet most exposure today is filtered through screens. Real-world systems thinking is rarely observed firsthand.
                        </p>
                        <p className="text-lg text-gray-600">
                            Japan offers a rare opportunity to experience a society where heritage and innovation evolve together.
                        </p>
                    </div>

                    {/* Outcome Side */}
                    <div className="bg-white p-8 md:p-12 shadow-md border-l-4 border-primary-red">
                        <h3 className="text-2xl font-serif text-charcoal mb-4">
                            What Students Gain
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Students do not simply see Japan. They observe systems. They experience discipline. They learn through immersion.
                        </p>
                        <ul className="space-y-4 text-sm text-charcoal font-medium">
                            <li className="flex items-start gap-3">
                                <span className="text-primary-red text-lg">■</span>
                                Confidence in unfamiliar environments
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary-red text-lg">■</span>
                                Exposure to structured global systems
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary-red text-lg">■</span>
                                Cultural awareness beyond textbooks
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary-red text-lg">■</span>
                                Guided independence within supervision
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
}
