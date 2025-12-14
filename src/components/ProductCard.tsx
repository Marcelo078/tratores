import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
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

const getBrandBadgeClass = (brand: string) => {
  const lowerBrand = brand.toLowerCase();
  if (lowerBrand.includes("carmax") || lowerBrand.includes("massey")) return "badge-massey";
  if (lowerBrand.includes("valtra") || lowerBrand.includes("valfer")) return "badge-valtra";
  if (lowerBrand.includes("cnh") || lowerBrand.includes("new")) return "badge-newholland";
  if (lowerBrand.includes("jacto")) return "badge-jacto";
  return "bg-muted text-muted-foreground";
};

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const slug = product.name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  
  return (
    <article className="card-product group">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={getProductImage(product.category)}
          alt={`${product.name} - ${product.brand} - Melhores Preços e Ofertas`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-card/90 backdrop-blur-sm rounded-full text-xs font-semibold text-foreground">
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Brand Badge */}
        <div className="mb-3">
          <span className={`badge-brand ${getBrandBadgeClass(product.brand)}`}>
            {product.brand}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          <strong>{product.name}</strong>
        </h3>

        {/* Code */}
        <p className="text-sm text-muted-foreground mb-3">
          Código: <strong>{product.code}</strong>
        </p>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Keywords */}
        <div className="flex flex-wrap gap-1 mb-4">
          {product.keywords.slice(0, 2).map((keyword, idx) => (
            <span key={idx} className="text-xs px-2 py-0.5 bg-muted rounded-full text-muted-foreground">
              {keyword}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Link
            to={`/produto/${slug}`}
            className="flex-1 btn-outline text-sm py-2"
          >
            Saiba Mais
          </Link>
          <a
            href={product.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn-secondary text-sm py-2 group/btn"
          >
            Comprar
            <ExternalLink className="w-4 h-4 ml-1 group-hover/btn:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
