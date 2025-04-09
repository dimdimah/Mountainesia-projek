"use client";
import { motion } from "framer-motion";

const features = [
  {
    img: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
    title: "High Quality",
    desc: "crafted from top materials",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
    title: "Warranty Protection",
    desc: "Over 2 years",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/3144/3144456.png",
    title: "Free Shipping",
    desc: "Order over 150 $",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/726/726623.png",
    title: "24 / 7 Support",
    desc: "Dedicated support",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function FeatureSection() {
  return (
    <section className="bg-gray-100 py-8 px-4">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {features.map((item, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center"
            variants={itemVariant}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <img src={item.img} alt={item.title} className="w-10 h-10 mb-2" />
            <h4 className="text-sm font-semibold text-gray-800">{item.title}</h4>
            <p className="text-xs text-gray-500">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
