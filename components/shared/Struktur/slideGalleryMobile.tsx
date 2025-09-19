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
            <Image
              src={item.src}
              alt={item.caption}
              width={150}
              height={100}
              className="rounded-2xl object-cover"
            />
            <p className="relative -top-5 backdrop-blur-sm bg-black/30 text-sm font-semibold">{item.caption}</p>
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
