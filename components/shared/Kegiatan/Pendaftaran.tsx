'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { UserLock, UserRoundPlus, UserRoundX } from 'lucide-react';

export default function Pendaftaran() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const [status, setStatus] = useState('waiting'); // 'waiting', 'open', 'closed'

    // Set tanggal pembukaan pendaftaran: 26/09/2025 jam 21:00 (9 malam)
    const openDate = useMemo(() => {
        const date = new Date('2025-09-26T19:12:00');
        return date;
    }, []);

    // Set tanggal penutupan pendaftaran: 27/09/2025 jam 21:00 (9 malam)
    const closeDate = useMemo(() => {
        const date = new Date('2025-09-27T21:00:00');
        return date;
    }, []);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const openTime = openDate.getTime();
            const closeTime = closeDate.getTime();

            if (now < openTime) {
                // Belum dibuka - countdown ke pembukaan
                const difference = openTime - now;
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
                setStatus('waiting');
            } else if (now >= openTime && now < closeTime) {
                // Sedang dibuka - countdown ke penutupan
                const difference = closeTime - now;
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
                setStatus('open');
            } else {
                // Sudah ditutup
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                setStatus('closed');
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [openDate, closeDate]);

    return (
        <main className="bg-[linear-gradient(to_bottom,#FFE8DB_70%,#E4C6BE_80%,#994555_85%,#732E39_90%,#4B061A_100%)] pt-10 sm:pt-12 md:pt-16">
            <div className="max-w-6xl mx-auto px-6 text-center">
                
                {/* Dynamic Title */}
                <div className="md:mb-2">
                    <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-[#4B061A] mb-2">
                        {status === 'waiting' && 'Kegiatan Mendatang'}
                        {status === 'open' && 'Pendaftaran Dibuka'}
                        {status === 'closed' && 'Kegiatan Sedang Berlangsung'}
                    </h1>
                    <div className="w-24 md:w-32 h-1 bg-[#4B061A] mx-auto rounded-full"></div>
                </div>

                {/* Banner Image */}
                <div className="mb-12">
                    <div className="relative w-full h-48 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-4xl">
                        <Image
                            src="/image/Home/Banner 1.png"
                            alt="Banner Pendaftaran"
                            fill
                            className="object-contain"
                            sizes="(max-width: 1024px) 100vw, 80vw"
                        />
                    </div>
                </div>

                {/* Countdown Timer */}
                <div className="mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#4B061A] mb-6">
                        {status === 'waiting' && 'Pendaftaran Dibuka Dalam:'}
                        {status === 'open' && 'Pendaftaran Berakhir Dalam:'}
                        {status === 'closed' && 'Pendaftaran Telah Ditutup'}
                    </h3>
                    
                    <div className="flex justify-center gap-4 md:gap-8 mb-8">
                        {[
                            { label: 'Hari', value: timeLeft.days },
                            { label: 'Jam', value: timeLeft.hours },
                            { label: 'Menit', value: timeLeft.minutes },
                            { label: 'Detik', value: timeLeft.seconds }
                        ].map((item, index) => (
                            <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/30 shadow-lg">
                                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4B061A] mb-2">
                                    {String(item.value).padStart(2, '0')}
                                </div>
                                <div className="text-sm md:text-base font-semibold text-[#732E39]">
                                    {item.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Registration Button */}
                <div>
                    {status === 'waiting' && (
                        <div className="inline-flex items-center gap-2 bg-[#FFE8DB] text-black px-8 py-4 rounded-xl font-bold text-lg md:text-xl cursor-not-allowed">
                            <UserLock className="w-5 h-5 md:w-6 md:h-6" />
                            Belum Dibuka
                        </div>
                    )}
                    
                    {status === 'open' && (
                        <Link
                            href="/pendaftaran"
                            className="inline-flex items-center gap-2 bg-[#FFE8DB] text-black px-8 py-4 rounded-xl font-bold text-lg md:text-xl hover:bg-[#FFE8DB]/80 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
                        >
                            <UserRoundPlus className="w-5 h-5 md:w-6 md:h-6" />
                            Daftar Sekarang
                        </Link>
                    )}
                    
                    {status === 'closed' && (
                        <div className="inline-flex items-center gap-2 bg-[#FFE8DB] text-black px-8 py-4 rounded-xl font-bold text-lg md:text-xl cursor-not-allowed">
                            <UserRoundX className="w-5 h-5 md:w-6 md:h-6" />
                            Pendaftaran Ditutup
                        </div>
                    )}
                    
                    {status === 'waiting' && (
                        <p className="mt-4 text-sm md:text-base text-white font-medium">
                            Pendaftaran akan segera dibuka. Pantai terus ya!
                        </p>
                    )}
                    
                    {status === 'open' && (
                        <p className="mt-4 text-sm md:text-base text-white font-medium">
                            Jangan sampai terlewat! Daftar sebelum waktu dan slot habis.
                        </p>
                    )}
                    
                    {status === 'closed' && (
                        <p className="mt-4 text-sm md:text-base text-white font-medium">
                            Pendaftaran telah berakhir. Nantikan kegiatan berikutnya!
                        </p>
                    )}
                </div>

            </div>
        </main>
    );
}