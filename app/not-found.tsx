import Link from "next/link";

export default function NotFound() {
  return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#4B061A] from-1% to-90% to-[#40061A] px-4">
        <div className="max-w-md w-full space-y-8 text-center">
          <div className="flex justify-center">
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
          </div>

          {/* Konten utama */}
          <div>
            <h2 className="mt-6 text-9xl font-extrabold text-[#FFFFFF]">404</h2>
            <p className="mt-2 text-2xl font-medium text-white">
              Halaman tidak ditemukan
            </p>
            <p className="mt-3 text-lg text-white">
              Maaf, kami tidak dapat menemukan halaman yang Anda cari.
            </p>
          </div>

          {/* Tombol aksi */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <button className="cursor-pointer px-6 py-3 bg-[#FFFFFF] text-black font-medium rounded-md transition transform hover:-translate-y-2 hover:shadow-lg">
                Beranda
              </button>
            </Link>
            <Link href="https://wa.me/qr/NXZORPQUZXUCL1" target="_blank">
              <button className="cursor-pointer px-6 py-3 border border-[#FFFFFF] text-[#FFFFFF] font-medium rounded-md hover:bg-[#FFFFFF] hover:text-black transition-colors">
                Hubungi Dukungan
              </button>
            </Link>
          </div>
        </div>
      </div>
  );
}