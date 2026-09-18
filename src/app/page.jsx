import AboutUs from "@/components/blocks/about-us-01";
import AgencyHeroSection from "@/components/blocks/hero-01";
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
    description: "Rastreamento em tempo real de matérias-primas e insumos da sua indústria.",
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
    description: "Identifique previamente materiais em falta e evite paradas na produção.",
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
    description: "Visualize dados e tome decisões mais rápidas e estratégicas para sua operação.",
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

      <section className="py-16 px-4 max-w-6xl mx-auto">
        {/* Cabeçalho de Vendas / Benefícios */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-purple-600 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
            Benefícios Exclusivos
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Tudo o que sua indústria precisa para crescer sem gargalos
          </h2>
          <p className="text-base md:text-lg text-zinc-600 font-serif font-bold">
            Aumente a produtividade, elimine desperdícios e tenha total previsibilidade da sua cadeia de suprimentos em uma única plataforma.
          </p>
        </div>

        {/* Grid Lado a Lado (3 Colunas em Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Card
                key={index}
                className="flex flex-col justify-between border border-purple-100 bg-white shadow-sm hover:shadow-md transition-all p-2"
              >
                <CardHeader className="gap-3">
                  <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">
                    {feature.tag}
                  </span>

                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-600 text-white shadow-sm">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-bold text-zinc-900 leading-tight">
                      {feature.title}
                    </CardTitle>
                  </div>

                  <CardDescription className="text-sm text-zinc-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="border-t border-purple-50 pt-4 my-2">
                  <ul className="space-y-3">
                    {feature.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2.5 text-sm font-bold text-zinc-700 font-serif">
                        <Check className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="bg-transparent border-t-0 pt-0">
                  <Button className="w-full bg-purple-100 hover:bg-purple-200 text-purple-700 font-semibold text-sm h-10 rounded-xl border-none shadow-none">
                    Explorar Recurso
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
}