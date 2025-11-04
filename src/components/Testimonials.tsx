import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria S.",
    text: "Após anos convivendo com melasma pós-gestação, finalmente encontrei uma profissional que explicou de forma clara e honesta o que esperar. Os resultados vieram com paciência e disciplina.",
    rating: 5,
  },
  {
    name: "Ana Paula R.",
    text: "A abordagem é totalmente diferente: nada de promessas milagrosas, mas sim um tratamento sério e personalizado. Minha pele melhorou muito e aprendi a cuidar dela no dia a dia.",
    rating: 5,
  },
  {
    name: "Juliana M.",
    text: "Profissional extremamente atualizada e cuidadosa. Ela me ajudou a entender que melasma é crônico e que a manutenção é fundamental. Hoje sei como cuidar da minha pele.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">O que Dizem Nossos Pacientes</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Depoimentos reais de quem confia no nosso trabalho
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
