import React from 'react';
import { Fish, Droplets, MapPin, Phone, Award, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import { PERIKANAN_LIST } from '../../data/mockData';

export const PotensiPerikananView: React.FC = () => {
  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-950 via-teal-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-md relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="bg-cyan-500/30 text-cyan-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-cyan-400/30">
              Komoditas Primadona Desa
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-['Playfair_Display',serif]">
              Potensi Perikanan Air Tawar Warung Menteng
            </h1>
            <p className="text-cyan-100 text-sm sm:text-base leading-relaxed">
              Sentra budidaya ikan air tawar kolam air deras berair jernih dari mata air Gunung Salak. Menghasilkan ikan nila merah, mas sinyonya, dan gurame soang berkadar protein tinggi, gurih tanpa bau lumpur, yang memasok pasar Jabodetabek.
            </p>
          </div>
        </div>

        {/* Keunggulan Sistem Air Deras */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-6 font-['Playfair_Display',serif] text-center">
            Mengapa Ikan Kolam Air Deras Warung Menteng Unggul?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-cyan-50/60 rounded-2xl border border-cyan-100 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-cyan-600 text-white flex items-center justify-center">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Air Pegunungan Mengalir 24 Jam</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sumber air langsung dari Gunung Salak dengan kadar oksigen terlarut tinggi, membuat ikan terus bergerak lincah dan bertekstur daging padat kenyal.
              </p>
            </div>

            <div className="p-5 bg-emerald-50/60 rounded-2xl border border-emerald-100 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Daging Gurih & Tidak Bau Lumpur</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sirkulasi air tanpa endapan lumpur menjadikan cita rasa ikan manis alami, sangat diminati restoran seafood dan pasar swalayan.
              </p>
            </div>

            <div className="p-5 bg-teal-50/60 rounded-2xl border border-teal-100 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Kapasitas Panen 20+ Ton/Bulan</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dikelola oleh 8 Kelompok Pembudidaya Ikan (POKDAKAN) profesional binaan BUMDes dan Dinas Perikanan Kabupaten Bogor.
              </p>
            </div>
          </div>
        </div>

        {/* List Komoditas Perikanan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PERIKANAN_LIST.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="h-56 relative overflow-hidden bg-slate-100">
                  <img
                    src={item.fotoUrl}
                    alt={item.namaKomoditas}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-cyan-900/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
                    {item.namaKelompok}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-extrabold text-slate-900 leading-snug">
                    {item.namaKomoditas}
                  </h3>

                  <div className="space-y-1.5 text-xs text-slate-600 pt-1">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                      <span>{item.lokasiBudidaya}</span>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                      <span className="text-[11px] font-bold text-slate-500 block">Jenis Kolam:</span>
                      <span className="font-medium text-slate-800">{item.jenisKolam}</span>
                    </div>
                    <div className="p-2.5 bg-cyan-50 rounded-xl border border-cyan-100">
                      <span className="text-[11px] font-bold text-cyan-800 block">Kapasitas Panen:</span>
                      <span className="font-bold text-cyan-900">{item.kapasitasPanen}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
                    {item.deskripsi}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href={`https://wa.me/6281233221100?text=Halo%20POKDAKAN%20Desa%20Warung%20Menteng,%20saya%20tertarik%20dengan%20kemitraan%20ikan%20air%20tawar%20${encodeURIComponent(item.namaKomoditas)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-cyan-700 hover:bg-cyan-800 text-white font-bold rounded-xl text-xs transition flex items-center justify-center gap-2 shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Kemitraan & Pemesanan Ikan</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
