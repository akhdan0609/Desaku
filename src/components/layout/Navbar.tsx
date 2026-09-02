import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, 
  Menu, 
  X, 
  PhoneCall, 
  Lock, 
  ArrowRight,
  LogOut,
  UserCheck,
  Search,
  Shield
} from 'lucide-react';
import { PageRoute } from '../../types';
import { getAdminAuth, setAdminAuth } from '../../utils/storage';

interface NavbarProps {
  activePage: PageRoute;
  onNavigate: (page: PageRoute, filterParams?: any) => void;
  onOpenLoginModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  onOpenLoginModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [adminAuth, setAdminAuthState] = useState(getAdminAuth());
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleStorage = () => {
      setAdminAuthState(getAdminAuth());
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (page: PageRoute, params?: any) => {
    onNavigate(page, params);
    setOpenDropdown(null);
    setMobileMenuOpen(false);
    setSearchModalOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    setAdminAuth(null);
    setAdminAuthState(null);
    handleNavClick('beranda');
  };

  const handleLoginClick = () => {
    if (onOpenLoginModal) {
      onOpenLoginModal();
    } else {
      handleNavClick('login-admin');
    }
  };

  const isProfilActive = activePage.startsWith('profil-');
  const isPotensiActive = activePage.startsWith('potensi-');
  const isPelayananActive = activePage.startsWith('pelayanan-');
  const isBeritaActive = activePage.startsWith('berita-') || activePage === 'informasi-berita' || activePage === 'informasi-galeri';
  const isKKNActive = activePage.startsWith('kkn');

  // Search items list
  const searchDirectory = [
    { title: 'Beranda Desa', desc: 'Halaman utama portal informasi Desa Warung Menteng', page: 'beranda' as PageRoute, tag: 'Utama' },
    // Profil Desa
    { title: 'Tentang Desa', desc: 'Visi, misi, letak geografis, sejarah, situs cagar budaya, dan gambaran umum', page: 'profil-tentang' as PageRoute, tag: 'Profil' },
    { title: 'Perangkat Desa', desc: 'Struktur organisasi dan profil perangkat desa', page: 'profil-pemerintahan' as PageRoute, tag: 'Profil' },
    { title: 'Anggaran Desa (APBDes)', desc: 'Transparansi pendapatan, belanja desa, dan pembiayaan', page: 'profil-anggaran' as PageRoute, tag: 'Transparansi' },
    // Potensi Desa
    { title: 'Potensi Desa', desc: 'Destinasi wisata alam, UMKM unggulan, seni budaya adat, dan budidaya peternakan perikanan', page: 'potensi-desa' as PageRoute, tag: 'Potensi' },
    { title: 'Destinasi Wisata Alam', desc: 'Curug Menteng, Bukit Menteng Asri, Camping Ground', page: 'potensi-destinasi' as PageRoute, tag: 'Potensi' },
    { title: 'UMKM Desa', desc: 'Pemberdayaan unit usaha mikro kecil menengah warga desa', page: 'potensi-umkm' as PageRoute, tag: 'Potensi' },
    { title: 'Produk Lokal Khas Menteng', desc: 'Kopi Robusta Lereng Salak, Anyaman Bambu, Olahan Salak', page: 'potensi-produk-lokal' as PageRoute, tag: 'Potensi' },
    { title: 'Budaya & Adat Istiadat', desc: 'Upacara Seren Taun Cijeruk, Silat Cimande, Seni Calung', page: 'potensi-budaya' as PageRoute, tag: 'Potensi' },
    { title: 'Budidaya', desc: 'Sentra budidaya kolam air deras nila, mas, dan gurame', page: 'potensi-perikanan' as PageRoute, tag: 'Potensi' },
    // Pelayanan Desa
    { title: 'Pelayanan Desa', desc: 'Pusat permohonan surat administrasi, kependudukan, nikah, dan pindah datang', page: 'pelayanan-desa' as PageRoute, tag: 'Pelayanan' },
    { title: 'Surat Keterangan (Domisili, SKU, SKTM)', desc: 'Layanan online surat domisili, usaha, dan tidak mampu', page: 'pelayanan-surat-keterangan' as PageRoute, tag: 'Pelayanan' },
    { title: 'Kependudukan (Pengantar KTP & KIA)', desc: 'Pengantar perekaman KTP baru, rusak, hilang, dan KIA', page: 'pelayanan-kependudukan' as PageRoute, tag: 'Pelayanan' },
    { title: 'Pindah Datang (SKPWNI)', desc: 'Surat keterangan pindah keluar dan masuk kependudukan', page: 'pelayanan-pindah-datang' as PageRoute, tag: 'Pelayanan' },
    { title: 'Layanan Pernikahan (N1 - N4)', desc: 'Surat pengantar nikah desa, formulir N1-N4 dan KUA', page: 'pelayanan-layanan-pernikahan' as PageRoute, tag: 'Pelayanan' },
    // Berita
    { title: 'Press Release Resmi', desc: 'Siaran pers resmi publikasi kegiatan & kebijakan desa', page: 'berita-press-release' as PageRoute, tag: 'Berita' },
    { title: 'Galeri Foto Desa', desc: 'Dokumentasi visual foto dan video agenda kegiatan desa', page: 'berita-galeri' as PageRoute, tag: 'Berita' },
    // KKN
    { title: 'Latar Belakang KKN', desc: 'Latar belakang pengabdian mahasiswa di Warung Menteng', page: 'kkn-latar-belakang' as PageRoute, tag: 'KKN' },
    { title: 'Visi dan Misi KKN', desc: 'Visi, misi, dan 5 pilar program unggulan mahasiswa', page: 'kkn-visi-misi' as PageRoute, tag: 'KKN' },
    { title: 'Struktural Tim KKN', desc: 'Susunan organisasi mahasiswa KKN dan posko dusun', page: 'kkn-struktural' as PageRoute, tag: 'KKN' },
    { title: 'Galeri Kegiatan KKN', desc: 'Dokumentasi foto kegiatan bimbel, workshop, dan penyuluhan', page: 'kkn-galeri' as PageRoute, tag: 'KKN' },
    // Kontak Darurat
    { title: 'Kontak Darurat 24 Jam', desc: 'Ambulans desa, Damkar, BPBD, Bhabinkamtibmas, Babinsa', page: 'kontak-darurat' as PageRoute, tag: 'Darurat' }
  ];

  const isProfilPage = activePage === 'profil-tentang' || activePage === 'profil-sejarah' || activePage === 'profil-pemerintahan' || activePage === 'profil-anggaran' || activePage === 'profil-lembaga' || activePage === 'profil-demografi' || activePage.startsWith('profil-');
  const isPotensiPage = activePage === 'potensi-desa' || activePage.startsWith('potensi-');
  const isPelayananPage = activePage === 'pelayanan-desa' || activePage.startsWith('pelayanan-');

  // Sembunyikan fitur pencarian pada Profil Desa dan Potensi Desa
  const hideSearch = isProfilPage || isPotensiPage;

  // Sembunyikan fitur kontak darurat pada Profil Desa, Potensi Desa, dan Pelayanan
  const hideKontakDarurat = isProfilPage || isPotensiPage || isPelayananPage;

  const searchResults = searchQuery.trim() === ''
    ? searchDirectory.slice(0, 8)
    : searchDirectory.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-100" ref={dropdownRef}>
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* 1. Logo & Village Title (Left) */}
          <div 
            onClick={() => handleNavClick('beranda')}
            className="flex items-center gap-3 cursor-pointer group select-none shrink-0"
          >
            {/* Crest Shield Badge */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 flex items-center justify-center text-white shadow-sm border border-emerald-500/40 shrink-0">
              <Shield className="w-5 h-5 text-amber-300 fill-amber-300" />
            </div>
            <div>
              <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 block leading-tight">
                Desa Warung Menteng
              </span>
              <p className="text-xs text-slate-500 font-normal">
                Kec. Cijeruk, Kab. Bogor
              </p>
            </div>
          </div>

          {/* 2. Search Bar in Navbar (Hidden on Profil Desa & Potensi Desa) */}
          {!hideSearch && (
            <div className="hidden lg:flex items-center flex-1 max-w-xs xl:max-w-sm">
              <div 
                onClick={() => setSearchModalOpen(true)}
                className="w-full flex items-center justify-between px-4 py-2 bg-white border border-slate-200 rounded-full text-xs text-slate-400 cursor-pointer hover:border-slate-300 transition shadow-xs"
              >
                <span>Cari informasi di sini...</span>
                <Search className="w-4 h-4 text-slate-500" />
              </div>
            </div>
          )}

          {/* 3. Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-5 text-sm font-medium">
            {/* BERANDA */}
            <button
              onClick={() => handleNavClick('beranda')}
              className={`py-2 transition uppercase tracking-wide text-xs ${
                activePage === 'beranda'
                  ? 'text-emerald-800 font-extrabold border-b-2 border-emerald-700'
                  : 'text-slate-800 hover:text-emerald-700 font-bold'
              }`}
            >
              Beranda
            </button>

            {/* PROFIL DESA Dropdown */}
            <div className="relative">
              <button
                onClick={() => setOpenDropdown(openDropdown === 'profil' ? null : 'profil')}
                className={`py-2 flex items-center gap-1 transition uppercase tracking-wide text-xs ${
                  isProfilActive
                    ? 'text-emerald-800 font-extrabold border-b-2 border-emerald-700'
                    : 'text-slate-800 hover:text-emerald-700 font-bold'
                }`}
              >
                <span>Profil Desa</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'profil' ? 'rotate-180 text-emerald-700' : 'text-slate-500'}`} />
              </button>

              {openDropdown === 'profil' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-200/90 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <button
                    onClick={() => handleNavClick('profil-tentang')}
                    className="w-full text-left px-4 py-2.5 text-xs text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 flex items-center justify-between font-medium"
                  >
                    <span>Tentang Desa</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </button>
                  <button
                    onClick={() => handleNavClick('profil-pemerintahan')}
                    className="w-full text-left px-4 py-2.5 text-xs text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 flex items-center justify-between font-medium"
                  >
                    <span>Perangkat Desa</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </button>
                  <button
                    onClick={() => handleNavClick('profil-anggaran')}
                    className="w-full text-left px-4 py-2.5 text-xs text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 flex items-center justify-between font-medium"
                  >
                    <span>Anggaran Desa</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </button>
                </div>
              )}
            </div>

            {/* POTENSI DESA Dropdown */}
            <div className="relative">
              <button
                onClick={() => setOpenDropdown(openDropdown === 'potensi' ? null : 'potensi')}
                className={`py-2 flex items-center gap-1 transition uppercase tracking-wide text-xs ${
                  isPotensiActive
                    ? 'text-emerald-800 font-extrabold border-b-2 border-emerald-700'
                    : 'text-slate-800 hover:text-emerald-700 font-bold'
                }`}
              >
                <span>Potensi Desa</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'potensi' ? 'rotate-180 text-emerald-700' : 'text-slate-500'}`} />
              </button>

              {openDropdown === 'potensi' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-200/90 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <button
                    onClick={() => handleNavClick('potensi-desa')}
                    className="w-full text-left px-4 py-2.5 text-xs text-emerald-800 bg-emerald-50/50 hover:bg-emerald-100/70 flex items-center justify-between font-bold border-b border-slate-100"
                  >
                    <span>Ikhtisar Potensi Desa</span>
                    <ArrowRight className="w-3 h-3 text-emerald-700" />
                  </button>
                  <button
                    onClick={() => handleNavClick('potensi-destinasi')}
                    className="w-full text-left px-4 py-2.5 text-xs text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 flex items-center justify-between font-medium"
                  >
                    <span>Destinasi</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </button>
                  <button
                    onClick={() => handleNavClick('potensi-umkm')}
                    className="w-full text-left px-4 py-2.5 text-xs text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 flex items-center justify-between font-medium"
                  >
                    <span>UMKM</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </button>
                  <button
                    onClick={() => handleNavClick('potensi-produk-lokal')}
                    className="w-full text-left px-4 py-2.5 text-xs text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 flex items-center justify-between font-medium"
                  >
                    <span>Produk Lokal</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </button>
                  <button
                    onClick={() => handleNavClick('potensi-budaya')}
                    className="w-full text-left px-4 py-2.5 text-xs text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 flex items-center justify-between font-medium"
                  >
                    <span>Budaya & Adat</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </button>
                  <button
                    onClick={() => handleNavClick('potensi-perikanan')}
                    className="w-full text-left px-4 py-2.5 text-xs text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 flex items-center justify-between font-medium"
                  >
                    <span>Budidaya</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </button>
                </div>
              )}
            </div>

            {/* PELAYANAN Dropdown */}
            <div className="relative">
              <button
                onClick={() => setOpenDropdown(openDropdown === 'pelayanan' ? null : 'pelayanan')}
                className={`py-2 flex items-center gap-1 transition uppercase tracking-wide text-xs ${
                  isPelayananActive
                    ? 'text-emerald-800 font-extrabold border-b-2 border-emerald-700'
                    : 'text-slate-800 hover:text-emerald-700 font-bold'
                }`}
              >
                <span>Pelayanan</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'pelayanan' ? 'rotate-180 text-emerald-700' : 'text-slate-500'}`} />
              </button>

              {openDropdown === 'pelayanan' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-200/90 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <button
                    onClick={() => handleNavClick('pelayanan-desa')}
                    className="w-full text-left px-4 py-2.5 text-xs text-emerald-800 bg-emerald-50/50 hover:bg-emerald-100/70 flex items-center justify-between font-bold border-b border-slate-100"
                  >
                    <span>Ikhtisar Pelayanan Desa</span>
                    <ArrowRight className="w-3 h-3 text-emerald-700" />
                  </button>
                  <button
                    onClick={() => handleNavClick('pelayanan-surat-keterangan')}
                    className="w-full text-left px-4 py-2.5 text-xs text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 flex items-center justify-between font-medium"
                  >
                    <span>Surat Keterangan</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </button>
                  <button
                    onClick={() => handleNavClick('pelayanan-kependudukan')}
                    className="w-full text-left px-4 py-2.5 text-xs text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 flex items-center justify-between font-medium"
                  >
                    <span>Kependudukan</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </button>
                  <button
                    onClick={() => handleNavClick('pelayanan-pindah-datang')}
                    className="w-full text-left px-4 py-2.5 text-xs text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 flex items-center justify-between font-medium"
                  >
                    <span>Pindah Datang</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </button>
                  <button
                    onClick={() => handleNavClick('pelayanan-layanan-pernikahan')}
                    className="w-full text-left px-4 py-2.5 text-xs text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 flex items-center justify-between font-medium"
                  >
                    <span>Layanan Pernikahan</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </button>
                </div>
              )}
            </div>

            {/* BERITA Dropdown */}
            <div className="relative">
              <button
                onClick={() => setOpenDropdown(openDropdown === 'berita' ? null : 'berita')}
                className={`py-2 flex items-center gap-1 transition uppercase tracking-wide text-xs ${
                  isBeritaActive
                    ? 'text-emerald-800 font-extrabold border-b-2 border-emerald-700'
                    : 'text-slate-800 hover:text-emerald-700 font-bold'
                }`}
              >
                <span>Berita</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'berita' ? 'rotate-180 text-emerald-700' : 'text-slate-500'}`} />
              </button>

              {openDropdown === 'berita' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-200/90 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <button
                    onClick={() => handleNavClick('berita-press-release')}
                    className="w-full text-left px-4 py-2.5 text-xs text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 flex items-center justify-between font-medium"
                  >
                    <span>Press Release</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </button>
                  <button
                    onClick={() => handleNavClick('berita-galeri')}
                    className="w-full text-left px-4 py-2.5 text-xs text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 flex items-center justify-between font-medium"
                  >
                    <span>Galeri</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </button>
                </div>
              )}
            </div>

            {/* KKN Dropdown */}
            <div className="relative">
              <button
                onClick={() => setOpenDropdown(openDropdown === 'kkn' ? null : 'kkn')}
                className={`py-2 flex items-center gap-1 transition uppercase tracking-wide text-xs ${
                  isKKNActive
                    ? 'text-emerald-800 font-extrabold border-b-2 border-emerald-700'
                    : 'text-slate-800 hover:text-emerald-700 font-bold'
                }`}
              >
                <span>KKN</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'kkn' ? 'rotate-180 text-emerald-700' : 'text-slate-500'}`} />
              </button>

              {openDropdown === 'kkn' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-200/90 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <button
                    onClick={() => handleNavClick('kkn-latar-belakang')}
                    className="w-full text-left px-4 py-2.5 text-xs text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 flex items-center justify-between font-medium"
                  >
                    <span>Latar Belakang</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </button>
                  <button
                    onClick={() => handleNavClick('kkn-visi-misi')}
                    className="w-full text-left px-4 py-2.5 text-xs text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 flex items-center justify-between font-medium"
                  >
                    <span>Visi dan Misi</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </button>
                  <button
                    onClick={() => handleNavClick('kkn-struktural')}
                    className="w-full text-left px-4 py-2.5 text-xs text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 flex items-center justify-between font-medium"
                  >
                    <span>Struktural</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </button>
                  <button
                    onClick={() => handleNavClick('kkn-galeri')}
                    className="w-full text-left px-4 py-2.5 text-xs text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 flex items-center justify-between font-medium"
                  >
                    <span>Galeri</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* 4. Right Action: Emergency Button (Red, Hidden on Profil Desa, Potensi Desa, & Pelayanan) */}
          <div className="flex items-center gap-2">
            {!hideKontakDarurat && (
              <button
                onClick={() => handleNavClick('kontak-darurat')}
                className="bg-[#b91c1c] hover:bg-red-800 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl shadow-sm transition flex items-center gap-2 whitespace-nowrap"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Kontak Darurat</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-80" />
              </button>
            )}

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-emerald-700 hover:bg-slate-100 md:hidden"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Quick Search Modal */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-start justify-center p-4 pt-20 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl border border-slate-200 overflow-hidden space-y-4 p-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 text-slate-800 font-bold text-base">
                <Search className="w-5 h-5 text-emerald-600" />
                <span>Pencarian Portal Desa Warung Menteng</span>
              </div>
              <button 
                onClick={() => setSearchModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                autoFocus
                placeholder="Cari surat, berita, profil, KKN, wisata, atau kontak darurat..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
              />
            </div>

            <div className="max-h-80 overflow-y-auto space-y-2 pr-1">
              {searchResults.length > 0 ? (
                searchResults.map((res, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleNavClick(res.page)}
                    className="p-3.5 rounded-2xl hover:bg-emerald-50/80 border border-transparent hover:border-emerald-200 transition cursor-pointer flex items-center justify-between group"
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 group-hover:bg-emerald-200 group-hover:text-emerald-900 px-2 py-0.5 rounded">
                          {res.tag}
                        </span>
                        <span className="text-sm font-bold text-slate-900 group-hover:text-emerald-900">
                          {res.title}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">
                        {res.desc}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-700 group-hover:translate-x-1 transition" />
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-slate-400 text-sm">
                  Tidak ditemukan hasil untuk "{searchQuery}".
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 max-h-[85vh] overflow-y-auto space-y-3">
          {/* Search box for mobile (Hidden on Profil Desa & Potensi Desa) */}
          {!hideSearch && (
            <div 
              onClick={() => { setSearchModalOpen(true); setMobileMenuOpen(false); }}
              className="flex items-center justify-between px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-500 cursor-pointer"
            >
              <span>Cari informasi di sini...</span>
              <Search className="w-4 h-4 text-slate-500" />
            </div>
          )}

          <button
            onClick={() => handleNavClick('beranda')}
            className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-bold transition ${
              activePage === 'beranda' ? 'bg-emerald-50 text-emerald-800' : 'text-slate-800 hover:bg-slate-50'
            }`}
          >
            Beranda
          </button>

          {/* Profil Desa Mobile Accordion */}
          <div className="border border-slate-200/80 rounded-2xl overflow-hidden">
            <button
              onClick={() => setOpenDropdown(openDropdown === 'm-profil' ? null : 'm-profil')}
              className="w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-bold text-slate-800 bg-slate-50/70"
            >
              <span>Profil Desa</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'm-profil' ? 'rotate-180 text-emerald-700' : 'text-slate-400'}`} />
            </button>
            {openDropdown === 'm-profil' && (
              <div className="p-2 space-y-1 bg-white border-t border-slate-100">
                <button
                  onClick={() => handleNavClick('profil-tentang')}
                  className="w-full text-left px-3 py-2 text-xs rounded-lg text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                >
                  Tentang Desa
                </button>
                <button
                  onClick={() => handleNavClick('profil-pemerintahan')}
                  className="w-full text-left px-3 py-2 text-xs rounded-lg text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                >
                  Perangkat Desa
                </button>
                <button
                  onClick={() => handleNavClick('profil-anggaran')}
                  className="w-full text-left px-3 py-2 text-xs rounded-lg text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                >
                  Anggaran Desa
                </button>
              </div>
            )}
          </div>

          {/* Potensi Desa Mobile Accordion */}
          <div className="border border-slate-200/80 rounded-2xl overflow-hidden">
            <button
              onClick={() => setOpenDropdown(openDropdown === 'm-potensi' ? null : 'm-potensi')}
              className="w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-bold text-slate-800 bg-slate-50/70"
            >
              <span>Potensi Desa</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'm-potensi' ? 'rotate-180 text-emerald-700' : 'text-slate-400'}`} />
            </button>
            {openDropdown === 'm-potensi' && (
              <div className="p-2 space-y-1 bg-white border-t border-slate-100">
                <button
                  onClick={() => handleNavClick('potensi-desa')}
                  className="w-full text-left px-3 py-2 text-xs rounded-lg text-emerald-800 font-bold bg-emerald-50/70 hover:bg-emerald-100"
                >
                  Ikhtisar Potensi Desa
                </button>
                <button
                  onClick={() => handleNavClick('potensi-destinasi')}
                  className="w-full text-left px-3 py-2 text-xs rounded-lg text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                >
                  Destinasi
                </button>
                <button
                  onClick={() => handleNavClick('potensi-umkm')}
                  className="w-full text-left px-3 py-2 text-xs rounded-lg text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                >
                  UMKM
                </button>
                <button
                  onClick={() => handleNavClick('potensi-produk-lokal')}
                  className="w-full text-left px-3 py-2 text-xs rounded-lg text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                >
                  Produk Lokal
                </button>
                <button
                  onClick={() => handleNavClick('potensi-budaya')}
                  className="w-full text-left px-3 py-2 text-xs rounded-lg text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                >
                  Budaya & Adat
                </button>
                <button
                  onClick={() => handleNavClick('potensi-perikanan')}
                  className="w-full text-left px-3 py-2 text-xs rounded-lg text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                >
                  Budidaya
                </button>
              </div>
            )}
          </div>

          {/* Pelayanan Mobile Accordion */}
          <div className="border border-slate-200/80 rounded-2xl overflow-hidden">
            <button
              onClick={() => setOpenDropdown(openDropdown === 'm-pelayanan' ? null : 'm-pelayanan')}
              className="w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-bold text-slate-800 bg-slate-50/70"
            >
              <span>Pelayanan</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'm-pelayanan' ? 'rotate-180 text-emerald-700' : 'text-slate-400'}`} />
            </button>
            {openDropdown === 'm-pelayanan' && (
              <div className="p-2 space-y-1 bg-white border-t border-slate-100">
                <button
                  onClick={() => handleNavClick('pelayanan-desa')}
                  className="w-full text-left px-3 py-2 text-xs rounded-lg text-emerald-800 font-bold bg-emerald-50/70 hover:bg-emerald-100"
                >
                  Ikhtisar Pelayanan Desa
                </button>
                <button
                  onClick={() => handleNavClick('pelayanan-surat-keterangan')}
                  className="w-full text-left px-3 py-2 text-xs rounded-lg text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                >
                  Surat Keterangan
                </button>
                <button
                  onClick={() => handleNavClick('pelayanan-kependudukan')}
                  className="w-full text-left px-3 py-2 text-xs rounded-lg text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                >
                  Kependudukan
                </button>
                <button
                  onClick={() => handleNavClick('pelayanan-pindah-datang')}
                  className="w-full text-left px-3 py-2 text-xs rounded-lg text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                >
                  Pindah Datang
                </button>
                <button
                  onClick={() => handleNavClick('pelayanan-layanan-pernikahan')}
                  className="w-full text-left px-3 py-2 text-xs rounded-lg text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                >
                  Layanan Pernikahan
                </button>
              </div>
            )}
          </div>

          {/* Berita Mobile Accordion */}
          <div className="border border-slate-200/80 rounded-2xl overflow-hidden">
            <button
              onClick={() => setOpenDropdown(openDropdown === 'm-berita' ? null : 'm-berita')}
              className="w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-bold text-slate-800 bg-slate-50/70"
            >
              <span>Berita</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'm-berita' ? 'rotate-180 text-emerald-700' : 'text-slate-400'}`} />
            </button>
            {openDropdown === 'm-berita' && (
              <div className="p-2 space-y-1 bg-white border-t border-slate-100">
                <button
                  onClick={() => handleNavClick('berita-press-release')}
                  className="w-full text-left px-3 py-2 text-xs rounded-lg text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                >
                  Press Release
                </button>
                <button
                  onClick={() => handleNavClick('berita-galeri')}
                  className="w-full text-left px-3 py-2 text-xs rounded-lg text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                >
                  Galeri
                </button>
              </div>
            )}
          </div>

          {/* KKN Mobile Accordion */}
          <div className="border border-slate-200/80 rounded-2xl overflow-hidden">
            <button
              onClick={() => setOpenDropdown(openDropdown === 'm-kkn' ? null : 'm-kkn')}
              className="w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-bold text-slate-800 bg-slate-50/70"
            >
              <span>KKN</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'm-kkn' ? 'rotate-180 text-emerald-700' : 'text-slate-400'}`} />
            </button>
            {openDropdown === 'm-kkn' && (
              <div className="p-2 space-y-1 bg-white border-t border-slate-100">
                <button
                  onClick={() => handleNavClick('kkn-latar-belakang')}
                  className="w-full text-left px-3 py-2 text-xs rounded-lg text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                >
                  Latar Belakang
                </button>
                <button
                  onClick={() => handleNavClick('kkn-visi-misi')}
                  className="w-full text-left px-3 py-2 text-xs rounded-lg text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                >
                  Visi dan Misi
                </button>
                <button
                  onClick={() => handleNavClick('kkn-struktural')}
                  className="w-full text-left px-3 py-2 text-xs rounded-lg text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                >
                  Struktural
                </button>
                <button
                  onClick={() => handleNavClick('kkn-galeri')}
                  className="w-full text-left px-3 py-2 text-xs rounded-lg text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                >
                  Galeri
                </button>
              </div>
            )}
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            {!hideKontakDarurat ? (
              <button
                onClick={() => handleNavClick('kontak-darurat')}
                className="text-xs font-bold text-rose-700 flex items-center gap-1.5 py-1"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Kontak Darurat 24 Jam</span>
              </button>
            ) : <div />}

            <button
              onClick={handleLoginClick}
              className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 py-1"
            >
              <Lock className="w-3 h-3 text-amber-500" />
              <span>Login Admin</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
