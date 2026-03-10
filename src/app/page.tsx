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
  metadataBase: new URL("https://japan.themodernclassroom.in"),
  title: "Japan 2026 Educational Immersion Program | The Modern Classroom",
  description:
    "A 9-day educational immersion in Japan for Grades 6–12. Cultural exposure, global perspective, and guided independence.",
  keywords: [
  "Japan educational immersion program",
  "Japan educational tour for students",
  "student cultural immersion Japan",
  "Japan student exposure program",
  "international exposure program for students",
  "Japan study tour for school students",
  "Japan cultural learning program",
  "Japan education trip for grades 6-12",
],
  alternates: {
    canonical: "https://japan.themodernclassroom.in",
  },
  openGraph: {
    title: "Japan 2026 Educational Immersion Program | The Modern Classroom",
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
  twitter: {
  card: "summary_large_image",
  title: "Japan 2026 Educational Immersion Program | The Modern Classroom",
  description:
    "A structured international exposure program in Japan for Grades 6–12 students.",
  images: ["https://japan.themodernclassroom.in/images/japan_og.png"],
},
};

export default function Home() {
  return (
    <main className="min-h-screen bg-offwhite text-charcoal">

    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Event",
      name: "Japan 2026 Educational Immersion Program",
      description:
        "A 9-day educational immersion program in Japan for Grades 6–12 students focused on cultural exposure, discipline, and global perspective.",
      startDate: "2026-10-01",
      endDate: "2026-10-09",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "Japan",
        address: {
          "@type": "PostalAddress",
          addressCountry: "JP",
        },
      },
      image: [
        "https://japan.themodernclassroom.in/images/japan_og.png"
      ],
      organizer: {
        "@type": "Organization",
        name: "The Modern Classroom",
        url: "https://themodernclassroom.in",
      },
      offers: {
        "@type": "Offer",
        url: "https://japan.themodernclassroom.in",
        availability: "https://schema.org/LimitedAvailability",
        priceCurrency: "INR",
      },
    }),
  }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "The Modern Classroom",
      url: "https://themodernclassroom.in",
      logo: "https://japan.themodernclassroom.in/images/tmc_logo.png",
      sameAs: [
        "https://www.linkedin.com/company/the-modern-classroom",
        "https://www.instagram.com/themodernclassroom"
      ]
    }),
  }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "The Modern Classroom",
      url: "https://japan.themodernclassroom.in"
    }),
  }}
/>
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
