"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PromoSection() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="/promo-hiking.jpg" // Ganti dengan image statis lokal atau pakai img URL langsung
            alt="Promo Hiking Gear"
            width={600}
            height={400}
            className="rounded-xl shadow-lg object-cover w-full h-full"
          />
        </motion.div>

        {/* Right: Text content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold text-orange-500 mb-2">
            SALE UP TO 35% OFF
          </p>
          <h2 className="text-3xl font-bold text-gray-900 leading-snug mb-4">
            Gear Up for Your Next <span className="text-orange-500">Adventure!</span>
          </h2>
          <p className="text-gray-600 mb-6">
            Explore exclusive discounts on top-rated hiking equipment. Get ready to conquer the outdoors with confidence and style!
          </p>
          <a
            href="/products"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Shop Now →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
