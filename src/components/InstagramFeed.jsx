"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";

const instagramPosts = [
  {
    src: "/ig-1.jpg",
    caption: "Scenic mountain view with our gear!",
    likes: 210,
  },
  {
    src: "/ig-2.jpg",
    caption: "Adventure time with Mountainesia!",
    likes: 158,
  },
  {
    src: "/ig-3.jpg",
    caption: "Morning hike inspiration.",
    likes: 302,
  },
  {
    src: "/ig-4.jpg",
    caption: "Golden hour packing shot.",
    likes: 276,
  },
];

export default function InstagramFeed() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm font-semibold text-orange-500 mb-2">NEWSFEED</p>
        <h2 className="text-3xl font-bold text-gray-900">Instagram</h2>
        <p className="text-gray-600 mt-2">
          Follow us on social media for more discount & promotions
        </p>
        <a
          href="https://instagram.com/mountainesia_official"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 mt-1 inline-block font-medium hover:underline"
        >
          @mountainesia_official
        </a>

        <div className="mt-10">
          <Carousel
            slideGap="md"
            align="start"
            slideSize={{ base: "100%", sm: "50%", md: "25%" }}
            loop
          >
            {instagramPosts.map((post, i) => (
              <Carousel.Slide key={i}>
                <motion.div
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative rounded-xl overflow-hidden shadow-md cursor-pointer"
                >
                  <Image
                    src={post.src}
                    alt={`Instagram post ${i + 1}`}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                  {hoveredIndex === i && (
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white text-sm px-4 text-center">
                      <p className="mb-2">{post.caption}</p>
                      <p className="text-xs">❤️ {post.likes} likes</p>
                    </div>
                  )}
                </motion.div>
              </Carousel.Slide>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
