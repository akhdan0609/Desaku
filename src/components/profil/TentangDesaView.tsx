import React, { useState } from 'react';
import { 
  BookOpen, 
  Users, 
  Home, 
  Mountain, 
  MapPin, 
  FileText, 
  TrendingUp, 
  Wallet, 
  Coins, 
  Eye, 
  UserCheck, 
  ChevronRight, 
  ChevronDown,
  Landmark,
  X,
  Camera,
  Compass,
  Sparkles,
  History,
  Bookmark,
  Award,
  Clock,
  User,
  ShieldCheck
} from 'lucide-react';
import { PageRoute } from '../../types';
import { SEJARAH_DESA_DATA, SITUS_SEJARAH_LIST } from '../../data/mockData';

interface TentangDesaViewProps {
  onNavigate?: (page: PageRoute) => void;
}

export const TentangDesaView: React.FC<TentangDesaViewProps> = ({ onNavigate }) => {
  const [selectedTahun, setSelectedTahun] = useState('2024');
  const [modalDetailOpen, setModalDetailOpen] = useState(false);
  const [modalSejarahOpen, setModalSejarahOpen] = useState(false);
  const [selectedSitus, setSelectedSitus] = useState<typeof SITUS_SEJARAH_LIST[0] | null>(null);

  const budgetData: Record<string, { pendapatan: string; belanja: string; pembiayaan: string }> = {
    '2024': {
      pendapatan: 'Rp 2.650.000.000',
      belanja: 'Rp 2.450.000.000',
      pembiayaan: 'Rp 200.000.000'
    },
    '2023': {
      pendapatan: 'Rp 2.480.000.000',
      belanja: 'Rp 2.320.000.000',
      pembiayaan: 'Rp 160.000.000'
    }
  };

  const handleNav = (page: PageRoute) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <div className="bg-[#f8faf9] min-h-screen py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Foto Sampul (Cover Banner) Profil Desa */}
        <div className="relative w-full h-52 sm:h-64 md:h-76 lg:h-84 rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 group">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80"
            alt="Foto Sampul Panorama Desa Warung Menteng & Lereng Gunung Salak"
            className="w-full h-full object-cover object-center group-hover:scale-102 transition duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />
          
          {/* Badge & Info on Cover */}
          <div className="absolute top-4 right-4 flex items-center gap-2 bg-slate-900/60 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white text-xs font-medium border border-white/20">
            <Camera className="w-3.5 h-3.5 text-emerald-400" />
            <span>Foto Sampul Desa</span>
          </div>

          <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-8 right-5 text-white space-y-1 sm:space-y-1.5">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-emerald-700/80 backdrop-blur-xs text-[11px] font-semibold text-emerald-100">
              <Compass className="w-3 h-3 text-emerald-200" />
              <span>Kecamatan Cijeruk • Kabupaten Bogor</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight drop-shadow-sm">
              Desa Warung Menteng
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 line-clamp-1 drop-shadow-xs max-w-2xl">
              Kawasan Asri Lereng Gunung Salak dengan Potensi Agrowisata, Budidaya Kolam Alami, dan Tradisi Luhur
            </p>
          </div>
        </div>

        {/* Top Header & Breadcrumb */}
        <div className="space-y-1 pt-1">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0f4d38] tracking-tight">
            Tentang Desa
          </h1>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <button 
              onClick={() => handleNav('beranda')}
              className="hover:text-[#0f4d38] transition"
            >
              Beranda
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-700">Profil Desa</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#0f4d38] font-bold">Tentang Desa</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 pt-1">
            Mengenal sejarah, letak geografis, cagar budaya, serta gambaran menyeluruh Desa Warung Menteng
          </p>
        </div>

        {/* 1. Main Card: Tentang Desa Warung Menteng */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 sm:p-8 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-[#0f4d38]">
            Profil Umum Desa Warung Menteng
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Image */}
            <div className="lg:col-span-6 overflow-hidden rounded-2xl bg-slate-100 shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
                alt="Pemandangan Asri Gerbang Kawasan Desa Warung Menteng"
                className="w-full h-64 sm:h-72 object-cover rounded-2xl hover:scale-102 transition duration-500"
              />
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <p>
                Desa Warung Menteng adalah desa yang terletak di Kecamatan Cijeruk, Kabupaten Bogor, Jawa Barat.
              </p>
              <p>
                Desa ini berada di kaki Gunung Salak dengan ketinggian 600–900 meter di atas permukaan laut yang memiliki udara sejuk dan pemandangan alam yang indah.
              </p>
              <p>
                Dengan potensi alam yang melimpah, warisan sejarah cagar budaya, serta masyarakat yang ramah dan menjunjung tinggi kearifan lokal, desa ini terus bertransformasi menjadi desa yang mandiri, berbudaya, dan sejahtera.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setModalDetailOpen(true)}
                  className="px-5 py-2.5 bg-[#0f4d38] hover:bg-[#0c3c2c] text-white text-xs sm:text-sm font-semibold rounded-xl transition shadow-xs inline-flex items-center gap-2 cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Kondisi Geografis</span>
                </button>
                <button
                  onClick={() => setModalSejarahOpen(true)}
                  className="px-5 py-2.5 bg-emerald-50 hover:bg-emerald-100 text-[#0f4d38] border border-emerald-300/80 text-xs sm:text-sm font-semibold rounded-xl transition inline-flex items-center gap-2 cursor-pointer"
                >
                  <History className="w-4 h-4" />
                  <span>Telusuri Sejarah Lengkap</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Key Metrics Bar (5 Metrics) */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 sm:p-6 grid grid-cols-2 md:grid-cols-5 gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          
          {/* Luas Wilayah */}
          <div className="flex items-center gap-3.5 pl-0 md:pl-2">
            <div className="text-slate-800">
              <MapPin className="w-6 h-6 stroke-[1.8]" />
            </div>
            <div>
              <span className="text-[11px] text-slate-500 font-medium block">
                Luas Wilayah
              </span>
              <span className="text-sm sm:text-base font-extrabold text-slate-900">
                1.250 Ha
              </span>
            </div>
          </div>

          {/* Jumlah Penduduk */}
          <div className="flex items-center gap-3.5 pt-2 md:pt-0 pl-0 md:pl-3">
            <div className="text-slate-800">
              <Users className="w-6 h-6 stroke-[1.8]" />
            </div>
            <div>
              <span className="text-[11px] text-slate-500 font-medium block">
                Jumlah Penduduk
              </span>
              <span className="text-sm sm:text-base font-extrabold text-slate-900">
                4.350 Jiwa
              </span>
            </div>
          </div>

          {/* Jumlah Dusun */}
          <div className="flex items-center gap-3.5 pt-2 md:pt-0 pl-0 md:pl-3">
            <div className="text-slate-800">
              <Home className="w-6 h-6 stroke-[1.8]" />
            </div>
            <div>
              <span className="text-[11px] text-slate-500 font-medium block">
                Jumlah Dusun
              </span>
              <span className="text-sm sm:text-base font-extrabold text-slate-900">
                6 Dusun
              </span>
            </div>
          </div>

          {/* Ketinggian */}
          <div className="flex items-center gap-3.5 pt-2 md:pt-0 pl-0 md:pl-3">
            <div className="text-slate-800">
              <Mountain className="w-6 h-6 stroke-[1.8]" />
            </div>
            <div>
              <span className="text-[11px] text-slate-500 font-medium block">
                Ketinggian
              </span>
              <span className="text-sm sm:text-base font-extrabold text-slate-900">
                600 – 900 mdpl
              </span>
            </div>
          </div>

          {/* Destinasi Unggulan */}
          <div className="flex items-center gap-3.5 pt-2 md:pt-0 pl-0 md:pl-3 col-span-2 md:col-span-1">
            <div className="text-slate-800 shrink-0">
              <Sparkles className="w-6 h-6 stroke-[1.8]" />
            </div>
            <div>
              <span className="text-[11px] text-slate-500 font-medium block">
                Destinasi Unggulan
              </span>
              <span className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight block">
                Curug Menteng, Bukit Salak, dll.
              </span>
            </div>
          </div>

        </div>

        {/* 3. Middle 2-Column Grid: Sejarah Desa & Anggaran Desa */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Sejarah Desa Card */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 sm:p-7 flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-[#0f4d38] flex items-center gap-2">
                  <History className="w-5 h-5 text-emerald-800" />
                  <span>Sejarah Desa Warung Menteng</span>
                </h3>
                <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                  Abad ke-19 - Sekarang
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Desa Warung Menteng telah berdiri sejak zaman dahulu dan memiliki sejarah panjang dalam perkembangan wilayah Kecamatan Cijeruk. Nama "Warung Menteng" berasal dari keberadaan warung kecil di bawah pohon menteng yang menjadi tempat persinggahan masyarakat pada masa lampau.
              </p>
              <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-200/60 text-xs text-emerald-900 space-y-1">
                <span className="font-bold flex items-center gap-1.5">
                  <Bookmark className="w-3.5 h-3.5 text-emerald-700" />
                  Etimologi Pohon Menteng (Baccaurea racemosa)
                </span>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Pohon menteng yang rindang menjadi tempat berteduh para kafilah pedati niaga Cijeruk-Sukabumi sebelum berkembang menjadi desa definitif.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setModalSejarahOpen(true)}
                className="px-5 py-2.5 bg-[#0f4d38] hover:bg-[#0c3c2c] text-white text-xs sm:text-sm font-semibold rounded-xl transition shadow-xs cursor-pointer flex items-center gap-2"
              >
                <span>Baca Selengkapnya</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-800">
                <FileText className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Anggaran Desa Card */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 sm:p-7 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-[#0f4d38] flex items-center gap-2">
                  <Landmark className="w-5 h-5 text-emerald-800" />
                  <span>Anggaran Desa</span>
                </h3>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-800">
                  <Landmark className="w-5 h-5" />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Anggaran Pendapatan dan Belanja Desa (APBDes) Warung Menteng dikelola secara transparan dan akuntabel untuk mendukung pembangunan desa serta meningkatkan kesejahteraan masyarakat.
              </p>

              {/* Selector Tahun */}
              <div className="flex items-center gap-2 pt-1 text-xs">
                <span className="text-slate-600 font-medium">Tahun Anggaran</span>
                <div className="relative inline-block">
                  <select
                    value={selectedTahun}
                    onChange={(e) => setSelectedTahun(e.target.value)}
                    aria-label="Tahun Anggaran"
                    className="appearance-none bg-white border border-slate-300 rounded-lg px-3 py-1 pr-7 font-semibold text-slate-800 text-xs focus:outline-hidden focus:ring-1 focus:ring-emerald-700"
                  >
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-500 absolute right-2 top-2 pointer-events-none" />
                </div>
              </div>

              {/* 3 Metric Box */}
              <div className="bg-[#f4f8f6] rounded-xl p-3 grid grid-cols-3 gap-2 border border-emerald-100/70">
                {/* Pendapatan */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1 text-emerald-800 text-[11px] font-medium">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span className="truncate">Pendapatan Desa</span>
                  </div>
                  <span className="text-xs sm:text-[13px] font-bold text-slate-900 block truncate">
                    {budgetData[selectedTahun]?.pendapatan || 'Rp 2.650.000.000'}
                  </span>
                </div>

                {/* Belanja */}
                <div className="space-y-1 border-l border-emerald-200/60 pl-2">
                  <div className="flex items-center gap-1 text-emerald-800 text-[11px] font-medium">
                    <Wallet className="w-3.5 h-3.5" />
                    <span className="truncate">Belanja Desa</span>
                  </div>
                  <span className="text-xs sm:text-[13px] font-bold text-slate-900 block truncate">
                    {budgetData[selectedTahun]?.belanja || 'Rp 2.450.000.000'}
                  </span>
                </div>

                {/* Pembiayaan */}
                <div className="space-y-1 border-l border-emerald-200/60 pl-2">
                  <div className="flex items-center gap-1 text-emerald-800 text-[11px] font-medium">
                    <Coins className="w-3.5 h-3.5" />
                    <span className="truncate">Pembiayaan Desa</span>
                  </div>
                  <span className="text-xs sm:text-[13px] font-bold text-slate-900 block truncate">
                    {budgetData[selectedTahun]?.pembiayaan || 'Rp 200.000.000'}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => handleNav('profil-anggaran')}
                className="px-5 py-2.5 bg-[#0f4d38] hover:bg-[#0c3c2c] text-white text-xs sm:text-sm font-semibold rounded-xl transition shadow-xs cursor-pointer flex items-center gap-2"
              >
                <span>Lihat APBDes Lengkap</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* 4. SEKSI KHUSUS: Situs Sejarah & Cagar Budaya Desa */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200">
                <Bookmark className="w-3.5 h-3.5 text-amber-700" />
                <span>Peninggalan Peradaban & Kearifan Lokal</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0f4d38]">
                Situs Sejarah & Cagar Budaya
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Jejak peninggalan prasejarah dan petilasan leluhur yang dirawat dan dilestarikan oleh masyarakat Desa Warung Menteng
              </p>
            </div>

            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full self-start sm:self-auto">
              3 Situs Terdata
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SITUS_SEJARAH_LIST.map((item) => (
              <div
                key={item.id}
                className="bg-slate-50/60 rounded-2xl border border-slate-200/90 overflow-hidden flex flex-col justify-between hover:shadow-md transition duration-300 group"
              >
                <div>
                  <div className="h-48 relative overflow-hidden bg-slate-200">
                    <img
                      src={item.fotoUrl}
                      alt={item.nama}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-stone-900/85 backdrop-blur-md text-amber-300 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                      {item.periode}
                    </span>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <h4 className="text-base font-bold text-slate-900 leading-snug">
                      {item.nama}
                    </h4>

                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                      <span>{item.lokasi}</span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed pt-1 line-clamp-3">
                      {item.deskripsi}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 space-y-3">
                  <div className="p-2.5 bg-white rounded-xl border border-slate-200/70 text-[11px] text-slate-700 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 truncate">
                      <User className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                      <span className="truncate"><strong>Juru Kunci:</strong> {item.juruKunci}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedSitus(item)}
                    className="w-full py-2 bg-white hover:bg-emerald-50 text-[#0f4d38] border border-emerald-300/80 text-xs font-semibold rounded-xl transition text-center cursor-pointer"
                  >
                    Detail Situs
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Bottom 3-Column Grid: Visi Desa, Misi Desa, Pemerintahan Desa */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Visi Desa */}
          <div className="md:col-span-4 bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 space-y-3">
            <h3 className="text-base font-bold text-[#0f4d38]">
              Visi Desa
            </h3>
            <div className="flex items-start gap-3.5 pt-1">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-800 shrink-0 mt-0.5">
                <Eye className="w-5 h-5" />
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Terwujudnya Desa Warung Menteng yang maju, mandiri, dan sejahtera dengan berlandaskan gotong royong dan kelestarian lingkungan.
              </p>
            </div>
          </div>

          {/* Misi Desa */}
          <div className="md:col-span-5 bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 space-y-3">
            <h3 className="text-base font-bold text-[#0f4d38]">
              Misi Desa
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <div className="w-4 h-4 rounded-full bg-emerald-700 text-white flex items-center justify-center text-[10px] shrink-0">
                  ✓
                </div>
                <span>Meningkatkan kesejahteraan masyarakat</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <div className="w-4 h-4 rounded-full bg-emerald-700 text-white flex items-center justify-center text-[10px] shrink-0">
                  ✓
                </div>
                <span>Mewujudkan lingkungan yang bersih dan sehat</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <div className="w-4 h-4 rounded-full bg-emerald-700 text-white flex items-center justify-center text-[10px] shrink-0">
                  ✓
                </div>
                <span>Mengembangkan potensi desa</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <div className="w-4 h-4 rounded-full bg-emerald-700 text-white flex items-center justify-center text-[10px] shrink-0">
                  ✓
                </div>
                <span>Menciptakan pemerintahan yang transparan dan akuntabel</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700 sm:col-span-2">
                <div className="w-4 h-4 rounded-full bg-emerald-700 text-white flex items-center justify-center text-[10px] shrink-0">
                  ✓
                </div>
                <span>Memberikan pelayanan terbaik</span>
              </div>
            </div>
          </div>

          {/* Pemerintahan Desa */}
          <div className="md:col-span-3 bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <h3 className="text-base font-bold text-[#0f4d38]">
                Pemerintahan Desa
              </h3>
              
              <div className="flex items-center gap-3 pt-1">
                <div className="w-11 h-11 rounded-xl bg-emerald-800 text-white flex items-center justify-center shrink-0">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 font-medium block">
                    Kepala Desa
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900">
                    Asep Saepudin
                  </span>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={() => handleNav('profil-pemerintahan')}
                className="w-full text-center px-4 py-2.5 bg-[#0f4d38] hover:bg-[#0c3c2c] text-white text-xs font-semibold rounded-xl transition shadow-xs cursor-pointer"
              >
                Lihat Pemerintahan Desa
              </button>
            </div>
          </div>

        </div>

        {/* Modal Detail Geografis */}
        {modalDetailOpen && (
          <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-5 shadow-2xl relative animate-in fade-in zoom-in duration-200">
              <button
                onClick={() => setModalDetailOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-slate-200 transition"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-2">
                <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">
                  Gambaran Umum Desa
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  Karakteristik & Kondisi Geografis Desa Warung Menteng
                </h3>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
                <p>
                  Desa Warung Menteng secara administratif berada di Kecamatan Cijeruk, Kabupaten Bogor, Jawa Barat. Desa ini membentang di ketinggian 600 hingga 900 meter di atas permukaan laut dengan topografi perbukitan subur di lereng Gunung Salak.
                </p>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <h4 className="font-bold text-slate-800 text-xs">Batas Wilayah Administratif:</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-600">
                    <li><strong>Sebelah Utara:</strong> Desa Cijeruk</li>
                    <li><strong>Sebelah Selatan:</strong> Kawasan Hutan Lindung TNGHS (Taman Nasional Gunung Halimun Salak)</li>
                    <li><strong>Sebelah Barat:</strong> Desa Tajur Halang</li>
                    <li><strong>Sebelah Timur:</strong> Desa Cipicung</li>
                  </ul>
                </div>
                <p>
                  Mata pencaharian utama masyarakat terbagi ke dalam sektor pertanian tanaman pangan, perkebunan salak & kopi, perikanan air tawar sistem kolam deras, peternakan, serta pelaku UMKM industri rumahan.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setModalDetailOpen(false)}
                  className="px-5 py-2 bg-[#0f4d38] text-white text-xs font-bold rounded-xl cursor-pointer"
                >
                  Tutup Informasi
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal Sejarah Lengkap Desa */}
        {modalSejarahOpen && (
          <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative animate-in fade-in zoom-in duration-200 max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setModalSejarahOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-slate-200 transition"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200 inline-flex items-center gap-1.5">
                  <History className="w-3.5 h-3.5 text-amber-700" />
                  Napak Tilas & Asal Usul
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  Sejarah Lengkap Desa Warung Menteng
                </h3>
              </div>

              <div className="space-y-6 text-xs sm:text-sm text-slate-600 leading-relaxed pr-2">
                {/* 1. Asal Usul */}
                <div className="p-5 bg-amber-50/60 rounded-2xl border border-amber-200/70 space-y-3">
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <Bookmark className="w-4 h-4 text-amber-700" />
                    Asal Mula Nama "Warung Menteng"
                  </h4>
                  <p>{SEJARAH_DESA_DATA.ringkasan}</p>
                  <p>
                    Pohon Buah Menteng (<em>Baccaurea racemosa</em>) adalah tanaman endemik khas hutan hujan Jawa Barat yang menghasilkan buah berasa manis-asam segar. Keberadaan warung kecil di bawah keteduhan pohon menteng tersebut menjadi titik kumpul strategis masyarakat sebelum menyusuri lereng Gunung Salak.
                  </p>
                </div>

                {/* 2. Linimasa Kronologi */}
                <div className="space-y-4">
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-800" />
                    Tonggak Sejarah dari Masa ke Masa
                  </h4>

                  <div className="relative border-l-2 border-emerald-300 pl-5 ml-2 space-y-5">
                    {SEJARAH_DESA_DATA.kronologi.map((krono, idx) => (
                      <div key={idx} className="relative group">
                        <div className="absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full bg-emerald-700 border-2 border-white shadow-xs" />
                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1">
                          <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md inline-block">
                            {krono.tahun}
                          </span>
                          <h5 className="text-xs sm:text-sm font-bold text-slate-900">
                            {krono.judul}
                          </h5>
                          <p className="text-xs text-slate-600">
                            {krono.deskripsi}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Silsilah Kepemimpinan */}
                <div className="space-y-3">
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-700" />
                    Silsilah Kepala Desa Warung Menteng
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {SEJARAH_DESA_DATA.silsilahKades.map((k, idx) => (
                      <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#0f4d38] text-white flex items-center justify-center font-bold text-xs shrink-0">
                          {idx + 1}
                        </div>
                        <div>
                          <span className="text-[10px] text-slate-500 font-semibold block">{k.periode}</span>
                          <span className="text-xs font-bold text-slate-900 block">{k.nama}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setModalSejarahOpen(false)}
                  className="px-5 py-2.5 bg-[#0f4d38] hover:bg-[#0c3c2c] text-white text-xs font-bold rounded-xl cursor-pointer"
                >
                  Tutup Sejarah Desa
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal Detail Situs Sejarah */}
        {selectedSitus && (
          <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-7 space-y-4 shadow-2xl relative animate-in fade-in zoom-in duration-200">
              <button
                onClick={() => setSelectedSitus(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-slate-200 transition"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="h-56 rounded-2xl overflow-hidden bg-slate-100 relative">
                <img
                  src={selectedSitus.fotoUrl}
                  alt={selectedSitus.nama}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 bg-stone-900/85 backdrop-blur-md text-amber-300 text-xs font-bold px-3 py-1 rounded-full">
                  {selectedSitus.periode}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  {selectedSitus.nama}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <MapPin className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>{selectedSitus.lokasi}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                  {selectedSitus.deskripsi}
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs text-slate-700 flex items-center gap-2">
                <User className="w-4 h-4 text-amber-700 shrink-0" />
                <span><strong>Juru Kunci / Kontak Pengelola:</strong> {selectedSitus.juruKunci}</span>
              </div>

              <div className="pt-2 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setSelectedSitus(null)}
                  className="px-5 py-2 bg-[#0f4d38] text-white text-xs font-bold rounded-xl cursor-pointer"
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
