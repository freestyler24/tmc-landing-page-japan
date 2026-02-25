export default function Brochure() {
    return (
        <section id="brochure" className="bg-alt-charcoal ma-spacing-mob ma-spacing-desk relative text-center border-t border-gray-800">
            <div className="container-max max-w-3xl">

                <div className="inline-block border border-kyoto-gold text-kyoto-gold px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-6">
                    EXCLUSIVE ITINERARY
                </div>

                <h2 className="text-3xl md:text-4xl font-serif text-offwhite mb-6">
                    Download the Detailed <br />Programme Overview
                </h2>

                <p className="text-gray-400 mb-10 max-w-xl mx-auto">
                    If you would like the complete itinerary, safety framework, and payment structure, request the official brochure. Select your school to receive the correct branded version.
                </p>

                <div className="bg-gray-900 border border-gray-800 p-8 max-w-md mx-auto relative overflow-hidden">
                    <div className="w-1 h-full bg-primary-red absolute left-0 top-0"></div>

                    <form action="/api/brochure" method="POST" className="space-y-4 text-left">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Parent's Name</label>
                                <input
                                    type="text"
                                    name="parent_name"
                                    required
                                    placeholder="Enter full name"
                                    className="w-full bg-charcoal border border-gray-700 text-offwhite px-4 py-3 focus:outline-none focus:border-kyoto-gold focus:ring-1 focus:ring-kyoto-gold"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone_number"
                                    required
                                    placeholder="+91"
                                    className="w-full bg-charcoal border border-gray-700 text-offwhite px-4 py-3 focus:outline-none focus:border-kyoto-gold focus:ring-1 focus:ring-kyoto-gold"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Select School</label>
                                <select
                                    name="school"
                                    required
                                    defaultValue=""
                                    className="w-full bg-charcoal border border-gray-700 text-gray-400 px-4 py-3 focus:outline-none focus:border-kyoto-gold focus:ring-1 focus:ring-kyoto-gold appearance-none"
                                >
                                    <option value="" disabled>Select your school</option>
                                    <option value="dps">DPS</option>
                                    <option value="soi">School of India</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Parent's Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Enter email address"
                                    className="w-full bg-charcoal border border-gray-700 text-offwhite px-4 py-3 focus:outline-none focus:border-kyoto-gold focus:ring-1 focus:ring-kyoto-gold"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-transparent border border-kyoto-gold text-kyoto-gold hover:bg-kyoto-gold hover:text-charcoal px-6 py-3 font-semibold transition-colors mt-2"
                        >
                            Download Brochure
                        </button>
                    </form>

                    <p className="text-xs text-gray-500 mt-4 text-center">
                        PDF auto-download starts after submission.
                    </p>
                </div>

            </div>
        </section>
    );
}
