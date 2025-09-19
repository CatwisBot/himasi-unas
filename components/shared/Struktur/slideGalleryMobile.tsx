"use client";

import Image from "next/image";
import { committee } from "@/constants/Struktur/dataSlideGallery";

export default function SlideGallery() {
  return (
    <div className="w-full overflow-hidden relative group">
      <div className="flex animate-scroll">
        {[...committee, ...committee].map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[150px] text-center px-2 group/item"
          >
            <div className="relative">
              <Image
                src={item.src}
                alt={item.caption}
                width={150}
                height={100}
                className="rounded-2xl object-cover"
              />

              <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-xs font-semibold bg-black/50 px-2 py-1 rounded transition-opacity duration-300 group-hover/item:opacity-0">
                {item.caption}
              </p>

              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 rounded-2xl">
                <p className="text-white text-base font-bold transition-all duration-500 transform translate-y-3 group-hover/item:translate-y-0 group-hover/item:opacity-100">
                  {item.fullName}
                </p>
                <p className="text-gray-200 text-xs mt-1 transform translate-y-3 opacity-0 group-hover/item:translate-y-0 group-hover/item:opacity-100 transition-all duration-500 delay-200">
                  {item.role}
                </p>
              </div>
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
            transform: translateX(-1350px); /* 9 gambar × 150px + padding */
          }
        }
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
        .group:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
