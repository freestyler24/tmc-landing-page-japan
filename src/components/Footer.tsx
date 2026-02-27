export default function Footer() {
    return (
        <footer className="bg-[#1a1a1a] text-[#F9F6F0] py-16 md:py-24 border-t border-[#2a2a2a] relative overflow-hidden">
            {/* Subtle background texture */}
            <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.05, backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0c0 15 15 30 30 30-15 0-30 15-30 30C30 45 15 30 0 30 15 30 30 15 30 0z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")` }}></div>

            <div className="container-max max-w-4xl relative z-10 flex flex-col items-center">

                {/* Branding Statement */}
                <div className="text-center mb-14 md:mb-20">
                    <h3 className="text-3xl md:text-4xl font-serif tracking-[0.15em] mb-4 text-[#F9F6F0]">JAPAN 2026</h3>
                    <p className="text-[#B89B5E] font-serif italic text-lg md:text-xl tracking-wide">
                        Where Precision Fuels Possibility
                    </p>
                </div>

                {/* Contact Information */}
                <div className="w-full flex flex-col md:flex-row justify-center items-center gap-12 md:gap-x-24 text-center mb-16 md:mb-20">
                    <div className="flex flex-col items-center">
                        <span className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] mb-3">Email Inquiries</span>
                        <a href="mailto:mail@themodernclassroom.in" className="text-gray-300 hover:text-white hover:underline transition-all duration-300 text-sm md:text-base">
                            mail@themodernclassroom.in
                        </a>
                    </div>

                    {/* Divider for Desktop */}
                    <div className="hidden md:block w-px h-16 bg-[#333333]"></div>
                    {/* Divider for Mobile */}
                    <div className="block md:hidden w-16 h-px bg-[#333333]"></div>

                    <div className="flex flex-col items-center">
                        <span className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] mb-3">Direct Contact</span>
                        <div className="text-gray-300 space-y-1 text-sm md:text-base">
                            <p>+91-9900786677 <span className="opacity-30 mx-2">|</span> 9886753632</p>
                            <p>080 4371 2595</p>
                        </div>
                    </div>
                </div>

                {/* Closing Tagline / Copyright */}
                <div className="w-full border-t border-[#2a2a2a] pt-8 flex flex-col md:flex-row justify-center items-center gap-4 text-[10px] md:text-xs text-gray-500 uppercase tracking-widest text-center">
                    <span>&copy; 2026 The Modern Classroom</span>
                    <span className="hidden md:inline opacity-30">•</span>
                    <span>1:20 Supervision Framework</span>
                    <span className="hidden md:inline opacity-30">•</span>
                    <span>October 2026 Cohort</span>
                </div>
            </div>
        </footer>
    );
}
