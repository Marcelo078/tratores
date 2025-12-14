import { Link } from "react-router-dom";
import { Clock, User, ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";
import tractorPartsEngine from "@/assets/tractor-parts-engine.jpg";
import tractorHydraulic from "@/assets/tractor-hydraulic-parts.jpg";
import tractorFilters from "@/assets/tractor-filters.jpg";

const getProductImage = (category: string) => {
  switch (category) {
    case "Sistema Hidráulico":
    case "Direção":
      return tractorHydraulic;
    case "Filtros":
    case "Lubrificantes":
      return tractorFilters;
    default:
      return tractorPartsEngine;
  }
};

interface ArticlePreviewProps {
  product: Product;
  featured?: boolean;
}

const ArticlePreview = ({ product, featured = false }: ArticlePreviewProps) => {
  const slug = product.name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

  if (featured) {
    return (
      <article className="group relative overflow-hidden rounded-2xl">
        <div className="aspect-[16/9] md:aspect-[21/9]">
          <img
            src={getProductImage(product.category)}
            alt={`${product.name} - Análise Completa - Melhores Preços`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent" />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-secondary rounded-full text-xs font-bold text-secondary-foreground">
              Destaque
            </span>
            <span className="px-3 py-1 bg-card/80 backdrop-blur-sm rounded-full text-xs font-medium text-foreground">
              {product.category}
            </span>
          </div>
          
          <h2 className="font-display text-2xl md:text-4xl font-bold text-primary-foreground mb-3 max-w-3xl">
            <strong>{product.name}</strong>: Análise Completa e Melhores Ofertas
          </h2>
          
          <p className="text-primary-foreground/80 mb-4 max-w-2xl line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <User className="w-4 h-4" />
              <span className="text-sm">Marcelo Barbosa</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <Clock className="w-4 h-4" />
              <span className="text-sm">8 min de leitura</span>
            </div>
          </div>
          
          <Link
            to={`/produto/${slug}`}
            className="inline-flex items-center gap-2 mt-6 text-secondary font-semibold group-hover:gap-3 transition-all"
          >
            Ler artigo completo
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className="card-product group">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={getProductImage(product.category)}
          alt={`${product.name} - ${product.brand} - Melhores Preços`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium text-muted-foreground">
            {product.category}
          </span>
          <span className="text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground">{product.brand}</span>
        </div>
        
        <h3 className="font-display text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          <strong>{product.name}</strong>: Melhores Preços e Ofertas
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-muted-foreground">
            <User className="w-4 h-4" />
            <span className="text-xs">Marcelo Barbosa</span>
          </div>
          
          <Link
            to={`/produto/${slug}`}
            className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
          >
            Ler mais
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ArticlePreview;
