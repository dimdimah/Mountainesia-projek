"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Product", href: "/product" },
    { name: "Hiking", href: "/hiking" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 bg-transparent">

      <div className="max-w-7xl mx-auto flex justify-center">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 text-sm text-white">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className={`transition hover:text-orange-500 ${
                  pathname === item.href ? "font-semibold underline" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
