import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { ArrowLeft, ExternalLink, CheckCircle, Clock, User, Star, AlertTriangle } from "lucide-react";
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

const Produto = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const product = products.find(p => {
    const productSlug = p.name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
    return productSlug === slug;
  });

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-20 text-center">
          <h1 className="text-2xl font-bold">Produto não encontrado</h1>
          <Link to="/" className="btn-primary mt-4 inline-block">
            Voltar ao início
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products.filter(
    p => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{product.name} | Melhores Preços e Ofertas - Peças para Trator</title>
        <meta 
          name="description" 
          content={`${product.name} ${product.brand}. ${product.description} Melhores preços, melhores marcas, ofertas exclusivas.`}
        />
        <meta name="keywords" content={product.keywords.join(", ")} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": product.name,
            "brand": {
              "@type": "Brand",
              "name": product.brand
            },
            "description": product.description,
            "sku": product.code,
            "review": {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Marcelo Barbosa"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "4.5",
                "bestRating": "5"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="py-8 md:py-12">
          <article className="container-wide">
            {/* Breadcrumb */}
            <nav className="mb-6">
              <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Voltar ao início
              </Link>
            </nav>

            {/* Product Header */}
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-12">
              {/* Image */}
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                <img
                  src={getProductImage(product.category)}
                  alt={`${product.name} - ${product.brand} - Melhores Preços e Ofertas`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div>
                <div className="mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    {product.category}
                  </span>
                </div>

                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  <strong>{product.name}</strong>
                </h1>

                <p className="text-lg text-muted-foreground mb-6">
                  Marca: <strong className="text-foreground">{product.brand}</strong> | 
                  Código: <strong className="text-foreground">{product.code}</strong>
                </p>

                <p className="text-muted-foreground mb-6">
                  {product.description}
                </p>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Qualidade Verificada
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Star className="w-5 h-5 text-secondary" fill="currentColor" />
                    Marca Confiável
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={product.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-center flex-1"
                  >
                    Comprar no Mercado Livre
                    <ExternalLink className="w-5 h-5 ml-2" />
                  </a>
                </div>

                {/* Keywords */}
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-2">Palavras-chave:</p>
                  <div className="flex flex-wrap gap-2">
                    {product.keywords.map((keyword, idx) => (
                      <span key={idx} className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="max-w-4xl mx-auto">
              {/* Meta */}
              <div className="flex items-center gap-6 mb-8 pb-8 border-b border-border">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <User className="w-5 h-5" />
                  <span>Marcelo Barbosa</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-5 h-5" />
                  <span>8 min de leitura</span>
                </div>
              </div>

              {/* Long Description */}
              <div className="prose prose-lg max-w-none">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Análise Completa: {product.name}
                </h2>
                
                <div 
                  className="text-muted-foreground mb-8"
                  dangerouslySetInnerHTML={{ 
                    __html: product.longDescription.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') 
                  }}
                />

                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  Por que escolher {product.brand}?
                </h3>
                <p className="text-muted-foreground mb-6">
                  A marca <strong className="text-foreground">{product.brand}</strong> é reconhecida 
                  no mercado de peças agrícolas pela qualidade de seus produtos. Com anos de experiência 
                  e compromisso com a excelência, suas peças atendem ou superam as especificações 
                  originais dos fabricantes de tratores.
                </p>

                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  Especificações Técnicas
                </h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Código da Peça:</strong> {product.code}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Fabricante:</strong> {product.brand}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Categoria:</strong> {product.category}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Aplicação:</strong> Tratores agrícolas</span>
                  </li>
                </ul>

                {/* Warning */}
                <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 my-8">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-display font-bold text-foreground mb-2">
                        Importante
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Antes de comprar, verifique a compatibilidade com o modelo específico 
                        do seu trator. Consulte o manual do fabricante ou entre em contato 
                        com o vendedor para confirmar a aplicação.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Box */}
                <div className="bg-primary text-primary-foreground rounded-xl p-8 text-center my-8">
                  <h3 className="font-display text-2xl font-bold mb-4">
                    Garanta sua peça agora!
                  </h3>
                  <p className="mb-6 text-primary-foreground/80">
                    Compre com segurança no Mercado Livre e aproveite as melhores ofertas.
                  </p>
                  <a
                    href={product.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex"
                  >
                    Ver Ofertas no Mercado Livre
                    <ExternalLink className="w-5 h-5 ml-2" />
                  </a>
                </div>
              </div>

              {/* Related Products */}
              {relatedProducts.length > 0 && (
                <section className="mt-12 pt-12 border-t border-border">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                    Produtos Relacionados
                  </h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    {relatedProducts.map((p) => {
                      const pSlug = p.name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
                      return (
                        <Link
                          key={p.id}
                          to={`/produto/${pSlug}`}
                          className="card-product p-4 hover:border-primary"
                        >
                          <h3 className="font-display font-bold text-foreground mb-2 line-clamp-2">
                            {p.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">{p.brand}</p>
                        </Link>
                      );
                    })}
                  </div>
                </section>
              )}
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Produto;
