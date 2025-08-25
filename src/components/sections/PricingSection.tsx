import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Building2 } from "lucide-react";

const plans = [
  {
    name: "Básico",
    price: "R$ 9",
    period: "/semana",
    description: "Perfeito para começar sua jornada de bem-estar",
    features: [
      "Acesso total à biblioteca de exercícios",
      "Plano básico personalizado",
      "Relatórios de progresso simples",
      "Suporte por email",
      "Exercícios para pausas ativas"
    ],
    variant: "outline" as const,
    popular: false
  },
  {
    name: "Pro",
    price: "R$ 12", 
    period: "/semana",
    description: "Recomendado para profissionais focados em resultados",
    features: [
      "Tudo do plano Básico",
      "IA adaptativa avançada",
      "Relatórios detalhados e métricas",
      "Dashboard personalizado",
      "Exercícios adaptativos em tempo real",
      "Integração com calendário",
      "Suporte prioritário"
    ],
    variant: "default" as const,
    popular: true
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    period: "",
    description: "Solução completa para empresas e equipes",
    features: [
      "Tudo do plano Pro",
      "Integração com GitHub",
      "API de gamificação",
      "Webhooks personalizados", 
      "Dashboard administrativo",
      "Relatórios executivos",
      "Treino para recuperação de diástase",
      "Consultoria especializada",
      "Implementação dedicada"
    ],
    variant: "secondary" as const,
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section className="py-20 bg-background-secondary">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Escolha seu plano
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Planos flexíveis para atender desde profissionais individuais até grandes empresas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative p-8 bg-gradient-card shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up ${
                plan.popular ? "border-primary border-2" : "border-card-border"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-primary-foreground px-4 py-1">
                  <Star className="w-4 h-4 mr-1" />
                  Mais Popular
                </Badge>
              )}

              <div className="space-y-6">
                {/* Header */}
                <div className="text-center space-y-2">
                  {plan.name === "Enterprise" && (
                    <Building2 className="w-8 h-8 text-primary mx-auto mb-2" />
                  )}
                  <h3 className="text-2xl font-bold text-card-foreground">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-bold text-primary">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-muted-foreground">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-card-foreground text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-6">
                  <Button 
                    variant={plan.variant}
                    className="w-full py-3"
                    size="lg"
                  >
                    {plan.name === "Enterprise" ? "Falar com Vendas" : "Começar Agora"}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground">
            Todos os planos incluem período de teste gratuito de 7 dias • Cancele a qualquer momento
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;