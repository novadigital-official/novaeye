import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustProof from '@/components/TrustProof';
import Packages from '@/components/Packages';
import DoctorProfile from '@/components/DoctorProfile';
import ProcessSteps from '@/components/ProcessSteps';
import FaqSection from '@/components/FaqSection';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import CookieBanner from '@/components/CookieBanner';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <Hero />
      <TrustProof />
      <Packages />
      <DoctorProfile />
      <ProcessSteps />
      <FaqSection />
      <FinalCta />
      <Footer />
      <FloatingWhatsApp />
      <CookieBanner />
    </main>
  );
}
