import Image from "next/image";
import HIMASI from "@/app/favicon.ico";

export default function Introduction() {
    return(
        <main className="min-h-screen bg-[linear-gradient(to_bottom,#FFE8DB_0%,#E4C6BE_10%,#994555_20%,#732E39_30%,#4B061A_70%,#4B061A_100%)]">
          <div className="w-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto px-4 flex justify-center items-center relative gap-4 pb-6">
            <div>
              <Image src={HIMASI} alt="Logo HIMASI" width={60} height={60} />
            </div>

            <div className="bg-[#4B061A] text-white font-bold text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl px-6 sm:px-8 py-3 rounded-xl shadow-md text-center">
              Kenal HIMASI Lebih Dekat!
             </div>

            <div>
             <Image src={HIMASI} alt="Logo HIMASI" width={60} height={60} />
            </div>
           </div>
        </main>
    )
}