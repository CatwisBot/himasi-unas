import { FilteredGalleryItem, GalleryFilter } from "@/lib/type/Galeri/Galeri";

// Filter categories
export const galleryFilters: GalleryFilter[] = [
  "All",
  "Proker 1",
  "Proker 2",
  "Proker 3",
  "Proker 4",
  "Proker 5",
  "Himpunan",
  "Wawancara",
];

// Filter display names and descriptions
export const filterDescriptions: Record<
  GalleryFilter,
  { displayName: string; description: string }
> = {
  All: { displayName: "All", description: "Semua kegiatan" },
  "Proker 1": {
    displayName: "PK 1",
    description: "Program Kerja 1",
  },
  "Proker 2": {
    displayName: "PK 2",
    description: "Program Kerja 2",
  },
  "Proker 3": {
    displayName: "PK 3",
    description: "Program Kerja 3",
  },
  "Proker 4": {
    displayName: "PK 4",
    description: "Program Kerja 4",
  },
  "Proker 5": {
    displayName: "PK 5",
    description: "Program Kerja 5",
  },
  Himpunan: {
    displayName: "Himpunan",
    description: "Keseruan HIMASI",
  },
  Wawancara: {
    displayName: "Wawancara",
    description: "Wawancara Calon Anggota",
  },
};

// Gallery items dengan filter categories
export const filteredGalleryItems: FilteredGalleryItem[] = [
  // Proker 1
  {
    id: "p1-001",
    category: "Proker 1",
    title: "Workshop Pemrograman Web",
    tanggal: "15 Januari 2024",
    lokasi: "Lab Komputer A",
    alamatLengkap:
      "Lab Komputer A, Gedung Fakultas Teknik dan Komputer, Universitas Nasional, Jl. Sawo Manila No. 61, Pasar Minggu, Jakarta Selatan 12520",
    image: "/image/Struktur/Deadpool.png",
    alt: "Workshop Pemrograman Web",
  },
  {
    id: "p1-002",
    category: "Proker 1",
    title: "Seminar Database Management",
    tanggal: "22 Januari 2024",
    lokasi: "Auditorium FTKI",
    alamatLengkap:
      "Auditorium FTKI, Gedung Fakultas Teknik dan Komputer, Universitas Nasional, Jl. Sawo Manila No. 61, Pasar Minggu, Jakarta Selatan 12520",
    image: "/image/Struktur/Deadpool.png",
    alt: "Seminar Database Management",
  },
  {
    id: "p1-003",
    category: "Proker 1",
    title: "Pelatihan Git & GitHub",
    tanggal: "29 Januari 2024",
    lokasi: "Lab Komputer B",
    alamatLengkap:
      "Lab Komputer B, Gedung Fakultas Teknik dan Komputer, Universitas Nasional, Jl. Sawo Manila No. 61, Pasar Minggu, Jakarta Selatan 12520",
    image: "/image/Struktur/Deadpool.png",
    alt: "Pelatihan Git & GitHub",
  },

  // Proker 2
  {
    id: "p2-001",
    category: "Proker 2",
    title: "Kompetisi UI/UX Design",
    tanggal: "5 Februari 2024",
    lokasi: "Ruang Kreativitas",
    alamatLengkap:
      "Ruang Kreativitas, Gedung Fakultas Teknik dan Komputer, Universitas Nasional, Jl. Sawo Manila No. 61, Pasar Minggu, Jakarta Selatan 12520",
    image: "/image/Struktur/Deadpool.png",
    alt: "Kompetisi UI/UX Design",
  },
  {
    id: "p2-002",
    category: "Proker 2",
    title: "Hackathon Mobile App",
    tanggal: "12 Februari 2024",
    lokasi: "Coworking Space",
    alamatLengkap:
      "Coworking Space HIMASI, Gedung Student Center, Universitas Nasional, Jl. Sawo Manila No. 61, Pasar Minggu, Jakarta Selatan 12520",
    image: "/image/Struktur/Deadpool.png",
    alt: "Hackathon Mobile App",
  },
  {
    id: "p2-003",
    category: "Proker 2",
    title: "Workshop Flutter Development",
    tanggal: "19 Februari 2024",
    lokasi: "Lab Mobile",
    alamatLengkap:
      "Lab Mobile Development, Gedung Fakultas Teknik dan Komputer, Universitas Nasional, Jl. Sawo Manila No. 61, Pasar Minggu, Jakarta Selatan 12520",
    image: "/image/Struktur/Deadpool.png",
    alt: "Workshop Flutter Development",
  },

  // Proker 3
  {
    id: "p3-001",
    category: "Proker 3",
    title: "Seminar Cybersecurity",
    tanggal: "5 Maret 2024",
    lokasi: "Ruang Seminar",
    alamatLengkap:
      "Universitas Nasional, Jl. Sawo Manila No. 61, Pasar Minggu, Jakarta Selatan 12520",
    image: "/image/Struktur/Deadpool.png",
    alt: "Seminar Cybersecurity",
  },
  {
    id: "p3-002",
    category: "Proker 3",
    title: "Workshop Ethical Hacking",
    tanggal: "12 Maret 2024",
    lokasi: "Lab Security",
    alamatLengkap:
      "Universitas Nasional, Jl. Sawo Manila No. 61, Pasar Minggu, Jakarta Selatan 12520",
    image: "/image/Struktur/Deadpool.png",
    alt: "Workshop Ethical Hacking",
  },
  {
    id: "p3-003",
    category: "Proker 3",
    title: "Certification Preparation",
    tanggal: "19 Maret 2024",
    lokasi: "Ruang Belajar",
    alamatLengkap:
      "Universitas Nasional, Jl. Sawo Manila No. 61, Pasar Minggu, Jakarta Selatan 12520",
    image: "/image/Struktur/Deadpool.png",
    alt: "Certification Preparation",
  },

  // Proker 4
  {
    id: "p4-001",
    category: "Proker 4",
    title: "Startup Pitch Competition",
    tanggal: "2 April 2024",
    lokasi: "Innovation Hub",
    alamatLengkap:
      "Universitas Nasional, Jl. Sawo Manila No. 61, Pasar Minggu, Jakarta Selatan 12520",
    image: "/image/Struktur/Deadpool.png",
    alt: "Startup Pitch Competition",
  },
  {
    id: "p4-002",
    category: "Proker 4",
    title: "Business Model Workshop",
    tanggal: "9 April 2024",
    lokasi: "Entrepreneur Center",
    alamatLengkap:
      "Universitas Nasional, Jl. Sawo Manila No. 61, Pasar Minggu, Jakarta Selatan 12520",
    image: "/image/Struktur/Deadpool.png",
    alt: "Business Model Workshop",
  },
  {
    id: "p4-003",
    category: "Proker 4",
    title: "Investor Meetup",
    tanggal: "16 April 2024",
    lokasi: "Business Lounge",
    alamatLengkap:
      "Universitas Nasional, Jl. Sawo Manila No. 61, Pasar Minggu, Jakarta Selatan 12520",
    image: "/image/Struktur/Deadpool.png",
    alt: "Investor Meetup",
  },

  // Proker 5
  {
    id: "p5-001",
    category: "Proker 5",
    title: "Tech Talk: AI & Machine Learning",
    tanggal: "7 Mei 2024",
    lokasi: "Auditorium Utama",
    alamatLengkap:
      "Universitas Nasional, Jl. Sawo Manila No. 61, Pasar Minggu, Jakarta Selatan 12520",
    image: "/image/Struktur/Deadpool.png",
    alt: "Tech Talk: AI & Machine Learning",
  },
  {
    id: "p5-002",
    category: "Proker 5",
    title: "Workshop Data Science",
    tanggal: "14 Mei 2024",
    lokasi: "Lab Data Science",
    alamatLengkap:
      "Universitas Nasional, Jl. Sawo Manila No. 61, Pasar Minggu, Jakarta Selatan 12520",
    image: "/image/Struktur/Deadpool.png",
    alt: "Workshop Data Science",
  },
  {
    id: "p5-003",
    category: "Proker 5",
    title: "Python for AI Bootcamp",
    tanggal: "21 Mei 2024",
    lokasi: "Lab Programming",
    alamatLengkap:
      "Universitas Nasional, Jl. Sawo Manila No. 61, Pasar Minggu, Jakarta Selatan 12520",
    image: "/image/Struktur/Deadpool.png",
    alt: "Python for AI Bootcamp",
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
    image: "/image/Struktur/Deadpool.png",
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

  // Wawancara
  {
    id: "w-001",
    category: "Wawancara",
    title: "Interview Alumni Success Story",
    tanggal: "8 Januari 2024",
    lokasi: "Studio Recording",
    alamatLengkap:
      "Universitas Nasional, Jl. Sawo Manila No. 61, Pasar Minggu, Jakarta Selatan 12520",
    image: "/image/Struktur/Deadpool.png",
    alt: "Interview Alumni Success Story",
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
