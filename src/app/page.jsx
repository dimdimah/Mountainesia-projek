"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mountainData from "@/data/home";
import MountainCard from "@/components/BentoGrid";
import HeroSection from "@/components/Jumbotron";

export default function Home() {
  const { mountains, stats, statsTips, tips, testimonials } = mountainData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [email, setEmail] = useState("");
  const itemsPerPage = 2;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  const startIndex = currentIndex * itemsPerPage;
  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const heroData = {
    image: "/assets/home.png",
    name: "Mendaki Mudah",
    desc: "Bersama Mountainesia",
    titledesc:
      "Rasakan pengalaman mendaki yang lebih aman dan nyaman dengan tour guide profesional serta perlengkapan terbaik.",
  };

  return (
    <>
      {/* section 1 */}
      <HeroSection titleData={heroData} />

      {/* section 2 */}
      <section className="bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 flex items-center min-h-[50rem]">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <motion.div
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-full sm:w-2/3 h-[20rem] sm:h-[24rem] lg:h-[28rem] z-10 mx-auto">
              <Image
                src="/img/sumbing.png"
                alt="Pendaki di gunung"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute top-6 sm:top-8 lg:top-10 right-0 sm:right-6 lg:right-10 w-3/5 sm:w-1/2 lg:w-2/5 h-[20rem] sm:h-[24rem] lg:h-[28rem] z-20">
              <Image
                src="/img/prau.jpg"
                alt="Siluet pendaki"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <h3 className="text-orange-500 text-base sm:text-lg font-semibold mb-2">
              Kenapa Harus Mountainesia?
            </h3>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Jelajahi Puncak Tertinggi Bersama Mountainesia
            </h1>
            <p className="text-gray-600 text-sm sm:text-base lg:text-base mb-6">
              Mountainesia lahir dari semangat petualangan dan keinginan untuk
              memberikan pengalaman mendaki yang aman, nyaman, dan berkesan.
            </p>
            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-600 text-sm sm:text-base">
                  Keamanan Terjamin
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-600 text-sm sm:text-base">
                  Pemandu Professional & Berpengalaman
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-600 text-sm sm:text-base">
                  Pendakian Lebih Mudah & Menyenangkan
                </span>
              </li>
            </ul>
            <div className="flex gap-4 sm:gap-6 lg:gap-8 justify-center lg:justify-start">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.5 + index * 0.2,
                  }}
                >
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-500">
                    {stat.value}
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* section 3 */}
      <section className="bg-orange-400 min-h-screen py-12 px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Temukan Gunung Impianmu!
          </h1>
          <p className="text-lg text-white">
            Jelajahi keindahan alam, taklukkan puncak, dan ciptakan cerita
            petualangan yang tak terlupakan!
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-4 mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          {[
            "Jawa",
            "Kalimantan",
            "Sumatra",
            "Sulawesi",
            "Nusa Tenggara",
            "Papua",
          ].map((region) => (
            <button
              key={region}
              className={`px-6 py-2 rounded-full text-sm font-semibold ${
                region === "Jawa"
                  ? "bg-white text-orange-400"
                  : "bg-orange-300/50 text-white"
              } hover:bg-white hover:text-orange-400 transition`}
            >
              {region}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {mountains.map((mountain, index) => (
            <MountainCard
              key={mountain.name}
              image={mountain.image}
              rate={mountain.rate}
              name={mountain.name}
              height={mountain.height}
              className={mountain.className}
              delay={0.2 * index}
            />
          ))}
        </div>
      </section>

      {/* section 4 */}
      <section className="bg-white py-8 px-4 sm:py-16 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-orange-500 text-base sm:text-lg font-semibold mb-2">
              Tips Pendakian dari Kak Iman Usman
            </h3>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8 sm:mb-12">
              Siap Mendaki? Jangan Lupa Hal Ini!
            </h1>
          </motion.div>

          <div className="relative">
            <motion.div
              className="absolute inset-0 z-0 hidden md:block"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
              <Image
                src="/pendaki-1.png"
                alt="Pendaki"
                fill
                style={{ objectFit: "contain" }}
                className="opacity-20"
              />
            </motion.div>

            {/* Cards Container */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 my-8 sm:my-12 pt-8 sm:pt-12">
              {tips.map((tip, index) => (
                <motion.div
                  key={tip.title}
                  className={`flex items-start gap-4 p-4 sm:p-6 rounded-lg border border-orange-200 bg-white shadow-md ${
                    index % 2 === 0 ? "md:mr-0 lg:mr-32" : "md:ml-0 lg:ml-32"
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: index * 0.2,
                  }}
                >
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-blue-100">
                    {tip.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                      {tip.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {tip.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12 mt-8 sm:mt-0">
            {statsTips.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.8 + index * 0.2,
                }}
              >
                <div className="px-4 py-3 sm:px-5 rounded-lg border border-orange-200 bg-white shadow-md">
                  <h2 className="text-xl sm:text-3xl font-bold text-orange-500">
                    {stat.value}
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* section 5 */}
      <section className="bg-gray-50 py-12 px-4 sm:py-16 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-start mb-10 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Apa Kata Mereka?
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl">
              Pendaki dari berbagai daerah sudah merasakan pengalaman luar biasa
              bersama Mountainesia. Yuk, simak cerita mereka!
            </p>
          </motion.div>

          {/* Carousel Container */}
          <div className="relative">
            <div className="overflow-hidden">
              <AnimatePresence initial={false}>
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
                >
                  {visibleTestimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl shadow-md p-6 flex flex-col sm:flex-row items-start gap-4 sm:gap-6"
                    >
                      <div className="relative w-full sm:w-40 h-40 flex-shrink-0">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          style={{ objectFit: "cover" }}
                          className="rounded-xl"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-600 text-sm sm:text-base mb-4">
                          {testimonial.text}
                        </p>
                        <h4 className="text-gray-900 font-semibold text-base sm:text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-500 text-sm">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-6 sm:mt-8 gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentIndex === index ? "bg-orange-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* email section */}
      <section className="py-8 px-4 sm:py-12 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto rounded-lg">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative rounded-lg overflow-hidden bg-cover bg-center min-h-[280px] sm:min-h-[200px]"
            style={{
              backgroundImage: "url('/bg-email.png')",
            }}
          >
            <div className="relative z-10 flex lg:flex-row flex-col items-center justify-center px-4 mt-8 lg:mt-10 sm:px-6 py-4 gap-4 sm:gap-8 h-full lg:mx-4">
              <h2 className="text-xl text-center sm:text-xl sm:text-center lg:text-start md:text-2xl lg:text-3xl font-bold text-white">
                Dapatkan Pemberitahuan Event dan Trip Pendakian
              </h2>
              <div className="w-full max-w-md">
                <form
                  onSubmit={handleSubmit}
                  className="flex gap-3 bg-amber-50 p-3 rounded-full flex-row items-center sm:gap-2 md:justify-between justify-between"
                >
                  <input
                    type="email"
                    placeholder="Ketikan E-mail anda"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="lg:w-full px-4 py-2 text-sm rounded-full bg-opacity-90 text-gray-800 placeholder-gray-500 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors duration-300 sm:w-auto"
                  >
                    Kirim
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
