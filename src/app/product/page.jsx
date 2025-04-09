"use client";

import { useState, useRef } from "react";
import { useInView } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import PromoSection from "@/components/PromoSection";
import InstagramFeed from "@/components/InstagramFeed";
import Footer from "@/components/Footer";


const allProducts = [
  {
    title: "Tenda Dome X1",
    desc: "Tenda hiking 2 orang",
    price: "Rp 1.500.000",
    img: "https://source.unsplash.com/400x400/?tent",
    category: "tenda",
  },
  {
    title: "Carrier Ultralight",
    desc: "Tas carrier 60L ringan",
    price: "Rp 850.000",
    img: "https://source.unsplash.com/400x400/?backpack,hiking",
    category: "tas",
  },
  {
    title: "Headlamp Pro",
    desc: "Lampu kepala tahan air",
    price: "Rp 300.000",
    img: "https://source.unsplash.com/400x400/?headlamp",
    category: "lampu",
  },
  {
    title: "Matras Lipat",
    desc: "Matras hiking anti slip",
    price: "Rp 220.000",
    img: "https://source.unsplash.com/400x400/?mat,hiking",
    category: "aksesoris",
  },
  {
    title: "Tenda 4 Musim",
    desc: "Tahan badai dan hujan salju",
    price: "Rp 2.500.000",
    img: "https://source.unsplash.com/400x400/?tent,mountain",
    category: "tenda",
  },
  {
    title: "Carrier Expedition",
    desc: "Tas hiking ekspedisi 75L",
    price: "Rp 1.250.000",
    img: "https://source.unsplash.com/400x400/?hiking,bag",
    category: "tas",
  },
  {
    title: "Senter Mini",
    desc: "Senter hiking LED ultra terang",
    price: "Rp 180.000",
    img: "https://source.unsplash.com/400x400/?flashlight",
    category: "lampu",
  },
  {
    title: "Raincoat Hiking",
    desc: "Jas hujan ringan dan compact",
    price: "Rp 170.000",
    img: "https://source.unsplash.com/400x400/?raincoat,hiking",
    category: "aksesoris",
  },
];

export default function ProductPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [visibleCount, setVisibleCount] = useState(4);

  const filteredProducts = allProducts
    .filter((p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((p) =>
      selectedCategory ? p.category === selectedCategory : true
    );

  return (
    <>
  
      <HeroSection />
      <FeatureSection />

      <section className="min-h-screen bg-gray-100 px-6 py-16" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Produk Hiking
          </h2>

          {/* Filter & Search */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
            <input
              type="text"
              placeholder="Cari produk hiking..."
              className="px-4 py-2 border border-gray-300 rounded-md w-full sm:w-1/2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="px-4 py-2 border border-gray-300 rounded-md"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Semua Kategori</option>
              <option value="tenda">Tenda</option>
              <option value="tas">Tas Carrier</option>
              <option value="lampu">Lampu</option>
              <option value="aksesoris">Aksesoris</option>
            </select>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.slice(0, visibleCount).map((product, i) => (
              <ProductCard
                key={i}
                {...product}
                index={i}
                isInView={isInView}
              />
            ))}
          </div>

          {/* Load More */}
          {visibleCount < filteredProducts.length && (
            <div className="text-center mt-10">
              <button
                onClick={() => setVisibleCount(visibleCount + 4)}
                className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
              >
                Lihat Produk Lainnya
              </button>
            </div>
          )}
        </div>
      </section>
      <PromoSection />
      <InstagramFeed />

    </>
  );
}
