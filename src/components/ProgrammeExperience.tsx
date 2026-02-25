import Image from 'next/image';

const cities = [
    {
        name: 'Tokyo',
        theme: 'Urban Precision',
        desc: 'Adaptability in real time. Navigation of structured complexity through the absolute precision of the Shibuya crossing and transit systems.',
        bgImage: '/images/tokyo.jpg', // Placeholder image path
    },
    {
        name: 'Mt. Fuji & Hakone',
        theme: 'Depth Over Distraction',
        desc: 'Removing the noise. Focus, clarity, and reflection at the 5th Station of Japan\'s most iconic natural structure.',
        bgImage: '/images/fuji.jpg',
    },
    {
        name: 'Kyoto',
        theme: 'Sustained Excellence',
        desc: 'The evolution of tradition. Understanding how hundred-year-old frameworks maintain relevance and functionality in the modern era.',
        bgImage: '/images/kyoto.jpg',
    },
    {
        name: 'Nara',
        theme: 'Systemic Harmony',
        desc: 'Discipline and co-existence. The synthesis of environmental respect and monumental scale at the Todaiji Temple.',
        bgImage: '/images/nara.jpg',
    },
    {
        name: 'Osaka',
        theme: 'Financial Acumen',
        desc: 'Confidence and calculation. Supervised budgeting, transaction models, and active negotiation in leading commercial districts.',
        bgImage: '/images/osaka.jpg',
    }
];

export default function ProgrammeExperience() {
    return (
        <section id="programme" className="bg-alt-charcoal ma-spacing-mob ma-spacing-desk relative">
            <div className="container-max">

                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-5xl font-serif mb-6 text-offwhite">
                        The Experience
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Each location is selected not for tourism, but for its specific educational and developmental outcome.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cities.map((city, idx) => (
                        <div
                            key={idx}
                            className={`group relative overflow-hidden bg-gray-900 shadow-xl border border-gray-800 ${idx === 3 || idx === 4 ? 'lg:col-span-1.5' : '' // make last two slightly different on desktop if strict grid
                                }`}
                        >
                            <div className="aspect-[4/5] md:aspect-square relative w-full h-full">
                                {/* Fallback pattern for when images aren't present */}
                                <div className="absolute inset-0 bg-gradient-to-br from-charcoal to-black opacity-80 z-10"></div>

                                <div className="relative z-20 p-8 h-full flex flex-col justify-end">
                                    <span className="text-primary-red text-sm font-bold uppercase tracking-wider mb-2 block transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        {city.theme}
                                    </span>
                                    <h3 className="text-3xl font-serif text-white mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        {city.name}
                                    </h3>
                                    <div className="w-8 h-1 bg-primary-red mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
                                    <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 text-sm md:text-base">
                                        {city.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* Fill the last slot in a 3-col grid to make 5 items look balanced */}
                    <div className="hidden lg:flex items-center justify-center p-8 bg-black/50 border border-gray-800 border-dashed">
                        <p className="text-gray-500 font-serif italic text-center">
                            "Structured exposure catalyzes real growth."
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
