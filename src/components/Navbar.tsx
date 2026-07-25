import React from 'react';
import { Brain, Zap, Crown, Sparkles, Users, HelpCircle, Mail, ShieldAlert } from 'lucide-react';

interface NavbarProps {
  onOpenModal: (source: 'download' | 'playstore') => void;
  onNavigate: (view: 'home' | 'about' | 'privacy' | 'contact' | 'faq') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal, onNavigate }) => {
  const handleNavClick = (view: 'home' | 'about' | 'privacy' | 'contact' | 'faq', hash?: string) => {
    onNavigate(view);
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <nav className="sticky top-0 z-40 bg-[#080c16]/90 backdrop-blur-md border-b border-cyan-900/50 px-4 lg:px-8 py-1.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center space-x-2 cursor-pointer hover:opacity-95 transition-opacity"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 via-purple-600 to-indigo-600 p-[1px]">
            <div className="w-full h-full bg-[#0b0f19] rounded-lg flex items-center justify-center">
              <Brain className="w-4.5 h-4.5 text-cyan-400 animate-pulse" />
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2 leading-none">
              <span className="text-lg font-black tracking-wider text-white font-mono">
                Elite<span className="text-cyan-400">Mind</span>
              </span>
              <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/40">
                <Crown className="w-2.5 h-2.5 mr-0.5" />
                OFFICIAL
              </span>
            </div>
            <p className="text-[8.5px] text-cyan-400/80 tracking-widest uppercase font-semibold mt-0.5 leading-none">
              Cyber Brain Gamer Platform
            </p>
          </div>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-semibold text-slate-300">
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-1.5 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Home</span>
          </button>
          <button 
            onClick={() => handleNavClick('about')}
            className="flex items-center space-x-1.5 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            <Users className="w-4 h-4 text-purple-400" />
            <span>About Us</span>
          </button>
          <button 
            onClick={() => handleNavClick('faq')}
            className="flex items-center space-x-1.5 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            <HelpCircle className="w-4 h-4 text-yellow-400" />
            <span>FAQ</span>
          </button>
          <button 
            onClick={() => handleNavClick('contact')}
            className="flex items-center space-x-1.5 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            <Mail className="w-4 h-4 text-emerald-400" />
            <span>Contact</span>
          </button>
          <button 
            onClick={() => handleNavClick('privacy')}
            className="flex items-center space-x-1.5 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            <ShieldAlert className="w-4 h-4 text-rose-400" />
            <span>Privacy</span>
          </button>
        </div>

        {/* Action Button */}
        <div className="flex items-center space-x-3">
          <div className="hidden sm:flex items-center space-x-1.5 bg-slate-900/80 border border-purple-500/30 px-3 py-1.5 rounded-full text-xs font-bold text-purple-300">
            <Zap className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400 animate-bounce" />
            <span>12/20 Energy</span>
          </div>

          <button
            onClick={() => onOpenModal('download')}
            className="relative group overflow-hidden rounded-lg p-[1px] font-bold text-xs cursor-pointer"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-yellow-500 rounded-lg group-hover:opacity-100 opacity-80 transition-opacity"></span>
            <span className="relative block px-3 py-1 bg-[#0d1322] rounded-[7px] text-cyan-300 group-hover:text-white transition-colors flex items-center space-x-1">
              <span>GET APP</span>
              <span className="inline-block px-1 py-0.2 text-[8px] bg-cyan-500/20 text-cyan-300 rounded font-mono">SOON</span>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};
