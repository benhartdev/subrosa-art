"use client";

import { motion } from "framer-motion";

export default function RoseLogo() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 600" /* Ajuste la taille selon ton SVG */
        fill="transparent"
        stroke="white"
        strokeWidth="3"
        className="w-64 h-64"
      >
        {/* Ajout des tracés extraits du SVG */}
        <path
          d="M743.5 553.6 c5 -4.4 11.2 -8.6 17.3 -11.6 5.8 -2.8 21.6 -8 24.3 -8 1.3 0.1 -3.4 2.1 -9.3 4 -4.1 1.3 -24.8 11.5 -28.8 14.2 -5.5 3.8 -6.7 4.2 -3.5 1.4z"
          initial={{ strokeDashoffset: 10000, fill: "transparent" }}
          animate={{ strokeDashoffset: 0, fill: ["transparent", "transparent", "white"] }}
          transition={{
            duration: 30,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "alternate",
            delay: 0.5,
          }}
          strokeDasharray="10000"
        />
        <path
          d="M780.4 551.2 c0.7 -1.1 14.3 -7.8 20 -9.9 9.4 -3.3 16.9 -4.3 30.4 -4.1 l13.7 0.1 -10.5 0.8 c-14.8 1 -33.3 4.5 -36.5 6.8 -0.5 0.4 -3 1.3 -5.5 2 -2.5 0.7 -6.2 2.2 -8.4 3.3 -2.1 1.1 -3.5 1.5 -3.2 1z"
          initial={{ strokeDashoffset: 100, fill: "transparent" }}
          animate={{ strokeDashoffset: 0, fill: ["transparent", "transparent", "white"] }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "alternate",
            delay: 2,
          }}
          strokeDasharray="100"
        />
        <path
          d="M499.5 515.3 c1.6 -1.6 10.4 -4.5 11.8 -4 0.7 0.3 0.4 0.6 -0.6 0.6 -1 0.1 -3 0.7 -4.5 1.5 -3.7 1.9 -8 3.1 -6.7 1.9z"
          initial={{ strokeDashoffset: 100, fill: "transparent" }}
          animate={{ strokeDashoffset: 0, fill: ["transparent", "transparent", "white"] }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "alternate",
            delay: 4,
          }}
          strokeDasharray="100"
        />
        <path
          d="M493.2 499.5 c3.1 -1.7 13.9 -4.7 14.6 -4 0.2 0.2 -0.9 0.7 -2.4 1 -1.6 0.4 -5.3 1.5 -8.2 2.6 -6.3 2.2 -7.7 2.4 -4 0.4z"
          initial={{ strokeDashoffset: 100, fill: "transparent" }}
          animate={{ strokeDashoffset: 0, fill: ["transparent", "transparent", "white"] }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "alternate",
            delay: 6,
          }}
          strokeDasharray="100"
        />
      </motion.svg>
    </div>
  );
}
