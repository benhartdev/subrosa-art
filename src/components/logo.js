"use client";

import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 200"
      fill="transparent"
      stroke="white"
      strokeWidth="1"
      strokeDasharray="100"
      strokeDashoffset="100"
      className="w-64 h-32 Logobenhartdev"
      animate={{
        strokeDashoffset: [60, 0], // Anime l'écriture du texte
        fill: ["transparent", "transparent", "white"], // Remplit progressivement
      }}
      transition={{
        duration: 5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "alternate",
        delay: 0.5,
      }}
      whileHover={{
        animationPlayState: "paused", // Stoppe l'animation au hover
      }}
    >
      <motion.path
        d="M50,150 Q100,50 150,150 T250,150"
      />
      <motion.path
        d="M300,150 L350,50 L400,150"
      />
    </motion.svg>
  );
}
