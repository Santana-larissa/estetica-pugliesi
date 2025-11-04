"use client";

import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info, Instagram, ExternalLink, ZoomIn } from "lucide-react";

// Se tiver imagens locais, importe aqui:
// import before1 from "@/assets/before1.jpg";
// import after1 from "@/assets/after1.jpg";

type BeforeAfterItem = {
  title: string;
  subtitle?: string;
  source: "instagram" | "local";
  // Para instagram, use a URL do post
  instagramUrl?: string;
  // Para local, use caminhos/ imports de imagens
  beforeSrc?: string;
  afterSrc?: string;
  caption?: string;
};

const items: BeforeAfterItem[] = [
  {
    title: "Melasma – Clareamento Progressivo",
    subtitle: "Protocolo personalizado • 6 meses",
    source: "instagram",
    instagramUrl: "https://www.instagram.com/p/C4qFzqyO2X-/?img_index=1",
    caption: "Resultados variam conforme avaliação e adesão ao plano.",
  },
  {
    title: "Textura e Uniformidade de Tom",
    subtitle: "Peeling + skincare orientado",
    source: "instagram",
    instagramUrl: "https://www.instagram.com/p/Cx8wZCAOIxp/",
    caption: "Uso diário de fotoproteção foi fundamental.",
  },
  // Para usar imagens locais:
  // {
  //   title: "Olheiras pigmentares",
  //   subtitle: "4 meses",
  //   source: "local",
  //   beforeSrc: before1.src,
  //   afterSrc: after1.src,
  //   caption: "Tratamento integrativo e manutenção contínua.",
  // },
];

export const Results = () => {
  // Carrega script do oEmbed do Instagram para renderizar os blockquotes
  useEffect(() => {
    const existing = document.querySelector('script[src="//www.instagram.com/embed.js"]') as HTMLScriptElement | null;
    if (!existing) {
      const s = document.createElement("script");
      s.src = "//www.instagram.com/embed.js";
      s.async = true;
      document.body.appendChild(s);
    } else if ((window as any).instgrm?.Embeds?.process) {
      (window as any).instgrm.Embeds.process();
    }
  }, []);

  return (
    <section id="results" className="py-24 bg-gradient-to-b from-background to-soft-bg relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container relative">
        {/* Header */}
        <div className="text-center mb-14 animate-fade-in">
          <h2 className="text-4xl font-bold tracking-tight mb-3">Resultados com Responsabilidade</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparência sobre expectativas, evidências e evolução dos tratamentos.
          </p>
        </div>

        {/* Aviso LGPD
        <div className="max-w-4xl mx-auto mb-10">
          <Alert className="border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors">
            <Info className="h-5 w-5 text-primary" />
            <AlertDescription className="text-base">
              <strong>Consentimento e Privacidade:</strong> Imagens publicadas somente com consentimento explícito, em conformidade com a LGPD. Resultados variam conforme tipo de pele, grau da condição e adesão ao protocolo.
            </AlertDescription>
          </Alert>
        </div> */}

        {/* Grade de Resultados */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {items.map((item, idx) => (
            <Card key={idx} variant="elevated" className="overflow-hidden group">
              <CardContent className="p-0">
                {/* Header do Card */}
                <div className="px-5 pt-5">
                  <h3 className="text-xl font-semibold leading-tight">{item.title}</h3>
                  {item.subtitle && (
                    <p className="text-sm text-muted-foreground mt-1">{item.subtitle}</p>
                  )}
                </div>

                {/* Corpo: Instagram oEmbed ou imagens locais lado a lado */}
                <div className="p-5">
                  {item.source === "instagram" && item.instagramUrl ? (
                    <div className="rounded-xl overflow-hidden border bg-background">
                      {/* oEmbed do Instagram */}
                      <blockquote
                        className="instagram-media"
                        data-instgrm-permalink={item.instagramUrl}
                        data-instgrm-version="14"
                        style={{ background: "transparent", margin: 0, width: "100%" }}
                      />
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-2">
                      <figure className="relative overflow-hidden rounded-xl aspect-[4/5]">
                        <img
                          src={item.beforeSrc}
                          alt="Antes"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <figcaption className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs px-3 py-1">
                          Antes
                        </figcaption>
                        <div className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-1">
                          <ZoomIn className="h-4 w-4" />
                        </div>
                      </figure>
                      <figure className="relative overflow-hidden rounded-xl aspect-[4/5]">
                        <img
                          src={item.afterSrc}
                          alt="Depois"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <figcaption className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs px-3 py-1">
                          Depois
                        </figcaption>
                        <div className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-1">
                          <ZoomIn className="h-4 w-4" />
                        </div>
                      </figure>
                    </div>
                  )}

                  {/* Legenda */}
                  {item.caption && (
                    <p className="text-sm text-muted-foreground mt-3">{item.caption}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA para Instagram */}
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/esteticapugliesi/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Instagram className="h-5 w-5" />
            Ver mais resultados no Instagram
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
