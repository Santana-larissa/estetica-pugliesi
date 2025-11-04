import { Card, CardContent } from "@/components/ui/card";
import { Shield, Sparkles, Stethoscope, SunMedium } from "lucide-react";

const treatments = [
  {
    icon: SunMedium,
    title: "Fotoproteção de Amplo Espectro",
    description: "Base essencial de todo tratamento. Proteção contra UVA/UVB, luz visível e infravermelha para prevenir recidivas.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Sparkles,
    title: "Despigmentantes Tópicos",
    description: "Hidroquinona, ácido azelaico, retinoides, ácido kójico e tranexâmico tópico — prescrição individualizada.",
    color: "from-secondary/20 to-secondary/5",
  },
  {
    icon: Stethoscope,
    title: "Procedimentos Selecionados",
    description: "Peelings químicos e microagulhamento quando indicados. Laser/IPL apenas em casos criteriosamente avaliados.",
    color: "from-primary/15 to-secondary/10",
  },
  {
    icon: Shield,
    title: "Manutenção Contínua",
    description: "Acompanhamento regular para ajustes e prevenção de recidivas, com foco em hábitos sustentáveis.",
    color: "from-secondary/15 to-primary/10",
  },
];

export const Treatments = () => {
  return (
    <section id="treatments" className="py-24 bg-gradient-to-b from-background to-soft-bg relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Abordagem Terapêutica</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Protocolo personalizado baseado em evidências científicas, respeitando as características 
            individuais de cada paciente
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {treatments.map((treatment, index) => {
            const Icon = treatment.icon;
            return (
              <Card 
                key={treatment.title} 
                variant="elevated"
                className="group hover:scale-[1.02] transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${treatment.color} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{treatment.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {treatment.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card variant="glass" className="max-w-4xl mx-auto border-destructive/30">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold mb-4 text-destructive flex items-center gap-2">
              <span className="text-2xl">⚠️</span> Avisos Importantes
            </h3>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-3 p-3 rounded-lg bg-destructive/5 hover:bg-destructive/10 transition-colors">
                <span className="text-destructive font-bold flex-shrink-0">•</span>
                <span>
                  <strong>Não se automedique.</strong> Tratamentos naturais ou caseiros sem evidência podem piorar o quadro.
                </span>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-lg bg-destructive/5 hover:bg-destructive/10 transition-colors">
                <span className="text-destructive font-bold flex-shrink-0">•</span>
                <span>
                  <strong>Avaliação individualizada é essencial.</strong> Cada caso de melasma é único e requer análise criteriosa.
                </span>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-lg bg-destructive/5 hover:bg-destructive/10 transition-colors">
                <span className="text-destructive font-bold flex-shrink-0">•</span>
                <span>
                  <strong>Risco de recidiva.</strong> O melasma é crônico. Tratamentos agressivos (laser) podem agravar, especialmente em peles mais escuras.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
