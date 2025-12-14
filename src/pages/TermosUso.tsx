import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const TermosUso = () => {
  return (
    <>
      <Helmet>
        <title>Termos de Uso | Peças para Trator</title>
        <meta 
          name="description" 
          content="Termos de Uso do Peças para Trator. Leia atentamente antes de utilizar nosso site." 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="py-12 md:py-16">
          <article className="container-narrow">
            <h1 className="section-title text-foreground mb-8">Termos de Uso</h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-sm text-muted-foreground mb-8">
                Última atualização: Dezembro de 2024
              </p>

              <h2 className="font-display text-xl font-bold text-foreground mt-8 mb-4">
                1. Aceitação dos Termos
              </h2>
              <p>
                Ao acessar e usar o site <strong>Peças para Trator</strong>, você concorda 
                em cumprir estes Termos de Uso. Se você não concordar com qualquer parte 
                destes termos, não deverá usar nosso site.
              </p>

              <h2 className="font-display text-xl font-bold text-foreground mt-8 mb-4">
                2. Natureza do Conteúdo
              </h2>
              <p>
                O <strong>Peças para Trator</strong> é um site de conteúdo informativo e 
                comparativo sobre peças para máquinas agrícolas. Não vendemos produtos 
                diretamente. Nosso objetivo é fornecer análises e comparativos para 
                auxiliar na decisão de compra.
              </p>

              <h2 className="font-display text-xl font-bold text-foreground mt-8 mb-4">
                3. Links de Afiliados
              </h2>
              <p>
                Este site utiliza links de afiliados. Isso significa que podemos receber 
                uma comissão quando você realiza uma compra através dos nossos links. 
                Isso não aumenta o preço para você e nos ajuda a manter o site funcionando.
              </p>

              <h2 className="font-display text-xl font-bold text-foreground mt-8 mb-4">
                4. Precisão das Informações
              </h2>
              <p>
                Nos esforçamos para fornecer informações precisas e atualizadas. No entanto:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Preços e disponibilidade podem mudar sem aviso prévio</li>
                <li>Especificações técnicas devem ser confirmadas com o vendedor</li>
                <li>Imagens são meramente ilustrativas</li>
              </ul>

              <h2 className="font-display text-xl font-bold text-foreground mt-8 mb-4">
                5. Isenção de Responsabilidade
              </h2>
              <p>
                O <strong>Peças para Trator</strong> não se responsabiliza por:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Transações realizadas em sites de terceiros</li>
                <li>Qualidade ou autenticidade de produtos vendidos por terceiros</li>
                <li>Danos decorrentes do uso incorreto de peças</li>
                <li>Incompatibilidade de peças com máquinas específicas</li>
              </ul>

              <h2 className="font-display text-xl font-bold text-foreground mt-8 mb-4">
                6. Propriedade Intelectual
              </h2>
              <p>
                Todo o conteúdo deste site, incluindo textos, imagens, logotipos e 
                design, é protegido por direitos autorais. A reprodução não autorizada 
                é proibida.
              </p>

              <h2 className="font-display text-xl font-bold text-foreground mt-8 mb-4">
                7. Uso Aceitável
              </h2>
              <p>
                Você concorda em não usar o site para:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Fins ilegais ou fraudulentos</li>
                <li>Copiar ou reproduzir conteúdo sem autorização</li>
                <li>Interferir no funcionamento do site</li>
                <li>Coletar dados de outros usuários</li>
              </ul>

              <h2 className="font-display text-xl font-bold text-foreground mt-8 mb-4">
                8. Alterações nos Termos
              </h2>
              <p>
                Reservamo-nos o direito de modificar estes Termos de Uso a qualquer 
                momento. Alterações entram em vigor imediatamente após publicação 
                no site.
              </p>

              <h2 className="font-display text-xl font-bold text-foreground mt-8 mb-4">
                9. Lei Aplicável
              </h2>
              <p>
                Estes Termos são regidos pelas leis da República Federativa do Brasil. 
                Qualquer disputa será resolvida no foro da comarca de São Paulo/SP.
              </p>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default TermosUso;
