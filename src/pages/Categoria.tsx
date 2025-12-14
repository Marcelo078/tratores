import { forwardRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import { ArrowLeft } from "lucide-react";

const Categoria = forwardRef<HTMLDivElement>((props, ref) => {
  const { slug } = useParams<{ slug: string }>();
  
  const category = categories.find(
    c => c.id === slug
  );

  const categoryProducts = products.filter(p => {
    const normalizedCategory = p.category.toLowerCase().replace(/\s+/g, "-");
    return normalizedCategory === slug;
  });

  if (!category) {
    return (
      <div ref={ref} className="min-h-screen bg-background" {...props}>
        <Header />
        <main className="py-20 text-center container-wide">
          <h1 className="text-2xl font-bold text-foreground mb-4">Categoria não encontrada</h1>
          <p className="text-muted-foreground mb-6">
            A categoria que você está procurando não existe em nosso catálogo.
          </p>
          <Link to="/" className="btn-primary inline-block">
            Voltar ao início
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{category.name} para Trator | Melhores Preços e Ofertas - Peças para Trator</title>
        <meta 
          name="description" 
          content={`${category.name} para tratores Massey Ferguson, Valtra, New Holland. Melhores marcas, melhores preços e ofertas exclusivas.`}
        />
        <meta name="keywords" content={`${category.name.toLowerCase()} trator, peças ${category.name.toLowerCase()}, melhores preços ${category.name.toLowerCase()}`} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": `${category.name} para Trator`,
            "description": `Peças de ${category.name} para tratores agrícolas`,
            "publisher": {
              "@type": "Organization",
              "name": "Peças para Trator"
            }
          })}
        </script>
      </Helmet>

      <div ref={ref} className="min-h-screen bg-background" {...props}>
        <Header />
        
        <main className="py-12 md:py-16">
          <div className="container-wide">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Voltar ao início
              </Link>
            </nav>

            {/* Header */}
            <div className="text-center mb-10">
              <div className="text-5xl mb-4">{category.icon}</div>
              <h1 className="section-title text-foreground">
                <strong>{category.name}</strong> para Trator
              </h1>
              <p className="section-subtitle mx-auto">
                As melhores peças de {category.name.toLowerCase()} para tratores. 
                <strong> Melhores marcas</strong> e <strong>melhores preços</strong>.
              </p>
            </div>

            {/* Products Grid */}
            {categoryProducts.length > 0 ? (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {categoryProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                  <p className="text-muted-foreground mb-4">
                    Não encontrou o que procura?
                  </p>
                  <a
                    href="https://mercadolivre.com/sec/2d6sMcw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex items-center"
                  >
                    Ver Mais Ofertas no Mercado Livre
                  </a>
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-6">
                  Estamos trabalhando para adicionar mais peças nesta categoria.
                </p>
                <a
                  href="https://mercadolivre.com/sec/2d6sMcw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block"
                >
                  Ver todas as ofertas
                </a>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
});

Categoria.displayName = "Categoria";

export default Categoria;
