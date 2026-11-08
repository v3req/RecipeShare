import HeroSection from './HeroSection.jsx'
import BenefitsSection from './Benefits.jsx'
import InvitieSection from './InvitieSection.jsx'

export default function HomePage() {
  return (
    <section id="home" className="page">
    <HeroSection /> 
    <BenefitsSection /> 
    
    <InvitieSection />
    </section>
    );
}