"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const socialIcons = [
  { icon: <FaFacebookF />, href: "#" },
  { icon: <FaTwitter />, href: "#" },
  { icon: <FaInstagram />, href: "#" },
  { icon: <FaLinkedinIn />, href: "#" },
  { icon: <FaYoutube />, href: "#" },
];

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-100 text-sm text-gray-600"
    >
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
        {/* Logo & tagline */}
        <div>
          <Image src="/assets/logo.png" alt="Mountainesia Logo" width={48} height={48} />
          <h2 className="font-bold text-indigo-900 mt-3">Menggapai Horizon<br />Menghidupi Jiwa</h2>
          <p className="mt-3 text-gray-500">
            Langkah awal mendapatkan petualangan pendakian yang tak terlupakan
          </p>
          <div className="flex gap-3 mt-4">
            {socialIcons.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="bg-gray-200 p-2 rounded-full text-indigo-900 hover:bg-indigo-500 hover:text-white transition"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Produk */}
        <div>
          <h3 className="font-semibold text-indigo-900 mb-3">Produk</h3>
          <ul className="space-y-2">
            <li><Link href="#">Fitur</Link></li>
            <li><Link href="#">Harga</Link></li>
            <li><Link href="#">Reviews</Link></li>
            <li><Link href="#">Updates</Link></li>
          </ul>
        </div>

        {/* Perusahaan */}
        <div>
          <h3 className="font-semibold text-indigo-900 mb-3">Perusahaan</h3>
          <ul className="space-y-2">
            <li><Link href="#">Tentang Kami</Link></li>
            <li><Link href="#">Hubungi Kami</Link></li>
            <li><Link href="#">Karir</Link></li>
            <li><Link href="#">Blog</Link></li>
          </ul>
        </div>

        {/* Bantuan */}
        <div>
          <h3 className="font-semibold text-indigo-900 mb-3">Bantuan</h3>
          <ul className="space-y-2">
            <li><Link href="#">Bantuan Pusat</Link></li>
            <li><Link href="#">Laporkan Bug</Link></li>
          </ul>
        </div>
      </div>

      {/* Footer bawah */}
      <div className="border-t text-center py-5 text-xs text-gray-500">
        <p>
          Copyright © {new Date().getFullYear()} Mountainesia | All Rights Reserved |{" "}
          <Link href="#" className="hover:underline">Terms and Conditions</Link> |{" "}
          <Link href="#" className="hover:underline">Privacy Policy</Link>
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
