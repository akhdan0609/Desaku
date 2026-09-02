import React from 'react';
import { 
  Users, 
  UserCheck, 
  GraduationCap, 
  Mail, 
  Award, 
  Phone, 
  MapPin, 
  Layers,
  Sparkles
} from 'lucide-react';

interface AnggotaTim {
  nama: string;
  peran: string;
  prodi: string;
  tugas: string;
  fotoUrl: string;
}

export const KKNStrukturalView: React.FC = () => {
  const pembinaDPL = [
    {
      nama: 'Dr. Ir. Hendra Gunawan, M.Si.',
      peran: 'Dosen Pembimbing Lapangan (DPL)',
      instansi: 'Lembaga Penelitian & Pengabdian Masyarakat (LPPM)',
      fotoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
    },
    {
      nama: 'H. Mulyadi, S.AP.',
      peran: 'Kepala Desa & Penasihat Lapangan',
      instansi: 'Pemerintah Desa Warung Menteng',
      fotoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    }
  ];

  const pengurusInti: AnggotaTim[] = [
    {
      nama: 'Fajar Pratama',
      peran: 'Koordinator Desa (Kordes)',
      prodi: 'Teknik Informatika',
      tugas: 'Penanggung jawab umum kegiatan, koordinasi dengan Pemdes, dan arsitektur portal digital desa.',
      fotoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
    },
    {
      nama: 'Annisa Nurulita',
      peran: 'Sekretaris & Bendahara',
      prodi: 'Akuntansi & Manajemen',
      tugas: 'Administrasi pelaporan, anggaran operasional, notulensi musyawarah desa, dan kearsipan.',
      fotoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80'
    },
    {
      nama: 'Rifqi Alamsyah',
      peran: 'Koordinator Bidang UMKM & Ekonomi',
      prodi: 'Agribisnis / Manajemen Bisnis',
      tugas: 'Pendampingan branding kemasan produk kopi & salak, digital marketing, dan sertifikasi halal.',
      fotoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80'
    },
    {
      nama: 'Bagus Triadi',
      peran: 'Koordinator Bidang Perikanan',
      prodi: 'Budidaya Perairan / Perikanan',
      tugas: 'Penyuluhan sistem sirkulasi air kolam deras, pakan Pokdakan Tirta Menteng, dan manajemen benih.',
      fotoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80'
    },
    {
      nama: 'Dinda Ayu Lestari',
      peran: 'Koordinator Pendidikan & Kesehatan',
      prodi: 'Kesehatan Masyarakat / PGSD',
      tugas: 'Penyelenggaraan Rumah Belajar Ceria dusun, pendampingan Posyandu Mawar, dan edukasi stunting.',
      fotoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80'
    },
    {
      nama: 'Satria Nugraha',
      peran: 'Koordinator Humas, Publikasi & Dokumentasi',
      prodi: 'Ilmu Komunikasi / Desain Komunikasi Visual',
      tugas: 'Pengelolaan media sosial resmi, liputan press release, fotografi dokumentasi, dan hubungan pemuda.',
      fotoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 px-3.5 py-1.5 rounded-full text-xs font-semibold">
              <Users className="w-4 h-4 text-amber-300" />
              <span>Struktur Organisasi & Tim Pengabdian</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Struktural Tim KKN Mahasiswa
            </h1>
            
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Susunan organisasi mahasiswa Kuliah Kerja Nyata (KKN) Tematik di Desa Warung Menteng, di bawah bimbingan DPL dan pengawasan Pemerintah Desa.
            </p>
          </div>
        </div>

        {/* Pembimbing & Penasihat Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2 flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-700" />
            <span>Pembimbing & Penasihat Lapangan</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pembinaDPL.map((p, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex items-center gap-5">
                <img
                  src={p.fotoUrl}
                  alt={p.nama}
                  className="w-20 h-20 rounded-2xl object-cover border-2 border-emerald-600 shadow-xs"
                />
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block">
                    {p.peran}
                  </span>
                  <h4 className="font-extrabold text-slate-900 text-base">{p.nama}</h4>
                  <p className="text-xs text-slate-500">{p.instansi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pengurus Inti & Koordinator Mahasiswa */}
        <div className="space-y-4 pt-4">
          <h3 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-emerald-700" />
            <span>Susunan Tim Pelaksana Mahasiswa</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pengurusInti.map((mhs, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={mhs.fotoUrl}
                      alt={mhs.nama}
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-slate-100 group-hover:border-emerald-600 transition shadow-xs"
                    />
                    <div>
                      <span className="text-[10px] font-extrabold text-emerald-800 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-md inline-block mb-1">
                        {mhs.peran}
                      </span>
                      <h4 className="font-bold text-slate-900 text-sm group-hover:text-emerald-800 transition">
                        {mhs.nama}
                      </h4>
                      <p className="text-xs text-slate-500">{mhs.prodi}</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-2xl border border-slate-100">
                    {mhs.tugas}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Posko Induk Warung Menteng</span>
                  <span className="font-semibold text-emerald-700">Aktif</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Posko Dusun Info */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
            <MapPin className="w-5 h-5 text-emerald-700" />
            <span>Titik Posko & Narahubung KKN</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Posko Induk (Balai Desa)</span>
              <p className="text-slate-600">Jl. KH. Halimi No. 01, Balai Desa Warung Menteng, Cijeruk</p>
              <p className="text-emerald-800 font-semibold pt-1">Telp/WA: 0812-3456-7890</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Posko Dusun II (Menteng Pasir)</span>
              <p className="text-slate-600">Rumah Warga Kp. Menteng Pasir RT 02/02</p>
              <p className="text-emerald-800 font-semibold pt-1">Fokus: UMKM & Pertanian</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Posko Dusun III (Menteng Girang)</span>
              <p className="text-slate-600">Kp. Menteng Girang RT 01/03</p>
              <p className="text-emerald-800 font-semibold pt-1">Fokus: Pendidikan & Budaya</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
