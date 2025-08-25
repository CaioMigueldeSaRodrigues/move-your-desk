import HeroSection from "@/components/sections/HeroSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import QuestionnaireSection from "@/components/sections/QuestionnaireSection";
import PricingSection from "@/components/sections/PricingSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Benefits Section */}
      <BenefitsSection />
      
      {/* Interactive Questionnaire Section */}
      <QuestionnaireSection />
      
      {/* Pricing Section */}
      <PricingSection />
    </main>
  );
};

export default Index;