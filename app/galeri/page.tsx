import Hero from "@/components/shared/Galeri/Hero";
import Filter from "@/components/shared/Galeri/filterGaleri";
import { galleryEvent } from "@/constants/Galeri/dataGallery";

export default function GaleriPage() {
    return (
        <div>
            <Hero event={galleryEvent} />
            <Filter />
        </div>
    );
}