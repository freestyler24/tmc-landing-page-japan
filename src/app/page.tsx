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
      <FAQ />
      <Investment />
      <Brochure />
      <Registration />
      <FinalCTA />
      <Footer />
    </main>
  );
}
