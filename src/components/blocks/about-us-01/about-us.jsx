"use client";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { Instrument_Serif } from "next/font/google";
import { useEffect, useRef } from "react";
import { motion, useSpring, useTransform, useInView } from "motion/react";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

const AnimatedCounter = ({ value, isInView }) => {
  const springValue = useSpring(0, {
    bounce: 0,
    duration: 2000,
  });

  const displayValue = useTransform(springValue, (current) =>
    Math.round(current)
  );

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  return <motion.span>{displayValue}</motion.span>;
};

const AboutUs = ({ aboutusData, statisticsCounter }) => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <section className="lg:py-20 sm:py-16 py-12 border-y border-purple-100/60 bg-gradient-to-b from-purple-50/30 to-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
        <div className="flex flex-col items-center justify-center gap-10 md:gap-16">
          
          {/* Cabeçalho da Secção */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="flex flex-col items-center justify-center gap-4 text-center max-w-4xl"
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-purple-600 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
              Sobre a Fluxora
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
              Tecnologia inteligente para transformar o controle de estoque em decisões mais eficientes
            </h2>

            <p className="text-base sm:text-lg font-normal text-muted-foreground leading-relaxed max-w-3xl pt-2">
              A Fluxora desenvolve soluções digitais para indústrias que buscam mais controle sobre seus estoques e processos. Nossa plataforma centraliza informações, identifica materiais em falta e transforma dados em indicadores que apoiam decisões mais rápidas e estratégicas.
            </p>

            {/* Badges de Destaque */}
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3 pt-4">
              {aboutusData.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-center gap-2.5 px-5 py-2 rounded-full border shadow-xs transition-transform hover:scale-105",
                    item.color
                  )}
                >
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span
                    className={cn(
                      "text-2xl sm:text-3xl font-normal leading-none",
                      instrumentSerif.className
                    )}
                  >
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Métricas / Estatísticas */}
          <div
            ref={statsRef}
            className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 pt-6"
          >
            {statisticsCounter?.map((value, index) => {
              return (
                <div
                  key={index}
                  className="relative px-6 py-6 sm:py-8 gap-2 flex flex-col items-center justify-center text-center"
                >
                  {index !== 0 && (
                    <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-28 bg-purple-200/60" />
                  )}
                  
                  {/* Número com fonte Serifada/Heading em Negrito */}
                  <div className="flex items-center gap-1 text-5xl sm:text-6xl lg:text-7xl font-bold font-heading text-foreground">
                    <Plus
                      strokeWidth={3}
                      className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-purple-600 shrink-0"
                    />
                    <AnimatedCounter
                      value={value.count}
                      isInView={isInView}
                    />
                    {value.suffix && <span>{value.suffix}</span>}
                  </div>

                  <p className="text-sm sm:text-base font-semibold text-muted-foreground uppercase tracking-wider">
                    {value.title}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;