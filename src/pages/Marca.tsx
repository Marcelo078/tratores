import { forwardRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, brands } from "@/data/products";
import { ArrowLeft } from "lucide-react";

const Marca = forwardRef<HTMLDivElement>((props, ref) => {
  const { slug } = useParams<{ slug: string }>();
  
  const brand = brands.find(b => b.id === slug);

  // Mapeamento de slug para nomes de marcas nos produtos
  const brandNameMap: Record<string, string[]> = {
    massey: ["Carmax", "Controlflex", "Verpec"],
    valtra: ["Valfer", "ZF", "Agel", "Dynamics", "Microgear", "ATF", "Eraltractor", "Fleming", "Agromat"],
    newholland: ["CNH", "APP Parts", "Della Rosa", "R Mann"],
    jacto: ["Jacto"],
    agrale: ["Fras-le"],
  };

  // Filtrar produtos por marca
  const brandProducts = products.filter(p => {
    if (!slug) return false;
    
    // Verificar se o nome do produto contém a marca
    const productNameLower = p.name.toLowerCase();
    
    if (slug === "massey" && productNameLower.includes("massey")) return true;
    if (slug === "valtra" && productNameLower.includes("valtra")) return true;
    if (slug === "newholland" && (productNameLower.includes("new holland") || productNameLower.includes("nh"))) return true;
    if (slug === "jacto" && productNameLower.includes("jacto")) return true;
    if (slug === "agrale" && productNameLower.includes("agrale")) return true;
    
    // Verificar se a marca do fabricante está mapeada
    const mappedBrands = brandNameMap[slug] || [];
    return mappedBrands.includes(p.brand);
  });

  if (!brand) {
    return (
      <div ref={ref} className="min-h-screen bg-background" {...props}>
        <Header />
        <main className="py-20 text-center container-wide">
          <h1 className="text-2xl font-bold text-foreground mb-4">Marca não encontrada</h1>
          <p className="text-muted-foreground mb-6">
            A marca que você está procurando não existe em nosso catálogo.
          </p>
          <Link to="/" className="btn-primary inline-block">
            Voltar ao início
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const getBrandDescription = (brandId: string): string => {
    switch (brandId) {
      case "massey":
        return "A Massey Ferguson é uma das marcas mais tradicionais e respeitadas do agronegócio mundial. Fundada em 1953, oferece tratores robustos e confiáveis para todas as aplicações agrícolas.";
      case "valtra":
        return "A Valtra é referência em tratores de alta tecnologia e conforto. Com origem finlandesa, combina inovação nórdica com a robustez exigida pelo agricultor brasileiro.";
      case "newholland":
        return "A New Holland é sinônimo de eficiência e produtividade no campo. Parte do grupo CNH Industrial, oferece soluções completas para agricultura moderna.";
      case "jacto":
        return "A Jacto é uma empresa 100% brasileira, líder mundial em pulverização agrícola. Desde 1948, desenvolve tecnologia de ponta para o agronegócio.";
      case "agrale":
        return "A Agrale é a maior fabricante de tratores brasileira. Com sede no Rio Grande do Sul, produz máquinas versáteis e resistentes para o agricultor familiar e comercial.";
      default:
        return "";
    }
  };

  return (
    <>
      <Helmet>
        <title>Peças para {brand.name} | Melhores Preços e Ofertas - Peças para Trator</title>
        <meta 
          name="description" 
          content={`Peças para tratores ${brand.name}. Encontre as melhores marcas, melhores preços e ofertas exclusivas. Qualidade garantida com procedência verificada.`}
        />
        <meta name="keywords" content={`peças ${brand.name}, trator ${brand.name}, peças originais ${brand.name}, manutenção ${brand.name}`} />
        
        <meta property="og:title" content={`Peças para ${brand.name} - Melhores Preços e Ofertas`} />
        <meta property="og:description" content={`Peças para tratores ${brand.name}. Melhores marcas e ofertas exclusivas.`} />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": `Peças para ${brand.name}`,
            "description": `Catálogo de peças para tratores ${brand.name}`,
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
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                {brand.name}
              </span>
              <h1 className="section-title text-foreground">
                Peças para <strong>{brand.name}</strong>
              </h1>
              <p className="section-subtitle mx-auto">
                {getBrandDescription(brand.id)}
              </p>
              <p className="text-muted-foreground mt-4">
                <strong>Melhores Preços</strong> • <strong>Melhores Ofertas</strong> • <strong>Melhores Marcas</strong>
              </p>
            </div>

            {/* Products Grid */}
            {brandProducts.length > 0 ? (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {brandProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                  <p className="text-muted-foreground mb-4">
                    Não encontrou o que procura? Veja todas as peças disponíveis.
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
                  Estamos trabalhando para adicionar mais peças para <strong>{brand.name}</strong>.
                </p>
                <a
                  href="https://mercadolivre.com/sec/2d6sMcw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block"
                >
                  Ver todas as ofertas no Mercado Livre
                </a>
              </div>
            )}

            {/* SEO Content */}
            <section className="mt-16 pt-12 border-t border-border max-w-4xl mx-auto">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
                Por que escolher peças para <strong>{brand.name}</strong>?
              </h2>
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Manter seu trator <strong>{brand.name}</strong> em perfeitas condições é essencial 
                  para garantir produtividade e longevidade da máquina. No portal <strong>Peças para Trator</strong>, 
                  selecionamos as melhores peças de reposição, analisando qualidade, procedência e 
                  avaliações de outros agricultores.
                </p>
                
                <p>
                  Trabalhamos com as <strong>melhores marcas</strong> do mercado, incluindo fabricantes 
                  originais e paralelos de qualidade comprovada. Todas as peças são verificadas para 
                  garantir compatibilidade e durabilidade.
                </p>

                <div className="bg-muted/50 rounded-xl p-6 my-8">
                  <h3 className="font-display font-bold text-foreground mb-3">
                    Vantagens de comprar pelo nosso portal:
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Análises completas e detalhadas de cada peça</li>
                    <li>✓ Comparativo entre marcas e fabricantes</li>
                    <li>✓ Links diretos para as melhores ofertas</li>
                    <li>✓ Conteúdo revisado por especialistas</li>
                    <li>✓ Compra segura pelo Mercado Livre</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
});

Marca.displayName = "Marca";

export default Marca;