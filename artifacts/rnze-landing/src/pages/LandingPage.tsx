import { Search, Menu, Download, ChevronRight, MonitorSmartphone, Wrench, Shield, Zap, Globe, Database } from "lucide-react";
import { motion } from "framer-motion";

const apps = [
  {
    icon: MonitorSmartphone,
    name: "RNZE Dashboard",
    description: "Platform monitoring terpusat dengan antarmuka intuitif untuk mengelola seluruh ekosistem aplikasi Anda.",
    version: "v2.4.1",
    size: "48 MB",
    platform: "Windows / macOS / Linux",
  },
  {
    icon: Wrench,
    name: "RNZE DevTools",
    description: "Toolkit pengembangan lengkap — compiler, debugger, dan testing suite dalam satu paket ringan.",
    version: "v1.9.3",
    size: "120 MB",
    platform: "Windows / macOS",
  },
  {
    icon: Shield,
    name: "RNZE SecureVault",
    description: "Solusi enkripsi data enterprise-grade dengan manajemen kunci end-to-end yang handal.",
    version: "v3.1.0",
    size: "22 MB",
    platform: "Windows / macOS / Android",
  },
  {
    icon: Zap,
    name: "RNZE Launcher",
    description: "Peluncur aplikasi cepat dan ringan dengan akses satu klik ke seluruh ekosistem RNZE.",
    version: "v1.0.5",
    size: "8 MB",
    platform: "Windows / Android",
  },
  {
    icon: Globe,
    name: "RNZE Connect",
    description: "Klien jaringan privat dengan protokol keamanan mutakhir untuk koneksi aman di mana saja.",
    version: "v2.2.0",
    size: "35 MB",
    platform: "Android / iOS",
  },
  {
    icon: Database,
    name: "RNZE DataSync",
    description: "Sinkronisasi dan backup data lintas perangkat secara real-time dengan enkripsi penuh.",
    version: "v1.6.8",
    size: "55 MB",
    platform: "Windows / macOS / Android",
  },
];

const navLinks = ["HOME", "APPLICATIONS", "ABOUT", "CAREERS", "SUPPORT"];

const socialLinks = [
  {
    name: "X",
    href: "https://x.com/RnzeCorporation",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1EVdMjvgR4/",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@rnzecorporation?si=Ms1BjCLt8BM1DYRp",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/rnzecorporation?igsh=emR5ZDh4eWZqMXg2",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@rnzecorp",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.08 },
  }),
};

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full bg-white overflow-x-hidden">

      {/* ── HEADER ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-16 flex items-center justify-between">
          {/* Logo group */}
          <div className="flex items-center gap-3">
            {/* Logo placeholder */}
            <div className="w-8 h-8 bg-[#003478] flex items-center justify-center shrink-0">
              <span className="text-white font-black text-xs tracking-tight select-none">RZ</span>
            </div>
            <span className="text-[#001E3C] font-extrabold text-base sm:text-lg tracking-[0.15em] uppercase select-none">
              RNZECORPORATION
            </span>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button
              aria-label="Search"
              className="text-[#001E3C] hover:text-[#003478] transition-colors"
            >
              <Search className="w-5 h-5" strokeWidth={1.75} />
            </button>
            <button
              aria-label="Menu"
              className="text-[#001E3C] hover:text-[#003478] transition-colors"
            >
              <Menu className="w-5 h-5" strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background – deep navy cinematic */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "linear-gradient(135deg, #001E3C 0%, #003478 40%, #004DA0 70%, #001E3C 100%)",
          }}
        />
        {/* Subtle texture overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
          }}
        />
        {/* Dim overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-5 sm:px-10 w-full pt-16">
          <p className="text-white/70 text-[10px] sm:text-xs tracking-[0.35em] font-medium uppercase mb-5">
            OFFICIAL DISTRIBUTION PLATFORM
          </p>
          <h1 className="text-white font-black uppercase tracking-tight leading-none text-4xl sm:text-6xl lg:text-7xl xl:text-8xl mb-8 sm:mb-10">
            RNZE APP<br />UNIVERSE
          </h1>
          <p className="text-white/60 text-sm sm:text-base tracking-[0.1em] uppercase mb-10 sm:mb-12 font-light max-w-xl">
            SEMUA APLIKASI KREATIF DAN UTILITAS TERBAIK DALAM SATU PLATFORM DISTRIBUSI RESMI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full justify-center items-center">
            <a
              href="#apps"
              className="group flex items-center gap-2.5 border border-white/80 bg-transparent text-white uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold px-8 sm:px-10 py-3.5 sm:py-4 hover:bg-white hover:text-[#001E3C] transition-all duration-200 w-full sm:w-auto justify-center"
            >
              <Download className="w-4 h-4 shrink-0" strokeWidth={2} />
              DOWNLOAD NOW
            </a>
            <a
              href="#apps"
              className="group flex items-center gap-2.5 border border-white/50 bg-transparent text-white/80 uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold px-8 sm:px-10 py-3.5 sm:py-4 hover:border-white hover:text-white transition-all duration-200 w-full sm:w-auto justify-center"
            >
              VIEW FEATURES
              <ChevronRight className="w-4 h-4 shrink-0" strokeWidth={2} />
            </a>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ── APP DIRECTORY ── */}
      <section id="apps" className="w-full bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          {/* Section header with scroll reveal */}
          <motion.div
            className="mb-12 sm:mb-16 border-b border-gray-100 pb-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-[#003478] text-[10px] sm:text-xs tracking-[0.35em] uppercase font-semibold mb-3">
              APPLICATION CATALOG
            </p>
            <h2 className="text-[#001E3C] font-extrabold uppercase tracking-tight text-2xl sm:text-4xl lg:text-5xl">
              DOWNLOAD CENTER
            </h2>
          </motion.div>

          {/* Grid with staggered scroll reveal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {apps.map((app, i) => (
              <motion.div
                key={app.name}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <AppCard {...app} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="w-full bg-[#003478] text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-16">

          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="w-8 h-8 bg-white/15 flex items-center justify-center shrink-0">
              <span className="text-white font-black text-xs tracking-tight select-none">RZ</span>
            </div>
            <span className="text-white font-extrabold text-base sm:text-lg tracking-[0.2em] uppercase">
              RNZECORPORATION
            </span>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 sm:gap-x-10 gap-y-4 mb-12">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-white/70 hover:text-white text-[10px] sm:text-xs tracking-[0.3em] uppercase font-medium transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="text-center mb-10">
            <p className="text-white/60 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-medium mb-6">
              FOLLOW RNZECORPORATION
            </p>
            <div className="flex items-center justify-center gap-5 sm:gap-6">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <s.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Divider + copyright */}
          <div className="border-t border-white/10 pt-8">
            <p className="text-center text-white/40 text-[9px] sm:text-[10px] tracking-[0.25em] uppercase">
              © 2026 RNZECORPORATION ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function AppCard({
  icon: Icon,
  name,
  description,
  version,
  size,
  platform,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  name: string;
  description: string;
  version: string;
  size: string;
  platform: string;
}) {
  return (
    <div className="group bg-[#F5F7FA] border border-transparent hover:border-[#003478]/20 hover:bg-white transition-all duration-200 p-6 sm:p-7 flex flex-col gap-5 h-full">
      {/* Icon + Name */}
      <div className="flex items-start gap-4">
        <div className="w-11 h-11 bg-[#003478] flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
        </div>
        <div>
          <h3 className="text-[#001E3C] font-bold text-sm sm:text-base uppercase tracking-wide leading-tight">
            {name}
          </h3>
          <span className="text-[#003478] text-[10px] font-semibold tracking-widest uppercase">
            {version}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-[#4A5568] text-xs sm:text-sm leading-relaxed flex-1">
        {description}
      </p>

      {/* Meta */}
      <div className="flex items-center gap-4 text-[10px] sm:text-xs text-[#718096] uppercase tracking-wider border-t border-gray-200 pt-4">
        <span>{size}</span>
        <span className="text-gray-300">|</span>
        <span className="truncate">{platform}</span>
      </div>

      {/* Download button */}
      <button className="w-full flex items-center justify-center gap-2 bg-[#003478] text-white uppercase tracking-[0.2em] text-[10px] sm:text-xs font-bold py-3 hover:bg-[#001E3C] transition-colors duration-200">
        <Download className="w-3.5 h-3.5" strokeWidth={2.5} />
        DOWNLOAD
      </button>
    </div>
  );
}
