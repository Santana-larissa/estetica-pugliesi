import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { MessageCircle, Phone, Mail, MapPin, AlertCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: "Consentimento necessário",
        description: "Por favor, aceite a política de privacidade para continuar.",
        variant: "destructive",
      });
      return;
    }

    // Format WhatsApp message
    const whatsappMessage = `Olá! Gostaria de agendar uma consulta.\n\nNome: ${formData.name}\nTelefone: ${formData.phone}\nE-mail: ${formData.email}\nMensagem: ${formData.message}`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será redirecionado para continuar o agendamento.",
    });
  };

  const handleWhatsAppDirect = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta.", "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-soft-bg relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent pointer-events-none" />
      
      <div className="container relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Agende Sua Avaliação</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Entre em contato para iniciar seu tratamento personalizado de melasma
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Preencha o Formulário</CardTitle>
              <CardDescription>
                Responderemos em até 24 horas. Para atendimento imediato, use o WhatsApp.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nome Completo *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome"
                    className="transition-all duration-300 focus:scale-[1.02]"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(11) 99999-9999"
                    className="transition-all duration-300 focus:scale-[1.02]"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seu@email.com"
                    className="transition-all duration-300 focus:scale-[1.02]"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Conte um pouco sobre seu caso ou suas dúvidas"
                    rows={4}
                    className="transition-all duration-300 focus:scale-[1.02]"
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, consent: checked as boolean })
                    }
                  />
                  <label
                    htmlFor="consent"
                    className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                  >
                    Concordo com o uso dos meus dados para contato conforme a{" "}
                    <a href="#privacy" className="text-primary hover:underline">
                      Política de Privacidade
                    </a>
                    . Seus dados são protegidos pela LGPD.
                  </label>
                </div>

                <Button type="submit" size="lg" className="w-full hover:scale-105 transition-transform">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card variant="elevated" className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-none group hover:scale-[1.02] transition-all">
              <CardContent className="p-8 text-center">
                <MessageCircle className="h-14 w-14 mx-auto mb-4 group-hover:animate-float" />
                <h3 className="text-2xl font-bold mb-3">Atendimento Rápido</h3>
                <p className="mb-6 opacity-95 leading-relaxed">
                  Prefere falar diretamente? Entre em contato via WhatsApp agora!
                </p>
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full hover:scale-105 transition-transform"
                  onClick={handleWhatsAppDirect}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Abrir WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card variant="glass">
              <CardContent className="p-6 space-y-5">
                {[
                  { icon: Phone, label: "Telefone", value: "(11) 99999-9999" },
                  { icon: Mail, label: "E-mail", value: "contato@esteticapugliesi.com.br" },
                  { 
                    icon: MapPin, 
                    label: "Endereço", 
                    value: "Rua Exemplo, 123 - Bairro\nSão Paulo - SP" 
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={index} 
                      className="flex items-start gap-4 p-3 rounded-lg hover:bg-background/50 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">{item.label}</p>
                        <p className="text-muted-foreground text-sm whitespace-pre-line">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            <Card variant="glass" className="border-secondary/30">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3 text-sm flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-secondary" />
                  Importante
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Este formulário é apenas para agendamento e informações gerais. 
                  Não utilize para compartilhar informações médicas sensíveis. 
                  Diagnóstico e prescrição são feitos exclusivamente em consulta.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
