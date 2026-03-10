import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrailerVideo from '@/components/TrailerVideo';
import ProblemOutcome from '@/components/ProblemOutcome';
import ProgrammeExperience from '@/components/ProgrammeExperience';
import TrustSafety from '@/components/TrustSafety';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Investment from '@/components/Investment';
import Brochure from '@/components/Brochure';
import Registration from '@/components/Registration';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

export const metadata = {
  title: "Japan 2026 Educational Immersion Program | The Modern Classroom",
  description:
    "A 9-day educational immersion in Japan for Grades 6–12. Cultural exposure, global perspective, and guided independence.",
  alternates: {
    canonical: "https://japan.themodernclassroom.in",
  },
  openGraph: {
    title: "Japan 2026 Educational Immersion Program",
    description:
      "A structured international exposure program in Japan for Grades 6–12 students.",
    url: "https://japan.themodernclassroom.in",
    siteName: "The Modern Classroom",
    images: [
      {
        url: "https://japan.themodernclassroom.in/images/japan_og.png",
        width: 1200,
        height: 630,
        alt: "Japan 2026 Educational Immersion Program",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-offwhite text-charcoal">
      <Header />
      <Hero />
      <TrailerVideo />
      <ProblemOutcome />
      <ProgrammeExperience />
      <TrustSafety />
      <Testimonials />
      <Investment />
      <Registration />
      <Brochure />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
