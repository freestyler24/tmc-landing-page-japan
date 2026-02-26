const cities = [
    {
        name: 'Tokyo',
        theme: 'Structured Complexity',
        desc: 'Students navigate one of the world\'s most efficient cities while learning how large-scale systems operate seamlessly.',
    },
    {
        name: 'Mt. Fuji & Hakone',
        theme: 'Observation & Perspective',
        desc: 'Standing at Mt. Fuji\'s 5th Station and exploring Hakone teaches reflection, patience, and quiet strength.',
    },
    {
        name: 'Kyoto',
        theme: 'Cultural Continuity',
        desc: 'From temple visits to traditional experiences, students witness how tradition and modernity coexist without conflict.',
    },
    {
        name: 'Nara',
        theme: 'Discipline & Respect',
        desc: 'Institutions where respect is embedded into daily life.',
    },
    {
        name: 'Osaka',
        theme: 'Guided Independence',
        desc: 'Supervised exploration builds confidence within defined boundaries.',
    }
];

export default function ProgrammeExperience() {
    return (
        <section id="programme" className="bg-alt-charcoal ma-spacing-mob ma-spacing-desk relative">
            <div className="container-max">

                <div className="text-center mb-12 md:mb-20">
                    <h2 className="text-3xl md:text-5xl font-serif mb-4 md:mb-6 text-offwhite">
                        Cultural Experience Highlights
                    </h2>
                    <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
                        Each location is selected not for tourism, but for its specific educational and developmental outcome.
                    </p>
                </div>

                {/* Top row: 3 cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
                    {cities.slice(0, 3).map((city, idx) => (
                        <div
                            key={idx}
                            className="group relative overflow-hidden bg-gray-900 shadow-xl border border-gray-800"
                        >
                            <div className="aspect-[5/4] md:aspect-square relative w-full">
                                <div className="absolute inset-0 bg-gradient-to-br from-charcoal to-black opacity-80 z-10"></div>
                                <div className="relative z-20 p-6 md:p-8 h-full flex flex-col justify-end">
                                    <span className="text-primary-red text-xs md:text-sm font-bold uppercase tracking-wider mb-1 md:mb-2 block">
                                        {city.theme}
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-serif text-white mb-3 md:mb-4">
                                        {city.name}
                                    </h3>
                                    <div className="w-8 h-1 bg-primary-red mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
                                    <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 text-sm">
                                        {city.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom row: 2 cards centered */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-[820px] mx-auto">
                    {cities.slice(3).map((city, idx) => (
                        <div
                            key={idx + 3}
                            className="group relative overflow-hidden bg-gray-900 shadow-xl border border-gray-800"
                        >
                            <div className="aspect-[5/4] md:aspect-[4/3] relative w-full">
                                <div className="absolute inset-0 bg-gradient-to-br from-charcoal to-black opacity-80 z-10"></div>
                                <div className="relative z-20 p-6 md:p-8 h-full flex flex-col justify-end">
                                    <span className="text-primary-red text-xs md:text-sm font-bold uppercase tracking-wider mb-1 md:mb-2 block">
                                        {city.theme}
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-serif text-white mb-3 md:mb-4">
                                        {city.name}
                                    </h3>
                                    <div className="w-8 h-1 bg-primary-red mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
                                    <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 text-sm">
                                        {city.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
