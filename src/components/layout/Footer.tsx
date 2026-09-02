import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  MessageCircle,
  Shield,
  ChevronRight
} from 'lucide-react';
import { PageRoute } from '../../types';

interface FooterProps {
  onNavigate: (page: PageRoute, params?: any) => void;
  onOpenLoginModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLoginModal }) => {
  const handleNav = (page: PageRoute) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogin = () => {
    if (onOpenLoginModal) {
      onOpenLoginModal();
    } else {
      handleNav('login-admin');
    }
  };

  return (
    <footer className="bg-[#023324] text-slate-200 border-t border-[#044430]">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          
          {/* Col 1: Identity & Socials */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              {/* Shield Logo */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white font-bold shadow border border-emerald-400/40 shrink-0">
                <Shield className="w-5 h-5 text-amber-300 fill-amber-300" />
              </div>
              <div>
                <span className="font-extrabold text-white text-base tracking-tight block">
                  Desa Warung Menteng
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Desa asri di kaki Gunung Salak yang kaya akan potensi alam, budaya, dan keramahan warganya.
            </p>

            {/* Social Icons (Circles) */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="mailto:desawarungmenteng@gmail.com"
                aria-label="Email Desa"
                className="w-8 h-8 rounded-full border border-slate-400/50 flex items-center justify-center text-slate-300 hover:text-white hover:border-white transition hover:bg-white/10"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Desa"
                className="w-8 h-8 rounded-full border border-slate-400/50 flex items-center justify-center text-slate-300 hover:text-white hover:border-white transition hover:bg-white/10"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Desa"
                className="w-8 h-8 rounded-full border border-slate-400/50 flex items-center justify-center text-slate-300 hover:text-white hover:border-white transition hover:bg-white/10"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Desa"
                className="w-8 h-8 rounded-full border border-slate-400/50 flex items-center justify-center text-slate-300 hover:text-white hover:border-white transition hover:bg-white/10"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Menu */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3 tracking-wide">
              Menu
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={() => handleNav('beranda')} className="hover:text-white transition">
                  Beranda
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('profil-tentang')} className="hover:text-white transition">
                  Profil Desa
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('potensi-desa')} className="hover:text-white transition">
                  Potensi Desa
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('pelayanan-desa')} className="hover:text-white transition">
                  Pelayanan
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('informasi-berita')} className="hover:text-white transition">
                  Berita
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('kkn')} className="hover:text-white transition">
                  KKN
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Informasi */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3 tracking-wide">
              Informasi
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={() => handleNav('profil-pemerintahan')} className="hover:text-white transition">
                  Pemerintahan Desa
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('profil-lembaga')} className="hover:text-white transition">
                  Lembaga Desa
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('profil-demografi')} className="hover:text-white transition">
                  Data Desa
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('pelayanan-download')} className="hover:text-white transition">
                  Peraturan Desa
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('pelayanan-informasi')} className="hover:text-white transition">
                  Pelayanan Publik
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Lokasi Desa */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3 tracking-wide">
              Lokasi Desa
            </h4>
            <div className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                Desa Warung Menteng, Kec. Cijeruk<br />
                Kab. Bogor, Jawa Barat
              </span>
            </div>
          </div>

          {/* Col 5: Kontak Desa */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3 tracking-wide">
              Kontak Desa
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-300 shrink-0" />
                <a href="mailto:desawarungmenteng@gmail.com" className="hover:text-white transition truncate">
                  desawarungmenteng@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-slate-300 shrink-0" />
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
                  @desawarungmenteng
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Facebook className="w-4 h-4 text-slate-300 shrink-0" />
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
                  Desa Warung Menteng
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-300 shrink-0" />
                <a href="tel:081234567890" className="hover:text-white transition">
                  0812-3456-7890
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-6 border-t border-[#044430] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 text-center sm:text-left">
          <p>© 2024 Desa Warung Menteng. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNav('kontak-darurat')}
              className="text-rose-300 hover:text-white transition"
            >
              Hotline Darurat
            </button>
            <span className="text-slate-600">|</span>
            <button
              onClick={handleLogin}
              className="text-slate-400 hover:text-emerald-300 transition"
            >
              Portal Login Staf
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
