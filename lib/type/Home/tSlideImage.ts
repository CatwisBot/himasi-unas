import { StaticImageData } from "next/image";

export interface SlideImageData {
  id: number;
  src: StaticImageData;
  alt: string;
  backgroundColor: string;
  textColor: string;
}
