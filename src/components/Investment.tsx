export default function Investment() {
    return (
        <section id="investment" className="bg-alt-red ma-spacing-mob ma-spacing-desk relative text-offwhite">
            <div className="container-max max-w-5xl">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif mb-6">
                        Transparent Programme Investment
                    </h2>
                    <div className="w-16 h-1 bg-offwhite mx-auto mb-6 opacity-80"></div>
                    <p className="text-lg text-red-50 max-w-2xl mx-auto opacity-90">
                        The complete cost structure, inclusions, and installment details will be explained during the Parent Orientation session.
                    </p>
                </div>

                <div className="bg-white text-charcoal shadow-2xl overflow-hidden">
                    <div className="p-10 w-full">
                        <h3 className="text-lg font-bold tracking-wider mb-6 text-primary-red uppercase">Indicative Inclusions</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                'International airfare',
                                'Accommodation',
                                'Visa processing',
                                'Internal transportation',
                                'Supervision framework',
                                'Cultural access'
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 text-sm text-charcoal font-medium border-b border-gray-100 pb-3">
                                    <span className="text-primary-red text-lg">■</span>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center text-red-50 text-sm opacity-80 max-w-3xl mx-auto leading-relaxed">
                    <p>
                        All financial details will be shared transparently during orientation.
                    </p>
                </div>

            </div>
        </section>
    );
}
