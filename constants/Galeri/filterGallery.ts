import { FilteredGalleryItem, GalleryFilter } from "@/lib/type/Galeri/Galeri";

// Filter categories
export const galleryFilters: GalleryFilter[] = [
  "All",
  // "Proker 1",
  // "Proker 2",
  // "Proker 3",
  // "Proker 4",
  "PLBA",
  "Wawancara",
  "Himpunan",
];

// Filter display names and descriptions
export const filterDescriptions: Record<
  GalleryFilter,
  { displayName: string; description: string }
> = {
  All: { displayName: "All", description: "Semua Foto Kegiatan" },
  // "Proker 1": {
  //   displayName: "PK 1",
  //   description: "Program Kerja 1",
  // },
  // "Proker 2": {
  //   displayName: "PK 2",
  //   description: "Program Kerja 2",
  // },
  // "Proker 3": {
  //   displayName: "PK 3",
  //   description: "Program Kerja 3",
  // },
  // "Proker 4": {
  //   displayName: "PK 4",
  //   description: "Program Kerja 4",
  // },
  "PLBA": {
    displayName: "PLBA",
    description: "Pengenalan Lingkungan dan Budaya Akademik",
  },
  Wawancara: {
    displayName: "Wawancara",
    description: "Wawancara Calon Anggota",
  },
  Himpunan: {
    displayName: "Himpunan",
    description: "Kebersamaan HIMASI",
  },
};

// Gallery items dengan filter categories
export const filteredGalleryItems: FilteredGalleryItem[] = [
  // Proker 1
  // {
  //   id: "p1-001",
  //   category: "Proker 1",
  //   title: "Workshop Pemrograman Web",
  //   tanggal: "15 Januari 2024",
  //   lokasi: "Lab Komputer A",
  //   alamatLengkap:
  //     "Lab Komputer A, Gedung Fakultas Teknik dan Komputer, Universitas Nasional, Jl. Sawo Manila No. 61, Pasar Minggu, Jakarta Selatan 12520",
  //   image: "/image/Struktur/Deadpool.png",
  //   alt: "Workshop Pemrograman Web",
  // },

  // Proker 2
  // {
  //   id: "p2-001",
  //   category: "Proker 2",
  //   title: "Kompetisi UI/UX Design",
  //   tanggal: "5 Februari 2024",
  //   lokasi: "Ruang Kreativitas",
  //   alamatLengkap:
  //     "Ruang Kreativitas, Gedung Fakultas Teknik dan Komputer, Universitas Nasional, Jl. Sawo Manila No. 61, Pasar Minggu, Jakarta Selatan 12520",
  //   image: "/image/Struktur/Deadpool.png",
  //   alt: "Kompetisi UI/UX Design",
  // },

  // Proker 3
  // {
  //   id: "p3-001",
  //   category: "Proker 3",
  //   title: "Seminar Cybersecurity",
  //   tanggal: "5 Maret 2024",
  //   lokasi: "Ruang Seminar",
  //   alamatLengkap:
  //     "Universitas Nasional, Jl. Sawo Manila No. 61, Pasar Minggu, Jakarta Selatan 12520",
  //   image: "/image/Struktur/Deadpool.png",
  //   alt: "Seminar Cybersecurity",
  // },

  // Proker 4
  // {
  //   id: "p4-001",
  //   category: "Proker 4",
  //   title: "Startup Pitch Competition",
  //   tanggal: "2 April 2024",
  //   lokasi: "Innovation Hub",
  //   alamatLengkap:
  //     "Universitas Nasional, Jl. Sawo Manila No. 61, Pasar Minggu, Jakarta Selatan 12520",
  //   image: "/image/Struktur/Deadpool.png",
  //   alt: "Startup Pitch Competition",
  // },

  // Proker 5
  {
    id: "plba-001",
    category: "PLBA",
    title: "Tech Talk: AI & Machine Learning",
    tanggal: "7 Mei 2024",
    lokasi: "Auditorium Utama",
    alamatLengkap:
      "Universitas Nasional, Jl. Sawo Manila No. 61, Pasar Minggu, Jakarta Selatan 12520",
    image: "/image/Struktur/Deadpool.png",
    alt: "Tech Talk: AI & Machine Learning",
  },
  {
    id: "plba-002",
    category: "PLBA",
    title: "Workshop Data Science",
    tanggal: "14 Mei 2024",
    lokasi: "Lab Data Science",
    alamatLengkap:
      "Universitas Nasional, Jl. Sawo Manila No. 61, Pasar Minggu, Jakarta Selatan 12520",
    image: "/image/Struktur/Deadpool.png",
    alt: "Workshop Data Science",
  },
  {
    id: "plba-003",
    category: "PLBA",
    title: "Python for AI Bootcamp",
    tanggal: "21 Mei 2024",
    lokasi: "Lab Programming",
    alamatLengkap:
      "Universitas Nasional, Jl. Sawo Manila No. 61, Pasar Minggu, Jakarta Selatan 12520",
    image: "/image/Struktur/Deadpool.png",
    alt: "Python for AI Bootcamp",
  },

  
  // Wawancara
  {
    id: "w-001",
    category: "Wawancara",
    title: "Wawancara Calon: Muhammad Ali",
    tanggal: "20 September 2025",
    lokasi: "Blok C Lt. 8",
    alamatLengkap:
    "Universitas Nasional, Jl. Sawo Manila No. 61, Pasar Minggu, Jakarta Selatan 12520",
    image: "/image/Galeri/Wawancara/w-1.JPG",
    alt: "Wawancara Calon: Muhammad Ali",
  },
  {
    id: "w-002",
    category: "Wawancara",
    title: "Talkshow dengan Industry Expert",
    tanggal: "18 Februari 2024",
    lokasi: "Media Center",
    alamatLengkap:
    "Universitas Nasional, Jl. Sawo Manila No. 61, Pasar Minggu, Jakarta Selatan 12520",
    image: "/image/Struktur/Deadpool.png",
    alt: "Talkshow dengan Industry Expert",
  },
  {
    id: "w-003",
    category: "Wawancara",
    title: "Podcast: Career in Tech",
    tanggal: "12 Maret 2024",
    lokasi: "Podcast Studio",
    alamatLengkap:
    "Universitas Nasional, Jl. Sawo Manila No. 61, Pasar Minggu, Jakarta Selatan 12520",
    image: "/image/Struktur/Deadpool.png",
    alt: "Podcast: Career in Tech",
  },
  {
    id: "w-004",
    category: "Wawancara",
    title: "Interview Dosen Berprestasi",
    tanggal: "22 April 2024",
    lokasi: "Ruang Wawancara",
    alamatLengkap:
    "Universitas Nasional, Jl. Sawo Manila No. 61, Pasar Minggu, Jakarta Selatan 12520",
    image: "/image/Struktur/Deadpool.png",
    alt: "Interview Dosen Berprestasi",
  },

  // Himpunan
  {
    id: "h-001",
    category: "Himpunan",
    title: "Rapat Koordinasi Pengurus",
    tanggal: "10 Januari 2024",
    lokasi: "Ruang HIMASI",
    alamatLengkap:
      "Ruang HIMASI, Gedung Student Center Lt. 2, Universitas Nasional, Jl. Sawo Manila No. 61, Pasar Minggu, Jakarta Selatan 12520",
    image: "/image/Galeri/Himpunan/h-1.png",
    alt: "Rapat Koordinasi Pengurus",
  },
  {
    id: "h-002",
    category: "Himpunan",
    title: "Pelantikan Pengurus Baru",
    tanggal: "15 Februari 2024",
    lokasi: "Aula Universitas",
    alamatLengkap:
      "Universitas Nasional, Jl. Sawo Manila No. 61, Pasar Minggu, Jakarta Selatan 12520",
    image: "/image/Struktur/Deadpool.png",
    alt: "Pelantikan Pengurus Baru",
  },
  {
    id: "h-003",
    category: "Himpunan",
    title: "Gathering Mahasiswa SI",
    tanggal: "20 Maret 2024",
    lokasi: "Taman Kampus",
    alamatLengkap:
      "Universitas Nasional, Jl. Sawo Manila No. 61, Pasar Minggu, Jakarta Selatan 12520",
    image: "/image/Struktur/Deadpool.png",
    alt: "Gathering Mahasiswa SI",
  },
  {
    id: "h-004",
    category: "Himpunan",
    title: "Evaluasi Program Kerja",
    tanggal: "25 April 2024",
    lokasi: "Ruang Rapat",
    alamatLengkap:
      "Universitas Nasional, Jl. Sawo Manila No. 61, Pasar Minggu, Jakarta Selatan 12520",
    image: "/image/Struktur/Deadpool.png",
    alt: "Evaluasi Program Kerja",
  },
];

// Helper function untuk filter items berdasarkan category
export const getFilteredItems = (
  filter: GalleryFilter
): FilteredGalleryItem[] => {
  if (filter === "All") {
    return filteredGalleryItems;
  }
  return filteredGalleryItems.filter((item) => item.category === filter);
};

// Helper function untuk mendapatkan jumlah items per category
export const getCategoryCount = (category: GalleryFilter): number => {
  if (category === "All") {
    return filteredGalleryItems.length;
  }
  return filteredGalleryItems.filter((item) => item.category === category)
    .length;
};
