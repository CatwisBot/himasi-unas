import Link from "next/link";
import Image from "next/image";
import Kahim from "@/public/image/Home/Kahim.png";

export default function Hero() {
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
                Sistem <br /> Informasi
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

          {/* Gambar */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-120 lg:h-120 xl:w-150 xl:h-150 mt-8 md:mt-0">
            <Image
              src={Kahim}
              alt="Ketua dan Wakil HIMASI UNAS"
              fill
              className="object-contain"
              quality={100}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
