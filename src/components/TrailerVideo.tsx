import Script from 'next/script';

export default function TrailerVideo() {
    return (
        <section className="bg-alt-red ma-spacing-mob ma-spacing-desk">
            <div className="container-max flex flex-col items-center text-center">

                <h2 className="text-3xl md:text-5xl font-serif text-offwhite mb-4 md:mb-6">
                    See the Experience Before You Decide.
                </h2>

                <p className="max-w-2xl text-base md:text-lg text-red-50 mb-3 md:mb-4 opacity-90">
                    Before reading further, take a moment to see what this journey feels like.
                </p>
                <p className="max-w-2xl text-base md:text-lg text-red-50 mb-8 md:mb-12 opacity-90">
                    Notice the precision. The structure. The quiet discipline.<br />
                    This is not tourism. It is structured exposure.
                </p>

                {/* Wistia Video Embed */}
                <div className="w-full max-w-4xl shadow-2xl bg-black mb-12 relative group cursor-pointer border border-red-800 rounded-sm overflow-hidden">
                    <Script src="https://fast.wistia.com/player.js" strategy="afterInteractive" />
                    <Script src="https://fast.wistia.com/embed/zwq5w6rf4r.js" strategy="afterInteractive" type="module" />
                    <Script id="wistia-captions-disable" strategy="afterInteractive">
                        {`
                            window._wq = window._wq || [];
                            _wq.push({ id: "zwq5w6rf4r", options: { plugin: { captions: { onByDefault: false } } } });
                        `}
                    </Script>

                    {/* Inject original DOM using dangerouslySetInnerHTML to ensure correct style parse and custom element instantiation */}
                    <div dangerouslySetInnerHTML={{
                        __html: `
                        <style>wistia-player[media-id='zwq5w6rf4r']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/zwq5w6rf4r/swatch'); display: block; filter: blur(5px); padding-top:50.0%; }</style> 
                        <wistia-player media-id="zwq5w6rf4r" aspect="2.0">
                            <div class="wistia_preload_transcript_outer_wrapper" style="width: 100%; height: 100%; display:flex; justify-content:center; align-items: center; margin-top:-50.0%;">
                                <div class="wistia_preload_transcript_inner_wrapper" style=" overflow: auto;">
                                    <p class="wistia_preload_transcript_text" aria-hidden="true" tabindex="-1" style="text-align: justify; font-size: 5px !important;">Let's be honest. Your kids have seen enough of the four walls of a classroom. In October twenty twenty six, we're trading textbooks for bullet trains in a land where ancient traditions meet futuristic wonders. Welcome to the Japan experiential tour. Here's the five reasons why you should be signing up for this once in a lifetime trip. Reason one, the ultimate innovation. From the three fifty meter heights of Tokyo Skytree, the Umeda Sky Observatory to the mind bending digital art of Team Labs, your kids will see the future before it hits their smartphones. Think of it as a science class, but way cooler. Reason two, manners, mastery, and mystery. Between exploring ancient temples, shopping streets, and crossing the infamous Shibuya square to dressing up in traditional kimono wear, they'll bring home more than just souvenirs. They might even start saying please and thank you without being asked. Reason three, no filter nature. We're taking them from the literal volcanic vents of Owakudani to a cruise across Lake Ashi with the majestic Mount Fuji as the backdrop. It's the kind of outdoor education that actually gets them to look up from their screens. Now that's a classroom with a view. Reason four, making unexpected friends. And, no, I don't just mean humans. Whether it's meeting the polite but very hungry deer in Nara or hearing the legendary story of Hachiku at his famous monument. Your kids are about to get a crash course in diplomacy, persistence, and the kind of unshakable loyalty they only see in a WiFi connection. Last but definitely not the least, the cool parent award. Ending the trip at Universal Studios Japan ensures they come home exhausted, happy, and convinced that you are the coolest parent on the planet. This is one hundred percent guaranteed. Of course, there's loads more reasons to go to Japan without your kids, but we can leave that for another time. Japan twenty twenty six. It's educational, it's experiential, and it's filling up fast. Join us for the trip of a lifetime. Your kids will thank you eventually. This investment is subject to no market risk. Please read the offer document and just sign carefully.</p>
                                </div>
                            </div>
                        </wistia-player>
                    ` }} />
                </div>

                {/* CTA below video */}
                <div>
                    <a
                        href="#register"
                        className="inline-block bg-transparent border-2 border-offwhite text-offwhite px-6 md:px-8 py-3 rounded-sm text-sm md:text-lg font-semibold hover:bg-offwhite hover:text-primary-red transition-colors"
                    >
                        Register for Parent Orientation
                    </a>
                </div>

            </div>
        </section>
    );
}
