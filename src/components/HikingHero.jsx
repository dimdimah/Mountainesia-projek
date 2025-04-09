"use client";

import { useRef } from "react";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import "@mantine/carousel/styles.css";

const hikingSpots = [
  {
    name: "MERBABU",
    desc: "Gunung berketinggian 3.145 mdpl ini berada di tiga kabupaten di Jawa Tengah, yaitu Magelang, Boyolali, dan Semarang.",
    image: "/img/merbabu.jpg",
  },
  {
    name: "SLAMET",
    desc: "Gunung tertinggi di Jawa Tengah dengan jalur pendakian yang menantang dan pemandangan luar biasa.",
    image: "/img/slamet.jpg",
  },
  {
    name: "PRAU",
    desc: "Gunung ramah pendaki pemula dengan golden sunrise dan padang rumput yang indah.",
    image: "/img/prau.jpg",
  },
];

export default function HikingPage() {
  const autoplay = useRef(Autoplay({ delay: 3000 }));

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden">
        <Carousel
          withIndicators
          height="100%"
          slideSize="100%"
          slideGap={0}
          loop
          plugins={[autoplay.current]}
          controlsOffset={0}
          controlSize={0}
          classNames={{
            control: "hidden",
            indicators:
              "absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex gap-2",
            indicator:
              "w-10 h-1 rounded-full bg-white/30 data-[active=true]:bg-white data-[active=true]:w-16 transition-all duration-300",
          }}
        >
          {hikingSpots.map((spot, index) => (
            <Carousel.Slide key={index}>
              <div className="relative w-full h-screen">
                <Image
                  src={spot.image}
                  alt={spot.name}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
                  <div className="w-24 h-1 bg-white mb-6" />
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-widest mb-4 bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
                    {spot.name}
                  </h1>
                  <p className="max-w-xl text-sm sm:text-base md:text-lg">
                    {spot.desc}
                  </p>
                  <button className="mt-6 px-6 py-3 border-2 border-white rounded-full text-white font-semibold hover:bg-white hover:text-black transition">
                    TRIP NOW
                  </button>
                </div>
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
      </section>
    </>
  );
}
