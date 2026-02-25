export default function Registration() {
    return (
        <section id="register" className="bg-alt-offwhite ma-spacing-mob ma-spacing-desk relative border-t border-gray-200">
            <div className="container-max max-w-4xl flex flex-col items-center">

                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">
                        Secure Your Child’s Seat <br />in the 2026 Cohort.
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Submitting this form indicates your intent to reserve a place in the Japan 2026 programme. Seats are strictly limited to 45 students.
                    </p>
                </div>

                <div className="w-full max-w-2xl bg-white p-8 md:p-12 shadow-lg border-t-4 border-primary-red">
                    <form action="/api/register" method="POST" className="space-y-6">

                        <div>
                            <label className="block text-sm font-bold text-charcoal mb-2">Student Full Name</label>
                            <input
                                type="text"
                                name="student_name"
                                required
                                placeholder="Enter student's full name"
                                className="w-full bg-gray-50 border border-gray-200 text-charcoal px-4 py-3 focus:outline-none focus:border-primary-red focus:bg-white"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-charcoal mb-2">Select Institution</label>
                            <select
                                name="school"
                                required
                                defaultValue=""
                                className="w-full bg-gray-50 border border-gray-200 text-charcoal px-4 py-3 focus:outline-none focus:border-primary-red focus:bg-white appearance-none"
                            >
                                <option value="" disabled>Select your school</option>
                                <option value="dps">DPS</option>
                                <option value="soi">School of India</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-charcoal mb-2">Parent Email Address</label>
                            <input
                                type="email"
                                name="parent_email"
                                required
                                placeholder="email@example.com"
                                className="w-full bg-gray-50 border border-gray-200 text-charcoal px-4 py-3 focus:outline-none focus:border-primary-red focus:bg-white"
                            />
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full bg-primary-red text-white py-4 text-lg font-bold hover:bg-black transition-colors shadow-md"
                            >
                                Secure Seat Now
                            </button>
                        </div>

                        <p className="text-xs text-gray-500 text-center mt-4">
                            Your data is secure. You will be redirected to the confirmation page.
                        </p>

                    </form>
                </div>

            </div>
        </section>
    );
}
