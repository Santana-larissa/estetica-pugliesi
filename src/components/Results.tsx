import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";
import skinHealth from "@/assets/skin-health.jpg";

export const Results = () => {
  return (
    <section id="results" className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Resultados com Responsabilidade</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparência sobre expectativas e evolução dos tratamentos
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription className="text-base">
              <strong>Consentimento e Privacidade:</strong> Todas as imagens de antes e depois são 
              publicadas apenas com consentimento explícito dos pacientes, em conformidade com a LGPD. 
              Os resultados variam de acordo com o tipo de pele, grau de melasma e adesão ao protocolo.
            </AlertDescription>
          </Alert>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-[400px] w-full">
                <img
                  src={skinHealth}
                  alt="Resultado de tratamento - pele saudável"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-sm">
                    Exemplo de resultado após protocolo personalizado de 6 meses. 
                    Resultados individuais podem variar.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">O que Esperar do Tratamento</h3>
              <div className="space-y-4 text-foreground/80">
                <div>
                  <h4 className="font-semibold text-lg mb-2">✅ Expectativas Realistas</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Clareamento gradual das manchas ao longo de meses</li>
                    <li>Melhora da uniformidade do tom da pele</li>
                    <li>Redução de novas lesões com fotoproteção adequada</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-2">⚠️ Importante Entender</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>O melasma é <strong>crônico</strong> e pode retornar</li>
                    <li>Manutenção contínua é necessária</li>
                    <li>Fatores hormonais e exposição solar influenciam os resultados</li>
                    <li>Cada caso responde de forma única ao tratamento</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
