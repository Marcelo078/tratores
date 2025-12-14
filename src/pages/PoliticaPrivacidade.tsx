import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const PoliticaPrivacidade = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidade | Peças para Trator</title>
        <meta 
          name="description" 
          content="Política de Privacidade do Peças para Trator. Saiba como tratamos seus dados pessoais." 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="py-12 md:py-16">
          <article className="container-narrow">
            <h1 className="section-title text-foreground mb-8">Política de Privacidade</h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-sm text-muted-foreground mb-8">
                Última atualização: Dezembro de 2024
              </p>

              <h2 className="font-display text-xl font-bold text-foreground mt-8 mb-4">
                1. Informações que Coletamos
              </h2>
              <p>
                O <strong>Peças para Trator</strong> coleta informações limitadas para melhorar 
                sua experiência de navegação. Estas incluem:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Dados de navegação (páginas visitadas, tempo de permanência)</li>
                <li>Informações do dispositivo (tipo de navegador, sistema operacional)</li>
                <li>Endereço IP para fins de análise geográfica</li>
              </ul>

              <h2 className="font-display text-xl font-bold text-foreground mt-8 mb-4">
                2. Uso das Informações
              </h2>
              <p>
                Utilizamos as informações coletadas para:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Melhorar o conteúdo e a experiência do site</li>
                <li>Analisar o desempenho das páginas</li>
                <li>Personalizar recomendações de produtos</li>
              </ul>

              <h2 className="font-display text-xl font-bold text-foreground mt-8 mb-4">
                3. Cookies
              </h2>
              <p>
                Utilizamos cookies para melhorar sua experiência. Você pode desativar 
                os cookies nas configurações do seu navegador, mas isso pode afetar 
                algumas funcionalidades do site.
              </p>

              <h2 className="font-display text-xl font-bold text-foreground mt-8 mb-4">
                4. Links de Afiliados
              </h2>
              <p>
                Este site contém links de afiliados para o Mercado Livre e outras 
                plataformas. Quando você clica nesses links e realiza uma compra, 
                podemos receber uma comissão. Isso não afeta o preço que você paga.
              </p>

              <h2 className="font-display text-xl font-bold text-foreground mt-8 mb-4">
                5. Compartilhamento de Dados
              </h2>
              <p>
                Não vendemos, alugamos ou compartilhamos suas informações pessoais 
                com terceiros, exceto quando exigido por lei ou com seu consentimento 
                explícito.
              </p>

              <h2 className="font-display text-xl font-bold text-foreground mt-8 mb-4">
                6. Segurança
              </h2>
              <p>
                Implementamos medidas de segurança para proteger suas informações 
                contra acesso não autorizado, alteração ou destruição.
              </p>

              <h2 className="font-display text-xl font-bold text-foreground mt-8 mb-4">
                7. Seus Direitos
              </h2>
              <p>
                De acordo com a LGPD (Lei Geral de Proteção de Dados), você tem direito a:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Acessar seus dados pessoais</li>
                <li>Solicitar correção de dados incorretos</li>
                <li>Solicitar a exclusão de seus dados</li>
                <li>Revogar seu consentimento a qualquer momento</li>
              </ul>

              <h2 className="font-display text-xl font-bold text-foreground mt-8 mb-4">
                8. Contato
              </h2>
              <p>
                Para dúvidas sobre esta política ou para exercer seus direitos, 
                entre em contato conosco através do email: contato@pecasparatrator.com.br
              </p>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PoliticaPrivacidade;
