export default function Footer() {
    return (
        <footer className="bg-alt-charcoal py-16 border-t border-gray-900 text-center text-offwhite">
            <div className="container-max max-w-4xl">
                <h3 className="text-2xl font-serif mb-4 tracking-wider">JAPAN 2026</h3>
                <p className="text-kyoto-gold font-serif italic mb-10 opacity-80">
                    Where Precision Fuels Possibility
                </p>

                <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-400 mb-12 max-w-2xl mx-auto border-t border-b border-gray-800 py-8">
                    <div>
                        <span className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email Contact</span>
                        <a href="mailto:mail@themodernclassroom.in" className="hover:text-kyoto-gold transition-colors">
                            mail@themodernclassroom.in
                        </a>
                    </div>
                    <div>
                        <span className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Direct Contact</span>
                        <p>+91-9900786677 | 9886753632</p>
                        <p>080 4371 2595</p>
                    </div>
                </div>

                <div className="text-xs text-gray-500 uppercase tracking-widest flex flex-col md:flex-row justify-center items-center gap-4 opacity-60">
                    <span>&copy; 2026 The Modern Classroom</span>
                    <span className="hidden md:inline">•</span>
                    <span>Limited to 45 students per batch</span>
                    <span className="hidden md:inline">•</span>
                    <span>October 2026 Cohort</span>
                </div>
            </div>
        </footer>
    );
}
