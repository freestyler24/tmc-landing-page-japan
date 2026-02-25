export default function ProblemOutcome() {
    return (
        <section className="bg-alt-offwhite ma-spacing-mob ma-spacing-desk border-b border-gray-200">
            <div className="container-max max-w-5xl">

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Problem Side */}
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-serif text-charcoal leading-tight">
                            The Problem with Standard Student Travel
                        </h2>
                        <div className="w-12 h-1 bg-primary-red"></div>
                        <p className="text-lg text-gray-600">
                            Most educational tours are thinly veiled vacations. They rush students through tourist traps without providing meaningful cultural context or demanding personal responsibility. The result is a superficial experience that fails to catalyze real growth.
                        </p>
                    </div>

                    {/* Outcome Side */}
                    <div className="bg-white p-8 md:p-12 shadow-md border-l-4 border-primary-red">
                        <h3 className="text-2xl font-serif text-charcoal mb-4">
                            The Japan 2026 Standard
                        </h3>
                        <p className="text-gray-600 mb-6">
                            We replace passive observation with structured exposure. Japan demands systemic respect, spatial awareness, and extreme punctuality.
                        </p>
                        <ul className="space-y-4 text-sm text-charcoal font-medium">
                            <li className="flex items-start gap-3">
                                <span className="text-primary-red text-lg">■</span>
                                Students return more self-reliant.
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary-red text-lg">■</span>
                                Students respect high-functioning systems.
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary-red text-lg">■</span>
                                Students adapt to structured complexity.
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
}
