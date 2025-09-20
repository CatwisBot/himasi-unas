import BPH from "@/components/shared/Struktur/infoBPH";
import Divisi from "@/components/shared/Struktur/infoDivision";

export default function GaleriPage() {
    return(
    <main>
      <div className="bg-[#FFE8DB]">
        <div className="flex justify-center font-bold text-center text-xl md:text-4xl uppercase py-10 max-w-2xl mx-auto text-black px-4">
          <h2>Anggota Himpunan Mahasiswa Sistem Informasi</h2>
        </div>
      </div>
      <div className="bg-[linear-gradient(to_bottom,#FFE8DB_70%,#E4C6BE_80%,#994555_85%,#732E39_90%,#4B061A_100%)] min-h-50">

      </div>
      <div className="bg-[#4B061A]">
        <BPH />
      </div>

      <Divisi />

    </main>
    );
}