import { Card } from "@/components/ui/card";
import { Brain, User, Shield, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "IA Especializada",
    description: "Algoritmos treinados especificamente para designar planos de exercícios para profissionais de escritório, considerando nível de sedentarismo e limitações."
  },
  {
    icon: User,
    title: "Personalização Total",
    description: "Cada plano é único, baseado no seu perfil, limitações e objetivos específicos para máxima eficácia."
  },
  {
    icon: Shield,
    title: "Exercícios Seguros",
    description: "Apenas movimentos aprovados e seguros para cada etapa do seu desenvolvimento, com base científica."
  },
  {
    icon: TrendingUp,
    title: "Resultados Rápidos",
    description: "Progresso visível em semanas com acompanhamento científico do seu desenvolvimento e métricas detalhadas."
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-background-secondary">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que escolher nossa plataforma?
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Tecnologia de ponta encontra expertise em ergonomia para criar a solução ideal para sua saúde laboral.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="p-6 bg-gradient-card border-card-border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-card-foreground">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;