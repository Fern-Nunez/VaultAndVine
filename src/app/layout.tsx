import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400"], // include the weights you plan to use
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400"], // same here
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vault & Vine",
  description: "A Modern Flower + Lifestyle Boutique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${playfair.variable}`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
