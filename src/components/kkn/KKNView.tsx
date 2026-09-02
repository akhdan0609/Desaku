import React, { useState } from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Calendar, 
  Users, 
  FileCheck, 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Building, 
  Award,
  Send,
  Download
} from 'lucide-react';

export const KKNView: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    universitas: '',
    fakultasJurusan: '',
    namaKetua: '',
    jumlahAnggota: '',
    noWhatsapp: '',
    email: '',
    rencanaMulai: '',
    rencanaSelesai: '',
    fokusProgram: 'Pemberdayaan UMKM & Ekonomi Kreatif',
    deskripsiRencana: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const poskoList = [
    {
      dusun: 'Dusun I - Cimenteng',
      rw: 'RW 01 & RW 02',
      mitra: 'Universitas Indonesia (UI) & IPB University',
      programUtama: 'Digitalisasi Katalog UMKM & Pengelolaan Budidaya Ikan Kolam Deras',
      lokasi: 'Balai Warga RW 01, Kp. Cimenteng Tengah',
      status: 'Sedang Berlangsung'
    },
    {
      dusun: 'Dusun II - Menteng Pasir',
      rw: 'RW 03 & RW 04',
      mitra: 'Universitas Pakuan (UNPAK) Bogor',
      programUtama: 'Pemetaan Potensi Agrowisata Buah Salak & Edukasi Sanitasi Lingkungan',
      lokasi: 'Posyandu Mawar RW 03, Kp. Pasir Menteng',
      status: 'Sedang Berlangsung'
    },
    {
      dusun: 'Dusun III - Menteng Girang',
      rw: 'RW 05 & RW 06',
      mitra: 'UIN Syarif Hidayatullah Jakarta',
      programUtama: 'Bimbingan Belajar Anak, Penguatan Literasi Desa, & Pelatihan Pemuda Karang Taruna',
      lokasi: 'Madrasah Diniyah RW 05, Menteng Girang',
      status: 'Siap Penempatan'
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
              <GraduationCap className="w-4 h-4 text-amber-300" />
              <span>Kuliah Kerja Nyata (KKN) & Pengabdian Perguruan Tinggi</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Portal KKN & Pengabdian Masyarakat Desa Warung Menteng
            </h1>
            
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Pemerintah Desa Warung Menteng membuka pintu kolaborasi bagi mahasiswa dari berbagai perguruan tinggi di Indonesia untuk melaksanakan Kuliah Kerja Nyata (KKN), Praktik Kerja Lapangan (PKL), dan program riset pengabdian masyarakat guna membangun desa yang mandiri dan berdaya saing.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#form-izin"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition shadow-lg inline-flex items-center gap-2"
              >
                <FileCheck className="w-4 h-4" />
                <span>Pengajuan Izin KKN / Riset</span>
              </a>
              <a
                href="#posko-kkn"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition inline-flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-amber-300" />
                <span>Daftar Posko & Dusun</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4 Pilar Fokus KKN */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Digitalisasi & UMKM</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Membantu branding, foto produk, pemasaran marketplace, dan pembukuan keuangan bagi pelaku UMKM lokal.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Pendidikan & Literasi</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Bimbingan belajar anak SD/MI, pojok baca desa, pelatihan komputer dasar, dan penguatan bahasa asing.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Kesehatan & Posyandu</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Edukasi pencegahan stunting, pendampingan posyandu balita & lansia, serta sosialisasi sanitasi air bersih.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Lingkungan & Wisata</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Pengembangan daya tarik wisata Curug Menteng, bank sampah organik, dan penghijauan lereng Gunung Salak.
            </p>
          </div>
        </div>

        {/* Daftar Posko Dusun */}
        <div id="posko-kkn" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-emerald-600" />
                <span>Distribusi Posko KKN & Wilayah Dusun</span>
              </h2>
              <p className="text-xs text-slate-500">Pemetaan sebaran kelompok mahasiswa perguruan tinggi di Desa Warung Menteng</p>
            </div>
            <span className="text-xs font-semibold bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-200 w-fit">
              Tahun Ajaran 2024 - 2026
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {poskoList.map((posko, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3 hover:shadow-md transition">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-md">
                    {posko.dusun}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500">{posko.rw}</span>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{posko.mitra}</h4>
                  <p className="text-xs text-slate-600 mt-1">{posko.programUtama}</p>
                </div>

                <div className="pt-2 border-t border-slate-200/80 text-xs text-slate-500 space-y-1">
                  <div className="flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-slate-400" />
                    <span>{posko.lokasi}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Status: {posko.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form Pendaftaran KKN */}
        <div id="form-izin" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-emerald-600" />
              <span>Formulir Pengajuan Izin Survei / Pelaksanaan KKN</span>
            </h2>
            <p className="text-xs text-slate-500">
              Silakan isi formulir di bawah ini untuk koordinasi awal bersama Sekretariat Desa Warung Menteng
            </p>
          </div>

          {formSubmitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="text-lg font-bold text-emerald-950">Formulir Pengajuan KKN Berhasil Dikirim!</h3>
              <p className="text-sm text-emerald-800 max-w-xl mx-auto">
                Terima kasih atas minat pengabdian di Desa Warung Menteng. Tim Sekretaris Desa & Seksi Pemerintahan akan menghubungi koordinator kelompok Anda melalui WhatsApp/Email dalam 1x24 jam.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-5 py-2 rounded-xl text-xs transition"
              >
                Kirim Formulir Lain
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nama Perguruan Tinggi / Universitas *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Universitas Indonesia / IPB University"
                    value={formData.universitas}
                    onChange={e => setFormData({ ...formData, universitas: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Fakultas / Jurusan / Kelompok *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Fakultas Pertanian - Tim KKN 12"
                    value={formData.fakultasJurusan}
                    onChange={e => setFormData({ ...formData, fakultasJurusan: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nama Ketua Kelompok / Koordinator *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nama lengkap"
                    value={formData.namaKetua}
                    onChange={e => setFormData({ ...formData, namaKetua: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Jumlah Anggota Mahasiswa *
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="Contoh: 10"
                    value={formData.jumlahAnggota}
                    onChange={e => setFormData({ ...formData, jumlahAnggota: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nomor WhatsApp Aktif *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="081234567890"
                    value={formData.noWhatsapp}
                    onChange={e => setFormData({ ...formData, noWhatsapp: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Rencana Tanggal Mulai *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.rencanaMulai}
                    onChange={e => setFormData({ ...formData, rencanaMulai: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Rencana Tanggal Selesai *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.rencanaSelesai}
                    onChange={e => setFormData({ ...formData, rencanaSelesai: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Fokus Tema Pengabdian *
                  </label>
                  <select
                    value={formData.fokusProgram}
                    onChange={e => setFormData({ ...formData, fokusProgram: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  >
                    <option value="Pemberdayaan UMKM & Ekonomi Kreatif">Pemberdayaan UMKM & Ekonomi Kreatif</option>
                    <option value="Digitalisasi & Pemetaan Potensi Desa">Digitalisasi & Pemetaan Potensi Desa</option>
                    <option value="Kesehatan, Gizi & Posyandu">Kesehatan, Gizi & Posyandu</option>
                    <option value="Pendidikan Anak & Literasi Desa">Pendidikan Anak & Literasi Desa</option>
                    <option value="Pengelolaan Lingkungan & Agrowisata">Pengelolaan Lingkungan & Agrowisata</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Deskripsi Rencana Kegiatan / Surat Pengantar
                </label>
                <textarea
                  rows={3}
                  placeholder="Jelaskan secara singkat rencana program kerja atau nomor surat pengantar dari LPPM..."
                  value={formData.deskripsiRencana}
                  onChange={e => setFormData({ ...formData, deskripsiRencana: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                />
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-6 py-3 rounded-xl text-sm transition shadow-md flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Formulir Permohonan KKN</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Kontak Sekretariat KKN */}
        <div className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-lg font-bold">Butuh Bantuan Koordinasi Lapangan?</h3>
            <p className="text-xs sm:text-sm text-emerald-200">
              Hubungi Sekretariat Desa Warung Menteng atau Seksi Pelayanan Kemasyarakatan untuk info penginapan warga & izin wilayah.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Sekretariat%20Desa%20Warung%20Menteng,%20kami%20ingin%20koordinasi%20KKN"
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition flex items-center gap-2 shadow"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp Sekretariat</span>
            </a>
            <a
              href="mailto:desawarungmenteng@gmail.com"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-5 py-2.5 rounded-xl text-xs transition flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Email Resmi Desa</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
