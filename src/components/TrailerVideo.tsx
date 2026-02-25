export default function TrailerVideo() {
    return (
        <section className="bg-alt-red ma-spacing-mob ma-spacing-desk">
            <div className="container-max flex flex-col items-center text-center">

                <h2 className="text-4xl md:text-5xl font-serif text-offwhite mb-6">
                    Experience the Journey
                </h2>

                <p className="max-w-2xl text-lg text-red-50 mb-12 opacity-90">
                    A glimpse into the structured exposure and cultural precision that awaits your child in Japan.
                </p>

                {/* 16:9 Responsive Video Embed */}
                <div className="w-full max-w-4xl aspect-video rounded-sm overflow-hidden shadow-2xl bg-black mb-12 relative group cursor-pointer 
          border border-red-800">
                    <iframe
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=1&mute=1"
                        title="Japan 2026 Trailer"
                        className="w-full h-full border-0 absolute top-0 left-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        loading="lazy"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* CTA below video */}
                <div>
                    <a
                        href="#register"
                        className="inline-block bg-transparent border-2 border-offwhite text-offwhite px-8 py-3 rounded-sm text-lg font-semibold hover:bg-offwhite hover:text-primary-red transition-colors"
                    >
                        I&apos;m Ready to Secure a Seat
                    </a>
                </div>

            </div>
        </section>
    );
}
