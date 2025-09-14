import Image from "next/image";
import HIMASI from "@/app/favicon.ico";
import Card from "@/components/ui/cardDivision";
import { divisions } from "@/constants/Home/Division";

export default function Introduction() {
    return(
        <main className="bg-[linear-gradient(to_bottom,#FFE8DB_1%,#E4C6BE_10%,#994555_15%,#732E39_20%,#4B061A_30%)]">
          <div className="w-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto px-4 flex justify-center items-center relative gap-4 pb-6">
            <div>
              <Image src={HIMASI} alt="Logo HIMASI UNAS" width={60} height={60} />
            </div>

            <div className="bg-[#4B061A] text-white font-bold text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl px-6 sm:px-8 py-3 rounded-xl shadow-md text-center">
              Kenal HIMASI Lebih Dekat!
             </div>

            <div>
             <Image src={HIMASI} alt="Logo HIMASI" width={60} height={60} />
            </div>
           </div>

           <div className="w-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto px-8 md:px-4 text-justify md:text-center text-white text-xs md:text-sm lg:text-base xl:text-lg leading-relaxed pt-4 pb-8 md:pb-12 font-bold">
            <p className="hidden lg:block">Selamat datang di Website HIMASI, Himpunan Mahasiswa Sistem Informasi!<br />Organisasi mahasiswa yang berdedikasi untuk mengembangkan potensi akademik, profesional, dan sosial di<br />bidang Sistem Informasi. Dengan berbagai kegiatan seperti seminar, pelatihan, hingga proyek kolaboratif, kami<br />bertujuan untuk menciptakan lingkungan belajar yang inspiratif sekaligus membangun jejaring yang solid di<br />antara mahasiswa.</p>
            <p className="lg:hidden" style={{ textAlignLast: "center" }}>Selamat datang di Website HIMASI, Himpunan Mahasiswa Sistem Informasi! Organisasi mahasiswa yang berdedikasi untuk mengembangkan potensi akademik, profesional, dan sosial di bidang Sistem Informasi. Dengan berbagai kegiatan seperti seminar, pelatihan, hingga proyek kolaboratif, kami bertujuan untuk menciptakan lingkungan belajar yang inspiratif sekaligus membangun jejaring yang solid di antara mahasiswa.</p>
           </div>

          <div className="flex justify-center items-center pb-6">
            <p className="text-xs md:text-sm lg:text-base xl:text-lg text-white font-bold whitespace-pre">34 Anggota   ━━━   5 Divisi</p>
          </div>

          <div className="w-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-7xl flex justify-center mx-auto px-4 pb-10">
            <div className="flex flex-wrap justify-center gap-6">
              {divisions.map((division) => (
                <Card key={division.id} {...division} />
              ))}
            </div>
          </div>
        </main>
    )
}