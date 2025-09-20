import { StaticImageData } from "next/image";

export type Member = {
  id: string  
  name: string
  image: StaticImageData
  role: string
  instagram: string
}

export type Division = {
  id: string  
  name: string
  description: string
  members: Member[]
}
