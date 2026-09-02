import React, { useState } from 'react';
import { 
  FileSpreadsheet, 
  TrendingUp, 
  DollarSign, 
  PieChart, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowDownCircle, 
  ArrowUpCircle,
  Download,
  Info
} from 'lucide-react';
import { 
  APBDES_RINGKASAN, 
  APBDES_PENDAPATAN, 
  APBDES_BELANJA 
} from '../../data/mockData';

export const AnggaranDesaView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'semua' | 'pendapatan' | 'belanja'>('semua');

  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);
  };

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 text-white rounded-3xl p-8 sm:p-12 shadow-md relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="bg-emerald-500/30 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-400/30">
              Keterbukaan Informasi Publik
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-['Playfair_Display',serif]">
              Transparansi APBDes Tahun {APBDES_RINGKASAN.tahun}
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Laporan realisasi Anggaran Pendapatan dan Belanja Desa (APBDes) Warung Menteng. Bentuk akuntabilitas dan komitmen transparansi pengelolaan Dana Desa, ADD, PADes, dan Bantuan Keuangan untuk kesejahteraan masyarakat.
            </p>
          </div>
        </div>

        {/* Ringkasan Anggaran Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase">Total Pendapatan Desa</span>
              <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <ArrowDownCircle className="w-5 h-5" />
              </div>
            </div>
            <h3 className="text-2xl font-black text-slate-900">
              {formatRupiah(APBDES_RINGKASAN.totalPendapatan)}
            </h3>
            <p className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Target APBDes TA {APBDES_RINGKASAN.tahun}</span>
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase">Total Rencana Belanja</span>
              <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center">
                <ArrowUpCircle className="w-5 h-5" />
              </div>
            </div>
            <h3 className="text-2xl font-black text-slate-900">
              {formatRupiah(APBDES_RINGKASAN.totalBelanja)}
            </h3>
            <p className="text-xs text-slate-500">
              Alokasi 5 Bidang Pembangunan & Layanan
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase">Surplus / Pembiayaan Netto</span>
              <div className="w-8 h-8 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
            </div>
            <h3 className="text-2xl font-black text-cyan-700">
              {formatRupiah(APBDES_RINGKASAN.pembiayaanNetto)}
            </h3>
            <p className="text-xs text-cyan-600 font-semibold">
              Status: Anggaran Berimbang & Sehat
            </p>
          </div>
        </div>

        {/* Filter Tab */}
        <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
          <button
            onClick={() => setActiveTab('semua')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
              activeTab === 'semua' ? 'bg-emerald-700 text-white' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Semua Rincian
          </button>
          <button
            onClick={() => setActiveTab('pendapatan')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
              activeTab === 'pendapatan' ? 'bg-emerald-700 text-white' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Rincian Pendapatan Desa
          </button>
          <button
            onClick={() => setActiveTab('belanja')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
              activeTab === 'belanja' ? 'bg-emerald-700 text-white' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Rincian Belanja 5 Bidang
          </button>
        </div>

        {/* Tabel Pendapatan */}
        {(activeTab === 'semua' || activeTab === 'pendapatan') && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <h3 className="text-lg font-bold text-slate-900">1. Pendapatan Desa Warung Menteng TA {APBDES_RINGKASAN.tahun}</h3>
              </div>
              <span className="text-xs bg-emerald-50 text-emerald-800 font-bold px-3 py-1 rounded-full border border-emerald-200">
                Penerimaan Transfer & PADes
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 border-b border-slate-200">
                    <th className="p-3.5 rounded-l-xl font-bold">Uraian Sumber Pendapatan</th>
                    <th className="p-3.5 font-bold">Anggaran (Rp)</th>
                    <th className="p-3.5 font-bold">Realisasi (Rp)</th>
                    <th className="p-3.5 rounded-r-xl font-bold">Capaian Progres</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {APBDES_PENDAPATAN.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition">
                      <td className="p-3.5 font-medium text-slate-800">{item.uraian}</td>
                      <td className="p-3.5 font-mono text-slate-700">{formatRupiah(item.anggaran)}</td>
                      <td className="p-3.5 font-mono font-bold text-emerald-700">{formatRupiah(item.realisasi)}</td>
                      <td className="p-3.5">
                        <div className="flex items-center gap-2">
                          <div className="w-24 sm:w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-emerald-600 rounded-full" 
                              style={{ width: `${Math.min(item.persentase, 100)}%` }}
                            />
                          </div>
                          <span className="text-xs font-bold text-slate-700 font-mono">{item.persentase}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tabel Belanja */}
        {(activeTab === 'semua' || activeTab === 'belanja') && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <h3 className="text-lg font-bold text-slate-900">2. Belanja Desa (5 Bidang Utama) TA {APBDES_RINGKASAN.tahun}</h3>
              </div>
              <span className="text-xs bg-rose-50 text-rose-800 font-bold px-3 py-1 rounded-full border border-rose-200">
                Pembangunan, Pemberdayaan & Operasional
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 border-b border-slate-200">
                    <th className="p-3.5 rounded-l-xl font-bold">Bidang Belanja</th>
                    <th className="p-3.5 font-bold">Alokasi Anggaran (Rp)</th>
                    <th className="p-3.5 font-bold">Realisasi (Rp)</th>
                    <th className="p-3.5 rounded-r-xl font-bold">Progres Realisasi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {APBDES_BELANJA.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition">
                      <td className="p-3.5 font-medium text-slate-800">{item.uraian}</td>
                      <td className="p-3.5 font-mono text-slate-700">{formatRupiah(item.anggaran)}</td>
                      <td className="p-3.5 font-mono font-bold text-rose-700">{formatRupiah(item.realisasi)}</td>
                      <td className="p-3.5">
                        <div className="flex items-center gap-2">
                          <div className="w-24 sm:w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-rose-600 rounded-full" 
                              style={{ width: `${Math.min(item.persentase, 100)}%` }}
                            />
                          </div>
                          <span className="text-xs font-bold text-slate-700 font-mono">{item.persentase}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Catatan Transparansi & Banner Pengawasan */}
        <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-700 space-y-0.5">
              <p className="font-bold text-slate-900">Keterbukaan Publik Sesuai UU No. 6 Tahun 2014 tentang Desa</p>
              <p>Masyarakat dapat menyampaikan masukan atau pengawasan terkait penggunaan anggaran melalui menu Aspirasi & Pengaduan atau datang langsung ke Balai Desa.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
