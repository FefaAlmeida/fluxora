"use client";

import { useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { motion, useInView } from "motion/react";
import { Quote } from "lucide-react";

const defaultTestimonials = [
  {
    quote:
      "A Fluxora transformou completamente a nossa gestão de estoque. Reduzimos as perdas por insumos parados em 40% no primeiro trimestre e eliminamos 100% dos erros de contagem manual na fábrica.",
    author: "Carlos Eduardo Santos",
    role: "Diretor de Operações na Metalúrgica Alfa",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
  },
  {
    quote:
      "Com a automação do ponto de ressuprimento da Fluxora, nossa equipe de compras nunca mais foi pega de surpresa. Evitamos paradas de linha que nos custavam dezenas de milhares de reais.",
    author: "Mariana Souza",
    role: "Gerente de Suprimentos na TechIndústrias",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Testimonial01({
  testimonials = defaultTestimonials,
}) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section ref={sectionRef} className="bg-background py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div>
          {/* Cabeçalho */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-col gap-3 relative z-10"
          >
            {/* Badge Padronizada */}
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-purple-700 bg-purple-100/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-purple-200/80 shadow-xs w-fit">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-600 animate-pulse" />
              Depoimentos
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              Histórias de Sucesso
            </h2>
          </motion.div>

          {/* Carrossel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="pt-10 sm:pt-14 pb-4 relative"
          >
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center bg-purple-50/40 rounded-3xl p-6 sm:p-10 lg:p-12 border border-purple-100/80">
                      
                      {/* Lado Esquerdo: Aspas e Texto */}
                      <div className="lg:col-span-7 col-span-12 flex flex-col gap-6 lg:pe-4">
                        <div className="shrink-0 flex items-start">
                          <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-purple-600/30 fill-purple-600/20 shrink-0" />
                        </div>

                        <div className="flex flex-col gap-8">
                          <p className="text-lg sm:text-2xl lg:text-3xl font-medium text-foreground leading-relaxed">
                            "{testimonial.quote}"
                          </p>

                          <div>
                            <p className="text-base sm:text-lg font-bold text-foreground">
                              {testimonial.author}
                            </p>
                            <p className="text-sm font-normal text-muted-foreground">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Lado Direito: Imagem */}
                      <div className="lg:col-span-5 col-span-12">
                        <div className="rounded-2xl overflow-hidden aspect-4/3 lg:aspect-square shadow-sm border border-purple-100">
                          <img
                            src={testimonial.image}
                            alt={testimonial.author}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>

                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Botões de Controle Estilizados */}
              <CarouselPrevious className="-top-12 sm:-top-16 left-auto right-12 size-9 border-purple-200 hover:bg-purple-100/80 hover:text-purple-700 text-purple-900 transition-all cursor-pointer shadow-xs" />
              <CarouselNext className="-top-12 sm:-top-16 right-0 size-9 border-purple-200 hover:bg-purple-100/80 hover:text-purple-700 text-purple-900 transition-all cursor-pointer shadow-xs" />
            </Carousel>
          </motion.div>
        </div>
      </div>
    </section>
  );
}