import { StaticImageData } from "next/image";

export type Leader = {
  id: string;
  name: string;
  image: StaticImageData;
  role: "Ketua Himpunan" | "Wakil Himpunan" | "Bendahara" | "Sekretaris";
  instagram: string;
  description: string;
};
