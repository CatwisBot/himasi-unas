import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#FFE8DB] text-[#4B061A] py-10 px-4 border-t border-[#f5cbb1]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand & Description */}
        <div className="flex flex-col items-start gap-2">
          <span className="font-extrabold text-2xl tracking-wide">HIMASI UNAS</span>
          <p className="text-sm max-w-xs font-medium opacity-80">
            Himpunan Mahasiswa Sistem Informasi Universitas Nasional. 
            Bersama membangun komunitas, inovasi, dan kolaborasi.
          </p>
        </div>
        {/* Navigation */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          <div>
            <h4 className="font-semibold mb-2">Menu</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="/" className="hover:underline">Beranda</a></li>
              <li><a href="/about" className="hover:underline">Tentang</a></li>
              <li><a href="/events" className="hover:underline">Kegiatan</a></li>
              <li><a href="/contact" className="hover:underline">Kontak</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Sosial Media</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:himasi@unas.ac.id" className="hover:underline">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="mt-8 text-center text-xs text-[#4B061A]/70 font-medium">
        &copy; {new Date().getFullYear()} HIMASI UNAS. All rights reserved.
      </div>
    </footer>
  );
}