import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-spa.jpg";

const doctorPhoto =
  "https://ik.imagekit.io/logoempregadev/ChatGPT%20Image%204%20de%20nov.%20de%202025,%2017_18_30.png?updatedAt=1762287523153";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--background) / 0.95), hsl(var(--background) / 0.7)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Texto */}
          <div className="max-w-2xl space-y-8">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Especialista em Melasma
            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Tratamento de
              <span className="block text-primary">Melasma</span>
              com Excelência
            </h1>

            <p className="text-xl text-muted-foreground max-w-xl">
              Trato seu Melasma de dentro para fora em 12 semanas. Presencial em São Paulo ou Online em todo o Brasil.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-lg h-14 px-8"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Agendar Avaliação
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg h-14 px-8"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              >
                Saiba Mais
              </Button>
            </div>
          </div>

          {/* Foto da médica à direita */}
          <div className="relative mx-auto w-full max-w-[420px] lg:max-w-[500px]">
            {/* Glow de destaque */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-8 -z-10 blur-3xl opacity-70"
              style={{
                background:
                  "radial-gradient(40% 40% at 60% 40%, rgba(201,162,58,.20), transparent 60%)",
              }}
            />

            {/* Moldura opcional */}
            <div className="rounded-[28px] bg-gradient-to-b from-white/70 to-white/30 p-[2px] shadow-2xl backdrop-blur-md">
              <div className="rounded-[26px] bg-background/70">
                <img
                  src={doctorPhoto}
                  alt="Dra. responsável pelos tratamentos - Estética Pugliesi"
                  className="w-full h-auto object-contain rounded-[26px]"
                  loading="eager"
                  decoding="async"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "/assets/doctor-fallback.png"; // opcional
                  }}
                />
              </div>
            </div>

            {/* Selo */}
            <div className="absolute bottom-3 right-3 rounded-full bg-background/80 border px-3 py-1 text-xs text-muted-foreground shadow">
              Suellen Pugliesi
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
