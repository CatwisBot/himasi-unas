"use client";

import Image from "next/image";

const images = [
  { src: "/image/Struktur/Deadpool.png", caption: "Omar" },
  { src: "/image/Struktur/Deadpool.png", caption: "Fahreza" },
  { src: "/image/Struktur/Deadpool.png", caption: "Kyla" },
  { src: "/image/Struktur/Deadpool.png", caption: "Linda" },
  { src: "/image/Struktur/Deadpool.png", caption: "Whisnu" },
  { src: "/image/Struktur/Deadpool.png", caption: "Dara" },
  { src: "/image/Struktur/Deadpool.png", caption: "Andhika" },
  { src: "/image/Struktur/Deadpool.png", caption: "Leysa" },
  { src: "/image/Struktur/Deadpool.png", caption: "Laili" },
];

export default function Carousel() {
  return (
    <div className="w-full overflow-hidden relative py-10">
      <div className="flex animate-scroll">
        {[...images, ...images].map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[150px] text-center px-2"
          >
            <div className="relative">
              <Image
                src={item.src}
                alt={item.caption}
                width={150}
                height={100}
                className="rounded-2xl object-cover"
              />
              <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-sm font-semibold bg-black/50 px-2 py-1 rounded">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-1350px); /* 9 gambar × 200px */
          }
        }
        .animate-scroll {
          animation: scroll 12s linear infinite;
        }
      `}</style>
    </div>
  );
}
