import React, { useState } from 'react';
import { 
  FileText, 
  Users, 
  Heart, 
  Truck, 
  ChevronRight, 
  ShieldCheck, 
  FileCheck2, 
  HeartHandshake, 
  ArrowRight,
  Sparkles,
  Info,
  Clock,
  MapPin,
  Phone
} from 'lucide-react';
import { PageRoute } from '../../types';
import pelayananHeroImage from '../../assets/images/pelayanan_hero_kantor_desa_1788325727506.jpg';

interface PelayananDesaViewProps {
  onNavigate?: (page: PageRoute, params?: any) => void;
}

export const PelayananDesaView: React.FC<PelayananDesaViewProps> = ({ onNavigate }) => {
  const handleNav = (page: PageRoute, params?: any) => {
    if (onNavigate) {
      onNavigate(page, params);
    }
  };

  const layananCards = [
    {
      id: 'surat-keterangan',
      title: 'SURAT KETERANGAN',
      desc: 'Layanan surat keterangan untuk berbagai keperluan administrasi warga dan usaha.',
      items: [
        'Surat Keterangan Domisili Warga',
        'Surat Keterangan Domisili Usaha',
        'Surat Keterangan Tidak Mampu (SKTM)'
      ],
      icon: FileText,
      page: 'pelayanan-surat-keterangan' as PageRoute
    },
    {
      id: 'layanan-pernikahan',
      title: 'LAYANAN PERNIKAHAN',
      desc: 'Layanan administrasi pernikahan sesuai ketentuan yang berlaku.',
      items: [
        'Formulir N1 - N4',
        'Surat Pengantar Nikah'
      ],
      icon: Heart,
      page: 'pelayanan-layanan-pernikahan' as PageRoute
    },
    {
      id: 'pindah-datang',
      title: 'PINDAH DATANG',
      desc: 'Layanan perpindahan penduduk bagi warga yang pindah datang ke atau dari Desa Warung Menteng.',
      items: [],
      icon: Truck,
      page: 'pelayanan-pindah-datang' as PageRoute
    }
  ];

  return (
    <div className="bg-[#f8faf9] min-h-screen pb-16 overflow-x-hidden">
      
      {/* 1. HERO BANNER WITH OFFICE ILLUSTRATION & FLOATING BADGE BAR */}
      <div className="relative w-full overflow-hidden bg-slate-900">
        <div className="relative w-full min-h-[380px] sm:min-h-[420px] md:min-h-[460px] lg:h-[480px] flex items-center">
          <img
            src={pelayananHeroImage}
            alt="Kantor Desa Warung Menteng"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Subtle soft gradient overlay so text is crisp and clear across all screen sizes */}
          <div className="relative w-full z-10 bg-gradient-to-r from-black/85 via-black/55 to-black/30 sm:to-transparent py-8 sm:py-10 md:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
              <div className="max-w-xl space-y-3.5 sm:space-y-4 text-white">
                <div className="space-y-1 sm:space-y-2">
                  <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
                    Pelayanan Desa
                  </h1>
                  <p className="text-xs sm:text-sm md:text-base text-slate-100 font-normal leading-relaxed max-w-lg drop-shadow-sm">
                    Akses berbagai layanan administrasi desa dengan mudah, cepat, dan transparan.
                  </p>
                </div>

                {/* Floating Feature Badges Container inside Hero */}
                <div className="pt-2 sm:pt-3">
                  <div className="bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-2.5 sm:p-4 border border-white/40 shadow-xl max-w-2xl text-slate-800">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 items-center">
                      
                      {/* Feature 1 */}
                      <div className="flex items-center gap-2 sm:gap-2.5 p-1">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-emerald-100 text-[#0f4d38] flex items-center justify-center shrink-0">
                          <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>
                        <span className="text-[10px] sm:text-xs font-bold text-slate-800 leading-tight">
                          Melayani<br className="hidden sm:inline" /> Masyarakat
                        </span>
                      </div>

                      {/* Feature 2 */}
                      <div className="flex items-center gap-2 sm:gap-2.5 p-1 sm:border-l sm:border-slate-200 sm:pl-3">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-emerald-100 text-[#0f4d38] flex items-center justify-center shrink-0">
                          <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>
                        <span className="text-[10px] sm:text-xs font-bold text-slate-800 leading-tight">
                          Cepat & Mudah<br className="hidden sm:inline" /> Tanpa Ribet
                        </span>
                      </div>

                      {/* Feature 3 */}
                      <div className="flex items-center gap-2 sm:gap-2.5 p-1 sm:border-l sm:border-slate-200 sm:pl-3">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-emerald-100 text-[#0f4d38] flex items-center justify-center shrink-0">
                          <FileCheck2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>
                        <span className="text-[10px] sm:text-xs font-bold text-slate-800 leading-tight">
                          Transparan &<br className="hidden sm:inline" /> Akuntabel
                        </span>
                      </div>

                      {/* Feature 4 */}
                      <div className="flex items-center gap-2 sm:gap-2.5 p-1 sm:border-l sm:border-slate-200 sm:pl-3">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-emerald-100 text-[#0f4d38] flex items-center justify-center shrink-0">
                          <HeartHandshake className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>
                        <span className="text-[10px] sm:text-xs font-bold text-slate-800 leading-tight">
                          Pelayanan<br className="hidden sm:inline" /> Sepenuh Hati
                        </span>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. BREADCRUMBS & SECTION SUBTITLE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-5 pb-2 sm:pb-3">
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium flex-wrap">
            <button 
              onClick={() => handleNav('beranda')}
              className="hover:text-[#0f4d38] transition cursor-pointer min-h-[32px] inline-flex items-center"
            >
              Beranda
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-[#0f4d38] font-bold">Pelayanan Desa</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600">
            Pusat permohonan surat administrasi dan layanan terpadu warga
          </p>
        </div>
      </div>

      {/* 3. FOUR MAIN SERVICE CARDS (2x2 GRID AS IN REFERENCE IMAGE) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-3 sm:pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {layananCards.map((card) => {
            const Icon = card.icon;
            return (
              <div 
                key={card.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-5 sm:p-7 flex flex-col justify-between hover:border-emerald-300 hover:shadow-md transition duration-200 active:scale-[0.99]"
              >
                <div className="flex items-start gap-3.5 sm:gap-5">
                  {/* Circular Light-Green Icon Badge */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-emerald-50 border border-emerald-200/70 flex items-center justify-center text-[#0f4d38] shrink-0 shadow-xs">
                    <Icon className="w-5 h-5 sm:w-7 sm:h-7 stroke-[1.8]" />
                  </div>

                  {/* Text Content */}
                  <div className="space-y-2 flex-1">
                    <h2 className="text-sm sm:text-base md:text-lg font-extrabold text-[#0f4d38] tracking-wide uppercase">
                      {card.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {card.desc}
                    </p>

                    {/* Bullet list if available */}
                    {card.items.length > 0 && (
                      <ul className="space-y-1.5 pt-1">
                        {card.items.map((item, idx) => (
                          <li key={idx} className="flex items-start sm:items-center gap-2 text-xs sm:text-sm text-slate-800 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0 mt-1.5 sm:mt-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Bottom Action Button (Selengkapnya >) - Green Button with Full Mobile Touch target */}
                <div className="pt-4 sm:pt-5 mt-4 border-t border-slate-100 flex items-center justify-start">
                  <button
                    onClick={() => handleNav(card.page)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-2.5 min-h-[44px] rounded-xl bg-[#0f4d38] hover:bg-[#0b3b2b] active:bg-[#082a1f] text-white text-xs sm:text-sm font-bold transition duration-150 cursor-pointer shadow-xs group"
                  >
                    <span>Selengkapnya</span>
                    <ChevronRight className="w-4 h-4 text-emerald-200 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. INFORMASI JADWAL PELAYANAN & KANTOR DESA FOOTNOTE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10">
        <div className="bg-[#0f4d38] text-white rounded-2xl p-5 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 shadow-md border border-emerald-800">
          <div className="space-y-1.5 sm:space-y-2 text-center md:text-left w-full md:w-auto">
            <h3 className="text-base sm:text-xl font-bold text-white">
              Jam Operasional Pelayanan Kantor Desa
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-xl mx-auto md:mx-0">
              Senin s.d. Jumat pukul 08.00 - 15.30 WIB. Permohonan surat online dapat diajukan 24 jam dan akan diproses pada jam kerja.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={() => handleNav('pelayanan-surat-keterangan')}
              className="w-full sm:w-auto px-4 py-2.5 min-h-[44px] bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl transition cursor-pointer shadow-xs flex items-center justify-center gap-1.5"
            >
              <FileCheck2 className="w-4 h-4" />
              <span>Ajukan Surat Sekarang</span>
            </button>
            <button
              onClick={() => handleNav('pelayanan-cek-status')}
              className="w-full sm:w-auto px-4 py-2.5 min-h-[44px] bg-white text-emerald-950 font-bold text-xs sm:text-sm rounded-xl hover:bg-emerald-50 active:bg-slate-100 transition cursor-pointer shadow-xs flex items-center justify-center"
            >
              Cek Status Surat
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
