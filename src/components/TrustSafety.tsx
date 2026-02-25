export default function TrustSafety() {
    return (
        <section id="safety" className="bg-alt-offwhite ma-spacing-mob ma-spacing-desk border-b border-gray-200">
            <div className="container-max">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
                        Institutional Safety Framework
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Japan is one of the safest nations on earth. We augment this baseline with strict, institution-grade protocols.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {[
                        {
                            title: '1:20 Mentor Ratio',
                            desc: 'Dedicated oversight ensuring personalized attention and continuous supervision throughout all structured activities.'
                        },
                        {
                            title: '24/7 Medical Protocol',
                            desc: 'Immediate access to English-speaking medical facilities directly vetted by our operational team.'
                        },
                        {
                            title: 'Real-Time Tracking',
                            desc: 'Secure parent portal with daily situation reports and movement tracking during transit phases.'
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

            </div>
        </section>
    );
}
