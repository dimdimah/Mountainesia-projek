"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import aboutDatas from "@/data/about";
import ChooseSection from "./sectionChosen";
import HeroSection from "@/components/Jumbotron";

export default function Home() {
  const { reasons } = aboutDatas;
  const heroData = {
    image: "/assets/about.png",
    name: "Menggapai Horizon",
    desc: "Menghidupi Jiwa",
    titledesc: "",
  };

  return (
    <>
      <HeroSection titleData={heroData} />

      {/* section 1 */}
      <div className="h-96 bg-white py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-gray-950 text-center flex flex-col py-10 justify-center gap-3 w-2/5 mx-auto">
            <h1 className="text-xl">Tentang Kami</h1>

            <h2 className="text-4xl font-bold">MOUNTANESIA</h2>
            <p>
              Perusahaan kami memfokuskan bidang pelayanan jasa tour guide untuk
              pendakian di berbagai pegunungan lokasi di Indonesia. Selain itu,
              kami juga menyediakan penjualan produk perlengkapan pendakian
              berkualitas tinggi.
            </p>
          </div>
        </motion.div>
      </div>

      {/* section 2 */}
      <section className="py-8 px-4 sm:py-12 sm:px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto rounded-lg">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative rounded-lg overflow-hidden bg-cover bg-center min-h-[480px]"
            style={{
              backgroundImage: "url('/assets/peta.png')",
            }}
          >
            <div className="relative z-10 flex flex-col items-center justify-center w-3/4 mx-auto">
              <div className="text-gray-950 flex items-center flex-col gap-3">
                <h2 className="lg:text-4xl text-3xl font-bold text center">
                  Pelayanan Kami
                </h2>
                <h2 className="text-center text-lg">
                  Kepuasan pelanggan adalah fokus utama kami. Kami bangga
                  memberikan pelayanan terbaik untuk membuat perjalanan mendaki
                  Anda menjadi pengalaman yang luar biasa.
                </h2>
              </div>
              <div className="text-gray-950 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-4 justify-items-center">
                    {reasons.map((reason, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          ease: "easeOut",
                          delay: index * 0.2,
                        }}
                        className="rounded-2xl p-2 sm:p-4 flex flex-col items-center gap-2 sm:gap-4 w-full max-w-[12rem] xs:max-w-[14rem] sm:max-w-[16rem] md:max-w-[18rem]"
                      >
                        <div className="max-w-sm rounded overflow-hidden shadow-md">
                          <Image
                            className="w-full"
                            src={reason.image}
                            width={200}
                            height={200}
                            alt={reason.name}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* section 3 */}
      <ChooseSection />
    </>
  );
}
