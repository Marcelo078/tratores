import { ExternalLink, Sparkles } from "lucide-react";
import { affiliateProducts } from "@/data/products";

const AffiliateSection = () => {
  return (
    <section className="py-12 md:py-16 bg-primary text-primary-foreground">
      <div className="container-wide">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-secondary-foreground" />
            <span className="text-sm font-bold text-secondary-foreground">
              Oportunidades Exclusivas
            </span>
          </div>
          <h2 className="section-title text-primary-foreground">
            Cursos e Produtos Recomendados
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Selecionamos os melhores cursos e produtos digitais para você aumentar seus resultados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {affiliateProducts.map((product) => (
            <article
              key={product.id}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 hover:bg-primary-foreground/20 transition-colors group"
            >
              <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">
                {product.name}
              </h3>
              <p className="text-sm text-primary-foreground/70 mb-4">
                Por {product.author}
              </p>
              <a
                href={product.links[0]}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-semibold text-sm hover:brightness-110 transition-all group-hover:gap-3"
              >
                Acessar Agora
                <ExternalLink className="w-4 h-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AffiliateSection;
