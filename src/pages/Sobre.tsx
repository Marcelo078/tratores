import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Shield, Users, Award, Heart } from "lucide-react";
import heroImage from "@/assets/hero-tractors.jpg";

const Sobre = () => {
  return (
    <>
      <Helmet>
        <title>Sobre Nós | Peças para Trator - Quem Somos</title>
        <meta 
          name="description" 
          content="Conheça o Peças para Trator. Somos especialistas em análises de peças para tratores agrícolas. Nossa missão é ajudar produtores rurais a encontrar as melhores peças." 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero */}
          <section className="relative py-20 md:py-28">
            <div className="absolute inset-0">
              <img
                src={heroImage}
                alt="Tratores agrícolas - Peças para Trator"
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
            </div>
            
            <div className="relative container-narrow text-center">
              <h1 className="section-title text-foreground mb-6">
                Sobre o <strong>Peças para Trator</strong>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Somos apaixonados pelo agronegócio brasileiro e dedicados a ajudar 
                produtores rurais a encontrar as <strong>melhores peças</strong> para seus tratores.
              </p>
            </div>
          </section>

          {/* Mission */}
          <section className="py-12 md:py-16">
            <div className="container-narrow">
              <div className="prose prose-lg max-w-none">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Nossa Missão
                </h2>
                <p className="text-muted-foreground mb-6">
                  O <strong>Peças para Trator</strong> nasceu da necessidade de oferecer informações 
                  confiáveis e imparciais sobre peças para máquinas agrícolas. Sabemos que encontrar 
                  a peça certa, com qualidade garantida e preço justo, pode ser um desafio para 
                  produtores rurais de todo o Brasil.
                </p>
                <p className="text-muted-foreground mb-6">
                  Nossa equipe, liderada pelo revisor técnico <strong>Marcelo Barbosa</strong>, 
                  analisa minuciosamente cada produto, avaliando qualidade de fabricação, 
                  procedência, compatibilidade e custo-benefício.
                </p>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="py-12 md:py-16 bg-muted/50">
            <div className="container-wide">
              <h2 className="section-title text-center text-foreground mb-10">
                Nossos Valores
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-card rounded-xl p-6 text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">Qualidade</h3>
                  <p className="text-sm text-muted-foreground">
                    Analisamos rigorosamente cada peça antes de recomendar.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 text-center">
                  <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-7 h-7 text-secondary-foreground" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">Transparência</h3>
                  <p className="text-sm text-muted-foreground">
                    Informamos claramente sobre links de afiliados.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 text-center">
                  <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">Expertise</h3>
                  <p className="text-sm text-muted-foreground">
                    Anos de experiência no setor agrícola brasileiro.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">Compromisso</h3>
                  <p className="text-sm text-muted-foreground">
                    Dedicados ao sucesso do agronegócio brasileiro.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Team */}
          <section className="py-12 md:py-16">
            <div className="container-narrow">
              <h2 className="section-title text-center text-foreground mb-10">
                Nossa Equipe
              </h2>
              
              <div className="bg-card rounded-2xl p-8 md:p-10 text-center max-w-md mx-auto">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="font-display text-3xl font-bold text-primary-foreground">MB</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-2">Marcelo Barbosa</h3>
                <p className="text-muted-foreground mb-4">Revisor Técnico</p>
                <p className="text-sm text-muted-foreground">
                  Especialista em máquinas agrícolas com mais de 15 anos de experiência 
                  no setor. Responsável por todas as análises técnicas do site.
                </p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Sobre;
