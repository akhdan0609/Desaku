import React, { useState } from 'react';
import { 
  Menu, 
  BookOpen, 
  Palmtree, 
  Users, 
  Newspaper, 
  GraduationCap, 
  ChevronRight, 
  Map, 
  Plus, 
  Minus,
  MapPin,
  ExternalLink,
  Sparkles,
  X
} from 'lucide-react';
import { PageRoute } from '../../types';

interface HomeBentoGridProps {
  onNavigate: (page: PageRoute, params?: any) => void;
}

export const HomeBentoGrid: React.FC<HomeBentoGridProps> = ({ onNavigate }) => {
  const [mapModalOpen, setMapModalOpen] = useState(false);

  const menuItems = [
    {
      icon: BookOpen,
      label: 'Profil Desa',
      page: 'profil-tentang' as PageRoute
    },
    {
      icon: Palmtree,
      label: 'Potensi Desa',
      page: 'potensi-desa' as PageRoute
    },
    {
      icon: Users,
      label: 'Pelayanan',
      page: 'pelayanan-desa' as PageRoute
    },
    {
      icon: Newspaper,
      label: 'Berita',
      page: 'informasi-berita' as PageRoute
    },
    {
      icon: GraduationCap,
      label: 'KKN',
      page: 'kkn' as PageRoute
    }
  ];

  const newsItems = [
    {
      id: 'news-1',
      title: 'Gotong Royong Warga Desa Warung Menteng',
      date: '20 Mei 2024',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'news-2',
      title: 'Panen Raya Padi di Desa Warung Menteng',
      date: '15 Mei 2024',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'news-3',
      title: 'Pengembangan Wisata Alam Desa Warung Menteng',
      date: '10 Mei 2024',
      image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
      {/* 4-Card Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        
        {/* ================= CARD 1: MENU ================= */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 flex flex-col justify-between hover:shadow-md transition">
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 text-slate-800 font-bold text-sm mb-4">
              <Menu className="w-4 h-4 text-emerald-700 stroke-[2.5]" />
              <span>Menu</span>
            </div>

            {/* Menu List */}
            <div className="space-y-2.5">
              {menuItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => onNavigate(item.page)}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 bg-[#f4f7f2] hover:bg-[#e9f0e6] text-slate-800 rounded-xl transition duration-150 group text-left"
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-4 h-4 text-emerald-800 stroke-[1.8] group-hover:scale-110 transition" />
                      <span className="text-xs font-semibold text-slate-800">
                        {item.label}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-800 group-hover:translate-x-0.5 transition" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================= CARD 2: TENTANG DESA WARUNG MENTENG ================= */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 flex flex-col justify-between hover:shadow-md transition">
          <div className="space-y-3">
            {/* Header */}
            <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
              <span className="text-emerald-700 text-base">🍃</span>
              <span>Tentang Desa Warung Menteng</span>
            </div>

            {/* Description */}
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Desa Warung Menteng adalah desa yang terletak di Kecamatan Cijeruk, Kabupaten Bogor, Jawa Barat. Dengan potensi alam yang melimpah dan masyarakat yang ramah, desa ini terus berkembang menjadi desa yang mandiri dan sejahtera.
            </p>

            {/* Landscape Photo */}
            <div className="rounded-xl overflow-hidden shadow-xs mt-2 border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" 
                alt="Pemandangan Desa Warung Menteng dan Gunung Salak"
                className="w-full h-32 sm:h-36 object-cover hover:scale-105 transition duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* ================= CARD 3: PETA DESA ================= */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 flex flex-col justify-between hover:shadow-md transition">
          <div className="space-y-3">
            {/* Header */}
            <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
              <Map className="w-4 h-4 text-emerald-700" />
              <span>Peta Desa</span>
            </div>

            {/* Stylized Map Viewport */}
            <div className="relative bg-[#e9eff2] rounded-xl h-36 overflow-hidden border border-slate-200/80 select-none">
              {/* Map Canvas Background Grid */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:12px_12px]" />

              {/* Neighboring region labels */}
              <div className="absolute top-2 left-2 text-[10px] text-slate-600 font-medium leading-tight">
                Kecamatan<br />Cijeruk
              </div>

              <div className="absolute bottom-5 left-2 text-[10px] text-slate-600 font-medium">
                Caringin
              </div>

              {/* Mountain Salak Pin on top right */}
              <div className="absolute top-4 right-3 flex items-center gap-1 text-[10px] font-bold text-emerald-900 bg-white/80 backdrop-blur-xs px-1.5 py-0.5 rounded shadow-xs">
                <MapPin className="w-3 h-3 text-emerald-700 fill-emerald-600" />
                <span>Gunung Salak</span>
              </div>

              {/* Green Boundary Polygon of Desa Warung Menteng */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 120" preserveAspectRatio="none">
                <polygon 
                  points="55,20 125,25 155,50 145,95 85,105 45,75 50,40" 
                  fill="#bbf7d0" 
                  stroke="#4ade80" 
                  strokeWidth="1.5"
                  className="opacity-80"
                />
              </svg>

              {/* Center Village Label */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <span className="text-[11px] font-bold text-emerald-950 block leading-tight drop-shadow-xs">
                    Desa Warung<br />Menteng
                  </span>
                </div>
              </div>

              {/* Google Watermark */}
              <div className="absolute bottom-1.5 left-2 text-[9px] font-semibold text-slate-500">
                <span className="text-blue-600 font-bold">G</span>
                <span className="text-red-500 font-bold">o</span>
                <span className="text-amber-500 font-bold">o</span>
                <span className="text-blue-600 font-bold">g</span>
                <span className="text-green-600 font-bold">l</span>
                <span className="text-red-500 font-bold">e</span>
              </div>

              {/* Zoom Controls (+ / -) */}
              <div className="absolute bottom-1.5 right-2 flex flex-col bg-white rounded shadow-xs border border-slate-200 text-slate-700">
                <button 
                  onClick={() => setMapModalOpen(true)}
                  className="p-1 hover:bg-slate-100 border-b border-slate-200"
                  aria-label="Zoom in"
                >
                  <Plus className="w-3 h-3" />
                </button>
                <button 
                  onClick={() => setMapModalOpen(true)}
                  className="p-1 hover:bg-slate-100"
                  aria-label="Zoom out"
                >
                  <Minus className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Button: Lihat Peta Lengkap */}
          <div className="pt-3">
            <button
              onClick={() => setMapModalOpen(true)}
              className="w-full py-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 rounded-lg text-xs font-semibold transition text-center shadow-xs"
            >
              Lihat Peta Lengkap
            </button>
          </div>
        </div>

        {/* ================= CARD 4: BERITA TERBARU ================= */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 flex flex-col justify-between hover:shadow-md transition">
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 text-slate-800 font-bold text-sm mb-3">
              <Newspaper className="w-4 h-4 text-emerald-700" />
              <span>Berita Terbaru</span>
            </div>

            {/* News List */}
            <div className="space-y-3">
              {newsItems.map((news) => (
                <div 
                  key={news.id}
                  onClick={() => onNavigate('informasi-berita')}
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-14 h-11 rounded-lg object-cover shrink-0 group-hover:opacity-90 transition shadow-xs"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-slate-900 leading-snug group-hover:text-emerald-700 transition line-clamp-2">
                      {news.title}
                    </h4>
                    <span className="text-[10px] text-slate-400 block mt-0.5">
                      {news.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Button: Lihat Semua Berita */}
          <div className="pt-3">
            <button
              onClick={() => onNavigate('informasi-berita')}
              className="w-full py-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 rounded-lg text-xs font-semibold transition text-center shadow-xs"
            >
              Lihat Semua Berita
            </button>
          </div>
        </div>

      </div>

      {/* Interactive Map Modal */}
      {mapModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl w-full max-w-4xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
            <div className="p-4 sm:p-6 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Map className="w-5 h-5 text-emerald-700" />
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Peta Wilayah Desa Warung Menteng</h3>
                  <p className="text-xs text-slate-500">Kecamatan Cijeruk, Kabupaten Bogor, Jawa Barat</p>
                </div>
              </div>
              <button
                onClick={() => setMapModalOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
              <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
                <iframe
                  title="Peta Desa Warung Menteng"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15850.55397441165!2d106.78768000000001!3d-6.691459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69cd181adbe4a5%3A0x6a0c0e7b7eb74b39!2sWarung%20Menteng%2C%20Kec.%20Cijeruk%2C%20Kabupaten%20Bogor%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-emerald-50 rounded-xl p-3 border border-emerald-200/60">
                  <span className="text-[11px] font-bold text-emerald-800 uppercase block">Titik Kantor Desa</span>
                  <p className="text-xs text-slate-700 mt-0.5 font-medium">Jl. Raya Cijeruk No. 12, Warung Menteng</p>
                </div>
                <div className="bg-teal-50 rounded-xl p-3 border border-teal-200/60">
                  <span className="text-[11px] font-bold text-teal-800 uppercase block">Kawasan Lereng Salak</span>
                  <p className="text-xs text-slate-700 mt-0.5 font-medium">Ketinggian 600 - 900 mdpl, Hawa Sejuk</p>
                </div>
                <div className="bg-cyan-50 rounded-xl p-3 border border-cyan-200/60">
                  <span className="text-[11px] font-bold text-cyan-800 uppercase block">Aksesibilitas</span>
                  <p className="text-xs text-slate-700 mt-0.5 font-medium">±15 Menit dari Exit Tol Bocimi Caringin</p>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end">
              <button
                onClick={() => setMapModalOpen(false)}
                className="bg-emerald-800 hover:bg-emerald-900 text-white font-semibold px-5 py-2 rounded-xl text-xs transition"
              >
                Tutup Peta
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
