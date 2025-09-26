import Image from 'next/image';
import Link from 'next/link';
import { kegiatanData } from '@/constants/Kegiatan/dataKegiatan';

export default function Artikel() {
    return (
        <main className="bg-[#4B061A] py-16">
            <div className="border-t-4 border-white max-w-2xs sm:max-w-md md:max-w-xl lg:max-w-3xl xl:max-w-5xl mx-auto rounded-lg mb-12" />
            
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid gap-8">
                    {kegiatanData.slice().reverse().map((kegiatan, index) => (
                        <div 
                            key={kegiatan.id}
                            className={`flex flex-col md:flex-row items-center gap-8 ${
                                index % 2 === 1 ? 'md:flex-row-reverse' : ''
                            } md:bg-transparent bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-0 border border-white/10 md:border-none`}
                        >
                            <div className="flex-1 w-full">
                                <div className="relative w-full h-40 md:h-72 lg:h-80 rounded-xl shadow-2xl bg-white/10 p-4">
                                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                                        <Image
                                            src={kegiatan.image}
                                            alt={kegiatan.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 text-white">
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/20">
                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">
                                        {kegiatan.title}
                                    </h2>
                                    
                                    <p className="text-white/80 text-sm md:text-base mb-4 font-medium">
                                        {kegiatan.date}
                                    </p>
                                    
                                    <p className="text-white/90 text-sm md:text-base leading-relaxed mb-6 line-clamp-2 lg:line-clamp-4">
                                        {kegiatan.description}
                                    </p>
                                    
                                    <Link
                                        href={`/kegiatan/${kegiatan.id}`}
                                        className="inline-block bg-white text-[#4B061A] px-6 py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
                                    >
                                        {kegiatan.buttonText}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}