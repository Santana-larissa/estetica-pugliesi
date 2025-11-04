// src/components/Contact.tsx
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, Phone, Mail, MapPin, MapPinIcon } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const LILAS = "#5A2D82";        
const LILAS_CLARO = "#F5ECFF";  
const LILAS_BORDA = "#E6D6FF";  

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `Olá! Gostaria de agendar uma avaliação gratuita.\n\nNome: ${formData.name}\nTelefone: ${formData.phone}\nObjetivos: ${formData.message}`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Redirecionando para o WhatsApp",
      description: "Vamos concluir seu agendamento por lá 😊",
    });
  };

  const handleWhatsAppDirect = () => {
    window.open(
      "https://api.whatsapp.com/send/?phone=5511978081036&text=Quero+agendar+uma+consulta+para+fazer+o+controle+do+meu+Melasma&type=phone_number&app_absent=0",
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24"
      style={{
        background:
          "linear-gradient(to bottom, var(--bg-from, #fff), var(--bg-to, #fbfafc))",
      }}
    >
      {/* leve véu decorativo, bem discreto */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />

      <div className="container relative">
        {/* Cabeçalho igual ao print */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Comece hoje a sua transformação com saúde e equilíbrio
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Preencha o formulário e garanta sua avaliação gratuita com a Dra. Suellen Pugliesi.
          </p>
          <p className="mt-2 text-sm text-muted-foreground/80">
            As vagas são limitadas por agenda médica. Após o envio do formulário, nossa equipe entrará
            em contato para agendar seu horário.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
 
          <Card
            style={{
              backgroundColor: "#fff",
              borderColor: LILAS_BORDA,
            }}
            className="shadow-md"
          >
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label className="mb-2 block">Nome completo</Label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Digite seu nome"
                    className="h-12"
                  />
                </div>

                <div>
                  <Label className="mb-2 block">Telefone / WhatsApp</Label>
                  <Input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="(XX) XXXXX-XXXX"
                    className="h-12"
                  />
                </div>

                <div>
                  <Label className="mb-2 block">
                    Conte um pouco sobre seus objetivos
                  </Label>
                  <Textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Ex: Quero emagrecer com saúde e cuidar da minha pele..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-white"
                  style={{ backgroundColor: LILAS }}
                >
                  Quero minha avaliação gratuita agora
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* DIREITA — CARD DA CLÍNICA */}
          <div className="space-y-6">
            <Card
              style={{ borderColor: LILAS_BORDA }}
              className="shadow-md"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl">Estética Pugliesi</CardTitle>
                <CardDescription className="text-base">
                  Nutrologia e Dermatologia Integrada
                </CardDescription>
              </CardHeader>

              <CardContent className="p-8 pt-4">
                <div className="space-y-6">
                  {/* Endereço */}
                  <div className="flex items-start gap-4">
                    <div
                      className="rounded-lg p-2"
                      style={{ backgroundColor: LILAS_CLARO }}
                    >
                      <MapPin className="h-5 w-5" style={{ color: LILAS }} />
                    </div>
                    <div>
                      <p className="font-semibold">Endereço</p>
                      <p className="whitespace-pre-line text-sm text-muted-foreground">
                        Edifício Manhattan Office Center{"\n"}
                        R. Vergueiro, 875 - Liberdade{"\n"}
                        São Paulo - SP, 01504-001
                      </p>
                    </div>
                  </div>

                  {/* Telefone */}
                  <div className="flex items-start gap-4">
                    <div
                      className="rounded-lg p-2"
                      style={{ backgroundColor: LILAS_CLARO }}
                    >
                      <Phone className="h-5 w-5" style={{ color: LILAS }} />
                    </div>
                    <div>
                      <p className="font-semibold">Telefone / WhatsApp</p>
                      <p className="text-sm text-muted-foreground">
                        (11) 97808-1036
                      </p>
                    </div>
                  </div>

        

                  <Button
                    size="lg"
                    className="mt-2 w-full text-white"
                    style={{ backgroundColor: LILAS }}
                    onClick={handleWhatsAppDirect}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Falar no WhatsApp agora
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* FAIXA INFORMATIVA INFERIOR (igual ao print) */}
            <Card
              className="shadow-sm"
              style={{
                backgroundColor: LILAS_CLARO,
                borderColor: LILAS_BORDA,
              }}
            >
              <CardContent className="flex items-center gap-2 p-5 text-sm">
                <MapPinIcon className="h-4 w-4" style={{ color: LILAS }} />
                <span className="text-muted-foreground">
                  Fácil acesso e estacionamento disponível
                </span>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
