import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "Mountainesia",
  description: "Jelajah Gunung Dalam Negeri",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-gray-100 ${dmSans.variable} antialiased`}>
        <MantineProvider>
          <Navbar />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
