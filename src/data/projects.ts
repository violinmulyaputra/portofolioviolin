import type { Locale } from "next-intl";

import type { Localized, ResolvedPhoto } from "@/data/shared";

export type ProjectLinkType = "gdrive" | "colab" | "wokwi" | "github" | "demo";

export type ProjectLink = {
  type: ProjectLinkType;
  href: string;
  label?: Localized<string>;
};

export type ResolvedProjectLink = {
  type: ProjectLinkType;
  href: string;
  label?: string;
};

export type Project = {
  slug: string;
  title: Localized<string>;
  summary: Localized<string>;
  technologies: string[];
  role: Localized<string>;
  links: ProjectLink[];
};

export type ResolvedProject = {
  slug: string;
  title: string;
  summary: string;
  technologies: string[];
  role: string;
  links: ResolvedProjectLink[];
  photos: ResolvedPhoto[];
};

export const PROJECTS: readonly Project[] = [
  {
    slug: "nasi-padang-nan-tujuah-website",
    title: {
      id: "Pengembangan Website Restoran Nasi Padang Nan Tujuah",
      en: "Nasi Padang Nan Tujuah Restaurant Website Development",
    },
    summary: {
      id: "Mengembangkan website restoran fiktif untuk memperkenalkan identitas restoran, menyajikan menu, serta menyediakan alur pemesanan makanan secara daring. Website dilengkapi keranjang belanja, formulir checkout, perhitungan ongkos kirim berdasarkan zona, ulasan pelanggan, dan informasi lokasi restoran.",
      en: "Developed a website for a fictional restaurant to introduce its identity, present the menu, and provide an online food ordering flow. The website includes a shopping cart, checkout form, zone-based shipping cost calculation, customer reviews, and restaurant location information.",
    },
    technologies: ["Next.js", "React", "Vercel"],
    role: {
      id: "Pengembang website yang mengerjakan perancangan antarmuka, penyusunan konten visual dan informasi restoran, serta implementasi fitur pemesanan.",
      en: "Website developer who worked on interface design, preparing the restaurant's visual content and information, and implementing the ordering features.",
    },
     links: [{ type: "demo", href: "https://nasi-padang-nan-tujuah.vercel.app/" }],
  },
  {
    slug: "postgresql-sales-data-integration-warehouse",
    title: {
      id: "Integrasi dan Analisis Data Penjualan Berbasis PostgreSQL",
      en: "PostgreSQL-Based Sales Data Integration and Analysis",
    },
    summary: {
      id: "Mengembangkan pipeline integrasi data pelanggan dan transaksi penjualan dari CSV serta JSON melalui proses pembersihan, validasi, dan pemuatan ke basis data. Proyek mencakup otomatisasi audit dan perhitungan total transaksi, serta pengembangan data warehouse dengan star schema untuk analisis penjualan multidimensi.",
      en: "Developed a pipeline that integrates customer and sales transaction data from CSV and JSON through cleaning, validation, and loading into a database. The project included automating audits and transaction total calculations, and building a data warehouse with a star schema for multidimensional sales analysis.",
    },
    technologies: [
      "PostgreSQL",
      "SQL",
      "PL/pgSQL",
      "pgAdmin",
      "psql",
      "JSONB",
      "Stored procedure",
      "Function",
      "View",
      "Trigger",
      "ETL",
    ],
    role: {
      id: "Ketua kelompok yang turut mengerjakan integrasi dan pembersihan data, implementasi objek basis data, serta pengujian konsistensi data dan analisis penjualan.",
      en: "Group leader who contributed to data integration and cleaning, implementation of database objects, and testing of data consistency and sales analysis.",
    },
    links: [{ type: "gdrive", href: "https://drive.google.com/file/d/1Qw9M1ADNU3C08JJ2jTRCPqoo9114PPFM/view?usp=sharing" }],
  },
  {
    slug: "knn-parkinson-voice-classification",
    title: {
      id: "Klasifikasi Penyakit Parkinson Berdasarkan Fitur Suara Menggunakan K-Nearest Neighbor",
      en: "Parkinson's Disease Classification from Voice Features Using K-Nearest Neighbor",
    },
    summary: {
      id: "Mengimplementasikan algoritma K-Nearest Neighbor (KNN) dari awal untuk mengklasifikasikan status Parkinson berdasarkan 22 fitur suara pada 195 sampel data. Proyek mencakup standardisasi fitur, pengujian nilai K, dan evaluasi menggunakan 5-fold cross-validation yang menghasilkan rata-rata akurasi terbaik sebesar 94,36% pada K = 1.",
      en: "Implemented the K-Nearest Neighbor (KNN) algorithm from scratch to classify Parkinson's status from 22 voice features across 195 data samples. The project included feature standardization, testing different K values, and evaluation with 5-fold cross-validation, which gave a best average accuracy of 94.36% at K = 1.",
    },
    technologies: ["Python", "NumPy", "pandas", "Matplotlib", "Google Colab"],
    role: {
      id: "Anggota tim pengembang yang berkontribusi dalam pengolahan data, implementasi algoritma KNN, evaluasi dan visualisasi kinerja model, serta penyusunan presentasi hasil proyek.",
      en: "Member of the development team who contributed to data processing, KNN algorithm implementation, model performance evaluation and visualization, and preparing the project results presentation.",
    },
     links: [
 { type: "colab", href: "https://colab.research.google.com/drive/1kIKu40gUsqFsEl4qO7ynh7zb6-RK3r8u?usp=sharing" },
 { type: "gdrive", href: "https://drive.google.com/file/d/1hE8F__U303AejdErQ2UATkKG3-X4DPX2/view?usp=sharing" },
 ],
  },
  {
    slug: "stm32-multimode-led-control-monitoring",
    title: {
      id: "Sistem Kontrol LED Multimode dan Pemantauan Real-Time Berbasis STM32",
      en: "STM32-Based Multimode LED Control and Real-Time Monitoring System",
    },
    summary: {
      id: "Mengembangkan sistem berbasis mikrokontroler STM32 dengan lima mode operasi, meliputi pergeseran LED, pencacahan, pengaturan jumlah LED melalui potensiometer, efek Knight Rider, dan kedipan acak. Sistem dilengkapi dashboard untuk memantau mode aktif, nilai potensiometer, jumlah LED menyala, serta status tombol secara real-time.",
      en: "Developed an STM32 microcontroller-based system with five operating modes: LED shifting, counting, LED count adjustment via a potentiometer, Knight Rider effect, and random blinking. The system includes a dashboard to monitor the active mode, potentiometer value, number of lit LEDs, and button status in real time.",
    },
    technologies: [
      "STM32F401CCU6",
      "C",
      "STM32CubeIDE",
      "STM32 HAL",
      "STM32CubeMonitor",
      "ST-Link",
      "GPIO",
      "ADC",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    role: {
      id: "Anggota tim pengembang yang berkontribusi dalam implementasi sistem kontrol LED, integrasi input tombol dan potensiometer, serta pengembangan dashboard pemantauan.",
      en: "Member of the development team who contributed to implementing the LED control system, integrating button and potentiometer inputs, and developing the monitoring dashboard.",
    },
     links: [
 {
 type: "gdrive",
 href: "https://drive.google.com/file/d/1_tIzFqDr6GfyUFnog55QFZi4Mn3SCoPA/view?usp=drive_link",
 label: { id: "Buka PDF di Google Drive", en: "Open PDF on Google Drive" },
 },
 {
 type: "gdrive",
 href: "https://drive.google.com/file/d/1IURJAE_f9WeAE3_zrGSTa8EUuYYIGZIS/view?usp=sharing",
 label: { id: "Buka JSON di Google Drive", en: "Open JSON on Google Drive" },
 },
 ],
  },
  {
    slug: "opengl-3d-butterfly-visualization",
    title: {
      id: "Visualisasi Interaktif Model Kupu-Kupu 3D Menggunakan OpenGL",
      en: "Interactive 3D Butterfly Model Visualization Using OpenGL",
    },
    summary: {
      id: "Mengembangkan aplikasi visualisasi model kupu-kupu 3D dengan tekstur dan pencahayaan Phong melalui implementasi vertex shader serta fragment shader. Aplikasi menyediakan delapan variasi material, delapan mode animasi, serta pengaturan sudut pandang dan proyeksi secara interaktif melalui keyboard.",
      en: "Developed an application for visualizing a 3D butterfly model with textures and Phong lighting by implementing vertex and fragment shaders. The application provides eight material variations, eight animation modes, and interactive control of the viewpoint and projection through the keyboard.",
    },
    technologies: [
      "C++",
      "OpenGL",
      "GLSL",
      "GLFW",
      "GLAD",
      "GLM",
      "Assimp",
      "VBO",
      "VAO",
    ],
    role: {
      id: "Anggota tim pengembang yang berkontribusi dalam implementasi rendering model 3D, pencahayaan, transformasi objek, serta dokumentasi hasil eksplorasi OpenGL.",
      en: "Member of the development team who contributed to implementing 3D model rendering, lighting, object transformations, and documenting the OpenGL exploration results.",
    },
     links: [
 {
 type: "gdrive",
 href: "https://drive.google.com/file/d/13j5JC7XFXhm2mvJYylKrbP5CO3V4_qG-/view?usp=sharing",
 label: { id: "Buka PDF di Google Drive", en: "Open report on Google Drive" },
 },
 {
 type: "gdrive",
 href: "https://drive.google.com/file/d/1JSdrEd0uofL2yoXFPCLHd6jFq0qe_RNB/view?usp=sharing",
 label: { id: "Buka OpenGL di Google Drive", en: "Open OpenGL project on Google Drive" },
 },
 ],
  },
  {
    slug: "ugm-engineering-gate-queue-simulation",
    title: {
      id: "Pemodelan dan Simulasi Antrean Kendaraan pada Portal FT UGM",
      en: "Vehicle Queue Modeling and Simulation at the UGM Faculty of Engineering Gates",
    },
    summary: {
      id: "Mengembangkan simulasi antrean kendaraan berdasarkan 26.326 catatan akses portal FT UGM menggunakan teori antrean dan Discrete Event Simulation. Proyek mengevaluasi pengaruh volume kendaraan, kecepatan pelayanan, pemilihan jalur, dan jumlah portal untuk menyusun rekomendasi pengurangan waktu tunggu.",
      en: "Developed a vehicle queue simulation based on 26,326 access records from the UGM Faculty of Engineering gates using queueing theory and Discrete Event Simulation. The project evaluates the effects of vehicle volume, service speed, lane selection, and number of gates to produce recommendations for reducing waiting time.",
    },
    technologies: [
      "JavaScript",
      "p5.js",
      "Discrete Event Simulation (DES)",
      "M/M/1 queueing model",
      "Join Shortest Queue (JSQ) strategy",
    ],
    role: {
      id: "Anggota tim yang berkontribusi dalam analisis data akses kendaraan, pemodelan dan simulasi antrean, serta evaluasi skenario perbaikan kapasitas pelayanan portal.",
      en: "Team member who contributed to vehicle access data analysis, queue modeling and simulation, and evaluation of improvement scenarios for gate service capacity.",
    },
     links: [
 {
 type: "demo",
 href: "https://simulasi-portal-ft-ugm.vercel.app/",
 label: { id: "Buka simulasi", en: "Open simulation" },
 },
 {
 type: "gdrive",
 href: "https://drive.google.com/file/d/1aE6nDbyl2muIAhgz0ImBCADxYKkSOx2t/view?usp=sharing",
 label: { id: "Buka PDF di Google Drive", en: "Open PDF on Google Drive" },
 },
 ],
  },
  {
    slug: "foil-paper-rolled-capacitor",
    title: {
      id: "Pembuatan dan Pengujian Kapasitor Sederhana Berbahan Aluminium Foil dan Kertas",
      en: "Construction and Testing of a Simple Capacitor Made of Aluminum Foil and Paper",
    },
    summary: {
      id: "Merancang dan membuat kapasitor gulung menggunakan aluminium foil sebagai pelat konduktor dan kertas HVS sebagai bahan dielektrik. Pengujian menggunakan multimeter menghasilkan kapasitansi sebesar 5,0 nF, kemudian dibandingkan dengan perhitungan dalam laporan untuk menganalisis faktor yang memengaruhi hasil pengukuran.",
      en: "Designed and built a rolled capacitor using aluminum foil as the conductive plates and HVS paper as the dielectric. Multimeter testing gave a capacitance of 5.0 nF, which was then compared with the calculation in the report to analyze factors affecting the measurement results.",
    },
    technologies: [
      "Multimeter",
      "Rolled capacitor",
      "Aluminum foil",
      "HVS paper dielectric",
    ],
    role: {
      id: "Pelaksana proyek individu yang merancang dan merakit kapasitor, mengukur kapasitansi, melakukan perhitungan teoritis, serta menganalisis dan mendokumentasikan hasil percobaan.",
      en: "Individual project executor who designed and assembled the capacitor, measured the capacitance, performed theoretical calculations, and analyzed and documented the experiment results.",
    },
     links: [{ type: "gdrive", href: "https://drive.google.com/file/d/1ZvT9KXczoPzJrePa606f-6PxbySv2G_9/view?usp=sharing" }],
  },
  {
    slug: "smartphone-sensor-balance-gait-analysis",
    title: {
      id: "Analisis Keseimbangan Tubuh dan Pola Berjalan Menggunakan Sensor Smartphone",
      en: "Body Balance and Gait Analysis Using Smartphone Sensors",
    },
    summary: {
      id: "Melakukan eksperimen untuk menganalisis keseimbangan tubuh saat berdiri, mengangkat satu kaki, berjalan, dan berlari menggunakan data percepatan linear serta kecepatan sudut dari smartphone. Data diolah dan divisualisasikan untuk membandingkan perubahan orientasi tubuh dan karakteristik gerak pada setiap aktivitas.",
      en: "Conducted experiments to analyze body balance while standing, lifting one leg, walking, and running using linear acceleration and angular velocity data from a smartphone. The data was processed and visualized to compare changes in body orientation and movement characteristics across activities.",
    },
    technologies: [
      "Smartphone",
      "Gyroscope sensor",
      "Accelerometer",
      "Spreadsheet",
      "Data visualization",
    ],
    role: {
      id: "Pelaksana proyek individu yang menyusun eksperimen, mengumpulkan dan mengolah data sensor, melakukan perhitungan fisika, serta menganalisis dan mendokumentasikan hasil pengamatan.",
      en: "Individual project executor who designed the experiments, collected and processed sensor data, performed physics calculations, and analyzed and documented the observation results.",
    },
     links: [{ type: "gdrive", href: "https://drive.google.com/file/d/1JquUwI3mQts9NltlAqVT4arsAHTTzac3/view?usp=sharing" }],
  },
  {
    slug: "smartphone-free-fall-acceleration-analysis",
    title: {
      id: "Analisis Gerak Jatuh Menggunakan Sensor Percepatan Smartphone",
      en: "Free Fall Motion Analysis Using Smartphone Accelerometer",
    },
    summary: {
      id: "Melakukan eksperimen gerak jatuh smartphone dari ketinggian satu meter dengan merekam data percepatan melalui aplikasi Physics Toolbox Sensor Suite. Data diolah menggunakan integrasi numerik dan divisualisasikan untuk menganalisis kecepatan, perpindahan, gaya, serta energi selama gerakan.",
      en: "Conducted a free fall experiment by dropping a smartphone from a height of one meter and recording acceleration data with the Physics Toolbox Sensor Suite app. The data was processed using numerical integration and visualized to analyze velocity, displacement, force, and energy during the motion.",
    },
    technologies: [
      "Smartphone",
      "Accelerometer sensor",
      "Physics Toolbox Sensor Suite",
      "Microsoft Excel",
      "Trapezoidal numerical integration",
    ],
    role: {
      id: "Pelaksana proyek individu yang merancang percobaan, merekam data sensor, mengolah dan memvisualisasikan data, serta menyusun analisis dan laporan hasil eksperimen.",
      en: "Individual project executor who designed the experiment, recorded sensor data, processed and visualized the data, and prepared the analysis and report of the experiment results.",
    },
     links: [{ type: "gdrive", href: "https://drive.google.com/file/d/180T8uy7dd96dY_rnWtkzYXN6mEmbREzE/view?usp=sharing" }],
  },
  {
    slug: "nasa-exoplanet-data-preprocessing",
    title: {
      id: "Analisis dan Prapemrosesan Data Eksoplanet NASA Exoplanet Archive",
      en: "NASA Exoplanet Archive Data Analysis and Preprocessing",
    },
    summary: {
      id: "Menganalisis dan melakukan prapemrosesan dataset berisi 6.366 eksoplanet melalui pembersihan nilai kosong, penanganan outlier, dan pengurangan atribut redundan. Proses menghasilkan 5.488 baris data siap analisis serta enam komponen utama melalui PCA yang mempertahankan 94,0% total varians.",
      en: "Analyzed and preprocessed a dataset of 6,366 exoplanets through handling missing values, outlier treatment, and reduction of redundant attributes. The process produced 5,488 analysis-ready rows and six principal components from PCA that retain 94.0% of the total variance.",
    },
    technologies: [
      "CSV data processing",
      "Median imputation",
      "Log transformation",
      "IQR method",
      "Pearson correlation",
      "Chi-square test",
      "Z-score standardization",
      "Principal Component Analysis (PCA)",
    ],
    role: {
      id: "Pelaksana proyek individu yang memilih dan mengeksplorasi dataset, menerapkan prapemrosesan dan reduksi dimensi, memvisualisasikan hasil, serta menyusun analisis dan laporan.",
      en: "Individual project executor who selected and explored the dataset, applied preprocessing and dimensionality reduction, visualized the results, and prepared the analysis and report.",
    },
     links: [
 {
 type: "gdrive",
 href: "https://drive.google.com/file/d/1SefdNqMo3YHQGXZ-QjYyF2fzQRx_jhBL/view?usp=sharing",
 label: { id: "Buka PDF di Google Drive", en: "Open PDF on Google Drive" },
 },
 {
 type: "gdrive",
 href: "https://colab.research.google.com/drive/1Ti71bmA6_WdED-ehQ1qJjRJseYRjhXrd?usp=sharing",
 label: { id: "Buka di Google Colab", en: "Open in Google Colab" },
 },
 ],
  },
  {
    slug: "smart-harvest-window-optimizer",
    title: {
      id: "Smart Harvest Window Optimizer: Sistem Rekomendasi Waktu Panen Cabai Berbasis IoT",
      en: "Smart Harvest Window Optimizer: An IoT-Based Chili Harvest Time Recommendation System",
    },
    summary: {
      id: "Mengembangkan prototipe sistem IoT yang mengolah data suhu, kelembapan udara, intensitas cahaya, simulasi kelembapan tanah, dan umur tanaman untuk memberikan rekomendasi waktu panen cabai. Sistem menggunakan perhitungan Growth Index dan Effective Age, serta menampilkan data dan status panen melalui dashboard real-time dengan indikator visual dan suara.",
      en: "Developed an IoT system prototype that processes temperature, air humidity, light intensity, simulated soil moisture, and plant age data to recommend the chili harvest time. The system uses Growth Index and Effective Age calculations, and displays data and harvest status through a real-time dashboard with visual and audio indicators.",
    },
    technologies: [
      "ESP32",
      "MQTT",
      "Node-RED",
      "DHT22",
      "LDR",
      "Potentiometer",
      "OLED display",
      "Buzzer",
      "RGB LED",
    ],
    role: {
      id: "Anggota tim pengembang yang berkontribusi dalam perancangan sistem, pengolahan parameter lingkungan menjadi rekomendasi panen, serta integrasi pemantauan melalui dashboard IoT.",
      en: "Member of the development team who contributed to system design, processing environmental parameters into harvest recommendations, and integrating monitoring through the IoT dashboard.",
    },
     links: [
 { type: "wokwi", href: "https://wokwi.com/projects/469532036198641665" },
 { type: "gdrive", href: " https://drive.google.com/file/d/1bRqLZmpD3ZmZ71IqrlvPbtIhaLzS6pp3/view?usp=sharing" },
 ],
  },
];

export function resolveProject(
  project: Project,
  locale: Locale,
  photos: ResolvedPhoto[],
): ResolvedProject {
  return {
    slug: project.slug,
    title: project.title[locale],
    summary: project.summary[locale],
    technologies: project.technologies,
    role: project.role[locale],
    links: project.links
      .filter((link) => link.href.trim() !== "")
      .map((link) => ({
        type: link.type,
        href: link.href,
        label: link.label?.[locale],
      })),
    photos,
  };
}
