"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { leaders } from "@/constants/Struktur/dataBPH";
import { Instagram } from "lucide-react";
import type { StaticImageData } from "next/image";

const roles = ["Ketua Himpunan", "Wakil Himpunan", "Bendahara", "Sekretaris"]

type Leader = {
  image: string | StaticImageData;
  name: string;
  role: string;
  description: string;
  instagram: string;
};

export default function Leaders() {
  const [selectedRole, setSelectedRole] = useState("Ketua Himpunan")
  const [isAnimating, setIsAnimating] = useState(false)

  const handleRoleChange = (role: string) => {
    if (role === selectedRole) return
    
    setIsAnimating(true)
    setTimeout(() => {
      setSelectedRole(role)
      setTimeout(() => {
        setIsAnimating(false)
      }, 50)
    }, 300)
  }

  const ketua = leaders.find((l) => l.role === "Ketua Himpunan")
  const wakil = leaders.find((l) => l.role === "Wakil Himpunan")
  const bendahara = leaders.find((l) => l.role === "Bendahara")
  const sekretaris = leaders.find((l) => l.role === "Sekretaris")

  const leaderMap: Record<string, typeof leaders[0] | undefined> = {
    "Ketua Himpunan": ketua,
    "Wakil Himpunan": wakil,
    Bendahara: bendahara,
    Sekretaris: sekretaris,
  }

  const LeaderCard = ({ leader, alignRight = false, isVisible = true }: { leader: Leader | undefined; alignRight?: boolean; isVisible?: boolean }) => {
    if (!leader) return null
    return (
      <div
        className={`flex flex-col ${
          alignRight ? "md:flex-row-reverse" : "md:flex-row"
        } items-center md:items-start gap-6 pt-8 transition-all duration-500 ease-in-out transform ${
          isVisible 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-8 scale-95'
        }`}
      >
        <div className={`relative w-50 h-60 transition-all duration-500 ease-in-out ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}>
          <Image
            src={leader.image}
            alt={leader.name}
            fill
            className="rounded-2xl object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className={`text-center ${alignRight ? "md:text-right" : "md:text-left"} transition-all duration-500 ease-in-out delay-100 ${
          isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${alignRight ? 'translate-x-8' : '-translate-x-8'}`
        }`}>
          <h2 className="text-xl font-bold mb-1 transition-all duration-300">{leader.role}</h2>
          <h3 className="text-lg font-semibold transition-all duration-300">{leader.name}</h3>
          <p className="mt-2 text-sm text-gray-200 max-w-lg transition-all duration-300">{leader.description}</p>
          <Link
            href={leader.instagram}
            target="_blank"
            className={`group inline-flex items-center justify-center mt-4 p-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-pink-500/25 hover:-translate-y-1 ${alignRight ? "mx-auto md:ml-auto" : ""}`}
          >
            <Instagram 
              size={20} 
              className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" 
            />
            <span className="ml-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
              Follow
            </span>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 pt-20 pb-15">
      <div className="border-t-2 border-white" />
      <div className="flex justify-center font-bold text-center text-xl md:text-4xl uppercase py-5 md:py-10 text-white">
        <h2>Badan Pengurus Harian</h2>
      </div>
      <div className="flex flex-wrap md:hidden justify-center gap-3 mb-6">
        {roles.map((role) => (
          <button
            key={role}
            onClick={() => handleRoleChange(role)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 transform hover:scale-105 active:scale-95 ${
              selectedRole === role
                ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white border-pink-500 shadow-lg shadow-pink-500/25"
                : "border-gray-500 text-gray-300 hover:border-pink-300 hover:text-pink-300 hover:shadow-md"
            }`}
            disabled={isAnimating}
          >
            {role.split(" ")[0]}
          </button>
        ))}
      </div>

      <div className="md:hidden border-b-2 border-white pb-5 min-h-[400px] flex items-center justify-center">
        <div className={`w-full transition-all duration-500 ease-in-out ${
          isAnimating ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'
        }`}>
          <LeaderCard 
            leader={leaderMap[selectedRole]} 
            alignRight={false} 
            isVisible={!isAnimating}
          />
        </div>
      </div>

      <div className="hidden md:block border-b-2 border-white pb-5">
        <LeaderCard leader={ketua} alignRight={false} />
        <LeaderCard leader={wakil} alignRight={true} />
        <LeaderCard leader={bendahara} alignRight={false} />
        <LeaderCard leader={sekretaris} alignRight={true} />
      </div>
    </div>
  )
}
