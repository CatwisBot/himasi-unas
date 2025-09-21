import Hero from "@/components/shared/Home/Hero";
import Introduction from "@/components/shared/Home/Introduction";
import Slide from "@/components/shared/Home/SlideImage";
import VM from "@/components/shared/Home/VM";
import Kegiatan from "@/components/shared/Home/Activity";

export default function Home() {
    return(
        <main className="overflow-hidden">
            <Hero />
            <Introduction />
            <Slide />
            <VM />
            <Kegiatan />
        </main>
    )
}