import { ArrowRight, ShieldCheck, Truck, Star } from "lucide-react";
import heroImage from "@/assets/hero-tractors.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Tratores agrícolas no campo - Peças para Trator - Melhores Preços e Ofertas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative container-wide py-20 md:py-28">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/90 backdrop-blur-sm rounded-full mb-6 animate-fade-up">
            <Star className="w-4 h-4 text-secondary-foreground" fill="currentColor" />
            <span className="text-sm font-semibold text-secondary-foreground">
              #1 em Peças para Tratores no Brasil
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6 animate-fade-up delay-100">
            <strong>Peças para Trator</strong>
            <br />
            <span className="text-gradient">Melhores Preços</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl animate-fade-up delay-200">
            As <strong>melhores marcas</strong> de peças para tratores Massey Ferguson, Valtra, 
            New Holland e Jacto. Análises completas e <strong>ofertas exclusivas</strong>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up delay-300">
            <a
              href="https://mercadolivre.com/sec/2d6sMcw"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary group"
            >
              Ver Ofertas no Mercado Livre
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#produtos" className="btn-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Explorar Produtos
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6 md:gap-8 animate-fade-up delay-400">
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <ShieldCheck className="w-5 h-5 text-secondary" />
              <span className="text-sm font-medium">Marcas Originais</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Truck className="w-5 h-5 text-secondary" />
              <span className="text-sm font-medium">Entrega Rápida</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Star className="w-5 h-5 text-secondary" fill="currentColor" />
              <span className="text-sm font-medium">+10.000 Avaliações</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
