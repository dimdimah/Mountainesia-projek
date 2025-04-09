"use client";

import React from "react";
import destinations from "@/data/destinations";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";

export default function DetailPage({ params }) {
  const router = useRouter();
  const destination = destinations.find((d) => d.slug === params.slug);

  if (!destination) return notFound();

  const { name, image, location, price, details } = destination;

  return (
    <section className="px-6 py-16 sm:px-12 lg:px-20 bg-white min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <button
          onClick={() => router.back()}
          className="mb-8 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium"
        >
          ← Kembali
        </button>

        <h1 className="text-4xl font-bold text-gray-800 mb-2">{name}</h1>
        <p className="text-gray-600 mb-6">{location} • Rp{price}</p>

        <div className="relative w-full h-72 sm:h-[400px] mb-8 rounded-xl overflow-hidden shadow-lg">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>

        <p className="text-lg text-gray-700 mb-6">{details.description}</p>

        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          <div>
            <h2 className="text-xl font-semibold text-orange-500 mb-2">Yang Harus Dilakukan</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {details.do.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-red-500 mb-2">Yang Tidak Boleh Dilakukan</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {details.dont.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-blue-500 mb-2">Tips Pendakian</h2>
          <p className="text-gray-700">{details.tips}</p>
        </div>

        <div className="bg-orange-100 p-6 rounded-xl shadow-md flex items-center gap-6">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
            <Image
              src={`/img/guide/${destination.slug}.jpg`} // Tambahkan gambar sesuai slug
              alt={details.guide.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800">{details.guide.name}</h3>
            <p className="text-gray-700 text-sm">Kontak: {details.guide.contact}</p>
            <p className="text-gray-700 text-sm">Tarif: {details.guide.rate}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
