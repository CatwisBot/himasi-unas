// types/gallery.ts
export interface GalleryImage {
  src: string;
  alt: string;
}

export interface GalleryEvent {
  path: string;
  title: string;
  desc: string;
  images: GalleryImage[];
}
