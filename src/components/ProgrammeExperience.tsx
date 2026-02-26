import Image from 'next/image';

const cities = [
    {
        name: 'Tokyo',
        theme: 'Structured Complexity',
        desc: 'Students navigate one of the world\'s most efficient cities while learning how large-scale systems operate seamlessly.',
        bgImage: '/images/tokyo.jpg',
    },
    {
        name: 'Mt. Fuji & Hakone',
        theme: 'Observation & Perspective',
        desc: 'Standing at Mt. Fuji\'s 5th Station and exploring Hakone teaches reflection, patience, and quiet strength.',
        bgImage: '/images/fuji.jpg',
    },
    {
        name: 'Kyoto',
        theme: 'Cultural Continuity',
        desc: 'From temple visits to traditional experiences, students witness how tradition and modernity coexist without conflict.',
        bgImage: '/images/kyoto.jpg',
    },
    {
        name: 'Nara',
        theme: 'Discipline & Respect',
        desc: 'Institutions where respect is embedded into daily life.',
        bgImage: '/images/nara.jpg',
    },
    {
        name: 'Osaka',
        theme: 'Guided Independence',
        desc: 'Supervised exploration builds confidence within defined boundaries.',
        bgImage: '/images/osaka.jpg',
    }
];

export default function ProgrammeExperience() {
    return (
        <section id="programme" className="bg-alt-charcoal ma-spacing-mob ma-spacing-desk relative">
            <div className="container-max">

                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-5xl font-serif mb-6 text-offwhite">
                        Cultural Experience Highlights
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
                            &quot;Structured exposure catalyzes real growth.&quot;
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
