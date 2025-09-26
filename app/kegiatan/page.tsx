import HeroKegiatan from "@/components/shared/Kegiatan/Hero";
import Pendaftaran from "@/components/shared/Kegiatan/Pendaftaran";
import Artikel from "@/components/shared/Kegiatan/Artikel";

export default function KegiatanPage() {
    return(
        <div>
            <HeroKegiatan />
            <Pendaftaran />
            <Artikel />
        </div>
    )
}