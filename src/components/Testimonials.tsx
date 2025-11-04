import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

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
    <section id="testimonials" className="py-24 bg-gradient-to-b from-soft-bg to-background">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">O que dizem nossos pacientes?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Depoimentos reais de quem confia no nosso trabalho
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              variant="glass"
              className="group relative overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="pt-8 relative">
                <Quote className="absolute top-4 right-4 h-12 w-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-5 w-5 fill-secondary text-secondary transition-transform group-hover:scale-110" 
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
