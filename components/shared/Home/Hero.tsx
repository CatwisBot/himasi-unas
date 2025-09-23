"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
// import Image from "next/image";
// import Kahim from "@/public/image/Home/Kahims.png";

export default function Hero() {
  const [displayedSistem, setDisplayedSistem] = useState("");
  const [displayedInformasi, setDisplayedInformasi] = useState("");
  const [currentSistemIndex, setCurrentSistemIndex] = useState(0);
  const [currentInformasiIndex, setCurrentInformasiIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [phase, setPhase] = useState("sistem");
  
  const sistemText = "Sistem";
  const informasiText = "Informasi";

  useEffect(() => {
    if (phase === "sistem" && currentSistemIndex < sistemText.length) {
      const timeout = setTimeout(() => {
        setDisplayedSistem(sistemText.slice(0, currentSistemIndex + 1));
        setCurrentSistemIndex(currentSistemIndex + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else if (phase === "sistem" && currentSistemIndex >= sistemText.length) {
      const timeout = setTimeout(() => {
        setPhase("informasi");
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [currentSistemIndex, phase, sistemText]);

  useEffect(() => {
    if (phase === "informasi" && currentInformasiIndex < informasiText.length) {
      const timeout = setTimeout(() => {
        setDisplayedInformasi(informasiText.slice(0, currentInformasiIndex + 1));
        setCurrentInformasiIndex(currentInformasiIndex + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentInformasiIndex, phase, informasiText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <main className="relative overflow-hidden bg-[#FFE8DB] !bg-[#FFE8DB]">
      <div className="w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto px-4 pb-3 sm:pb-10">
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 sm:pt-12 pb-12">
          <div className="space-y-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-7xl text-center md:text-left font-bold leading-snug">
              <span className="text-black">Himpunan</span>
              <br />
              <span className="text-[#4B061A]">Mahasiswa </span>
              <span className="text-black">
                <span className="inline-flex">
                  {displayedSistem}
                  {phase === "sistem" && (
                    <span 
                      className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}
                    >
                      |
                    </span>
                  )}
                </span>
                <br /> 
                <span className="inline-flex">
                  {displayedInformasi}
                  {phase === "informasi" && (
                    <span 
                      className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}
                    >
                      |
                    </span>
                  )}
                </span>
              </span>
            </h1>

            <div className="flex gap-4">
              <Link
                href="http://si.ftki.unas.ac.id/"
                className="bg-[#800020] hover:bg-[#660019] text-white px-6 py-2 rounded-lg shadow-md transition"
              >
                Jelajahi
              </Link>
              <Link
                href="/hubungi-kami"
                className="px-6 py-2 rounded-lg shadow-md border border-black text-black transition hover:bg-[#800020] hover:border-[#800020] hover:text-white"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>

          {/* Gambar - Dikomentar sementara */}
          {/* 
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-120 lg:h-120 xl:w-150 xl:h-150 mt-8 md:mt-0">
            <Image
              src={Kahim}
              alt="Ketua dan Wakil HIMASI UNAS"
              fill
              className="object-contain"
            />
          </div>
          */}
          
          {/* Temporary placeholder */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-120 xl:h-120 mt-8 md:mt-0">
            <div className="w-full h-full bg-gradient-to-br from-[#4B061A] via-[#800020] to-[#660019] rounded-2xl shadow-2xl flex items-center justify-center p-6">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-white/30 rounded-full animate-pulse"></div>
                </div>
                <h3 className="text-white text-sm md:text-base lg:text-lg font-semibold leading-relaxed">
                  Tidak ada foto,
                  <br />
                  akan segera hadir
                </h3>
                <div className="flex justify-center space-x-1">
                  <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
