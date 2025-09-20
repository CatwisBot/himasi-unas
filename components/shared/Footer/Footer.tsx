import React from "react";
import Link from "next/link";
import Image from "next/image";
import HIMASI from "@/public/icon/HIMASI.png";
import FTKI from "@/public/icon/FTKI.png";

export default function Footer() {
  return (
    <footer className="bg-[#FFE8DB] text-[#4B061A] py-10 px-4 border-t border-[#f5cbb1]">
      <div className="max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto flex flex-col md:flex-row justify-around gap-8">
        <div className="flex flex-col justify-start items-center md:items-start min-w-[220px]">
          <div className="flex flex-row items-center gap-4">
            <Image
              src={HIMASI}
              alt="Logo HIMASI UNAS"
              width={90}
              height={90}
              className="w-20 h-20 md:w-28 md:h-28 object-contain"
              priority
            />
            <span className="font-extrabold text-2xl md:text-3xl tracking-wide leading-tight text-left">
              HIMASI
              <br />
              UNAS
            </span>
          </div>
          <p className="text-sm max-w-xs font-medium opacity-80 mt-4 text-center md:text-left">
            Himpunan Mahasiswa Sistem Informasi Universitas Nasional.
            Bersama membangun komunitas, inovasi, dan kolaborasi.
          </p>
        </div>
        <div className="flex flex-col gap-6 md:w-[320px] items-center md:items-end">
          <div className="flex-shrink-0 hidden md:flex flex-col items-center">
            <Image
              src={FTKI}
              alt="Fakultas Teknologi Komunikasi dan Informatika"
              width={100}
              height={100}
              className="w-24 h-24 md:w-56 md:h-28 object-cover"
            />
          </div>
          <div className="flex flex-row gap-10 md:gap-18 text-center">
            <div>
              <h4 className="font-semibold mb-2">Navigasi</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="/" className="hover:underline">
                    Beranda
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:underline">
                    Kegiatan
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="hover:underline">
                    Galeri
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Struktur
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Hubungi
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Sosial Media</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.tiktok.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Tiktok
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:himasi@unas.ac.id"
                    className="hover:underline"
                  >
                    Email
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="mt-8 pt-4 border-t border-[#d4a796] text-center text-xs text-[#4B061A]/70 font-medium">
        &copy; {new Date().getFullYear()} HIMASI UNAS. All rights reserved.
      </div>
    </footer>
  );
}