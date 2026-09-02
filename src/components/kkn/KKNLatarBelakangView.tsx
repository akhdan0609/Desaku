import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  BookOpen, 
  Compass, 
  Users, 
  Target, 
  Sparkles, 
  CheckCircle2,
  HeartHandshake
} from 'lucide-react';

export const KKNLatarBelakangView: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 px-3.5 py-1.5 rounded-full text-xs font-semibold">
              <GraduationCap className="w-4 h-4 text-amber-300" />
              <span>Kuliah Kerja Nyata (KKN) Tematik</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Latar Belakang KKN di Desa Warung Menteng
            </h1>
            
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Inisiatif pengabdian civitas akademika berkolaborasi dengan Pemerintah Desa dan masyarakat Desa Warung Menteng, Kecamatan Cijeruk, Kabupaten Bogor untuk mewujudkan desa cerdas, mandiri, dan berbudaya.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Main Content */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            <div className="space-y-3">
              <h2 className="text-2xl font-extrabold text-slate-900 leading-tight">
                Membangun Desa dari Lereng Gunung Salak
              </h2>
              <div className="w-16 h-1 bg-emerald-600 rounded-full" />
            </div>

            <div className="prose prose-slate text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Desa Warung Menteng yang terletak di wilayah administratif Kecamatan Cijeruk, Kabupaten Bogor memiliki karunia letak geografis lereng pegunungan dengan tanah subur, sumber mata air jernih, dan kekayaan tradisi Sunda yang masih terjaga erat.
              </p>

              <p>
                Di tengah potensi hasil bumi, perikanan air deras, dan pesona wisata alam yang tinggi, tantangan transformasi digital, optimalisasi kemasan produk UMKM lokal, serta efisiensi tata kelola pelayanan publik menjadi peluang nyata untuk pengabdian Tri Dharma Perguruan Tinggi melalui Kuliah Kerja Nyata (KKN) Tematik.
              </p>

              <div className="p-5 bg-emerald-50/70 rounded-2xl border border-emerald-200/80 my-4 space-y-2">
                <h4 className="font-bold text-emerald-950 text-sm flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-emerald-700" />
                  <span>Sinergi Mahasiswa & Tokoh Masyarakat</span>
                </h4>
                <p className="text-xs sm:text-sm text-emerald-900">
                  Program KKN dirancang berdasarkan pendekatan <em>Participatory Rural Appraisal (PRA)</em>, yaitu mendengarkan langsung aspirasi warga, musyawarah bersama para Ketua Dusun, Karang Taruna, dan Pemdes agar intervensi yang dihadirkan tepat guna dan berkelanjutan.
                </p>
              </div>

              <p>
                Melalui tema <strong>"Pemberdayaan Potensi Lokal Menuju Desa Digital dan Berkelanjutan"</strong>, mahasiswa KKN memfokuskan akselerasi pada 4 pilar utama: literasi digital dan portal desa, penguatan klaster budidaya perikanan, pendampingan legalitas & branding produk UMKM, serta bimbingan belajar dan kesehatan generasi muda desa.
              </p>
            </div>
          </div>

          {/* Quick Facts Card */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2 border-b border-slate-100 pb-3">
                <Compass className="w-5 h-5 text-emerald-600" />
                <span>Profil Singkat Pengabdian</span>
              </h3>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500">Lokasi Posko</span>
                  <span className="font-bold text-slate-800">Desa Warung Menteng</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500">Kecamatan</span>
                  <span className="font-bold text-slate-800">Cijeruk, Kab. Bogor</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500">Wilayah Jangkauan</span>
                  <span className="font-bold text-slate-800">Dusun I, II, dan III</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500">Fokus Program</span>
                  <span className="font-bold text-emerald-800">Digitalisasi & UMKM Desa</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-500">Mitra Utama</span>
                  <span className="font-bold text-slate-800">Pemdes & Pokdakan</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-800 to-teal-900 text-white rounded-3xl p-6 shadow-md space-y-3">
              <Sparkles className="w-8 h-8 text-amber-300" />
              <h4 className="font-bold text-base">Nilai Pengabdian</h4>
              <p className="text-xs text-slate-200 leading-relaxed">
                "Hadir bukan untuk menggurui, melainkan untuk membersamai warga menumbuhkan potensi terbaik dari bumi Warung Menteng."
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
