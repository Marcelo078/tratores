import { Link } from "react-router-dom";
import { brands } from "@/data/products";

const BrandSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container-wide">
        <div className="text-center mb-10">
          <h2 className="section-title text-foreground">
            <strong>Melhores Marcas</strong> de Tratores
          </h2>
          <p className="section-subtitle mx-auto">
            Trabalhamos com as principais marcas do agronegócio brasileiro.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              to={`/marca/${brand.id}`}
              className="group bg-card rounded-xl p-8 text-center hover:shadow-elevated transition-all duration-300 border border-border hover:border-primary"
            >
              <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {brand.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                Peças originais e paralelas
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
