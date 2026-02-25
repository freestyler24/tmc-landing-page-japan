export default function ThankYouBrochure() {
    return (
        <main className="min-h-screen bg-offwhite text-charcoal flex items-center justify-center p-6">
            <div className="max-w-xl bg-white p-12 text-center shadow-xl border-t-4 border-primary-red">
                <h1 className="text-4xl font-serif mb-6">Brochure Requested</h1>
                <div className="w-16 h-1 bg-primary-red mx-auto mb-6"></div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Your request has been processed. The official detailed itinerary and safety framework PDF should begin downloading shortly.
                </p>
                <a
                    href="/"
                    className="inline-block bg-transparent border border-gray-300 text-charcoal px-8 py-3 rounded-sm font-semibold hover:bg-gray-50 transition-colors"
                >
                    Return to Overview
                </a>
            </div>
        </main>
    );
}
