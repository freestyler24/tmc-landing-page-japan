"use client";

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ThankYouContent() {
    const searchParams = useSearchParams();

    // Determine which brochure to download based on the school param
    // dps → DPS brochure, soi → SOI brochure, everything else → DPS brochure
    const school = searchParams.get('school') || '';
    const isSoi = school.toLowerCase() === 'soi';
    const brochureFile = isSoi
        ? '/brochures/SOI-Japan-2026.pdf'
        : '/brochures/DPS-School-Japan-2026.pdf';
    const brochureName = isSoi
        ? 'SOI-Japan-2026-Programme-Brochure.pdf'
        : 'DPS-School-Japan-2026-Programme-Brochure.pdf';

    useEffect(() => {
        // Auto-trigger PDF download on page load
        const link = document.createElement('a');
        link.href = brochureFile;
        link.download = brochureName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, [brochureFile, brochureName]);

    return (
        <main className="min-h-screen bg-offwhite text-charcoal flex items-center justify-center p-6">
            <div className="max-w-xl bg-white p-12 text-center shadow-xl border-t-4 border-primary-red">
                <h1 className="text-4xl font-serif mb-6">Brochure Requested</h1>
                <div className="w-16 h-1 bg-primary-red mx-auto mb-6"></div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Your request has been processed. The official detailed itinerary and safety framework PDF should begin downloading shortly.
                </p>
                <a
                    href={brochureFile}
                    download={brochureName}
                    className="inline-block bg-primary-red text-white px-8 py-3 rounded-sm font-semibold hover:opacity-90 transition-opacity mb-4"
                >
                    Download Again
                </a>
                <br />
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

export default function ThankYouBrochure() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <ThankYouContent />
        </Suspense>
    );
}
