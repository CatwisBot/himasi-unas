import CircularGallery from "@/components/shared/Struktur/circularGallery";
import SlideGallery from "@/components/shared/Struktur/slideGalleryMobile";
import BPH from "@/components/shared/Struktur/infoBPH";

export default function GaleriPage() {
    return(
    <main>
        <div className="bg-[#FFE8DB]">
         <div className="flex justify-center font-bold text-center text-xl md:text-4xl uppercase py-10 max-w-2xl mx-auto text-black px-4">
            <h2>Anggota Himpunan Mahasiswa Sistem Informasi</h2>
         </div>
        </div>
        <div className="bg-[linear-gradient(to_bottom,#FFE8DB_70%,#E4C6BE_80%,#994555_85%,#732E39_90%,#4B061A_100%)] hidden md:block" style={{ height: '600px', position: 'relative' }}>
            <CircularGallery bend={3} textColor="#ffffffff" borderRadius={0.05} scrollEase={0.02}/>
        </div>
        <div className="bg-[linear-gradient(to_bottom,#FFE8DB_70%,#E4C6BE_80%,#994555_85%,#732E39_90%,#4B061A_100%)] md:hidden pb-10">
            <SlideGallery />
        </div>
        <div className="bg-[#4B061A]">
            <BPH />
        </div>
    </main>
    );
}