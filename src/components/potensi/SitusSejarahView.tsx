import React from 'react';
import { Landmark, MapPin, Clock, ShieldCheck, User } from 'lucide-react';
import { SITUS_SEJARAH_LIST } from '../../data/mockData';

export const SitusSejarahView: React.FC = () => {
  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-stone-900 via-amber-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-md relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="bg-stone-500/30 text-amber-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-stone-400/30">
              Cagar Budaya & Sejarah
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-['Playfair_Display',serif]">
              Situs Sejarah & Cagar Budaya Desa Warung Menteng
            </h1>
            <p className="text-stone-200 text-sm sm:text-base leading-relaxed">
              Jejak peninggalan peradaban masa lampau di kaki Gunung Salak: Batu Dakon Megalitikum zaman prasejarah, mata air keramat Cikahuripan, dan petilasan sesepuh pendiri desa.
            </p>
          </div>
        </div>

        {/* Grid Situs Sejarah */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SITUS_SEJARAH_LIST.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="h-56 relative overflow-hidden bg-slate-100">
                  <img
                    src={item.fotoUrl}
                    alt={item.nama}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-md text-amber-200 text-xs font-bold px-3 py-1 rounded-full font-mono">
                    {item.periode}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-extrabold text-slate-900 leading-snug">
                    {item.nama}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>{item.lokasi}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                    {item.deskripsi}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-700 flex items-center gap-2">
                  <User className="w-4 h-4 text-amber-700 shrink-0" />
                  <span><strong>Juru Kunci:</strong> {item.juruKunci}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
