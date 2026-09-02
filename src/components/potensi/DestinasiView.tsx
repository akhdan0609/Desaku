import React, { useState } from 'react';
import { 
  Landmark, 
  MapPin, 
  Clock, 
  Ticket, 
  Phone, 
  Star, 
  Compass, 
  Check, 
  ArrowRight,
  ExternalLink 
} from 'lucide-react';
import { DESTINASI_LIST } from '../../data/mockData';
import { DestinasiItem } from '../../types';

export const DestinasiView: React.FC = () => {
  const [selectedKategori, setSelectedKategori] = useState<string>('Semua');
  const [activeModalDestinasi, setActiveModalDestinasi] = useState<DestinasiItem | null>(null);

  const kategoriTabs = ['Semua', 'Wisata Alam', 'Agrowisata', 'Rekreasi Keluarga'];

  const filteredList = selectedKategori === 'Semua'
    ? DESTINASI_LIST
    : DESTINASI_LIST.filter(d => d.kategori === selectedKategori);

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-950 via-emerald-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-md relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="bg-teal-500/30 text-teal-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-teal-400/30">
              Ekowisata & Rekreasi
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-['Playfair_Display',serif]">
              Destinasi Wisata Desa Warung Menteng
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Jelajahi keindahan panorama alam lereng Gunung Salak, gemercik Curug Pelangi, perkebunan salak & kopi berhawa sejuk, hingga sensasi river tubing di Sungai Cimenteng.
            </p>
          </div>
        </div>

        {/* Filter Kategori Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {kategoriTabs.map(tab => (
            <button
              key={tab}
              onClick={() => setSelectedKategori(tab)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition whitespace-nowrap ${
                selectedKategori === tab
                  ? 'bg-teal-700 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab === 'Semua' ? 'Semua Destinasi' : tab}
            </button>
          ))}
        </div>

        {/* Grid Destinasi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredList.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="h-64 sm:h-72 relative overflow-hidden bg-slate-100">
                  <img
                    src={item.fotoUrl}
                    alt={item.nama}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
                      {item.kategori}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md text-slate-800 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span>{item.rating} / 5.0</span>
                  </div>
                </div>

                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 leading-snug">
                      {item.nama}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>{item.lokasi}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {item.deskripsi}
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                    <div className="p-2.5 bg-slate-50 rounded-xl">
                      <span className="text-slate-400 block text-[11px]">Jam Operasional:</span>
                      <span className="font-bold text-slate-700">{item.jamBuka}</span>
                    </div>
                    <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-100">
                      <span className="text-emerald-800 block text-[11px]">Tiket Masuk (HTM):</span>
                      <span className="font-bold text-emerald-900">{item.htm}</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Fasilitas Wisata:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.fasilitas.map((f, i) => (
                        <span key={i} className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg">
                          • {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-0 flex items-center gap-3">
                <button
                  onClick={() => setActiveModalDestinasi(item)}
                  className="flex-1 py-3 bg-teal-700 hover:bg-teal-800 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Detail & Kontak Pengelola</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Detail Destinasi */}
        {activeModalDestinasi && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-5 max-h-[90vh] overflow-y-auto">
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <img
                  src={activeModalDestinasi.fotoUrl}
                  alt={activeModalDestinasi.nama}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 bg-slate-900/80 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {activeModalDestinasi.kategori}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-extrabold text-slate-900">{activeModalDestinasi.nama}</h3>
                <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-teal-600" />
                  <span>{activeModalDestinasi.lokasi}</span>
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {activeModalDestinasi.deskripsi}
              </p>

              <div className="p-4 bg-teal-50 rounded-2xl border border-teal-100 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Harga Tiket:</span>
                  <span className="font-bold text-teal-900">{activeModalDestinasi.htm}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Jam Kunjungan:</span>
                  <span className="font-bold text-slate-800">{activeModalDestinasi.jamBuka}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Kontak Pengelola:</span>
                  <span className="font-bold text-teal-800">{activeModalDestinasi.kontakPengelola}</span>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setActiveModalDestinasi(null)}
                  className="flex-1 py-2.5 bg-slate-900 text-white font-bold rounded-xl text-xs hover:bg-slate-800"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
