import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Clock, MapPin, Activity, AlertTriangle } from "lucide-react";

const questionnaireOptions = [
  {
    category: "Nível de Sedentarismo",
    icon: Activity,
    options: ["Pouco Ativo", "Moderadamente Ativo", "Sedentário", "Muito Sedentário"]
  },
  {
    category: "Limitações Físicas", 
    icon: AlertTriangle,
    options: ["Nenhuma", "Dor Lombar", "Dor Cervical", "Problemas no Punho", "Outras"]
  },
  {
    category: "Tempo Disponível",
    icon: Clock,
    options: ["5 minutos", "10 minutos", "15 minutos", "20+ minutos"]
  },
  {
    category: "Horário de Preferência",
    icon: MapPin,
    options: ["Manhã", "Pausa do Almoço", "Tarde", "Final do Dia"]
  }
];

const QuestionnaireSection = () => {
  const [selectedOptions, setSelectedOptions] = useState<{[key: string]: string}>({});

  const handleOptionSelect = (category: string, option: string) => {
    setSelectedOptions(prev => ({
      ...prev,
      [category]: option
    }));
  };

  const isComplete = Object.keys(selectedOptions).length === questionnaireOptions.length;

  return (
    <section className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Questionário Inteligente
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Nossa IA analisa suas respostas para criar um plano de exercícios personalizado especificamente para você.
          </p>
        </div>

        <Card className="p-8 bg-gradient-card shadow-xl border-card-border">
          <div className="space-y-8">
            {questionnaireOptions.map((question, index) => (
              <div key={question.category} className="space-y-4 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <question.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">
                    {question.category}
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {question.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleOptionSelect(question.category, option)}
                      className={`p-3 rounded-lg border-2 transition-all duration-200 text-left ${
                        selectedOptions[question.category] === option
                          ? "border-primary bg-primary/5 shadow-md"
                          : "border-card-border bg-background hover:border-primary/50 hover:bg-primary/2"
                      }`}
                    >
                      <span className="text-sm font-medium text-card-foreground">
                        {option}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant={isComplete ? "default" : "secondary"} 
                size="lg" 
                className="px-8 py-4 text-lg"
                disabled={!isComplete}
              >
                Gerar Meu Plano Personalizado
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              
              {isComplete && (
                <Badge variant="secondary" className="animate-scale-in">
                  Questionário Completo ✓
                </Badge>
              )}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default QuestionnaireSection;