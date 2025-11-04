// src/components/About.tsx
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-muted/20 py-20">
      <div className="container relative">
        {/* Título grande centralizado, como no print */}
        <h2 className="mb-12 text-center text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
          A beleza começa quando a pele está em equilíbrio
        </h2>

        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* ESQUERDA: foto dentro de cartão com fundo roxo */}
          <div className="mx-auto w-full max-w-[560px]">
            <div className="rounded-3xl bg-transparent p-0 shadow-none">
              <div className="overflow-hidden rounded-2xl">
                {/* imagem vinda da pasta public */}
                <img
                  src="/pugliesi.png"
                  alt="Dra. Jackeline Ricca"
                  className="h-auto w-full object-contain md:object-cover transition-transform duration-500 hover:scale-[1.01]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* DIREITA: nome + especialidade + texto + citação */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-foreground">Dra. Suellen Pugliesi</h3>
              <p className="mt-1 text-lg font-semibold text-orange-500">
                Especialista em Estética Avançada e Tratamento do Melasma
              </p>
            </div>

            <p className="max-w-prose text-lg leading-relaxed text-muted-foreground">
              Formada pela <strong>USP</strong> e pós-graduada em <strong>Estética pelo Ibeco</strong>,
              Dra. Suellen Pugliesi atua há mais de <strong>9 anos na área da saúde</strong>.
              Sua trajetória inclui experiência em hospitais e auditoria de contas médicas,
              o que reforça sua visão integrada sobre o cuidado com o paciente.
            </p>

            {/* Caixa de citação em tom pêssego, com borda laranja */}
            <Card className="border-orange-200 bg-orange-50/80 shadow-sm">
              <CardContent className="p-6">
                <blockquote className="text-xl font-semibold leading-relaxed text-foreground">
                  <span className="block">
                    “Independente da circunstência, a resiliência conquistada com muito esforço pode levá-lo a diante.”
                  </span>
                  <footer className="mt-3 text-sm font-normal text-muted-foreground">
                    — Dra. Suellen Pugliesi
                  </footer>
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
