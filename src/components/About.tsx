import { Award, BookOpen, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const credentials = [
  {
    icon: Award,
    title: "Especialização",
    description: "Formação avançada em dermatologia estética com foco em discromias e melasma",
  },
  {
    icon: BookOpen,
    title: "Atualização Constante",
    description: "Participação ativa em congressos e cursos sobre as mais recentes evidências científicas",
  },
  {
    icon: Users,
    title: "Centenas de Casos",
    description: "Experiência no tratamento de melasma em diferentes fototipos e perfis",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Expertise em Melasma</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dedicação ao tratamento de uma das condições mais desafiadoras da dermatologia estética
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {credentials.map((item) => (
            <Card key={item.title} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 text-center">
                <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-4xl mx-auto bg-primary/5 border-primary/20">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">Por que o Melasma Exige Especialização?</h3>
            <div className="space-y-3 text-foreground/80">
              <p>
                O melasma é uma condição <strong>crônica e recidivante</strong> que requer compreensão profunda 
                dos fatores desencadeantes, tipos de pele e protocolos personalizados.
              </p>
              <p>
                Diferente de outras manchas, o melasma demanda <strong>manutenção contínua</strong> e 
                expectativas realistas. Tratamentos inadequados podem agravar o quadro, especialmente 
                em fototipos mais altos.
              </p>
              <p>
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
