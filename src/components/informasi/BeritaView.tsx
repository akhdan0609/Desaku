import React, { useState, useEffect } from 'react';
import { 
  Newspaper, 
  Search, 
  Calendar, 
  Eye, 
  User, 
  Tag, 
  ArrowRight, 
  Share2, 
  MessageSquare,
  Send,
  X
} from 'lucide-react';
import { BeritaItem } from '../../types';
import { getStoredBerita } from '../../utils/storage';

export const BeritaView: React.FC<{ selectedBeritaId?: string }> = ({ selectedBeritaId }) => {
  const [beritaList, setBeritaList] = useState<BeritaItem[]>([]);
  const [selectedKategori, setSelectedKategori] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeBerita, setActiveBerita] = useState<BeritaItem | null>(null);

  // Komentar state
  const [comments, setComments] = useState<{ [id: string]: Array<{ nama: string; komentar: string; waktu: string }> }>({
    'berita-1': [
      { nama: 'H. Cecep (Ketua RW 05)', komentar: 'Alhamdulillah, sekarang akses bawa pakan dan bibit ikan jadi sangat cepat dan aman.', waktu: '28 Agustus 2026' }
    ]
  });
  const [namaKomentar, setNamaKomentar] = useState('');
  const [isiKomentar, setIsiKomentar] = useState('');

  useEffect(() => {
    const list = getStoredBerita();
    setBeritaList(list);

    if (selectedBeritaId) {
      const found = list.find(b => b.id === selectedBeritaId);
      if (found) setActiveBerita(found);
    }
  }, [selectedBeritaId]);

  const kategoriTabs = ['Semua', 'Pemerintahan', 'Pembangunan', 'Kemasyarakatan', 'Kesehatan', 'Pertanian'];

  const filtered = beritaList.filter(item => {
    const matchCat = selectedKategori === 'Semua' || item.kategori === selectedKategori;
    const matchSearch = item.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.ringkasan.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.isiLengkap.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeBerita || !namaKomentar.trim() || !isiKomentar.trim()) return;

    const currentComments = comments[activeBerita.id] || [];
    setComments({
      ...comments,
      [activeBerita.id]: [
        ...currentComments,
        {
          nama: namaKomentar,
          komentar: isiKomentar,
          waktu: 'Baru saja'
        }
      ]
    });
    setNamaKomentar('');
    setIsiKomentar('');
  };

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-950 via-teal-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-md relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="bg-emerald-500/30 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-400/30">
              Warta & Kabar Terkini
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-['Playfair_Display',serif]">
              Berita Desa Warung Menteng
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Informasi terkini mengenai kegiatan pemerintahan, proyek pembangunan infrastruktur, pemberdayaan ekonomi warga, posyandu, dan kemasyarakatan.
            </p>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1">
              {kategoriTabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setSelectedKategori(tab)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition whitespace-nowrap ${
                    selectedKategori === tab
                      ? 'bg-emerald-700 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Cari berita desa..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
              />
            </div>
          </div>
        </div>

        {/* Grid Berita */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(item => (
            <div
              key={item.id}
              onClick={() => setActiveBerita(item)}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition duration-200 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="h-52 relative overflow-hidden bg-slate-100">
                  <img
                    src={item.fotoUrl}
                    alt={item.judul}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-emerald-800/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                    {item.kategori}
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.tanggal}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" />
                      <span>{item.dibaca}x</span>
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-emerald-700 transition leading-snug line-clamp-2">
                    {item.judul}
                  </h3>

                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                    {item.ringkasan}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:underline">
                <span>Baca Berita Lengkap</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Modal Baca Berita Lengkap */}
        {activeBerita && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 space-y-6 animate-in fade-in zoom-in-95 duration-150 relative">
              <button
                onClick={() => setActiveBerita(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition"
              >
                <X className="w-4 h-4" />
              </button>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-0.5 rounded-full">
                    {activeBerita.kategori}
                  </span>
                  <span className="text-xs text-slate-400">• {activeBerita.tanggal}</span>
                  <span className="text-xs text-slate-400">• Penulis: {activeBerita.penulis}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug font-['Playfair_Display',serif]">
                  {activeBerita.judul}
                </h2>
              </div>

              <div className="rounded-2xl overflow-hidden h-64 sm:h-80 bg-slate-100">
                <img
                  src={activeBerita.fotoUrl}
                  alt={activeBerita.judul}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="prose prose-sm max-w-none text-slate-700 text-xs sm:text-sm leading-relaxed space-y-3 whitespace-pre-line">
                {activeBerita.isiLengkap}
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                {activeBerita.tags.map((t, i) => (
                  <span key={i} className="text-[11px] bg-slate-100 text-slate-600 px-2.5 py-1 rounded-lg">
                    #{t}
                  </span>
                ))}
              </div>

              {/* Komentar Warga */}
              <div className="pt-4 border-t border-slate-200 space-y-4">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-emerald-700" />
                  <span>Tanggapan & Komentar Warga ({(comments[activeBerita.id] || []).length})</span>
                </h4>

                <div className="space-y-3">
                  {(comments[activeBerita.id] || []).map((c, i) => (
                    <div key={i} className="p-3 bg-slate-50 rounded-xl text-xs space-y-1">
                      <div className="flex items-center justify-between font-bold text-slate-800">
                        <span>{c.nama}</span>
                        <span className="text-[10px] text-slate-400">{c.waktu}</span>
                      </div>
                      <p className="text-slate-600">{c.komentar}</p>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleAddComment} className="space-y-2 pt-2">
                  <input
                    type="text"
                    required
                    value={namaKomentar}
                    onChange={e => setNamaKomentar(e.target.value)}
                    placeholder="Nama Anda..."
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                  />
                  <textarea
                    required
                    rows={2}
                    value={isiKomentar}
                    onChange={e => setIsiKomentar(e.target.value)}
                    placeholder="Tulis tanggapan positif Anda..."
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition"
                  >
                    <Send className="w-3 h-3" />
                    <span>Kirim Tanggapan</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
