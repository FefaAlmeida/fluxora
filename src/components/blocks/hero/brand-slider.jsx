"use client";

import { Marquee } from "@/components/blocks/animations/marquee";
import { motion } from "motion/react";

function BrandSlider({ brandList }) {
  return (
    <section className="w-full overflow-hidden py-2">
      <motion.div 
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
        className="flex flex-col gap-4"
      >
        {/* Título centralizado com limite de largura */}
        <div className="mx-auto max-w-6xl px-4 flex justify-center text-center relative">
          <div className="flex items-center justify-center">
            <div className="hidden md:block h-0.5 w-40 bg-linear-to-l from-muted-foreground to-white dark:from-muted-foreground dark:to-transparent opacity-20" />
            <p className="text-sm font-normal sm:px-2 px-10 text-muted-foreground text-center">
              Loved by 1000+ big and small brands around the worlds
            </p>
            <div className="hidden md:block h-0.5 w-40 bg-linear-to-r from-muted-foreground to-white dark:from-muted-foreground dark:to-transparent opacity-20" />
          </div>
        </div>

        {/* Carrossel 100% largura de ponta a ponta */}
        {brandList && brandList.length > 0 && (
          <div className="w-full overflow-hidden">
            <Marquee pauseOnHover className="[--duration:20s] p-0 w-full">
              {brandList.map((brand, index) => (
                <div key={index}>
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-36 h-8 mr-6 lg:mr-20 dark:hidden"
                  />
                  <img
                    src={brand.lightimg}
                    alt={brand.name}
                    className="hidden dark:block w-36 h-8 mr-12 lg:mr-20"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        )}
      </motion.div>
    </section>
  );
}

export default BrandSlider;