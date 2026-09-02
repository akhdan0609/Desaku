import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Home Views
import { BerandaView } from './components/home/BerandaView';

// Profil Views
import { TentangDesaView } from './components/profil/TentangDesaView';
import { SejarahDesaView } from './components/profil/SejarahDesaView';
import { PemerintahanDesaView } from './components/profil/PemerintahanDesaView';
import { LembagaDesaView } from './components/profil/LembagaDesaView';
import { DemografiDesaView } from './components/profil/DemografiDesaView';
import { AnggaranDesaView } from './components/profil/AnggaranDesaView';

// Potensi Views
import { PotensiDesaView } from './components/potensi/PotensiDesaView';
import { DestinasiView } from './components/potensi/DestinasiView';
import { UMKMView } from './components/potensi/UMKMView';

import { BudayaAdatView } from './components/potensi/BudayaAdatView';
import { SitusSejarahView } from './components/potensi/SitusSejarahView';
import { PotensiPerikananView } from './components/potensi/PotensiPerikananView';

// Informasi & Berita Views
import { BeritaView } from './components/informasi/BeritaView';
import { PressReleaseView } from './components/informasi/PressReleaseView';
import { BeritaGaleriView } from './components/informasi/BeritaGaleriView';
import { PengumumanView } from './components/informasi/PengumumanView';
import { ProgramDesaView } from './components/informasi/ProgramDesaView';
import { GaleriView } from './components/informasi/GaleriView';
import { VideoProfilView } from './components/informasi/VideoProfilView';

// Pelayanan Views
import { PelayananDesaView } from './components/pelayanan/PelayananDesaView';
import { InformasiAdministrasiView } from './components/pelayanan/InformasiAdministrasiView';
import { PersyaratanSuratView } from './components/pelayanan/PersyaratanSuratView';
import { PengajuanSuratView } from './components/pelayanan/PengajuanSuratView';
import { CekStatusPengajuanView } from './components/pelayanan/CekStatusPengajuanView';
import { DownloadFormulirView } from './components/pelayanan/DownloadFormulirView';
import { SuratKeteranganView } from './components/pelayanan/SuratKeteranganView';
import { PindahDatangView } from './components/pelayanan/PindahDatangView';
import { LayananPernikahanView } from './components/pelayanan/LayananPernikahanView';

// Aspirasi Views
import { AspirasiPengaduanView } from './components/aspirasi/AspirasiPengaduanView';

// KKN Views
import { KKNView } from './components/kkn/KKNView';
import { KKNLatarBelakangView } from './components/kkn/KKNLatarBelakangView';
import { KKNVisiMisiView } from './components/kkn/KKNVisiMisiView';
import { KKNStrukturalView } from './components/kkn/KKNStrukturalView';
import { KKNGaleriView } from './components/kkn/KKNGaleriView';

// Kontak Darurat View
import { KontakDaruratView } from './components/darurat/KontakDaruratView';

// Admin Views
import { LoginAdminView } from './components/admin/LoginAdminView';
import { AdminDashboardView } from './components/admin/AdminDashboardView';
import { isAdminLoggedIn } from './utils/storage';

export default function App() {
  const [activePage, setActivePage] = useState<PageRoute>('beranda');
  const [navParams, setNavParams] = useState<any>({});
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    setIsAdmin(isAdminLoggedIn());
  }, []);

  const handleNavigate = (page: PageRoute, params?: any) => {
    setActivePage(page);
    setNavParams(params || {});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoginSuccess = () => {
    setIsAdmin(true);
    setActivePage('admin-dashboard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    setIsAdmin(false);
    setActivePage('beranda');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render Current Page
  const renderContent = () => {
    switch (activePage) {
      // BERANDA
      case 'beranda':
        return <BerandaView onNavigate={handleNavigate} />;

      // PROFIL DESA
      case 'profil-tentang':
        return <TentangDesaView onNavigate={handleNavigate} />;
      case 'profil-sejarah':
        return <SejarahDesaView />;
      case 'profil-pemerintahan':
        return <PemerintahanDesaView />;
      case 'profil-lembaga':
        return <LembagaDesaView />;
      case 'profil-demografi':
        return <DemografiDesaView />;
      case 'profil-anggaran':
        return <AnggaranDesaView />;

      // POTENSI DESA
      case 'potensi-desa':
        return <PotensiDesaView onNavigate={handleNavigate} />;
      case 'potensi-destinasi':
        return <DestinasiView />;
      case 'potensi-umkm':
        return <UMKMView initialCategory={navParams?.initialCategory || 'semua'} />;
      case 'potensi-budaya':
        return <BudayaAdatView />;
      case 'potensi-situs-sejarah':
        return <SitusSejarahView />;
      case 'potensi-perikanan':
        return <PotensiPerikananView />;

      // BERITA & INFORMASI DESA
      case 'berita-press-release':
        return <PressReleaseView />;
      case 'berita-galeri':
        return <BeritaGaleriView />;
      case 'informasi-berita':
        return <BeritaView selectedBeritaId={navParams?.selectedBeritaId} />;
      case 'informasi-pengumuman':
        return <PengumumanView />;
      case 'informasi-program':
        return <ProgramDesaView />;
      case 'informasi-galeri':
        return <GaleriView />;
      case 'informasi-video':
        return <VideoProfilView />;

      // PELAYANAN DESA
      case 'pelayanan-desa':
        return <PelayananDesaView onNavigate={handleNavigate} />;
      case 'pelayanan-surat-keterangan':
        return <SuratKeteranganView onNavigate={handleNavigate} />;
      case 'pelayanan-pindah-datang':
        return <PindahDatangView onNavigate={handleNavigate} />;
      case 'pelayanan-layanan-pernikahan':
        return <LayananPernikahanView onNavigate={handleNavigate} />;
      case 'pelayanan-informasi':
        return <InformasiAdministrasiView onNavigate={handleNavigate} />;
      case 'pelayanan-persyaratan':
        return <PersyaratanSuratView onNavigate={handleNavigate} />;
      case 'pelayanan-pengajuan':
        return <PengajuanSuratView defaultSuratId={navParams?.defaultSuratId} onNavigate={handleNavigate} />;
      case 'pelayanan-cek-status':
        return <CekStatusPengajuanView initialRegNumber={navParams?.regNumber} />;
      case 'pelayanan-download':
        return <DownloadFormulirView onNavigate={handleNavigate} />;

      // ASPIRASI & PENGADUAN
      case 'aspirasi-tanya':
        return <AspirasiPengaduanView initialTab="tanya-informasi" />;
      case 'aspirasi-pengaduan':
        return <AspirasiPengaduanView initialTab="pengaduan" />;
      case 'aspirasi-usulan':
        return <AspirasiPengaduanView initialTab="aspirasi" />;
      case 'aspirasi-cek-status':
        return <AspirasiPengaduanView initialTab="cek-status" />;

      // KKN (KULIAH KERJA NYATA)
      case 'kkn-latar-belakang':
        return <KKNLatarBelakangView />;
      case 'kkn-visi-misi':
        return <KKNVisiMisiView />;
      case 'kkn-struktural':
        return <KKNStrukturalView />;
      case 'kkn-galeri':
        return <KKNGaleriView />;
      case 'kkn':
        return <KKNView />;

      // KONTAK DARURAT
      case 'kontak-darurat':
        return <KontakDaruratView />;

      // ADMIN
      case 'login-admin':
        return isAdmin ? (
          <AdminDashboardView onLogout={handleLogout} onNavigate={handleNavigate} />
        ) : (
          <LoginAdminView onLoginSuccess={handleLoginSuccess} onNavigate={handleNavigate} />
        );
      case 'admin-dashboard':
        return isAdmin ? (
          <AdminDashboardView onLogout={handleLogout} onNavigate={handleNavigate} />
        ) : (
          <LoginAdminView onLoginSuccess={handleLoginSuccess} onNavigate={handleNavigate} />
        );

      default:
        return <BerandaView onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-['Plus_Jakarta_Sans',sans-serif] antialiased selection:bg-emerald-200 selection:text-emerald-950">
      <Navbar activePage={activePage} onNavigate={handleNavigate} />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
