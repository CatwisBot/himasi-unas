import Hero from "@/components/shared/Home/Hero";
import Introduction from "@/components/shared/Home/Introduction";
import Slide from "@/components/shared/Home/SlideImage";

export default function Home() {
    return(
        <main>
            <Hero />
            <Introduction />
            <Slide />
        </main>
    )
}