import AboutUs from "@/components/blocks/about-us";
import AgencyHeroSection from "@/components/blocks/hero";
import Pricing from "@/components/blocks/pricing";
import Testimonial01 from "@/components/blocks/testimonial/testimonial";
import Footer from "@/components/blocks/footer/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertTriangle, BarChart3, Check, Package } from "lucide-react";

const features = [
  {
    tag: "01 · Precisão",
    title: "Controle de Estoque",
    description:
      "Rastreamento em tempo real de matérias-primas e insumos da sua indústria.",
    icon: Package,
    items: [
      "Entradas e saídas sincronizadas",
      "Gestão de saldo real por insumo",
      "Histórico de movimentações",
    ],
  },
  {
    tag: "02 · Visibilidade",
    title: "Alertas de Escassez",
    description:
      "Identifique previamente materiais em falta e evite paradas na produção.",
    icon: AlertTriangle,
    items: [
      "Avisos de estoque crítico",
      "Ponto de resuprimento automático",
      "Notificações preventivas",
    ],
  },
  {
    tag: "03 · Eficiência",
    title: "Indicadores (KPIs)",
    description:
      "Visualize dados e tome decisões mais rápidas e estratégicas para sua operação.",
    icon: BarChart3,
    items: [
      "Dashboards visuais e simples",
      "Relatórios automatizados",
      "Análise de giro e consumo",
    ],
  },
];

export default function Home() {
  return (
    <>
      <AgencyHeroSection />
      <AboutUs />

      <section className="py-20 px-4 max-w-7xl mx-auto">
        {/* Cabeçalho de Vendas / Benefícios */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-purple-700 bg-purple-100/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-purple-200/80 shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-600 animate-pulse" />
            Benefícios Exclusivos
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
            Tudo o que sua indústria precisa para crescer sem gargalos
          </h2>

          <p className="text-base md:text-lg text-muted-foreground font-normal leading-relaxed pt-1">
            Aumente a produtividade, elimine desperdícios e tenha total
            previsibilidade da sua cadeia de suprimentos em uma única
            plataforma.
          </p>
        </div>

        {/* Grid de Cards (3 Colunas em Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Card
                key={index}
                className="flex flex-col justify-between rounded-2xl border border-purple-100/80 bg-white p-6 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div>
                  <CardHeader className="p-0 gap-3">
                    <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">
                      {feature.tag}
                    </span>

                    <div className="flex items-center gap-3 pt-1">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-600 text-white shadow-xs">
                        <Icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground leading-tight">
                        {feature.title}
                      </CardTitle>
                    </div>

                    <CardDescription className="text-sm font-normal text-muted-foreground leading-relaxed pt-1">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>

                  {/* Divisória sutil */}
                  <div className="h-px w-full bg-purple-100/60 my-5" />

                  <CardContent className="p-0">
                    <ul className="space-y-3">
                      {feature.items.map((item, itemIdx) => (
                        <li
                          key={itemIdx}
                          className="flex items-center gap-2.5 text-sm font-normal text-foreground/80"
                        >
                          <Check className="h-4 w-4 text-purple-600 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>

                <CardFooter className="p-0 pt-6 mt-auto">
                  <Button className="w-full bg-purple-50 hover:bg-purple-100 text-purple-700 font-semibold text-sm h-11 rounded-xl border border-purple-100/80 shadow-none transition-colors">
                    Explorar Recurso
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>

      <Pricing />
      <Testimonial01 />
      <Footer/>
    </>
  );
}