"use client";
import { motion } from "framer-motion";

export default function MountainCard({ image, name, rate, height, className }) {
  return (
    <motion.div
      className={`relative rounded-lg overflow-hidden shadow-lg bg-cover bg-center ${className} animate-fade-in-up`}
      whileHover={{ scale: 0.9 }}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-950">
        {rate}
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        <h3 className="text-white text-lg font-semibold">{name}</h3>
        <p className="text-white text-sm">{height} mdpl</p>
      </div>
    </motion.div>
  );
}
