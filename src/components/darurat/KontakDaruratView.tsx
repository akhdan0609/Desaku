import React, { useState } from 'react';
import { 
  PhoneCall, 
  ShieldAlert, 
  Flame, 
  HeartPulse, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Clock, 
  AlertOctagon, 
  Zap,
  Radio,
  ExternalLink
} from 'lucide-react';
import { KONTAK_DARURAT_LIST } from '../../data/mockData';
import { KontakDaruratItem } from '../../types';

export const KontakDaruratView: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('Semua');

  const filterTabs = ['Semua', 'Medis & Ambulans', 'Keamanan & TNI/Polri', 'Bencana & Kebakaran', 'Utilitas Publik'];

  const filtered = selectedFilter === 'Semua'
    ? KONTAK_DARURAT_LIST
    : KONTAK_DARURAT_LIST.filter(k => {
        if (selectedFilter === 'Medis & Ambulans') return k.instansi.includes('Ambulans') || k.instansi.includes('Puskesmas') || k.instansi.includes('Bidan');
        if (selectedFilter === 'Keamanan & TNI/Polri') return k.instansi.includes('Bhabinkamtibmas') || k.instansi.includes('Babinsa') || k.instansi.includes('Pos Kamling');
        if (selectedFilter === 'Bencana & Kebakaran') return k.instansi.includes('Damkar') || k.instansi.includes('BPBD');
        if (selectedFilter === 'Utilitas Publik') return k.instansi.includes('PLN') || k.instansi.includes('Pos');
        return true;
      });

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-rose-950 via-red-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-md relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="bg-rose-500/30 text-rose-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-rose-400/30 flex items-center gap-1.5 w-fit">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Panggilan Darurat Siaga 24 Jam</span>
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-['Playfair_Display',serif]">
              Kontak Darurat Desa Warung Menteng
            </h1>
            <p className="text-rose-100 text-sm sm:text-base leading-relaxed">
              Nomor darurat resmi terintegrasi: Ambulans Siaga Desa, Pemadam Kebakaran Sektor Ciawi/Cijeruk, BPBD Kab. Bogor, Bhabinkamtibmas, Babinsa, Puskesmas, dan PLN Gangguan.
            </p>
          </div>
        </div>

        {/* Info Box Siaga */}
        <div className="bg-white rounded-3xl p-6 border-l-4 border-rose-600 border-y border-r border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <AlertOctagon className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-slate-900">Panduan Menghubungi Panggilan Darurat</h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Sebutkan dengan tenang: <strong>1. Nama Pelapor</strong>, <strong>2. Jenis Kejadian</strong>, dan <strong>3. Alamat / Patokan Lokasi yang Jelas</strong>.
              </p>
            </div>
          </div>
          <span className="text-xs font-extrabold text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-200 shrink-0">
            Bebas Pulsa / Tarif Standar
          </span>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {filterTabs.map(tab => (
            <button
              key={tab}
              onClick={() => setSelectedFilter(tab)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition whitespace-nowrap ${
                selectedFilter === tab
                  ? 'bg-rose-700 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid Kontak Darurat */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-rose-300 transition duration-200 flex flex-col justify-between p-6 space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md">
                    {item.instansi}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-100">
                    <Clock className="w-3 h-3" />
                    <span>{item.siaga}</span>
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-extrabold text-slate-900 leading-snug">
                    {item.namaKontak}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                    <span className="line-clamp-1">{item.alamat}</span>
                  </p>
                </div>

                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                  <span className="text-[11px] text-slate-400 block font-semibold">Nomor Telepon:</span>
                  <div className="text-base font-black text-rose-700 font-mono tracking-wide">
                    {item.nomorTelepon}
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.keterangan}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-2">
                <a
                  href={`tel:${item.nomorTelepon}`}
                  className="w-full py-3 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-sm"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Panggil Sekarang</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
