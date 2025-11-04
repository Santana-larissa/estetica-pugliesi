import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Sparkles, Stethoscope, SunMedium } from "lucide-react";

const treatments = [
  {
    icon: SunMedium,
    title: "Fotoproteção de Amplo Espectro",
    description: "Base essencial de todo tratamento. Proteção contra UVA/UVB, luz visível e infravermelha para prevenir recidivas.",
  },
  {
    icon: Sparkles,
    title: "Despigmentantes Tópicos",
    description: "Hidroquinona, ácido azelaico, retinoides, ácido kójico e tranexâmico tópico — prescrição individualizada.",
  },
  {
    icon: Stethoscope,
    title: "Procedimentos Selecionados",
    description: "Peelings químicos e microagulhamento quando indicados. Laser/IPL apenas em casos criteriosamente avaliados.",
  },
  {
    icon: Shield,
    title: "Manutenção Contínua",
    description: "Acompanhamento regular para ajustes e prevenção de recidivas, com foco em hábitos sustentáveis.",
  },
];

export const Treatments = () => {
  return (
    <section id="treatments" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Abordagem Terapêutica</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Protocolo personalizado baseado em evidências científicas, respeitando as características 
            individuais de cada paciente
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {treatments.map((treatment) => (
            <Card key={treatment.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary/10">
                    <treatment.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">{treatment.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {treatment.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        <Card className="max-w-4xl mx-auto bg-destructive/5 border-destructive/20">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold mb-4 text-destructive">⚠️ Avisos Importantes</h3>
            <ul className="space-y-2 text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="text-destructive font-bold">•</span>
                <span>
                  <strong>Não se automedique.</strong> Tratamentos naturais ou caseiros sem evidência podem piorar o quadro.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive font-bold">•</span>
                <span>
                  <strong>Avaliação individualizada é essencial.</strong> Cada caso de melasma é único e requer análise criteriosa.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive font-bold">•</span>
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
