import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info, CheckCircle2, AlertCircle } from "lucide-react";
import skinHealth from "@/assets/skin-health.jpg";

export const Results = () => {
  return (
    <section id="results" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />
      
      <div className="container relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Resultados com Responsabilidade</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparência sobre expectativas e evolução dos tratamentos
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Alert className="border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors">
            <Info className="h-5 w-5 text-primary" />
            <AlertDescription className="text-base">
              <strong>Consentimento e Privacidade:</strong> Todas as imagens de antes e depois são 
              publicadas apenas com consentimento explícito dos pacientes, em conformidade com a LGPD. 
              Os resultados variam de acordo com o tipo de pele, grau de melasma e adesão ao protocolo.
            </AlertDescription>
          </Alert>

          <Card variant="elevated" className="overflow-hidden group">
            <CardContent className="p-0">
              <div className="relative h-[400px] w-full overflow-hidden">
                <img
                  src={skinHealth}
                  alt="Resultado de tratamento - pele saudável"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8">
                  <p className="text-white text-sm leading-relaxed">
                    Exemplo de resultado após protocolo personalizado de 6 meses. 
                    Resultados individuais podem variar.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card variant="gradient" className="border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">O que Esperar do Tratamento</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg mb-4 flex items-center gap-2 text-primary">
                    <CheckCircle2 className="h-5 w-5" />
                    Expectativas Realistas
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Clareamento gradual das manchas ao longo de meses",
                      "Melhora da uniformidade do tom da pele",
                      "Redução de novas lesões com fotoproteção adequada"
                    ].map((item, index) => (
                      <div 
                        key={index} 
                        className="flex items-start gap-3 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors"
                      >
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-muted-foreground text-sm leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg mb-4 flex items-center gap-2 text-secondary">
                    <AlertCircle className="h-5 w-5" />
                    Importante Entender
                  </h4>
                  <div className="space-y-3">
                    {[
                      "O melasma é crônico e pode retornar",
                      "Manutenção contínua é necessária",
                      "Fatores hormonais e exposição solar influenciam",
                      "Cada caso responde de forma única"
                    ].map((item, index) => (
                      <div 
                        key={index} 
                        className="flex items-start gap-3 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors"
                      >
                        <AlertCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <p className="text-muted-foreground text-sm leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
