import React from 'react';
import { Sparkles, Calendar, Users, Heart, BookOpen } from 'lucide-react';
import { BUDAYA_LIST } from '../../data/mockData';

export const BudayaAdatView: React.FC = () => {
  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-950 via-stone-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-12 shadow-md relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="bg-amber-500/30 text-amber-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-amber-400/30">
              Kearifan Lokal & Seni Tradisi
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-['Playfair_Display',serif]">
              Budaya & Adat Istiadat Desa Warung Menteng
            </h1>
            <p className="text-stone-200 text-sm sm:text-base leading-relaxed">
              Warisan tradisi luhur masyarakat Sunda yang tetap lestari di Desa Warung Menteng. Dari pesta adat panen Seren Taun, pagelaran tari Jaipong calung, perguruan silat Cimande, hingga kearifan gotong royong sambatan.
            </p>
          </div>
        </div>

        {/* Grid Budaya & Tradisi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BUDAYA_LIST.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="h-64 relative overflow-hidden bg-slate-100">
                  <img
                    src={item.fotoUrl}
                    alt={item.nama}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
                    {item.kategori}
                  </span>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <h3 className="text-xl font-extrabold text-slate-900 leading-snug">
                    {item.nama}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-amber-800 bg-amber-50 p-2.5 rounded-xl border border-amber-200/60 font-semibold">
                    <Calendar className="w-4 h-4 shrink-0 text-amber-600" />
                    <span>Waktu: {item.waktuPelaksanaan}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.deskripsi}
                  </p>

                  <div className="pt-2 text-xs text-slate-500">
                    <span className="font-bold text-slate-700">Pelaku & Pegiat Seni:</span> {item.pelaku}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
