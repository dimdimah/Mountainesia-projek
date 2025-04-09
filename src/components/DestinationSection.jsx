"use client";

import { useState } from "react";
import destinations from "@/data/destinations";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const islands = ["Semua", "Jawa", "Nusa Tenggara", "Sumatera", "Sulawesi", "Papua"];

export default function DestinationSection() {
  const [selectedIsland, setSelectedIsland] = useState("Semua");

  const filtered = selectedIsland === "Semua"
    ? destinations
    : destinations.filter((d) => d.island === selectedIsland);

  return (
    <section className="py-16 px-6 sm:px-12 lg:px-20 bg-[#f5f8f4]">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-orange-600">Top Destination</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Eksplor Destinasi Gunung
          </h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {islands.map((island) => (
            <button
              key={island}
              onClick={() => setSelectedIsland(island)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
                selectedIsland === island
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white text-orange-500 border-orange-300 hover:bg-orange-50"
              }`}
            >
              {island}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((dest, index) => (
          <motion.div
            key={dest.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative w-full h-52">
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                className="object-cover"
              />
              <div className="absolute top-3 right-3 bg-white rounded-full px-3 py-1 text-sm font-semibold text-orange-500 shadow">
                ★ 5.0
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900">{dest.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{dest.desc}</p>
              <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-gray-700">
                  <p>{dest.location}</p>
                  <p className="font-bold text-black">Rp{dest.price}</p>
                </div>
                <Link href={`/hiking/${dest.slug}`}>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition">
                    Lihat Detail
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="bg-orange-100 text-orange-500 hover:bg-orange-200 px-6 py-3 rounded-full font-semibold text-sm transition">
          Lihat Semua
        </button>
      </div>
    </section>
  );
}
