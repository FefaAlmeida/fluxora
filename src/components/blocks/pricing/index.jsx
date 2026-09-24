"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Check, Flame } from "lucide-react";
import { motion } from "motion/react";

const pricingData = [
  {
    plan_name: "Essencial",
    plan_descp:
      "Ideal para indústrias que buscam organizar o estoque básico e eliminar erros manuais.",
    plan_price: "2.500",
    plan_feature: [
      "Até 1.000 itens e insumos mapeados",
      "Entradas e saídas sincronizadas",
      "Relatórios básicos de movimentação",
      "Licença para até 3 usuários",
      "Suporte por e-mail e documentação",
    ],
    plan_recommended: false,
  },
  {
    plan_name: "Pro",
    plan_descp:
      "A solução completa para média escala com automação de compras e inteligência de dados.",
    plan_price: "3.800",
    plan_feature: [
      "Itens e insumos ilimitados",
      "Alertas de estoque crítico em tempo real",
      "Ponto de ressuprimento automático",
      "Dashboards e indicadores de KPIs",
      "Até 10 usuários com níveis de acesso",
      "Suporte prioritário via canal dedicado",
    ],
    plan_recommended: true,
  },
  {
    plan_name: "Enterprise",
    plan_descp:
      "Para grandes plantas industriais com necessidade de integração ERP customizada e SLA garantido.",
    plan_price: "5.000",
    plan_feature: [
      "Tudo incluído no plano Pro",
      "Usuários e acessos ilimitados",
      "Integração direta com ERPs (SAP, TOTVS)",
      "Gerente de conta e implantação dedicada",
      "SLA de atendimento garantido em contrato",
    ],
    plan_recommended: false,
  },
];

const Pricing = () => {
  const pricingCardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.15,
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    }),
  };

  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex flex-col gap-12 md:gap-16 items-center justify-center w-full">
          
          {/* Cabeçalho */}
          <div className="flex flex-col gap-4 justify-center items-center text-center max-w-3xl">
            {/* Badge Padronizada */}
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-purple-700 bg-purple-100/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-purple-200/80 shadow-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-600 animate-pulse" />
              Planos e Investimento
            </span>

            {/* Título Principal */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
              Escolha o plano ideal para a sua indústria
            </h2>

            {/* Subtítulo Sem Negrito */}
            <p className="text-base sm:text-lg font-normal text-muted-foreground leading-relaxed">
              Escale sua operação com eficiência, previsibilidade e total controle de estoque em uma única plataforma.
            </p>
          </div>

          {/* Cards de Preço */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch w-full">
            {pricingData.map((plan, index) => {
              const isFeatured = plan.plan_recommended;

              return (
                <motion.div
                  key={index}
                  variants={pricingCardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                  className={cn(
                    "relative flex flex-col w-full rounded-2xl",
                    isFeatured && "lg:-translate-y-2 z-10"
                  )}
                >
                  {/* BORDA ANIMADA EM ROXO (CARD RECOMENDADO) */}
                  {isFeatured && (
                    <div className="absolute -inset-0.5 rounded-2xl overflow-hidden">
                      <div className="absolute -inset-full blur-xs animate-spin [animation-duration:3s] bg-conic from-purple-600 via-indigo-500 to-fuchsia-500" />
                      <div className="absolute inset-0.5 rounded-2xl bg-card" />
                    </div>
                  )}

                  {/* ESTRUTURA DO CARD */}
                  <Card
                    className={cn(
                      "relative flex-1 flex flex-col justify-between rounded-2xl p-6 sm:p-8 gap-6 border bg-white shadow-xs hover:shadow-md transition-all duration-300",
                      isFeatured ? "border-transparent ring-0" : "border-purple-100/80"
                    )}
                  >
                    <div>
                      {/* Topo do Card */}
                      <CardHeader className="p-0 gap-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-2xl font-bold text-foreground">
                            {plan.plan_name}
                          </CardTitle>
                          {isFeatured && (
                            <Badge className="py-1 px-3 text-xs font-semibold bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center gap-1.5 shadow-xs border-none">
                              <Flame className="w-3.5 h-3.5 fill-current" /> Recomendado
                            </Badge>
                          )}
                        </div>
                        <CardDescription className="text-sm font-normal text-muted-foreground leading-relaxed">
                          {plan.plan_descp}
                        </CardDescription>
                      </CardHeader>

                      {/* Preço */}
                      <div className="flex items-baseline gap-1 my-6">
                        <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider self-start mt-2">
                          R$
                        </span>
                        <span className="text-foreground text-4xl sm:text-5xl font-bold tracking-tight">
                          {plan.plan_price}
                        </span>
                        <span className="text-muted-foreground text-sm font-normal">
                          /mês
                        </span>
                      </div>

                      <Separator className="bg-purple-100/60 mb-6" />

                      {/* Lista de Features sem negrito */}
                      <CardContent className="p-0">
                        <ul className="flex flex-col gap-3.5">
                          {plan.plan_feature.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-sm font-normal text-foreground/80 leading-snug"
                            >
                              <Check className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </div>

                    {/* Botão de Ação */}
                    <div className="pt-6 mt-auto">
                      <Button
                        className={cn(
                          "w-full h-11 text-sm font-semibold rounded-xl transition-all cursor-pointer shadow-xs",
                          isFeatured
                            ? "bg-purple-600 hover:bg-purple-700 text-white"
                            : "bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-100/80"
                        )}
                      >
                        Começar com {plan.plan_name}
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;