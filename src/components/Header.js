"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolling ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}>
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className={`text-4xl font-extrabold transition-all ${scrolling ? "text-black text-3xl" : "text-white text-4xl"}`}>
          Sub Rosa Art
        </h1>

        <nav className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-200 hover:text-blue-400 transition">Accueil</a>
          <a href="/products" className="text-gray-200 hover:text-blue-400 transition">Les oeuvres</a>
          <a href="/artist" className="text-gray-200 hover:text-blue-400 transition">Nos artistes</a>
          <a href="/artist_enterprise" className="text-gray-200 hover:text-blue-400 transition">Artiste en entreprise</a>
          <a href="/blog" className="text-gray-200 hover:text-blue-400 transition">Sub Rosa Art mag</a>
          <a href="/about" className="text-gray-200 hover:text-blue-400 transition">Qui sommes-nous</a>
          <a href="/contact" className="text-gray-200 hover:text-blue-400 transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}
