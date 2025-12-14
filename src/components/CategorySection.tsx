import { Link } from "react-router-dom";
import { categories } from "@/data/products";
import { ArrowRight } from "lucide-react";

const CategorySection = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/50">
      <div className="container-wide">
        <div className="text-center mb-10">
          <h2 className="section-title text-foreground">
            Categorias de <strong>Peças para Trator</strong>
          </h2>
          <p className="section-subtitle mx-auto">
            Encontre peças por categoria. <strong>Melhores marcas</strong> e <strong>melhores preços</strong> do mercado.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/categoria/${category.id}`}
              className="group bg-card rounded-xl p-6 text-center hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <div className="mt-2 flex items-center justify-center gap-1 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                Ver mais
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
