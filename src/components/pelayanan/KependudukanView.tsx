import React, { useState } from 'react';
import { 
  CreditCard, 
  CheckCircle2, 
  Send, 
  ShieldCheck, 
  Clock, 
  AlertCircle, 
  Info,
  FileCheck
} from 'lucide-react';
import { saveSuratRequest } from '../../utils/storage';

export const KependudukanView: React.FC = () => {
  const [activeKategori, setActiveKategori] = useState<'ktp-baru' | 'ktp-hilang' | 'ktp-rusak' | 'kia'>('ktp-baru');
  const [submittedCode, setSubmittedCode] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    namaLengkap: '',
    nik: '',
    noKK: '',
    tempatLahir: '',
    tanggalLahir: '',
    jenisKelamin: 'Laki-laki',
    agama: 'Islam',
    golonganDarah: '-',
    statusPerkawinan: 'Belum Kawin',
    dusun: 'Dusun I - Cimenteng',
    rt: '01',
    rw: '01',
    alamat: '',
    noWhatsapp: '',
    alasanPermohonan: 'Perekaman KTP Pemula Usia 17 Tahun',
    noSuratKehilangan: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let jenisLabel = 'Surat Pengantar KTP-el Baru (Pemula)';
    let prefix = 'KTP';
    if (activeKategori === 'ktp-hilang') {
      jenisLabel = 'Surat Pengantar KTP Hilang';
      prefix = 'KTP-H';
    } else if (activeKategori === 'ktp-rusak') {
      jenisLabel = 'Surat Pengantar Penggantian KTP Rusak';
      prefix = 'KTP-R';
    } else if (activeKategori === 'kia') {
      jenisLabel = 'Surat Pengantar Kartu Identitas Anak (KIA)';
      prefix = 'KIA';
    }

    const regCode = `${prefix}-${Date.now().toString().slice(-6)}`;

    const newDoc = {
      id: `ktp-${Date.now()}`,
      nomorRegistrasi: regCode,
      jenisSurat: jenisLabel,
      namaPemohon: formData.namaLengkap,
      nik: formData.nik,
      noWhatsapp: formData.noWhatsapp,
      dusun: formData.dusun,
      rtRw: `RT ${formData.rt} / RW ${formData.rw}`,
      keperluan: `Layanan Kependudukan KTP/KIA: ${formData.alasanPermohonan}`,
      status: 'diajukan' as const,
      tanggalPengajuan: new Date().toISOString().split('T')[0],
      estimasiSelesai: '1 Hari Kerja'
    };

    saveSuratRequest(newDoc);
    setSubmittedCode(regCode);
  };

  const menuLayanan = [
    {
      id: 'ktp-baru' as const,
      title: 'KTP-el Baru (Pemula 17 Tahun)',
      badge: 'Perekaman Baru',
      desc: 'Pengantar perekaman biometrik KTP elektronik bagi warga yang telah berusia 17 tahun atau sudah menikah.'
    },
    {
      id: 'ktp-hilang' as const,
      title: 'KTP-el Hilang',
      badge: 'Penggantian Hilang',
      desc: 'Pengantar pencetakan ulang KTP elektronik karena hilang (disertai surat tanda lapor kehilangan dari Kepolisian/Polsek).'
    },
    {
      id: 'ktp-rusak' as const,
      title: 'KTP-el Rusak / Patah',
      badge: 'Penggantian Fisik',
      desc: 'Pengantar penggantian blanko fisik KTP yang terkelupas, patah, atau chip tidak terbaca.'
    },
    {
      id: 'kia' as const,
      title: 'Kartu Identitas Anak (KIA)',
      badge: 'Usia 0 - 17 Tahun',
      desc: 'Identitas resmi anak warga desa usia 0 hingga 17 tahun kurang satu hari untuk akses layanan publik dan kesehatan.'
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
              <CreditCard className="w-4 h-4 text-amber-300" />
              <span>Layanan Kependudukan & Catatan Sipil</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Layanan Surat Pengantar KTP & KIA
            </h1>
            
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Fasilitasi penerbitan surat pengantar resmi Desa Warung Menteng untuk perekaman KTP-el baru, penggantian KTP hilang/rusak, dan penerbitan KIA di Kantor Kecamatan Cijeruk / Disdukcapil Kab. Bogor.
            </p>
          </div>
        </div>

        {/* 4 Cards Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {menuLayanan.map(item => (
            <button
              key={item.id}
              onClick={() => {
                setActiveKategori(item.id);
                setSubmittedCode(null);
              }}
              className={`p-5 rounded-2xl border text-left transition duration-200 flex flex-col justify-between ${
                activeKategori === item.id
                  ? 'bg-white border-emerald-600 shadow-md ring-2 ring-emerald-600/20'
                  : 'bg-white border-slate-200 hover:border-emerald-300 shadow-xs'
              }`}
            >
              <div className="space-y-1">
                <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md inline-block mb-1 ${
                  activeKategori === item.id ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'
                }`}>
                  {item.badge}
                </span>
                <h3 className={`font-bold text-sm ${activeKategori === item.id ? 'text-emerald-900' : 'text-slate-900'}`}>
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                <span>Pilih Layanan Ini</span>
                <span>→</span>
              </div>
            </button>
          ))}
        </div>

        {/* Persyaratan & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left: Persyaratan Berkas & SOP */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>Dokumen yang Dibawa</span>
              </h3>
              <p className="text-xs text-slate-500">Berkas saat pengesahan di Kantor Desa / Kecamatan</p>
            </div>

            {activeKategori === 'ktp-baru' && (
              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Surat Pengantar RT/RW setempat</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Fotokopi Kartu Keluarga (KK) terbaru</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Fotokopi Akta Kelahiran atau Ijazah Terakhir</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Pemohon wajib hadir langsung untuk perekaman biometrik (foto, sidik jari, iris mata)</span>
                </li>
              </ul>
            )}

            {activeKategori === 'ktp-hilang' && (
              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Surat Keterangan Kehilangan KTP dari Polsek Cijeruk</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Fotokopi Kartu Keluarga (KK)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Surat Pengantar RT/RW setempat</span>
                </li>
              </ul>
            )}

            {activeKategori === 'ktp-rusak' && (
              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Membawa fisik fisik KTP-el lama yang rusak/patah</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Fotokopi Kartu Keluarga (KK)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Surat Pengantar RT/RW</span>
                </li>
              </ul>
            )}

            {activeKategori === 'kia' && (
              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Fotokopi Akta Kelahiran Anak</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Fotokopi Kartu Keluarga (KK) orang tua</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Fotokopi KTP-el kedua orang tua</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Pas foto anak ukuran 2x3 (2 lembar, latar biru/merah bagi usia 5-17 thn)</span>
                </li>
              </ul>
            )}

            {/* SOP Flow */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-xs space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-slate-900">
                <Info className="w-4 h-4 text-emerald-600" />
                <span>Alur Proses Perekaman</span>
              </div>
              <ol className="list-decimal list-inside space-y-1 text-slate-600 pl-1">
                <li>Ajukan form online di halaman ini.</li>
                <li>Ambil Surat Pengantar di Balai Desa Warung Menteng.</li>
                <li>Datang ke Kantor Kecamatan Cijeruk untuk perekaman biometrik / cetak.</li>
              </ol>
            </div>
          </div>

          {/* Right: Formulir Input */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                Formulir Pengajuan Surat Pengantar {activeKategori === 'kia' ? 'KIA' : 'KTP-el'}
              </h2>
              <p className="text-xs text-slate-500">
                Mohon isi formulir dengan teliti sesuai identitas Kartu Keluarga Anda
              </p>
            </div>

            {submittedCode ? (
              <div className="bg-emerald-50 border border-emerald-300 rounded-3xl p-8 text-center space-y-4">
                <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-emerald-950">Pengantar Kependudukan Berhasil Didaftarkan!</h3>
                  <p className="text-xs text-emerald-800">
                    Silakan simpan nomor registrasi pengantar Anda:
                  </p>
                </div>

                <div className="bg-white border-2 border-dashed border-emerald-600 py-3 px-6 rounded-2xl inline-block">
                  <span className="text-xs text-slate-500 block">Nomor Registrasi Surat</span>
                  <span className="text-2xl font-mono font-extrabold text-emerald-900 tracking-wider">
                    {submittedCode}
                  </span>
                </div>

                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Petugas pelayanan desa akan mencetak lembar pengantar resmi bertanda tangan Kepala Desa / Sekdes untuk dibawa ke Kantor Kecamatan Cijeruk.
                </p>

                <div className="pt-2 flex justify-center gap-3">
                  <button
                    onClick={() => setSubmittedCode(null)}
                    className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-6 py-2.5 rounded-xl text-xs transition"
                  >
                    Ajukan Permohonan Lain
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Nama Lengkap Pemohon *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Muhammad Rizki"
                        value={formData.namaLengkap}
                        onChange={e => setFormData({ ...formData, namaLengkap: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Nomor Induk Kependudukan (NIK) *
                      </label>
                      <input
                        type="text"
                        required
                        maxLength={16}
                        placeholder="16 Digit NIK"
                        value={formData.nik}
                        onChange={e => setFormData({ ...formData, nik: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Nomor Kartu Keluarga (KK) *
                      </label>
                      <input
                        type="text"
                        required
                        maxLength={16}
                        placeholder="16 Digit No. KK"
                        value={formData.noKK}
                        onChange={e => setFormData({ ...formData, noKK: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Tempat Lahir *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Bogor"
                        value={formData.tempatLahir}
                        onChange={e => setFormData({ ...formData, tempatLahir: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Tanggal Lahir *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.tanggalLahir}
                        onChange={e => setFormData({ ...formData, tanggalLahir: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Golongan Darah
                      </label>
                      <select
                        value={formData.golonganDarah}
                        onChange={e => setFormData({ ...formData, golonganDarah: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                      >
                        <option value="-">- Tidak Tahu -</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="AB">AB</option>
                        <option value="O">O</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Status Perkawinan *
                      </label>
                      <select
                        value={formData.statusPerkawinan}
                        onChange={e => setFormData({ ...formData, statusPerkawinan: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                      >
                        <option value="Belum Kawin">Belum Kawin</option>
                        <option value="Kawin">Kawin</option>
                        <option value="Cerai Hidup">Cerai Hidup</option>
                        <option value="Cerai Mati">Cerai Mati</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Nomor WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="081234567890"
                        value={formData.noWhatsapp}
                        onChange={e => setFormData({ ...formData, noWhatsapp: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Dusun Domisili *
                      </label>
                      <select
                        value={formData.dusun}
                        onChange={e => setFormData({ ...formData, dusun: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                      >
                        <option value="Dusun I - Cimenteng">Dusun I - Cimenteng</option>
                        <option value="Dusun II - Menteng Pasir">Dusun II - Menteng Pasir</option>
                        <option value="Dusun III - Menteng Girang">Dusun III - Menteng Girang</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        RT / RW *
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          required
                          placeholder="RT 01"
                          value={formData.rt}
                          onChange={e => setFormData({ ...formData, rt: e.target.value })}
                          className="w-1/2 px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                        />
                        <input
                          type="text"
                          required
                          placeholder="RW 01"
                          value={formData.rw}
                          onChange={e => setFormData({ ...formData, rw: e.target.value })}
                          className="w-1/2 px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Alamat Lengkap *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Kp. Cimenteng RT 01/RW 01"
                        value={formData.alamat}
                        onChange={e => setFormData({ ...formData, alamat: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                      />
                    </div>
                  </div>

                  {activeKategori === 'ktp-hilang' && (
                    <div className="pt-2">
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Nomor Surat Laporan Kehilangan Polsek *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: SKTLK/124/V/2024/SEK.CIJERUK"
                        value={formData.noSuratKehilangan}
                        onChange={e => setFormData({ ...formData, noSuratKehilangan: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                      />
                    </div>
                  )}
                </div>

                <div className="pt-3 flex items-center justify-end">
                  <button
                    type="submit"
                    className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-7 py-3 rounded-xl text-xs transition shadow-md flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Ajukan Pengantar KTP / KIA</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
