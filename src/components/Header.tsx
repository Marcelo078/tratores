import { useState, forwardRef } from "react";
import { Menu, X, Tractor, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { categories, brands } from "@/data/products";

const Header = forwardRef<HTMLElement>((props, ref) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  return (
    <header ref={ref} className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border" {...props}>
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <Tractor className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-display text-lg md:text-xl font-bold text-foreground leading-tight">
                Peças para Trator
              </h1>
              <p className="text-xs text-muted-foreground hidden sm:block">
                As Melhores Ofertas do Mercado
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="font-medium text-foreground hover:text-primary transition-colors link-hover">
              Início
            </Link>
            
            <div className="relative group">
              <button className="flex items-center gap-1 font-medium text-foreground hover:text-primary transition-colors">
                Categorias
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-card rounded-xl shadow-elevated border border-border p-4 min-w-[240px]">
                  {categories.slice(0, 6).map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/categoria/${cat.id}`}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors"
                    >
                      <span>{cat.icon}</span>
                      <span className="text-sm font-medium">{cat.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-1 font-medium text-foreground hover:text-primary transition-colors">
                Marcas
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-card rounded-xl shadow-elevated border border-border p-4 min-w-[200px]">
                  {brands.map((brand) => (
                    <Link
                      key={brand.id}
                      to={`/marca/${brand.id}`}
                      className="block px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm font-medium"
                    >
                      {brand.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/sobre" className="font-medium text-foreground hover:text-primary transition-colors link-hover">
              Sobre Nós
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://mercadolivre.com/sec/2d6sMcw"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Ver Ofertas
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-in">
          <div className="container-wide py-4 space-y-4">
            <Link
              to="/"
              className="block py-2 font-medium text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            
            <div>
              <button
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className="flex items-center justify-between w-full py-2 font-medium text-foreground"
              >
                Categorias
                <ChevronDown className={`w-4 h-4 transition-transform ${isCategoriesOpen ? "rotate-180" : ""}`} />
              </button>
              {isCategoriesOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/categoria/${cat.id}`}
                      className="flex items-center gap-2 py-1 text-muted-foreground hover:text-foreground"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span>{cat.icon}</span>
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/sobre"
              className="block py-2 font-medium text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre Nós
            </Link>

            <a
              href="https://mercadolivre.com/sec/2d6sMcw"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full text-center"
            >
              Ver Ofertas no Mercado Livre
            </a>
          </div>
        </div>
      )}
    </header>
  );
});

Header.displayName = "Header";

export default Header;
