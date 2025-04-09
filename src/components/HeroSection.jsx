"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/product.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 flex items-center justify-center h-full px-4 text-center">
        <div>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Gapai Horizon
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl md:text-3xl font-light text-white"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            Dengan Produk Montainesia
          </motion.p>
        </div>
      </div>
    </section>
  );
}
