import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logo-estetica-pugliesi.png";

const navigation = [
  { name: "Início", href: "#home" },
  { name: "Sobre", href: "#about" },
  { name: "Tratamentos", href: "#treatments" },
  { name: "Resultados", href: "#results" },
  { name: "Depoimentos", href: "#testimonials" },
  { name: "Contato", href: "#contact" },
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center space-x-2">

          <img src="https://ik.imagekit.io/logoempregadev/eff68824-087a-4704-8f5e-8ad9b40833c4-removebg-preview.png?updatedAt=1762286598518"
            alt="Estética Pugliesi"
            className="h-20 w-auto object-contain drop-shadow-lg"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="default"
            size="lg"
            className="hidden md:flex"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Phone className="mr-2 h-4 w-4" />
            Agendar Consulta
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </a>
                ))}
                <Button
                  variant="default"
                  size="lg"
                  className="mt-4"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Agendar Consulta
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};
