import React, { useState } from 'react';
import { 
  Camera, 
  MapPin, 
  Calendar, 
  Tag, 
  Maximize2, 
  X, 
  GraduationCap, 
  Heart,
  Users
} from 'lucide-react';

interface FotoKKN {
  id: string;
  judul: string;
  kategori: string;
  tanggal: string;
  lokasi: string;
  deskripsi: string;
  fotoUrl: string;
}

export const KKNGaleriView: React.FC = () => {
  const [selectedKategori, setSelectedKategori] = useState('Semua');
  const [activeModalFoto, setActiveModalFoto] = useState<FotoKKN | null>(null);

  const daftarFotoKKN: FotoKKN[] = [
    {
      id: 'kkn-g-1',
      judul: 'Penyelenggaraan Rumah Belajar Ceria Bersama Anak-Anak Dusun Cimenteng',
      kategori: 'Pendidikan',
      tanggal: '10 Juli 2024',
      lokasi: 'Posko Dusun I Cimenteng',
      deskripsi: 'Kegiatan bimbingan belajar membaca, berhitung cepat, dan pengenalan sains interaktif yang disambut antusias oleh anak-anak usia SD.',
      fotoUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'kkn-g-2',
      judul: 'Workshop Desain Kemasan & Pemasaran Digital Produk Olahan Kopi Salak',
      kategori: 'UMKM & Ekonomi',
      tanggal: '18 Juli 2024',
      lokasi: 'Pendopo Balai Desa',
      deskripsi: 'Pelatihan pembuatan label produk modern, foto produk menggunakan smartphone, serta pendaftaran Google Maps Bisnis untuk KWT Melati.',
      fotoUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'kkn-g-3',
      judul: 'Penyuluhan Manajemen Kualitas Air Bersama Pokdakan Tirta Menteng',
      kategori: 'Perikanan',
      tanggal: '24 Juli 2024',
      lokasi: 'Kolam Budidaya Dusun I',
      deskripsi: 'Pengukuran pH air, suhu, dan oksigen terlarut (DO) serta diskusi formulasi pakan apung mandiri guna menekan biaya operasional.',
      fotoUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'kkn-g-4',
      judul: 'Aksi Bersih Aliran Sungai dan Sosialisasi Pemilahan Sampah Organik',
      kategori: 'Lingkungan',
      tanggal: '01 Agustus 2024',
      lokasi: 'Bantaran Sungai Dusun Pasir',
      deskripsi: 'Kerja bakti gotong royong pembersihan sampah plastik di saluran irigasi bersama Karang Taruna dan warga Dusun II.',
      fotoUrl: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'kkn-g-5',
      judul: 'Pendampingan Posyandu Balita & Skrining Tumbuh Kembang Cegah Stunting',
      kategori: 'Kesehatan',
      tanggal: '08 Agustus 2024',
      lokasi: 'Posyandu Mawar II',
      deskripsi: 'Membantu kader posyandu dalam pencatatan digital tinggi badan, berat badan, serta pembagian makanan tambahan bergizi (PMT).',
      fotoUrl: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'kkn-g-6',
      judul: 'Malam Keakraban & Pentas Seni Kolaborasi Mahasiswa dengan Warga',
      kategori: 'Budaya & Kebersamaan',
      tanggal: '16 Agustus 2024',
      lokasi: 'Halaman Balai Desa',
      deskripsi: 'Penampilan tari Jaipong, calung Sunda, dan pemutaran video dokumenter kilas balik pengabdian KKN selama di Desa Warung Menteng.',
      fotoUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  const kategoriList = ['Semua', 'Pendidikan', 'UMKM & Ekonomi', 'Perikanan', 'Lingkungan', 'Kesehatan', 'Budaya & Kebersamaan'];

  const filteredFoto = daftarFotoKKN.filter(item => {
    return selectedKategori === 'Semua' || item.kategori === selectedKategori;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 px-3.5 py-1.5 rounded-full text-xs font-semibold">
              <Camera className="w-4 h-4 text-amber-300" />
              <span>Dokumentasi Pengabdian Mahasiswa</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Galeri Kegiatan KKN Warung Menteng
            </h1>
            
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Momen hangat dan dokumentasi visual program pengabdian mahasiswa KKN bersama warga Desa Warung Menteng dari berbagai dusun.
            </p>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex flex-wrap items-center gap-2">
          {kategoriList.map(kat => (
            <button
              key={kat}
              onClick={() => setSelectedKategori(kat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                selectedKategori === kat
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {kat}
            </button>
          ))}
        </div>

        {/* Grid Foto */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFoto.map(item => (
            <div
              key={item.id}
              onClick={() => setActiveModalFoto(item)}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden cursor-pointer group hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="h-56 relative overflow-hidden bg-slate-100">
                  <img
                    src={item.fotoUrl}
                    alt={item.judul}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                    <span className="text-white text-xs font-bold flex items-center gap-1.5">
                      <Maximize2 className="w-4 h-4 text-emerald-400" />
                      <span>Klik untuk memperbesar</span>
                    </span>
                  </div>
                  <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-semibold px-2.5 py-1 rounded-lg">
                    {item.kategori}
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-emerald-800 transition">
                    {item.judul}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {item.deskripsi}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                  {item.tanggal}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {item.lokasi}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox Foto */}
        {activeModalFoto && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-200">
              <button
                onClick={() => setActiveModalFoto(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/70 text-white flex items-center justify-center hover:bg-slate-900 transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[500px] bg-slate-900 overflow-hidden flex items-center justify-center">
                <img
                  src={activeModalFoto.fotoUrl}
                  alt={activeModalFoto.judul}
                  className="w-full h-full object-contain max-h-[500px]"
                />
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-0.5 rounded-md">
                    {activeModalFoto.kategori}
                  </span>
                  <span className="text-xs text-slate-500">
                    {activeModalFoto.tanggal} • {activeModalFoto.lokasi}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {activeModalFoto.judul}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {activeModalFoto.deskripsi}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
