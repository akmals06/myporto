export const navigasi = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'publication', label: 'Publication' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
] as const;

export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

export const profil = {
  nama: 'Akmal Fadhlul Rohman',
  tag: 'Informatics Engineering\nStudent @ UNTAR',
  ringkasan: 'Informatics Engineering student at Universitas Tarumanagara with hands-on experience in full-stack web development, REST API development, and database management. Developed a web-based inventory management system for a small retail business and published research in JIKSI.',
  bio_utama: "I'm Akmal Fadhlul Rohman, an Informatics Engineering student at Universitas Tarumanagara (GPA 3.64/4.00) with practical experience in full-stack web development, backend services, database design, and software testing.",
  bio_lanjutan: 'Active as Staff Ahli Komisi 3 & Biro 4 at DPM UNTAR. Independent cybersecurity researcher with formal appreciation from Diskominfotik DKI Jakarta (2022), certified L1 SOC Analyst, and published researcher in Jurnal Ilmu Komputer dan Sistem Informasi (JIKSI).',
  email: 'akmalfdhlulr@gmail.com',
  phone: '+6281316987822',
  github: 'https://github.com/akmals06',
  linkedin: 'https://linkedin.com/in/akmalfadhlul',
  instagram: 'https://instagram.com/akmalfadhlul_',
  resume: asset('assets/Akmal_Fadhlul_Rohman_CV.pdf'),
};

export const kelompok_skill = [
  { judul: 'Frontend', warna: '#54bee8', isi: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'] },
  { judul: 'Backend', warna: '#ec82b6', isi: ['Node.js', 'Express.js', 'NestJS', 'PostgreSQL', 'Prisma', 'MySQL', 'REST APIs', 'Redis'] },
  { judul: 'Tools & Security', warna: '#c4ec42', isi: ['Kali Linux', 'VirtualBox', 'Linux', 'Git', 'Docker', 'Wireshark', 'Flutter', 'Postman'] },
];

export const skill_icon: Record<string, string> = {
  'React': 'react/react-original',
  'Next.js': 'nextjs/nextjs-original',
  'TypeScript': 'typescript/typescript-original',
  'Vite': 'vite/vite-original',
  'Tailwind CSS': 'tailwindcss/tailwindcss-original',
  'JavaScript': 'javascript/javascript-original',
  'Node.js': 'nodejs/nodejs-original',
  'Express.js': 'express/express-original',
  'NestJS': 'nestjs/nestjs-original',
  'PostgreSQL': 'postgresql/postgresql-original',
  'Prisma': 'prisma/prisma-original',
  'MySQL': 'mysql/mysql-original',
  'Flutter': 'flutter/flutter-original',
  'Git': 'git/git-original',
  'Linux': 'linux/linux-original',
  'Docker': 'docker/docker-original',
  'Redis': 'redis/redis-original',
  'Postman': 'postman/postman-original',
};

export type Proyek = {
  id: string;
  judul: string;
  subjudul: string;
  gambar: string;
  stack: string[];
  deskripsi: string;
  github?: string;
  demo?: string;
  paper?: string;
  status: 'verified';
};

export const proyek: Proyek[] = [
  {
    id: 'sembako',
    judul: 'Warung Sembako Abah Andi',
    subjudul: 'Stock & Expiry Management System',
    gambar: asset('assets/projects/project-sembako.jpg'),
    stack: ['Next.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma'],
    deskripsi: 'Sistem informasi manajemen inventaris dan kedaluwarsa berbasis web untuk UMKM ritel. Mengimplementasikan metode EOQ (Economic Order Quantity), protokol FEFO (First Expired First Out) untuk meminimalkan kerugian produk basi, pelacakan batch stok masuk/keluar, monitoring stok real-time, notifikasi otomatis, dan pengujian black-box pada 16 skenario operasional. Riset arsitektur sistem ini telah dipublikasikan di Jurnal Ilmu Komputer dan Sistem Informasi (JIKSI) Vol. 14 No. 2, 2026 (DOI: 10.24912/jiksi.v14i2.38685).',
    github: 'https://github.com/akmals06/kelompok2-manajemen-stok-kedaluwarsa',
    demo: 'https://kelompok2-manajemen-stok-kedaluwars.vercel.app',
    paper: 'https://doi.org/10.24912/jiksi.v14i2.38685',
    status: 'verified',
  },
  {
    id: 'ours',
    judul: 'OURS: Couple Private Space',
    subjudul: 'Couple Lifestyle Monorepo',
    gambar: asset('assets/projects/project-ours-app.png'),
    stack: ['React Native', 'Expo SDK 57', 'NestJS', 'Prisma', 'Turborepo'],
    deskripsi: 'Aplikasi mobile dan web privat bagi pasangan. Menghadirkan sinkronisasi real-time, rekomendasi kegiatan bersama, pencatatan komitmen finansial bersama, serta arsip foto dan momen kenangan. Dibangun dengan arsitektur monorepo modular monolith Turborepo, NestJS backend, dan 21 model Prisma ORM.',
    github: 'https://github.com/akmals06/ours',
    demo: 'https://github.com/akmals06/ours',
    status: 'verified',
  },
  {
    id: 'saungriung',
    judul: 'Saung Riung Web Portal',
    subjudul: 'Komunitas Warga RT 009 / RW 002',
    gambar: asset('assets/projects/project-saungriung.jpg'),
    stack: ['React', 'Vite', 'Node.js', 'Express.js', 'REST API'],
    deskripsi: 'Platform website komunitas warga RT 009 / RW 002 Koja. Menjadi pusat transparansi pengumuman lingkungan, kalender agenda gotong royong dan pertemuan warga, serta kanal komunikasi warga dengan arsitektur REST API terpisah antara frontend (React Vite) dan backend (Express Node.js) yang dideploy di Vercel.',
    github: 'https://github.com/akmals06/saungriung',
    demo: 'https://saungriung.vercel.app',
    status: 'verified',
  },
  {
    id: 'uccd',
    judul: 'UCCD Official Web Platform',
    subjudul: 'Untar Computer Club & Development',
    gambar: asset('assets/projects/project-uccd.jpg'),
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Node.js'],
    deskripsi: 'Website resmi organisasi kemahasiswaan Untar Computer Club and Development (UCCD) Fakultas Teknologi Informasi Universitas Tarumanagara. Mendukung publikasi profil organisasi, pendaftaran bootcamp, tech talks, showcase prestasi kompetisi mahasiswa, serta presensi kegiatan.',
    github: 'https://github.com/akmals06',
    demo: 'https://github.com/akmals06',
    status: 'verified',
  },
  {
    id: 'lumio',
    judul: 'Lumio: Personal Finance Tracker',
    subjudul: 'Personal Finance & Cash Flow Tracker',
    gambar: asset('assets/projects/project-lumio.jpg'),
    stack: ['Flutter', 'Next.js', 'NestJS', 'Prisma', 'PostgreSQL', 'Redis'],
    deskripsi: 'Aplikasi pelacak keuangan personal untuk mengelola pemasukan, pengeluaran harian, tabungan, dan catatan hutang-piutang. Menghadirkan ringkasan arus kas terstruktur, pemantauan kewajiban jatuh tempo, dan visualisasi tren saldo. Dibangun dengan antarmuka mobile Flutter (BLoC, Dio) serta web dashboard analitik Next.js.',
    github: 'https://github.com/akmals06/Lumio',
    demo: 'https://github.com/akmals06/Lumio',
    status: 'verified',
  },
  {
    id: 'rover',
    judul: 'AI Surveillance Rover',
    subjudul: 'IoT & Computer Vision Vehicle',
    gambar: asset('assets/projects/project-rover.jpg'),
    stack: ['Computer Vision', 'IoT', 'Python', 'C++'],
    deskripsi: 'Kendaraan robotik 4WD otonom untuk inspeksi dan patroli keamanan area. Dilengkapi streaming video nirkabel real-time, navigasi penghindar rintangan sensor ultrasonik dan LiDAR, serta model deteksi visual berbasis edge inference.',
    github: 'https://github.com/akmals06/ai-surveillance-rover',
    demo: 'https://github.com/akmals06/ai-surveillance-rover',
    status: 'verified',
  },
];

export type Penghargaan = {
  id: string;
  badge: string;
  judul: string;
  keterangan: string;
  berkas: string;
  deskripsi: string;
  link?: string;
  credentialId?: string;
};

export const sertifikat: Penghargaan[] = [
  {
    id: 'untar-humaniora',
    badge: 'OFFICIAL CERTIFICATE',
    judul: 'Seminar Humaniora UNTAR',
    keterangan: 'Universitas Tarumanagara • 8 April 2026',
    berkas: asset('assets/certificates/cert-untar.jpg'),
    deskripsi: 'Sertifikat Kepesertaan Seminar Humaniora Universitas Tarumanagara: "Internalisasi Nilai Pancasila melalui Humaniora dalam rangka Penguatan Budaya Nasional dan Kesadaran Kolektif Antikorupsi dan Antinarkoba" (No: 692-R/2461/UNTAR/III/2026).',
    credentialId: '692-R/2461/UNTAR/III/2026',
  },
  {
    id: 'jadi-hacker',
    badge: 'PROFESSIONAL CERTIFICATION',
    judul: 'L1 SOC Analyst Certification',
    keterangan: 'Jadi Hacker • Issued 18 July 2023',
    berkas: asset('assets/certificates/cert-jadehacker.jpg'),
    deskripsi: 'Sertifikasi resmi L1 SOC Analyst dari Jadi Hacker (Credential ID: JH-SOC-02-0012) yang mencakup fundamental Security Operation Center (SOC), security monitoring, analisis insiden siber, dan prosedur respon ancaman.',
    credentialId: 'JH-SOC-02-0012',
  },
];

export const publikasi_ilmiah = {
  id: 'jiksi-paper',
  badge: 'SINTA 3 SCIENTIFIC PUBLICATION',
  judul: 'SISTEM INFORMASI MANAJEMEN STOK DAN KEDALUWARSA BERBASIS WEB UNTUK UMKM',
  jurnal: 'Jurnal Ilmu Komputer dan Sistem Informasi (JIKSI)',
  volume: 'Vol. 14, No. 2, 2026',
  issn: 'ISSN: 2303-2529',
  akreditasi: 'Akreditasi SINTA 3 (Kemenristekdikti)',
  doi: '10.24912/jiksi.v14i2.38685',
  link: 'https://doi.org/10.24912/jiksi.v14i2.38685',
  journalUrl: 'https://journal.untar.ac.id/index.php/jiksi/article/view/38685',
  pdfLink: 'https://journal.untar.ac.id/index.php/jiksi/article/view/38685/21626',
  authors: 'Akmal Fadhlul Rohman (Penulis Utama), Jerrico Natanael, Vito Orlando, Rafly Prayoga',
  afiliasi: 'Program Studi Teknik Informatika, Fakultas Teknologi Informasi, Universitas Tarumanagara',
  abstrak: 'Pencatatan stok yang masih dikerjakan secara manual di banyak UMKM kerap berujung pada data yang tidak konsisten, kehabisan barang yang berulang, hingga produk yang baru diketahui kedaluwarsa setelah lewat masa simpan. Kondisi serupa dihadapi salah satu warung sembako di Jakarta yang menjadi objek penelitian ini. Untuk menjawab permasalahan tersebut, dirancang sebuah sistem informasi berbasis web yang menyatukan pengelolaan kategori dan data produk, pencatatan stok masuk dan keluar, manajemen batch beserta tanggal kedaluwarsa, ringkasan stok, pemantauan stok menipis, status batch, laporan inventaris, dan analisis Economic Order Quantity (EOQ) sebagai alat bantu perencanaan restok. Implementasi memanfaatkan Next.js, Node.js, Express.js, PostgreSQL, dan Prisma ORM dengan pengujian black-box pada 16 skenario operasional.',
  cover: asset('assets/certificates/cert-jiksi-cover.jpg'),
  metode: ['Metodologi SCRUM', 'Algoritma EOQ (Economic Order Quantity)', 'Protokol FEFO (First Expired First Out)', 'Black-Box Testing (16 Skenario)'],
};
