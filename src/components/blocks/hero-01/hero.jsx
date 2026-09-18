"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import {
 ArrowRight,
 TrendingUp,
 Zap,
 Activity,
 MousePointerClick,
} from "lucide-react";

function HeroSection({ avatarList }) {
 return (
  <section className="relative w-full overflow-hidden bg-background pt-16 pb-24 md:pt-28 md:pb-36">
   {/* Fundo sutil */}
   <div className="absolute inset-0 -z-20 bg-background" />

   <div className="pointer-events-none absolute left-1/2 top-[-180px] -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-purple-500/5 blur-[160px]" />

   <div className="container relative z-10 mx-auto max-w-7xl px-6">
    <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
     {/* LEFT */}
     <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
       duration: 0.6,
       ease: "easeOut",
      }}
      className="flex max-w-2xl flex-col items-start text-left lg:col-span-6"
     >
      {/* Headline */}
      <h1 className="text-5xl font-extrabold leading-[1.04] tracking-[-0.045em] text-foreground sm:text-6xl lg:text-7xl">
       Crie experiências interativas{" "}
       <span className="bg-[linear-gradient(110deg,#A78BFA_0%,#8B5CF6_30%,#7C3AED_55%,#6D28D9_80%,#5B21B6_100%)] bg-clip-text text-transparent">
        que vendem, ativam e engajam.
       </span>
      </h1>

      {/* Copy original */}
      <p className="mt-7 max-w-xl text-lg font-normal leading-relaxed text-muted-foreground">
       Transformamos a presença digital da sua empresa criando sites de alta
       performance, landing pages imersivas e plataformas web sob medida.
      </p>

      {/* CTA + Social proof */}
      <div className="mt-9 flex w-full flex-col items-start gap-6 sm:flex-row sm:items-center">
       <Button className="group relative h-13 rounded-lg px-7 text-sm font-semibold overflow-hidden bg-foreground text-background hover:bg-foreground  cursor-pointer">
        {/* Camada do gradiente que aparece no hover */}
        <span
         aria-hidden
         className="absolute inset-0 bg-[linear-gradient(110deg,#A78BFA_0%,#8B5CF6_30%,#7C3AED_55%,#6D28D9_80%,#5B21B6_100%)] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
        />
        <span className="relative z-10 flex items-center">
         Iniciar um projeto
         <ArrowRight
          size={17}
          className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
         />
        </span>
       </Button>

       {avatarList?.length > 0 && (
        <div className="flex items-center gap-3">
         <div className="flex -space-x-2">
          {avatarList.slice(0, 4).map((avatar, index) => (
           <img
            key={index}
            src={avatar.image}
            alt="Cliente Fluxora"
            className="h-8 w-8 rounded-full border-2 border-background object-cover"
           />
          ))}
         </div>

         <div className="flex flex-col">
          <span className="text-sm font-medium leading-none text-foreground">
           150+ Projetos
          </span>

          <span className="mt-1 text-xs text-muted-foreground">
           entregues com excelência
          </span>
         </div>
        </div>
       )}
      </div>
     </motion.div>

     {/* RIGHT */}
     <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
       duration: 0.8,
       delay: 0.12,
       ease: "easeOut",
      }}
      className="relative w-full lg:col-span-6"
     >
      {/* Glow atrás do card */}
      <div className="pointer-events-none absolute inset-x-16 top-10 -z-10 h-64 rounded-full bg-purple-500/10 blur-[100px]" />

      <div className="relative overflow-hidden rounded-[30px] border border-border/70 bg-background/90 p-7 shadow-[0_28px_80px_-42px_rgba(76,29,149,0.28)] backdrop-blur-sm sm:p-9">
       {/* Glow interno */}
       <div className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-purple-500/10 blur-[100px]" />

       {/* Header */}
       <div className="relative z-10 flex items-start justify-between gap-6">
        <div>
         <h2 className="text-sm font-semibold text-foreground">
          Impacto em Performance
         </h2>

         <p className="mt-1 text-sm text-muted-foreground">
          Métricas médias de projetos convertidos
         </p>
        </div>

        <div className="shrink-0 text-right">
         <div className="flex items-center justify-end gap-1.5">
          <TrendingUp size={15} className="text-emerald-500" />

          <span className="text-2xl font-semibold tracking-[-0.03em] text-foreground">
           +148%
          </span>
         </div>

         <span className="mt-1 block text-xs text-muted-foreground">
          ROI médio
         </span>
        </div>
       </div>

       {/* Chart */}
       <div className="relative mt-12 h-[230px] w-full">
        {/* Floating info */}
        <div className="absolute right-[3%] top-0 z-20">
         <div className="flex items-center rounded-full border border-purple-500/15 bg-background/90 px-3 py-1.5 shadow-sm backdrop-blur-md">
          <span className="text-xs text-muted-foreground">Conversão</span>

          <span className="ml-2 text-sm font-semibold text-foreground">
           4.8×
          </span>
         </div>
        </div>

        <svg
         className="h-full w-full overflow-visible"
         viewBox="0 0 400 150"
         preserveAspectRatio="none"
        >
         <defs>
          {/* Area gradient */}
          <linearGradient id="performanceArea" x1="0" y1="0" x2="0" y2="1">
           <stop offset="0%" stopColor="#D946EF" stopOpacity="0.22" />

           <stop offset="35%" stopColor="#A855F7" stopOpacity="0.15" />

           <stop offset="70%" stopColor="#8B5CF6" stopOpacity="0.07" />

           <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
          </linearGradient>

          {/* Line gradient */}
          <linearGradient id="performanceLine" x1="0" y1="0" x2="1" y2="0">
           <stop offset="0%" stopColor="#7C3AED" />

           <stop offset="30%" stopColor="#A855F7" />

           <stop offset="55%" stopColor="#D946EF" />

           <stop offset="78%" stopColor="#8B5CF6" />

           <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="lineGlow" x="-20%" y="-20%" width="140%" height="140%">
           <feGaussianBlur stdDeviation="3" result="blur" />

           <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
           </feMerge>
          </filter>
         </defs>

         {/* Grid horizontal extremamente sutil */}
         <line
          x1="0"
          y1="125"
          x2="400"
          y2="125"
          stroke="currentColor"
          className="text-border/60"
         />

         <line
          x1="0"
          y1="80"
          x2="400"
          y2="80"
          stroke="currentColor"
          className="text-border/25"
          strokeDasharray="4 6"
         />

         {/* Filled area */}
         <path
          d="
                      M 0 118
                      C 38 117, 63 103, 101 105
                      C 140 107, 165 89, 201 83
                      C 238 77, 257 58, 289 55
                      C 323 51, 348 29, 400 20
                      L 400 150
                      L 0 150
                      Z
                    "
          fill="url(#performanceArea)"
         />

         {/* Glow line */}
         <path
          d="
                      M 0 118
                      C 38 117, 63 103, 101 105
                      C 140 107, 165 89, 201 83
                      C 238 77, 257 58, 289 55
                      C 323 51, 348 29, 400 20
                    "
          fill="none"
          stroke="url(#performanceLine)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeOpacity="0.14"
          filter="url(#lineGlow)"
         />

         {/* Main line */}
         <path
          d="
                      M 0 118
                      C 38 117, 63 103, 101 105
                      C 140 107, 165 89, 201 83
                      C 238 77, 257 58, 289 55
                      C 323 51, 348 29, 400 20
                    "
          fill="none"
          stroke="url(#performanceLine)"
          strokeWidth="3"
          strokeLinecap="round"
         />

         {/* Last point */}
         <circle cx="400" cy="20" r="4" fill="#A855F7" />

         <circle cx="400" cy="20" r="10" fill="#A855F7" fillOpacity="0.12" />
        </svg>
       </div>

       {/* Metrics */}
       <div className="relative z-10 mt-5 grid grid-cols-3 border-t border-border/60 pt-6">
        {/* Lighthouse */}
        <div className="pr-5">
         <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Zap size={13} className="text-purple-500" />

          <span>Lighthouse</span>
         </div>

         <div className="mt-2 flex items-baseline">
          <span className="text-2xl font-semibold tracking-[-0.03em] text-foreground">
           100
          </span>

          <span className="ml-1 text-xs text-muted-foreground">/100</span>
         </div>
        </div>

        {/* Clicks */}
        <div className="border-l border-border/60 px-5">
         <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <MousePointerClick size={13} className="text-purple-500" />

          <span>Cliques</span>
         </div>

         <div className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-foreground">
          +42%
         </div>
        </div>

        {/* Loading */}
        <div className="border-l border-border/60 pl-5">
         <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Activity size={13} className="text-purple-500" />

          <span>Loading</span>
         </div>

         <div className="mt-2 flex items-baseline">
          <span className="text-2xl font-semibold tracking-[-0.03em] text-foreground">
           0.3
          </span>

          <span className="ml-0.5 text-sm text-muted-foreground">s</span>
         </div>
        </div>
       </div>
      </div>
     </motion.div>
    </div>
   </div>
  </section>
 );
}

export default HeroSection;
