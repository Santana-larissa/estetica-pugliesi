import { Award, BookOpen, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const credentials = [
  {
    icon: Award,
    title: "Especialização",
    description: "Formação avançada em dermatologia estética com foco em discromias e melasma",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: BookOpen,
    title: "Atualização Constante",
    description: "Participação ativa em congressos e cursos sobre as mais recentes evidências científicas",
    color: "from-secondary/20 to-secondary/5",
  },
  {
    icon: Users,
    title: "Centenas de Casos",
    description: "Experiência no tratamento de melasma em diferentes fototipos e perfis",
    color: "from-primary/15 to-secondary/10",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent pointer-events-none" />
      
      <div className="container relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Expertise em Melasma</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dedicação ao tratamento de uma das condições mais desafiadoras da dermatologia estética
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {credentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={item.title} 
                variant="elevated"
                className="group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-8 text-center">
                  <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${item.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-9 w-9 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card variant="gradient" className="max-w-4xl mx-auto border-primary/20">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6">Por que o Melasma Exige Especialização?</h3>
            <div className="space-y-4 text-foreground/80">
              <p className="leading-relaxed p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                O melasma é uma condição <strong>crônica e recidivante</strong> que requer compreensão profunda 
                dos fatores desencadeantes, tipos de pele e protocolos personalizados.
              </p>
              <p className="leading-relaxed p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                Diferente de outras manchas, o melasma demanda <strong>manutenção contínua</strong> e 
                expectativas realistas. Tratamentos inadequados podem agravar o quadro, especialmente 
                em fototipos mais altos.
              </p>
              <p className="leading-relaxed p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                Minha abordagem combina fotoproteção rigorosa, despigmentantes baseados em evidência e, 
                quando apropriado, procedimentos minimamente invasivos — sempre com foco na segurança e 
                sustentabilidade dos resultados.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
