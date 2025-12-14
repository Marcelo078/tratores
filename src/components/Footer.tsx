import { Link } from "react-router-dom";
import { Tractor, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sidebar text-sidebar-foreground">
      {/* Main Footer */}
      <div className="container-wide py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-sidebar-primary rounded-lg flex items-center justify-center">
                <Tractor className="w-6 h-6 text-sidebar-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold">
                Peças para Trator
              </span>
            </Link>
            <p className="text-sidebar-foreground/70 text-sm mb-4">
              As melhores análises de <strong>peças para tratores</strong> com foco em qualidade, 
              procedência de marcas e avaliações reais de clientes.
            </p>
            <p className="text-sm text-sidebar-foreground/50">
              Revisor: <strong>Marcelo Barbosa</strong>
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <a 
                  href="https://mercadolivre.com/sec/2d6sMcw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors"
                >
                  Ver Ofertas
                </a>
              </li>
            </ul>
          </div>

          {/* Categorias */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Categorias</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/categoria/freios" className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors">
                  Freios
                </Link>
              </li>
              <li>
                <Link to="/categoria/sistema-hidraulico" className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors">
                  Sistema Hidráulico
                </Link>
              </li>
              <li>
                <Link to="/categoria/filtros" className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors">
                  Filtros
                </Link>
              </li>
              <li>
                <Link to="/categoria/embreagem" className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors">
                  Embreagem
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/politica-privacidade" className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos-uso" className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/transparencia" className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors">
                  Transparência
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-sidebar-border">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-sidebar-foreground/50 text-center md:text-left">
              © {currentYear} Peças para Trator. Todos os direitos reservados.
            </p>
            <p className="text-xs text-sidebar-foreground/40 text-center md:text-right max-w-md">
              Este site contém links de afiliados. Ao comprar através dos nossos links, 
              podemos receber uma comissão sem custo adicional para você.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
