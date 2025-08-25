import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Users, Zap, Trophy } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero px-6 py-20">
      <div className="container max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">
                Exercícios Laborais
                <span className="block text-secondary-light">Personalizados</span>
              </h1>
              
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-lg">
                Planos de exercícios únicos criados por inteligência artificial, 
                baseados no seu perfil específico para uma jornada de bem-estar segura e eficaz.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Começar Agora
              </Button>
              <Button variant="hero-outline" size="lg" className="text-lg px-8 py-4">
                Saber Mais
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-8">
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <CheckCircle className="w-5 h-5 text-secondary-light" />
                <span className="font-medium">95% Satisfação</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Users className="w-5 h-5 text-secondary-light" />
                <span className="font-medium">1000+ Clientes</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Zap className="w-5 h-5 text-secondary-light" />
                <span className="font-medium">IA Avançada</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative">
              <Card className="p-6 bg-gradient-card border-primary-foreground/20 shadow-glow">
                <img 
                  src={heroImage} 
                  alt="Profissional fazendo exercícios laborais no escritório"
                  className="w-full h-auto rounded-lg"
                />
                
                {/* Floating Stats */}
                <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5" />
                    <span className="font-semibold">Resultados em 2 semanas</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;