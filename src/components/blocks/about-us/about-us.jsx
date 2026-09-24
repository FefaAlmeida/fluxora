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
    <section className="relative overflow-hidden lg:py-24 sm:py-20 py-16 bg-background border-y border-purple-100/60">
      
      {/* 1. Padrão de Pontos Tecnológico (Dot Grid Pattern) */}
      <div 
        className="pointer-events-none absolute inset-0 -z-20 opacity-40 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        style={{
          backgroundImage: `radial-gradient(rgba(147, 51, 234, 0.25) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* 2. Efeito Ambient Glow (Gradients sutis de luz no fundo) */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute right-10 top-10 -z-10 h-72 w-72 rounded-full bg-indigo-500/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
        <div className="flex flex-col items-center justify-center gap-12 md:gap-16">
          
          {/* Cabeçalho da Secção */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="flex flex-col items-center justify-center gap-5 text-center max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-purple-700 bg-purple-100/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-purple-200/80 shadow-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-600 animate-pulse" />
              Sobre a Fluxora
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
              Tecnologia inteligente para transformar o controle de estoque em decisões mais eficientes
            </h2>

            <p className="text-base sm:text-lg font-normal text-muted-foreground leading-relaxed max-w-3xl pt-1">
              A Fluxora desenvolve soluções digitais para indústrias que buscam mais controle sobre seus estoques e processos. Nossa plataforma centraliza informações, identifica materiais em falta e transforma dados em indicadores que apoiam decisões mais rápidas e estratégicas.
            </p>

            {/* Badges de Destaque */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              {aboutusData?.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-center gap-2.5 px-5 py-2.5 rounded-full border shadow-xs transition-all duration-300 hover:scale-105 hover:shadow-md backdrop-blur-xs",
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

          {/* 3. Painel Bento Box / Glassmorphism para Estatísticas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            ref={statsRef}
            className="w-full max-w-5xl rounded-3xl border border-purple-100/80 bg-background/60 p-2 shadow-[0_20px_50px_-20px_rgba(126,34,206,0.12)] backdrop-blur-md"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-purple-100/70 rounded-2xl bg-gradient-to-b from-purple-50/40 to-transparent p-4 sm:p-6">
              {statisticsCounter?.map((value, index) => (
                <div
                  key={index}
                  className="group relative px-6 py-6 sm:py-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-purple-50/50 rounded-xl"
                >
                  {/* Número de Métrica */}
                  <div className="flex items-center gap-1 text-5xl sm:text-6xl lg:text-7xl font-bold font-heading text-foreground transition-transform group-hover:scale-105 duration-300">
                    <Plus
                      strokeWidth={3}
                      className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-purple-600 shrink-0"
                    />
                    <AnimatedCounter
                      value={value.count}
                      isInView={isInView}
                    />
                    {value.suffix && <span>{value.suffix}</span>}
                  </div>

                  <p className="mt-2 text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    {value.title}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;