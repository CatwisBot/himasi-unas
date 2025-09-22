import { GalleryImage, GalleryEvent } from "@/lib/type/Galeri/Galeri";

export const galleryImages: GalleryImage[] = [
  {
    src: "/image/Home/Banner 1.png",
    alt: "Kegiatan HIMASI 1",
  },
  {
    src: "/image/Home/Banner 2.png",
    alt: "Kegiatan HIMASI 2",
  },
  {
    src: "/image/Home/Banner 3.png",
    alt: "Kegiatan HIMASI 3",
  },
  {
    src: "/image/Home/Kahim.png",
    alt: "Kegiatan HIMASI 4"
  },
  {
    src: "/image/Home/Kahims.png",
    alt: "Kegiatan HIMASI 5",
  },
  {
    src: "/image/Struktur/Deadpool.png",
    alt: "Kegiatan HIMASI 6",
  },
];

export const galleryEvent: GalleryEvent = {
  path: "galeri",
  title: "Galeri HIMASI",
  desc: "Dokumentasi kegiatan HIMASI UNAS",
  images: galleryImages,
};
