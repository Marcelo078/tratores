import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { AlertTriangle, Info, CheckCircle } from "lucide-react";

const Transparencia = () => {
  return (
    <>
      <Helmet>
        <title>Transparência e Isenção de Responsabilidade | Peças para Trator</title>
        <meta 
          name="description" 
          content="Transparência e Isenção de Responsabilidade do Peças para Trator. Entenda como funcionam nossos links de afiliados." 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="py-12 md:py-16">
          <article className="container-narrow">
            <h1 className="section-title text-foreground mb-8">
              Transparência e Isenção de Responsabilidade
            </h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              
              {/* Disclosure Box */}
              <div className="bg-secondary/10 border border-secondary/30 rounded-xl p-6 mb-8">
                <div className="flex items-start gap-4">
                  <Info className="w-6 h-6 text-secondary-foreground flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="font-display text-lg font-bold text-foreground mb-2">
                      Divulgação de Afiliados
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      O <strong>Peças para Trator</strong> participa de programas de afiliados, 
                      incluindo o Programa de Afiliados do Mercado Livre. Isso significa que 
                      podemos receber uma comissão por compras realizadas através dos nossos links.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="font-display text-xl font-bold text-foreground mt-8 mb-4">
                Como Funcionam os Links de Afiliados
              </h2>
              <p>
                Quando você clica em um link de produto neste site e realiza uma compra, 
                podemos receber uma pequena comissão da loja vendedora. Isso não tem 
                custo adicional para você - o preço que você paga é o mesmo.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-8">
                <div className="bg-primary/5 rounded-xl p-5">
                  <CheckCircle className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-display font-bold text-foreground mb-2">O que NÃO muda</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Preço do produto para você</li>
                    <li>• Qualidade do produto</li>
                    <li>• Garantia do fabricante</li>
                    <li>• Atendimento do vendedor</li>
                  </ul>
                </div>
                <div className="bg-secondary/10 rounded-xl p-5">
                  <CheckCircle className="w-6 h-6 text-secondary-foreground mb-3" />
                  <h3 className="font-display font-bold text-foreground mb-2">Como nos ajuda</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Mantém o site funcionando</li>
                    <li>• Permite criar mais conteúdo</li>
                    <li>• Financia pesquisa de produtos</li>
                    <li>• Melhora as análises técnicas</li>
                  </ul>
                </div>
              </div>

              <h2 className="font-display text-xl font-bold text-foreground mt-8 mb-4">
                Nossa Metodologia de Análise
              </h2>
              <p>
                Nossas análises são baseadas em:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Especificações técnicas dos fabricantes</li>
                <li>Avaliações de usuários reais</li>
                <li>Pesquisa de mercado sobre preços</li>
                <li>Experiência da nossa equipe técnica</li>
                <li>Comparativos com produtos similares</li>
              </ul>

              {/* Warning Box */}
              <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 my-8">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="font-display text-lg font-bold text-foreground mb-2">
                      Isenção de Responsabilidade
                    </h2>
                    <p className="text-muted-foreground text-sm mb-3">
                      O <strong>Peças para Trator</strong> NÃO é um vendedor de peças. Somos 
                      um site de conteúdo informativo. As compras são realizadas diretamente 
                      nas lojas parceiras (Mercado Livre e outros).
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Não nos responsabilizamos por questões relacionadas a entrega, 
                      qualidade, garantia ou devolução de produtos. Essas questões devem 
                      ser tratadas diretamente com o vendedor.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="font-display text-xl font-bold text-foreground mt-8 mb-4">
                Independência Editorial
              </h2>
              <p>
                Nossas análises e recomendações são independentes. A existência de links 
                de afiliados não influencia o conteúdo que publicamos. Recomendamos 
                produtos que acreditamos genuinamente oferecer bom custo-benefício para 
                nossos leitores.
              </p>

              <h2 className="font-display text-xl font-bold text-foreground mt-8 mb-4">
                Verificação de Compatibilidade
              </h2>
              <p>
                Antes de comprar qualquer peça, sempre verifique:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Compatibilidade com seu modelo específico de trator</li>
                <li>Número de peça original do fabricante</li>
                <li>Especificações técnicas no anúncio do vendedor</li>
                <li>Avaliações de outros compradores</li>
              </ul>

              <h2 className="font-display text-xl font-bold text-foreground mt-8 mb-4">
                Contato
              </h2>
              <p>
                Se você tiver dúvidas sobre nossa política de transparência ou sobre 
                qualquer conteúdo publicado, entre em contato conosco pelo email: 
                contato@pecasparatrator.com.br
              </p>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Transparencia;
