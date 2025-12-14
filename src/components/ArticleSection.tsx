import ArticlePreview from "./ArticlePreview";
import { products } from "@/data/products";

const ArticleSection = () => {
  const featuredProduct = products[0];
  const recentProducts = products.slice(1, 7);

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container-wide">
        <div className="text-center mb-10">
          <h2 className="section-title text-foreground">
            Artigos e <strong>Análises Completas</strong>
          </h2>
          <p className="section-subtitle mx-auto">
            Análises detalhadas de <strong>peças para tratores</strong> com avaliações de qualidade, 
            procedência e comparativos de marcas.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-8">
          <ArticlePreview product={featuredProduct} featured />
        </div>

        {/* Recent Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentProducts.map((product) => (
            <ArticlePreview key={product.id} product={product} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-10">
          <button className="btn-outline">
            Carregar mais artigos
          </button>
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
