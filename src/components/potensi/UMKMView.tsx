import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Search, 
  Star, 
  MapPin, 
  Phone, 
  Send, 
  Filter, 
  Sparkles,
  ArrowRight,
  ExternalLink,
  Tag
} from 'lucide-react';
import { UMKMItem, UMKMKategori } from '../../types';
import { getStoredUMKM } from '../../utils/storage';

export const UMKMView: React.FC<{ initialCategory?: UMKMKategori | 'semua' }> = ({ initialCategory = 'semua' }) => {
  const [umkmList, setUmkmList] = useState<UMKMItem[]>([]);
  const [selectedKategori, setSelectedKategori] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProductModal, setActiveProductModal] = useState<UMKMItem | null>(null);

  useEffect(() => {
    setUmkmList(getStoredUMKM());
  }, []);

  const kategoriTabs = [
    { key: 'semua', label: 'Semua Produk' },
    { key: 'makanan-minuman', label: 'Makanan & Minuman' },
    { key: 'kerajinan', label: 'Kerajinan' },
    { key: 'produk-lainnya', label: 'Produk Lokal Lainnya' }
  ];

  const filtered = umkmList.filter(item => {
    const matchCategory = selectedKategori === 'semua' || item.kategori === selectedKategori;
    const matchSearch = item.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.deskripsi.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.pemilik.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const generateWaLink = (item: UMKMItem) => {
    const text = encodeURIComponent(
      `Halo Bapak/Ibu ${item.pemilik}, saya melihat produk "${item.nama}" di Website Resmi Desa Warung Menteng. Saya tertarik untuk memesan / menanyakan ketersediaan produk. Terima kasih.`
    );
    return `https://wa.me/${item.kontakWA}?text=${text}`;
  };

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-950 via-amber-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-md relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="bg-amber-500/30 text-amber-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-amber-400/30">
              Perekonomian & Kerakyatan
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-['Playfair_Display',serif]">
              UMKM & Produk Lokal Desa Warung Menteng
            </h1>
            <p className="text-amber-100 text-sm sm:text-base leading-relaxed">
              Etalase produk karya warga lokal Desa Warung Menteng: Kopi Robusta Menteng, Madu Hutan Murni, Keripik Balado, Olahan Ikan Nila, Anyaman Bambu, hingga Pupuk Organik Mandiri.
            </p>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Subkategori Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1">
              {kategoriTabs.map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setSelectedKategori(tab.key)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition whitespace-nowrap ${
                    selectedKategori === tab.key
                      ? 'bg-amber-700 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Cari produk UMKM..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-600 focus:bg-white"
              />
            </div>
          </div>

          <div className="text-xs text-slate-500 font-medium">
            Menampilkan <strong>{filtered.length}</strong> produk UMKM lokal
          </div>
        </div>

        {/* Grid Produk */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="h-48 relative overflow-hidden bg-slate-100">
                  <img
                    src={item.fotoUrl}
                    alt={item.nama}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <span className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    {item.kategoriLabel}
                  </span>
                  {item.unggulan && (
                    <span className="absolute top-2.5 right-2.5 bg-amber-500 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full shadow">
                      Unggulan
                    </span>
                  )}
                </div>

                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-extrabold text-emerald-700 font-mono text-sm">
                      {item.harga}
                    </span>
                    <span className="flex items-center gap-0.5 text-slate-700 font-bold text-[11px]">
                      <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                      <span>{item.rating}</span>
                    </span>
                  </div>

                  <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-amber-800 transition line-clamp-2 leading-snug">
                    {item.nama}
                  </h3>

                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {item.deskripsi}
                  </p>

                  <div className="pt-2 text-[11px] text-slate-500 space-y-0.5 border-t border-slate-100">
                    <p><strong>Pengrajin/Toko:</strong> {item.pemilik}</p>
                    <p className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                      <span>{item.alamat}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 pt-0 space-y-2">
                <a
                  href={generateWaLink(item)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs transition flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Pesan via WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
