import { Card, CardContent } from "@/components/ui/card";
import {
  Syringe,
  FlaskRound,
  SunMedium,
  Sparkles,
  Activity,
  Pill,
  Dumbbell,
  Droplets,
  Scissors,
} from "lucide-react";

type Service = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  subtitle?: string;
  description: string;
  color: string;
};

const services: Service[] = [
  {
    icon: Syringe,
    title: "Preenchimento Labial e Facial",
    description:
      "Ácido hialurônico facial repõe volume, faz a sustentação da face, hidratação, contorno e literalmente preencher sulcos. ",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: FlaskRound,
    title: "Toxina Botulínica e Skinbooster",
    description:
      "Toxina Botulínica atenua e previne linhas de expressão e rugas. Skinbooster estimula a hidratação profunda, produção de colágeno e ameniza linhas e rugas finas de expressão.",
    color: "from-secondary/20 to-secondary/5",
  },
  {
    icon: SunMedium,
    title: "Melasma",
    description:
      "Tratamento Integrativo de Melasma de dentro para fora, nas causas da mancha!",
    color: "from-primary/15 to-secondary/10",
  },
  {
    icon: Sparkles,
    title: "Rejuvenescimento, Flacidez e Bioestimuladores Colágeno",
    description:
      "Procedimentos faciais que tratam a flacidez de pele e rejuvenescem.",
    color: "from-secondary/15 to-primary/10",
  },
  {
    icon: Scissors,
    title: "Microagulhamento, Peeling e Limpeza de Pele",
    description:
      "Procedimentos para tratar ou prevenir envelhecimento da face, manchas, acne, melasma e a limpeza da pele.",
    color: "from-primary/20 to-secondary/5",
  },
  {
    icon: Dumbbell,
    title: "Tonificação Muscular",
    description:
      "Procedimento corporal que estimula a musculatura no crescimento e fortalecimento.",
    color: "from-secondary/20 to-primary/5",
  },
  {
    icon: Pill,
    title: "Gordura Localizada e Enzimas (Emptiers)",
    description:
      "Procedimentos para perda e redução de gordura localizada!",
    color: "from-primary/15 to-secondary/10",
  },
  {
    icon: Activity,
    title: "Bioestimuladores Colágeno e Flacidez",
    description:
      "Procedimentos que estimulam o colágeno trazendo firmeza para pele e delineando contorno.",
    color: "from-secondary/15 to-primary/10",
  },
  {
    icon: Droplets,
    title: "Lipo Enzimática de Papada",
    description:
      "Procedimento realizado com produtos que ajudam na quebra de gordura da papada.",
    color: "from-primary/20 to-primary/5",
  },
];

export const Treatments = () => {
  return (
    <section
      id="treatments"
      className="py-24 bg-gradient-to-b from-background to-soft-bg relative overflow-hidden"
    >
      {/* Decorativo */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Produtos e Procedimentos</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Portfólio completo de procedimentos faciais e corporais com foco em segurança, naturalidade e resultados proporcionais ao seu objetivo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.title}
                variant="elevated"
                className="group hover:scale-[1.02] transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-br ${item.color} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                    >
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">
                        {item.title}
                      </h3>
                      {item.subtitle && (
                        <p className="text-sm text-muted-foreground mb-2">
                          {item.subtitle}
                        </p>
                      )}
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
