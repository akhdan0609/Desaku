import React from 'react';
import { HeroSection } from './HeroSection';
import { QuickStats } from './QuickStats';
import { HomeBentoGrid } from './HomeBentoGrid';
import { PageRoute } from '../../types';

interface BerandaViewProps {
  onNavigate: (page: PageRoute, params?: any) => void;
}

export const BerandaView: React.FC<BerandaViewProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#f8fafc] min-h-screen pb-12">
      {/* 1. Hero Banner with "Selamat Datang di Desa Warung Menteng" */}
      <HeroSection onNavigate={onNavigate} />

      {/* 2. Floating Stats Bar (5 stats: Luas Wilayah, Jumlah Penduduk, Ketinggian, Jumlah Dusun, Destinasi Unggulan) */}
      <QuickStats />

      {/* 3. Bento Grid (4 Cards: Menu, Tentang Desa, Peta Desa, Berita Terbaru) */}
      <HomeBentoGrid onNavigate={onNavigate} />
    </div>
  );
};
