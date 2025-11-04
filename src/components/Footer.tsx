import logo from "@/assets/logo-estetica-pugliesi.png";

export const Footer = () => {
  return (
    <footer className="bg-foreground/5 border-t">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img src={logo} alt="Estética Pugliesi" className="h-16 w-auto mb-4" />
            <p className="text-sm text-muted-foreground">
              Especialista em tratamento de melasma com abordagem personalizada e baseada em evidências.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-foreground transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-foreground transition-colors">
                  Tratamentos
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-foreground transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Informações Legais</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#privacy" className="hover:text-foreground transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#lgpd" className="hover:text-foreground transition-colors">
                  LGPD - Proteção de Dados
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-foreground transition-colors">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Estética Pugliesi. Todos os direitos reservados.
          </p>
          <p className="mt-2">
            Este site utiliza cookies e está em conformidade com a LGPD (Lei Geral de Proteção de Dados).
          </p>
        </div>
      </div>
    </footer>
  );
};
