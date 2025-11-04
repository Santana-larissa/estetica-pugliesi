// src/components/Footer.tsx

import { Mail, MapPin, Phone, Instagram } from "lucide-react";
import logo from "@/assets/logo-estetica-pugliesi.png";

export const Footer = () => {
  return (
    <footer className="text-white" style={{ backgroundColor: "#5A2D82" }}>
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="https://ik.imagekit.io/logoempregadev/eff68824-087a-4704-8f5e-8ad9b40833c4-removebg-preview.png?updatedAt=1762286598518"
                alt="Estética Pugliesi"
                className="h-20 w-auto object-contain drop-shadow-lg"
              />
              <div>
                <h2 className="text-lg font-semibold">ESTÉTICA PUGLIESI</h2>
                <p className="text-sm opacity-90">
                  Tratamento do Melasma
                </p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Cuidado integral da sua pele com uma abordagem humanizada e
              personalizada, unindo ciência e estética em cada tratamento.
            </p>
          </div>


          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-3 text-sm opacity-90">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>
                  R. Vergueiro, 875 - Liberdade
                  <br />
                  São Paulo - SP
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a
                  href="https://api.whatsapp.com/send/?phone=5511978081036&text=Quero+agendar+uma+consulta+para+fazer+o+controle+do+meu+Melasma&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  (11) 97808-1036
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:contato@esteticapugliesi.com.br"
                  className="hover:underline"
                >
                  esteticapugliesi@gmail.com
                </a>
              </li>
            </ul>
          </div>


          <div>
            <h3 className="font-semibold text-lg mb-4">Redes Sociais</h3>
            <a
              href="https://www.instagram.com/esteticapugliesi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-full text-sm font-medium"
            >
              <Instagram className="h-4 w-4" />
              @esteticapugliesi
            </a>
          </div>
        </div>


        <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm opacity-80">
          <p>
            © {new Date().getFullYear()} Estética Pugliesi. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
