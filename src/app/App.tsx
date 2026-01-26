import { Navigation } from "@/app/components/navigation";
import { HeroSection } from "@/app/components/hero-section";
import { AboutSection } from "@/app/components/about-section";
import { ServicesSection } from "@/app/components/services-section";
import { ProcessSection } from "@/app/components/process-section";
import { TechnicalSection } from "@/app/components/technical-section";
import { PortfolioSection } from "@/app/components/portfolio-section";
import { ContactSection } from "@/app/components/contact-section";
import { Footer } from "@/app/components/footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <div id="about">
        <AboutSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="process">
        <ProcessSection />
      </div>
      <TechnicalSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
