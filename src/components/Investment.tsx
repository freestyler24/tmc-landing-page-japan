export default function Investment() {
    return (
        <section id="investment" className="bg-alt-red ma-spacing-mob ma-spacing-desk relative text-offwhite">
            <div className="container-max max-w-5xl">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif mb-4 md:mb-6">
                        Transparent Programme Investment
                    </h2>
                    <div className="w-16 h-1 bg-offwhite mx-auto mb-6 opacity-80"></div>
                    <p className="text-lg text-red-50 max-w-2xl mx-auto opacity-90">
                        The complete cost structure, inclusions, and installment details will be explained during the Parent Orientation session.
                    </p>
                </div>

                {/* Installment Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {[
                        {
                            num: 1,
                            title: 'First Installment',
                            subtitle: 'Registration Fee',
                            amount: '₹9,999',
                            note: 'Non-refundable',
                            date: '31st March 2026',
                            payee: 'Travelstall'
                        },
                        {
                            num: 2,
                            title: 'Second Installment',
                            subtitle: 'Mid-term Payment',
                            amount: '₹1,20,000',
                            note: null,
                            date: '1st July 2026',
                            payee: 'Travelstall'
                        },
                        {
                            num: 3,
                            title: 'Third Installment',
                            subtitle: 'Final Payment',
                            amount: '₹1,60,000',
                            note: null,
                            date: '1st September 2026',
                            payee: 'TMC Nexus Pvt Ltd'
                        }
                    ].map((inst) => (
                        <div key={inst.num} className="bg-white text-charcoal rounded-lg shadow-lg overflow-hidden border border-gray-100">
                            {/* Red top accent bar */}
                            <div className="h-1.5 bg-primary-red"></div>
                            <div className="p-6">
                                {/* Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="w-9 h-9 rounded-full bg-red-50 text-primary-red font-bold text-sm flex items-center justify-center border border-red-200">
                                        {inst.num}
                                    </span>
                                    <div>
                                        <h4 className="font-bold text-lg leading-tight">{inst.title}</h4>
                                        <p className="text-gray-500 text-xs">{inst.subtitle}</p>
                                    </div>
                                </div>

                                {/* Amount */}
                                <p className="text-primary-red text-3xl font-bold mb-1">{inst.amount}</p>
                                {inst.note && (
                                    <p className="text-gray-500 text-xs mb-4">{inst.note}</p>
                                )}
                                {!inst.note && <div className="mb-4"></div>}

                                {/* Meta */}
                                <div className="space-y-2 text-sm text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-400">📅</span>
                                        {inst.date}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-400">🏢</span>
                                        {inst.payee}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
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
