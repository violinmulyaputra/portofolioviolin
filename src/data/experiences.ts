import type { Locale } from "next-intl";

export type Localized<T> = Record<Locale, T>;

export type Experience = {
  slug: string;
  organization: string;
  role: Localized<string>;
  period: Localized<string>;
  current: boolean;
  summary: Localized<string>;
  highlights: Localized<string[]>;
};

export type ResolvedPhoto = {
  src: string;
  alt: string;
};

export type ResolvedExperience = {
  slug: string;
  organization: string;
  role: string;
  period: string;
  current: boolean;
  summary: string;
  highlights: string[];
  photos: ResolvedPhoto[];
};

export const EXPERIENCES: readonly Experience[] = [
  {
    slug: "kmteti-vice-head-social-affairs",
    organization: "KMTETI",
    role: {
      id: "Wakil Ketua Divisi Sosial Masyarakat",
      en: "Vice Head of Social Affairs",
    },
    period: { id: "Januari 2026 - Sekarang", en: "January 2026 - Present" },
    current: true,
    summary: {
      id: "Membantu ketua divisi merencanakan dan mengoordinasikan program pengabdian masyarakat serta kegiatan sosial, sambil memantau progres anggota agar kegiatan berjalan sesuai jadwal.",
      en: "Assist the division head in planning and coordinating community service programs and social initiatives, and track team progress to keep activities on schedule.",
    },
    highlights: {
      id: [
        "Membantu ketua divisi merencanakan dan mengoordinasikan program pengabdian masyarakat serta kegiatan sosial.",
        "Mengoordinasikan pembagian tugas dan memantau progres anggota divisi Sosial Masyarakat agar kegiatan terlaksana sesuai jadwal.",
        "Bekerja sama dengan mitra masyarakat, relawan, serta ketua dan wakil ketua divisi lain dalam mengoordinasikan dan melaksanakan program pengabdian masyarakat.",
      ],
      en: [
        "Assisted the Division Head in planning and coordinating community service programs and social initiatives.",
        "Coordinated team responsibilities and monitored progress to ensure activities were completed on schedule.",
        "Collaborated with community partners, volunteers, and heads and vice heads of other divisions to coordinate and implement community service programs.",
      ],
    },
  },
  {
    slug: "nesco-creative-content-coordinator",
    organization: "NESCO",
    role: {
      id: "Koordinator Divisi Konten Kreatif",
      en: "Coordinator of Creative Content",
    },
    period: { id: "Oktober 2025 - Mei 2026", en: "October 2025 - May 2026" },
    current: false,
    summary: {
      id: "Memimpin tim konten kreatif dalam merencanakan dan memproduksi konten promosi untuk media sosial NESCO UGM, termasuk mengatur pembagian tugas dan jadwal publikasi.",
      en: "Led the Creative Content team in planning and producing promotional content for NESCO UGM's social media, managing task assignments and publishing schedules.",
    },
    highlights: {
      id: [
        "Mengoordinasikan anggota divisi Konten Kreatif dalam merencanakan dan memproduksi konten promosi untuk media sosial NESCO UGM.",
        "Mengatur pembagian tugas dan jadwal konten agar publikasi berjalan tepat waktu dan pesan yang disampaikan tetap konsisten.",
        "Bekerja sama dengan divisi lain untuk mengembangkan ide konten dan menyampaikan informasi acara melalui visual serta teks publikasi yang menarik.",
      ],
      en: [
        "Coordinated the Creative Content team in planning and producing promotional content for NESCO UGM's social media platforms.",
        "Managed task assignments and content schedules to ensure timely publication and consistent messaging.",
        "Collaborated with other divisions to develop content ideas and communicate event information through engaging visuals and captions.",
      ],
    },
  },
  {
    slug: "career-summit-liaison-officer",
    organization: "Career Summit",
    role: { id: "Liaison Officer", en: "Liaison Officer" },
    period: { id: "Juni 2025 - Oktober 2025", en: "June 2025 - October 2025" },
    current: false,
    summary: {
      id: "Menjadi penghubung utama antara perusahaan peserta dan panitia, mengoordinasikan keikutsertaan perusahaan serta membantu kebutuhan logistik perwakilan mereka.",
      en: "Served as the main liaison between participating companies and the organizing committee, coordinating their participation and supporting their logistical needs.",
    },
    highlights: {
      id: [
        "Menjadi penghubung utama antara perusahaan yang mengikuti acara dengan panitia Career Summit.",
        "Mengoordinasikan keikutsertaan perusahaan, menyampaikan jadwal dan ketentuan acara, serta membantu kebutuhan logistik perwakilan perusahaan.",
        "Bekerja sama dengan divisi lain untuk memenuhi kebutuhan perusahaan dan menjaga kelancaran koordinasi selama acara.",
      ],
      en: [
        "Served as the primary liaison between participating companies and the Career Summit organizing committee.",
        "Coordinated company participation, communicated event schedules and requirements, and assisted company representatives with logistical needs.",
        "Collaborated with other divisions to address company needs and ensure smooth coordination throughout the event.",
      ],
    },
  },
  {
    slug: "pionir-kesatria-guide-division-staff",
    organization: "PIONIR Kesatria",
    role: { id: "Staf Divisi Pemandu", en: "Staff of Divisi Pemandu" },
    period: { id: "April 2025 - Agustus 2025", en: "April 2025 - August 2025" },
    current: false,
    summary: {
      id: "Menyampaikan jadwal dan tata cara kegiatan kepada mahasiswa baru, serta memandu sesi kelas dan diskusi dalam suasana yang ramah dan suportif.",
      en: "Communicated schedules and procedures to new students and facilitated classroom sessions and discussions in a welcoming, supportive environment.",
    },
    highlights: {
      id: [
        "Menyampaikan jadwal, tata cara, dan rangkaian kegiatan agar mahasiswa baru memahami alur acara dan dapat mempersiapkan diri.",
        "Membangun suasana yang ramah dan suportif untuk mendorong partisipasi mahasiswa baru selama program orientasi.",
        "Memandu sesi kelas dan diskusi serta mengoordinasikan kegiatan pembelajaran bagi mahasiswa baru.",
      ],
      en: [
        "Communicated event schedules, procedures, and activities to new students to ensure clear understanding and preparedness.",
        "Fostered a welcoming and supportive environment to encourage participation throughout the orientation program.",
        "Facilitated classroom sessions, guided discussions, and coordinated learning activities for new students.",
      ],
    },
  },
  {
    slug: "komatik-game-media-lab-member",
    organization: "KOMATIK",
    role: {
      id: "Anggota Gadjah Mada Game and Media Lab",
      en: "Member of Gadjah Mada Game and Media Lab",
    },
    period: {
      id: "Februari 2025 - Desember 2025",
      en: "February 2025 - December 2025",
    },
    current: false,
    summary: {
      id: "Mengembangkan keterampilan pengembangan gim, merancang gim bersama tim, dan mengusulkan mekanisme permainan untuk meningkatkan pengalaman pemain.",
      en: "Built game development skills, designed games with the team, and proposed gameplay mechanics to improve the player experience.",
    },
    highlights: {
      id: [
        "Mengembangkan pengetahuan dan keterampilan dalam pengembangan gim untuk berkontribusi pada proyek tim.",
        "Bekerja sama dengan anggota tim dalam merancang dan mengembangkan gim sesuai tujuan proyek.",
        "Mengusulkan mekanisme permainan dan perbaikan desain untuk meningkatkan pengalaman pemain.",
      ],
      en: [
        "Developed knowledge and skills in game development to contribute to team projects.",
        "Collaborated with team members to design and develop games aligned with project goals.",
        "Proposed gameplay mechanics and design improvements to enhance player experience.",
      ],
    },
  },
  {
    slug: "night-login-nadc-member",
    organization: "Night Login",
    role: { id: "Anggota NADC", en: "Member of NADC" },
    period: {
      id: "Februari 2025 - Desember 2025",
      en: "February 2025 - December 2025",
    },
    current: false,
    summary: {
      id: "Mengembangkan keterampilan pengembangan aplikasi, membangun aplikasi bersama tim, dan mengusulkan fitur serta ide antarmuka agar aplikasi lebih mudah digunakan.",
      en: "Built application development skills, built applications with the team, and proposed features and interface ideas to improve usability.",
    },
    highlights: {
      id: [
        "Mengembangkan pengetahuan dan keterampilan dalam pengembangan aplikasi untuk berkontribusi pada proyek tim.",
        "Bekerja sama dengan anggota tim dalam merancang dan membangun aplikasi sesuai kebutuhan proyek.",
        "Mengusulkan penyempurnaan fitur dan ide antarmuka untuk meningkatkan kemudahan penggunaan serta pengalaman pengguna.",
      ],
      en: [
        "Developed knowledge and skills in application development to contribute to team projects.",
        "Collaborated with team members to design and build applications aligned with project requirements.",
        "Proposed feature improvements and interface ideas to enhance application usability and user experience.",
      ],
    },
  },
  {
    slug: "kmteti-mengabdi-pic",
    organization: "KMTETI",
    role: {
      id: "Penanggung Jawab Program Kerja KMTETI Mengabdi",
      en: "PIC of KMTETI Mengabdi",
    },
    period: { id: "Januari 2025 - Juni 2025", en: "January 2025 - June 2025" },
    current: false,
    summary: {
      id: "Menjalin kerja sama dengan pihak eksternal, mengurus dokumen perizinan dan pendanaan dari departemen, serta memantau progres tiap divisi agar program berjalan tepat waktu.",
      en: "Built partnerships with external parties, handled permit and departmental funding documents, and monitored each division's progress to keep the program on schedule.",
    },
    highlights: {
      id: [
        "Menjalin kerja sama dengan pihak eksternal untuk mendukung perencanaan dan pelaksanaan program.",
        "Mengelola dokumen dan surat-menyurat untuk memperoleh izin kegiatan serta persetujuan pendanaan dari departemen.",
        "Mengoordinasikan pembagian tanggung jawab dan jadwal kerja antar divisi agar tugas terlaksana dengan baik.",
        "Memantau progres dan mengevaluasi kinerja setiap divisi untuk mengidentifikasi kendala serta mendukung pelaksanaan program tepat waktu.",
      ],
      en: [
        "Established partnerships with external stakeholders to support program planning and implementation.",
        "Managed documentation and correspondence to obtain program permits and departmental funding approval.",
        "Coordinated division responsibilities and timelines to ensure effective task execution.",
        "Monitored divisional progress and evaluated performance to identify issues and support timely program delivery.",
      ],
    },
  },
  {
    slug: "nesco-creative-content-staff",
    organization: "NESCO",
    role: {
      id: "Staf Divisi Konten Kreatif",
      en: "Staff of Creative Content",
    },
    period: { id: "Oktober 2024 - Mei 2025", en: "October 2024 - May 2025" },
    current: false,
    summary: {
      id: "Berkontribusi dalam perencanaan dan pembuatan konten promosi untuk media sosial NESCO UGM, termasuk menyiapkan visual dan teks publikasi sesuai jadwal konten.",
      en: "Contributed to planning and producing promotional content for NESCO UGM's social media, preparing visuals and captions according to the content schedule.",
    },
    highlights: {
      id: [
        "Berkontribusi dalam perencanaan dan pembuatan konten promosi untuk media sosial NESCO UGM.",
        "Menyiapkan visual dan teks publikasi sesuai jadwal konten serta pedoman komunikasi acara.",
        "Bekerja sama dengan anggota tim dan divisi lain untuk mengembangkan ide konten serta menyampaikan informasi acara secara jelas.",
      ],
      en: [
        "Contributed to planning and producing promotional content for NESCO UGM's social media platforms.",
        "Prepared visuals and captions according to the content schedule and event communication guidelines.",
        "Collaborated with team members and other divisions to develop content ideas and communicate event information clearly.",
      ],
    },
  },
  {
    slug: "enforian-casting-director",
    organization: "ENFORIAN",
    role: { id: "Sutradara Keaktoran", en: "Casting Director" },
    period: {
      id: "September 2024 - Desember 2024",
      en: "September 2024 - December 2024",
    },
    current: false,
    summary: {
      id: "Membimbing aktor selama latihan agar penampilan selaras dengan arahan kreatif, serta bekerja sama dengan tim produksi demi kelancaran pementasan drama musikal.",
      en: "Guided actors in rehearsals to match the creative direction and worked with the production team to deliver the musical theatre production.",
    },
    highlights: {
      id: [
        "Membimbing aktor selama latihan agar penampilan selaras dengan arahan kreatif pementasan.",
        "Membangun hubungan kerja yang baik dengan para aktor untuk mendukung kerja sama dan suasana latihan yang kondusif.",
        "Menangani kendala selama latihan dan mengoordinasikan solusinya agar persiapan berjalan sesuai jadwal.",
        "Bekerja sama dengan tim produksi untuk mengoordinasikan kebutuhan pemeran dan mendukung kelancaran pementasan drama musikal.",
      ],
      en: [
        "Guided actors during rehearsals to align their performances with the production's creative direction.",
        "Built strong working relationships with cast members to encourage collaboration and maintain a supportive rehearsal environment.",
        "Addressed rehearsal challenges and coordinated solutions to keep preparations on schedule.",
        "Collaborated with the production team to coordinate cast requirements and support the successful delivery of the musical theatre production.",
      ],
    },
  },
];

export function resolveExperience(
  experience: Experience,
  locale: Locale,
  photos: ResolvedPhoto[],
): ResolvedExperience {
  return {
    slug: experience.slug,
    organization: experience.organization,
    role: experience.role[locale],
    period: experience.period[locale],
    current: experience.current,
    summary: experience.summary[locale],
    highlights: experience.highlights[locale],
    photos,
  };
}
