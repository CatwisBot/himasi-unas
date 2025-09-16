"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const text = "404".split("");

type Particle = {
  id: number;
  char: "4" | "0";
  top: string;
  left: string;
};

export default function NotFound() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    let id = 0;
    const interval = setInterval(() => {
      const newParticles: Particle[] = Array.from({ length: 2 }, () => ({
        id: id++,
        char: Math.random() > 0.5 ? "4" : "0",
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }));

      setParticles((prev) => [...prev, ...newParticles]);

      newParticles.forEach((p) => {
        setTimeout(() => {
          setParticles((prev) => prev.filter((x) => x.id !== p.id));
        }, 3000);
      });
    }, 500); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hide-navbar-footer relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#4B061A] from-1% to-90% to-[#40061A] px-4 overflow-hidden">
      
      <AnimatePresence>
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute text-white text-xl font-bold select-none pointer-events-none"
            style={{ top: p.top, left: p.left }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 4.5,
              ease: "easeInOut",
            }}
          >
            {p.char}
          </motion.span>
        ))}
      </AnimatePresence>

      <div className="relative z-10 max-w-md w-full space-y-8 text-center">
        <motion.div
          className="flex justify-center"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <div className="bg-[#FFFFFF] p-4 rounded-full">
            <svg
              className="h-12 w-12 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </motion.div>

        <div>
          <motion.div
          className="flex justify-center gap-2"
          initial="hidden"
          animate="visible"
        >
          {text.map((char, i) => (
            <motion.span
              key={i}
              className="text-9xl font-extrabold text-[#FFFFFF]"
              animate={{ 
                y: [0, -20, 0], 
                opacity: [1, 0.6, 1], 
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 1.5,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

          <motion.p
            className="mt-2 text-2xl font-medium text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Halaman tidak ditemukan
          </motion.p>

          <motion.p
            className="mt-3 text-lg text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            Maaf, kami tidak dapat menemukan halaman yang Anda cari.
          </motion.p>
        </div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer px-6 py-3 bg-[#FFFFFF] text-black font-medium rounded-md transition transform hover:shadow-lg"
            >
              Beranda
            </motion.button>
          </Link>

          <Link href="https://wa.me/qr/NXZORPQUZXUCL1" target="_blank">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer px-6 py-3 border border-[#FFFFFF] text-[#FFFFFF] font-medium rounded-md hover:bg-[#FFFFFF] hover:text-black transition-colors"
            >
              Hubungi Dukungan
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}