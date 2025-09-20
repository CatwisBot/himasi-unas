"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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

  const LeaderCard = ({ leader, alignRight = false }: { leader: Leader | undefined; alignRight?: boolean }) => {
    if (!leader) return null
    return (
      <div
        className={`flex flex-col ${
          alignRight ? "md:flex-row-reverse" : "md:flex-row"
        } items-center md:items-start gap-6 pt-8`}
      >
        <div className="relative w-50 h-60">
          <Image
            src={leader.image}
            alt={leader.name}
            fill
            className="rounded-2xl object-cover"
          />
        </div>

        <div className={`text-center ${alignRight ? "md:text-right" : "md:text-left"}`}>
          <h2 className="text-xl font-bold mb-1">{leader.role}</h2>
          <h3 className="text-lg font-semibold">{leader.name}</h3>
          <p className="mt-2 text-sm text-gray-200 max-w-lg">{leader.description}</p>
          <Link
            href={leader.instagram}
            target="_blank"
            className="inline-block mt-3 text-gray-200 hover:text-pink-500"
          >
            <Instagram size={20} className={alignRight ? "mx-auto md:ml-auto" : ""} />
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
            onClick={() => setSelectedRole(role)}
            className={`px-3 py-1 rounded-full text-sm font-medium border transition ${
              selectedRole === role
                ? "bg-pink-500 text-white border-pink-500"
                : "border-gray-500 text-gray-300"
            }`}
          >
            {role.split(" ")[0]}
          </button>
        ))}
      </div>

      <div className="md:hidden border-b-2 border-white pb-5">
        <LeaderCard leader={leaderMap[selectedRole]} alignRight={false} />
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
