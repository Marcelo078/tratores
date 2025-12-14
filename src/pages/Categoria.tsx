import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

const Categoria = () => {
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
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-20 text-center">
          <h1 className="text-2xl font-bold">Categoria não encontrada</h1>
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
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="py-12 md:py-16">
          <div className="container-wide">
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
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categoryProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  Nenhum produto encontrado nesta categoria.
                </p>
                <a
                  href="https://mercadolivre.com/sec/2d6sMcw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-4 inline-block"
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
};

export default Categoria;
