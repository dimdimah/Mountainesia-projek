"use client";

import { motion } from "framer-motion";

export default function ProductCard({ title, desc, price, img, index, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
    >
      <img
        src={img}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-4">
        <button className="bg-white text-orange-500 font-semibold px-4 py-2 rounded shadow hover:bg-orange-100 transition">
          Add to cart
        </button>
        <div className="flex items-center gap-6 text-white">
          <button className="flex items-center gap-1 text-sm hover:text-orange-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 12v1a8 8 0 008 8h0a8 8 0 008-8v-1" /><polyline points="16 12 12 8 8 12" /></svg>
            Share
          </button>
          <button className="flex items-center gap-1 text-sm hover:text-orange-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 01-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>
            Like
          </button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-md font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{desc}</p>
        <p className="text-md font-bold text-gray-800">{price}</p>
      </div>
    </motion.div>
  );
}
