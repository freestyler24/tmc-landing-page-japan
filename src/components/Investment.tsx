export default function Investment() {
    return (
        <section id="investment" className="bg-alt-red ma-spacing-mob ma-spacing-desk relative text-offwhite">
            <div className="container-max max-w-5xl">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif mb-6">
                        Programme Investment
                    </h2>
                    <div className="w-16 h-1 bg-offwhite mx-auto mb-6 opacity-80"></div>
                    <p className="text-lg text-red-50 max-w-2xl mx-auto opacity-90">
                        A transparent fee structure designed to secure the highest quality of mentorship, safety, and logistical precision in Japan.
                    </p>
                </div>

                <div className="bg-white text-charcoal shadow-2xl overflow-hidden md:flex">

                    {/* Breakdown */}
                    <div className="p-10 w-full">
                        <h3 className="text-lg font-bold tracking-wider mb-6 text-primary-red uppercase">Payment Schedule</h3>
                        <div className="space-y-6">

                            <div className="flex justify-between items-end border-b border-gray-100 pb-4">
                                <div>
                                    <h4 className="font-serif text-xl">Initial Block</h4>
                                    <p className="text-sm text-gray-500 mt-1">Non-refundable securement fee</p>
                                </div>
                                <div className="text-xl font-bold">₹9,999</div>
                            </div>

                            <div className="flex justify-between items-end border-b border-gray-100 pb-4">
                                <div>
                                    <h4 className="font-serif text-xl">Second Installment</h4>
                                    <p className="text-sm text-gray-500 mt-1">Due 1 July 2026</p>
                                </div>
                                <div className="text-xl font-bold">₹1,20,000</div>
                            </div>

                            <div className="flex justify-between items-end pb-2">
                                <div>
                                    <h4 className="font-serif text-xl">Final Installment</h4>
                                    <p className="text-sm text-gray-500 mt-1">Due 1 September 2026</p>
                                </div>
                                <div className="text-xl font-bold">₹1,60,000</div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center text-red-50 text-sm opacity-80 max-w-3xl mx-auto leading-relaxed">
                    <p>
                        *Includes all flights, accommodation, meals, bullet train transits, expert mentorship, entry fees, and travel insurance.
                        Does not include personal shopping expenses or passport application fees.
                    </p>
                </div>

            </div>
        </section>
    );
}
