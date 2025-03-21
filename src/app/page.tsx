import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CooperationFormats from '@/components/CooperationFormats';
import Services from '@/components/Services';
import WhyTrustMe from '@/components/WhyTrustMe';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <CooperationFormats />
      <Services />
      <WhyTrustMe />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
