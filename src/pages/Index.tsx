import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCarousel from "@/components/ProductCarousel";
import CategorySection from "@/components/CategorySection";
import BrandSection from "@/components/BrandSection";
import ArticleSection from "@/components/ArticleSection";
import AffiliateSection from "@/components/AffiliateSection";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const freiosProducts = products.filter(p => p.category === "Freios");
  const hidraulicosProducts = products.filter(p => p.category === "Sistema Hidráulico" || p.category === "Direção");
  const filtrosProducts = products.filter(p => p.category === "Filtros" || p.category === "Lubrificantes");

  return (
    <>
      <Helmet>
        <title>Peças para Trator | Melhores Preços e Ofertas 2025 - Massey, Valtra, New Holland</title>
        <meta 
          name="description" 
          content="As melhores peças para tratores Massey Ferguson, Valtra, New Holland e Jacto. Análises completas, melhores marcas e ofertas exclusivas. Compre com segurança!" 
        />
        <meta name="keywords" content="peças para trator, peças massey ferguson, peças valtra, peças new holland, peças jacto, filtro trator, freio trator, cilindro hidráulico trator" />
        <link rel="canonical" href="https://pecasparatrator.com.br" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Peças para Trator - Melhores Preços e Ofertas 2025" />
        <meta property="og:description" content="As melhores peças para tratores com análises completas e ofertas exclusivas do Mercado Livre." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Peças para Trator - Melhores Preços e Ofertas" />
        <meta name="twitter:description" content="Análises completas de peças para tratores Massey, Valtra, New Holland." />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Peças para Trator",
            "url": "https://pecasparatrator.com.br",
            "description": "Portal de análises e ofertas de peças para tratores agrícolas",
            "publisher": {
              "@type": "Organization",
              "name": "Peças para Trator",
              "logo": {
                "@type": "ImageObject",
                "url": "https://pecasparatrator.com.br/logo.png"
              }
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://pecasparatrator.com.br/busca?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          
          <ProductCarousel 
            title="Peças de Freio para Tratores"
            subtitle="Cilindros, lonas e discos de freio das melhores marcas. Melhores preços e ofertas."
            products={freiosProducts}
          />

          <CategorySection />

          <ProductCarousel 
            title="Sistema Hidráulico e Direção"
            subtitle="Hastes, cilindros e cabos hidráulicos originais e paralelos."
            products={hidraulicosProducts}
          />

          <BrandSection />

          <ProductCarousel 
            title="Filtros e Lubrificantes"
            subtitle="Filtros de óleo, combustível e ar das marcas líderes de mercado."
            products={filtrosProducts}
          />

          <ArticleSection />

          <AffiliateSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
