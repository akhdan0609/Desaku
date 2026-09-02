import React from 'react';
import { History, Bookmark, Award, Clock, Sparkles } from 'lucide-react';
import { SEJARAH_DESA_DATA } from '../../data/mockData';

export const SejarahDesaView: React.FC = () => {
  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-900 via-stone-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-md relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="bg-amber-500/30 text-amber-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-amber-400/30">
              Napak Tilas & Asal Usul
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-['Playfair_Display',serif]">
              Sejarah Desa Warung Menteng
            </h1>
            <p className="text-stone-200 text-sm sm:text-base leading-relaxed">
              Menelusuri jejak sejarah berdirinya Desa Warung Menteng, asal muasal penamaan dari pohon buah menteng dan pos persinggahan niaga, hingga metamorfosis menjadi sentra agrowisata dan perikanan air tawar modern.
            </p>
          </div>
        </div>

        {/* Asal Usul Nama */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-xs uppercase tracking-wider">
                <Bookmark className="w-4 h-4" />
                <span>Etimologi & Cerita Rakyat</span>
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 font-['Playfair_Display',serif]">
                Asal Mula Nama "Warung Menteng"
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                {SEJARAH_DESA_DATA.ringkasan}
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Pohon Buah Menteng (<em>Baccaurea racemosa</em>) adalah tanaman endemik khas hutan hujan Jawa Barat yang menghasilkan buah berasa manis-asam segar bergerombol. Keberadaan warung kecil di bawah keteduhan pohon menteng tersebut menjadi titik kumpul strategis masyarakat sekitar sebelum menyusuri lereng Gunung Salak. Lambat laun, seluruh wilayah permukiman ini dinamai <strong>Desa Warung Menteng</strong>.
              </p>
            </div>

            <div className="lg:col-span-4 bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-200 text-center space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-amber-600 text-white flex items-center justify-center mx-auto shadow">
                <History className="w-8 h-8 text-amber-100" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Pohon Buah Menteng</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Simbol keteduhan, kesuburan, dan persaudaraan masyarakat Desa Warung Menteng sejak masa lampau hingga generasi kini.
              </p>
            </div>
          </div>
        </div>

        {/* Linimasa Kronologi */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider">
            <Clock className="w-4 h-4" />
            <span>Linimasa Perkembangan</span>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 font-['Playfair_Display',serif]">
            Tonggak Sejarah Desa dari Masa ke Masa
          </h2>

          <div className="relative border-l-2 border-emerald-200 pl-6 ml-4 space-y-8 mt-6">
            {SEJARAH_DESA_DATA.kronologi.map((krono, idx) => (
              <div key={idx} className="relative group">
                {/* Dot */}
                <div className="absolute -left-[33px] top-1.5 w-4 h-4 rounded-full bg-emerald-600 border-4 border-white shadow" />

                <div className="bg-slate-50 hover:bg-emerald-50/50 p-5 rounded-2xl border border-slate-100 transition space-y-2">
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full inline-block">
                    {krono.tahun}
                  </span>
                  <h3 className="text-base font-bold text-slate-900">
                    {krono.judul}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {krono.deskripsi}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Silsilah Kepala Desa */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider">
            <Award className="w-4 h-4" />
            <span>Kepemimpinan Desa</span>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 font-['Playfair_Display',serif]">
            Silsilah Kepala Desa Warung Menteng
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SEJARAH_DESA_DATA.silsilahKades.map((k, idx) => (
              <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-300 flex items-center justify-center font-bold text-xs shrink-0">
                  #{idx + 1}
                </div>
                <div>
                  <span className="text-[11px] font-bold text-emerald-700 block">{k.periode}</span>
                  <h4 className="text-sm font-bold text-slate-900">{k.nama}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
