import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import type { Product } from "@/data/products";

interface ProductCarouselProps {
  title: string;
  subtitle?: string;
  products: Product[];
}

const ProductCarousel = ({ title, subtitle, products }: ProductCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 md:py-16" id="produtos">
      <div className="container-wide">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="section-title text-foreground">{title}</h2>
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </div>
          
          {/* Navigation */}
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Produtos anteriores"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Próximos produtos"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-[300px] md:w-[320px] snap-start"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Mobile Navigation Dots */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {Array.from({ length: Math.ceil(products.length / 2) }).map((_, idx) => (
            <button
              key={idx}
              className="w-2 h-2 rounded-full bg-muted hover:bg-primary transition-colors"
              aria-label={`Página ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
