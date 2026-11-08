import type { Locale } from "next-intl";

import type { Localized, ResolvedPhoto } from "@/data/shared";

export type Certificate = {
  slug: string;
  title: Localized<string>;
  summary: Localized<string>;
  technologies: string[];
  role: Localized<string>;
};

export type ResolvedCertificate = {
  slug: string;
  title: string;
  summary: string;
  technologies: string[];
  role: string;
  photos: ResolvedPhoto[];
  pdfHref: string | null;
};

export const CERTIFICATES: readonly Certificate[] = [
  {
    slug: "datacamp-basic-regression-statsmodels",
    title: {
      id: "Analisis Regresi Dasar dengan statsmodels di Python",
      en: "Basic Regression Analysis with statsmodels in Python",
    },
    summary: {
      id: "Menyelesaikan kursus DataCamp tentang penerapan regresi linear dan logistik untuk menganalisis hubungan antarvariabel serta membuat prediksi. Latihan mencakup interpretasi koefisien, evaluasi kinerja model, dan pemeriksaan kesesuaian model terhadap data.",
      en: "Completed a DataCamp course on applying linear and logistic regression to analyze relationships between variables and make predictions. Exercises covered interpreting coefficients, evaluating model performance, and checking how well models fit the data.",
    },
    technologies: ["Python", "statsmodels", "pandas", "Seaborn"],
    role: {
      id: "Peserta kursus yang mengimplementasikan model regresi, menginterpretasikan hasil analisis, dan mengevaluasi prediksi melalui latihan pemrograman.",
      en: "Course participant who implemented regression models, interpreted analysis results, and evaluated predictions through programming exercises.",
    },
  },
  {
    slug: "datacamp-multiple-regression-statsmodels",
    title: {
      id: "Analisis Regresi Berganda dengan statsmodels di Python",
      en: "Multiple Regression Analysis with statsmodels in Python",
    },
    summary: {
      id: "Menyelesaikan kursus DataCamp tentang regresi linear dan logistik dengan beberapa variabel penjelas. Latihan mencakup analisis interaksi antarvariabel, interpretasi koefisien, serta evaluasi model untuk memahami faktor yang memengaruhi hasil prediksi.",
      en: "Completed a DataCamp course on linear and logistic regression with multiple explanatory variables. Exercises covered analyzing interactions between variables, interpreting coefficients, and evaluating models to understand the factors that influence predictions.",
    },
    technologies: ["Python", "statsmodels"],
    role: {
      id: "Peserta kursus yang membangun model regresi berganda, menganalisis pengaruh interaksi antarvariabel, dan membandingkan kinerja model.",
      en: "Course participant who built multiple regression models, analyzed the effect of interactions between variables, and compared model performance.",
    },
  },
  {
    slug: "datacamp-deep-learning-pytorch",
    title: {
      id: "Pengembangan Model Deep Learning dengan Python",
      en: "Building Deep Learning Models with Python",
    },
    summary: {
      id: "Menyelesaikan rangkaian pembelajaran DataCamp tentang pengembangan jaringan saraf menggunakan PyTorch untuk mengolah berbagai jenis data, termasuk gambar dan teks. Latihan mencakup pembangunan, pelatihan, dan evaluasi model untuk tugas prediksi serta klasifikasi.",
      en: "Completed a DataCamp learning track on developing neural networks with PyTorch to process different types of data, including images and text. Exercises covered building, training, and evaluating models for prediction and classification tasks.",
    },
    technologies: ["Python", "PyTorch"],
    role: {
      id: "Peserta jalur pembelajaran yang mengimplementasikan jaringan saraf, melatih model dengan dataset latihan, dan mengevaluasi hasilnya.",
      en: "Track participant who implemented neural networks, trained models on practice datasets, and evaluated the results.",
    },
  },
  {
    slug: "datacamp-basic-statistics-python",
    title: {
      id: "Penerapan Statistika Dasar dengan Python",
      en: "Applying Basic Statistics with Python",
    },
    summary: {
      id: "Menyelesaikan kursus DataCamp tentang penggunaan statistika deskriptif, probabilitas, dan distribusi untuk memahami karakteristik data. Latihan mencakup perhitungan ukuran pemusatan dan penyebaran, simulasi probabilitas, serta analisis korelasi antarvariabel.",
      en: "Completed a DataCamp course on using descriptive statistics, probability, and distributions to understand data characteristics. Exercises covered computing measures of central tendency and spread, simulating probability, and analyzing correlations between variables.",
    },
    technologies: ["Python", "pandas", "NumPy", "SciPy"],
    role: {
      id: "Peserta kursus yang melakukan perhitungan statistik, mengeksplorasi distribusi data, dan menginterpretasikan hasil analisis melalui latihan pemrograman.",
      en: "Course participant who performed statistical calculations, explored data distributions, and interpreted analysis results through programming exercises.",
    },
  },
  {
    slug: "datacamp-data-cleaning-validation",
    title: {
      id: "Pembersihan dan Validasi Data dengan Python",
      en: "Data Cleaning and Validation with Python",
    },
    summary: {
      id: "Menyelesaikan kursus DataCamp tentang identifikasi dan penanganan masalah kualitas data, termasuk tipe data yang tidak sesuai, duplikasi, nilai hilang, dan format yang tidak konsisten. Latihan juga mencakup pencocokan serta penggabungan data untuk menghasilkan dataset yang siap dianalisis.",
      en: "Completed a DataCamp course on identifying and handling data quality problems, including incorrect data types, duplicates, missing values, and inconsistent formats. Exercises also covered matching and merging data to produce analysis-ready datasets.",
    },
    technologies: ["Python", "pandas", "NumPy"],
    role: {
      id: "Peserta kursus yang memeriksa kualitas dataset, menerapkan teknik pembersihan, dan memvalidasi konsistensi data.",
      en: "Course participant who checked dataset quality, applied cleaning techniques, and validated data consistency.",
    },
  },
  {
    slug: "datacamp-exploratory-data-analysis",
    title: {
      id: "Analisis Data Eksploratif dengan Python",
      en: "Exploratory Data Analysis with Python",
    },
    summary: {
      id: "Menyelesaikan kursus DataCamp tentang eksplorasi dan visualisasi data untuk mengidentifikasi pola, hubungan antarvariabel, serta masalah kualitas data. Latihan mencakup peringkasan dataset, penanganan nilai hilang dan pencilan, serta pembuatan fitur berdasarkan temuan analisis.",
      en: "Completed a DataCamp course on exploring and visualizing data to identify patterns, relationships between variables, and data quality issues. Exercises covered summarizing datasets, handling missing values and outliers, and engineering features from analysis findings.",
    },
    technologies: ["Python", "pandas", "Seaborn"],
    role: {
      id: "Peserta kursus yang mengeksplorasi dataset, membuat visualisasi, dan menginterpretasikan temuan sebagai dasar analisis lanjutan.",
      en: "Course participant who explored datasets, created visualizations, and interpreted findings as a basis for further analysis.",
    },
  },
  {
    slug: "datacamp-dimensionality-reduction-feature-selection",
    title: {
      id: "Reduksi Dimensi dan Seleksi Fitur dengan Python",
      en: "Dimensionality Reduction and Feature Selection with Python",
    },
    summary: {
      id: "Menyelesaikan kursus DataCamp tentang penyederhanaan dataset berdimensi tinggi melalui seleksi dan ekstraksi fitur. Latihan mencakup identifikasi fitur yang kurang informatif, penerapan Principal Component Analysis (PCA), dan visualisasi data menggunakan t-SNE.",
      en: "Completed a DataCamp course on simplifying high-dimensional datasets through feature selection and extraction. Exercises covered identifying less informative features, applying Principal Component Analysis (PCA), and visualizing data with t-SNE.",
    },
    technologies: ["Python", "scikit-learn (PCA, t-SNE)"],
    role: {
      id: "Peserta kursus yang menyeleksi fitur, menerapkan teknik reduksi dimensi, dan menganalisis representasi data yang dihasilkan.",
      en: "Course participant who selected features, applied dimensionality reduction techniques, and analyzed the resulting data representations.",
    },
  },
  {
    slug: "cisco-ccna-introduction-to-networks",
    title: {
      id: "Dasar Jaringan Komputer melalui CCNA: Introduction to Networks",
      en: "Computer Networking Fundamentals through CCNA: Introduction to Networks",
    },
    summary: {
      id: "Menyelesaikan kursus Cisco Networking Academy tentang arsitektur jaringan, protokol komunikasi, pengalamatan IP, dan dasar Ethernet. Pembelajaran mencakup praktik membangun jaringan lokal serta konfigurasi dasar router, switch, dan keamanan jaringan.",
      en: "Completed a Cisco Networking Academy course on network architecture, communication protocols, IP addressing, and Ethernet fundamentals. Learning included hands-on practice building local networks and basic configuration of routers, switches, and network security.",
    },
    technologies: [
      "Cisco Packet Tracer",
      "Cisco IOS",
      "router",
      "switch",
      "Ethernet",
      "TCP/IP",
    ],
    role: {
      id: "Peserta kursus yang menyelesaikan latihan konfigurasi perangkat, pengalamatan IP, serta pengujian konektivitas jaringan melalui simulasi dan praktik.",
      en: "Course participant who completed device configuration exercises, IP addressing, and network connectivity testing through simulations and hands-on practice.",
    },
  },
  {
    slug: "aws-academy-cloud-foundations",
    title: {
      id: "Dasar Komputasi Cloud melalui AWS Academy Cloud Foundations",
      en: "Cloud Computing Fundamentals through AWS Academy Cloud Foundations",
    },
    summary: {
      id: "Menyelesaikan kursus AWS Academy tentang konsep komputasi cloud dan layanan utama Amazon Web Services. Pembelajaran mencakup keamanan, arsitektur cloud, model harga, serta dukungan layanan AWS sebagai dasar pemanfaatan infrastruktur cloud.",
      en: "Completed an AWS Academy course on cloud computing concepts and core Amazon Web Services. Learning covered security, cloud architecture, pricing models, and AWS support services as a foundation for using cloud infrastructure.",
    },
    technologies: ["Amazon Web Services (AWS)", "Cloud computing"],
    role: {
      id: "Peserta kursus yang mempelajari konsep dan kegunaan layanan AWS serta menyelesaikan aktivitas pembelajaran untuk memahami prinsip keamanan, arsitektur, dan biaya cloud.",
      en: "Course participant who studied the concepts and uses of AWS services and completed learning activities to understand cloud security, architecture, and cost principles.",
    },
  },
];

export function resolveCertificate(
  certificate: Certificate,
  locale: Locale,
  photos: ResolvedPhoto[],
  pdfHref: string | null,
): ResolvedCertificate {
  return {
    slug: certificate.slug,
    title: certificate.title[locale],
    summary: certificate.summary[locale],
    technologies: certificate.technologies,
    role: certificate.role[locale],
    photos,
    pdfHref,
  };
}
