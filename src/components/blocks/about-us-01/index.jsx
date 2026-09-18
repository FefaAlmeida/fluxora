"use client";
import AboutUs from "@/components/blocks/about-us-01/about-us";
import { Target, WandSparkles, Zap } from "lucide-react";

const aboutusData = [
  {
    icon: WandSparkles,
    title: "Precisão",
    color: "bg-blue-50/80 text-blue-600 border-blue-200/60"
  },
  {
    icon: Zap,
    title: "Visibilidade",
    color: "bg-teal-50/80 text-teal-600 border-teal-200/60" 
  },
  {
    icon: Target,
    title: "Eficiência",
    color: "bg-purple-50/80 text-purple-600 border-purple-200/60" 
  }
];

const statisticsCounter = [
  {
    title: "Indústrias Atendidas",
    count: 50,
  },
  {
    title: "Itens Mapeados",
    count: 150,
    suffix: "k"
  },
  {
    title: "Redução de Gargalos",
    count: 35,
    suffix: "%"
  },
];

const AboutAndStats01 = () => {
  return (
    <>
      <AboutUs aboutusData={aboutusData} statisticsCounter={statisticsCounter} />
    </>
  );
};

export default AboutAndStats01;