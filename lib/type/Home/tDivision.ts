import { StaticImageData } from "next/image";
import { LucideIcon } from "lucide-react";

export interface Division {
  id: number;
  title: string;
  image: StaticImageData | LucideIcon;
}
