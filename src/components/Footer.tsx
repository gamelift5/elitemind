import React from 'react';
import { Brain } from 'lucide-react';

interface FooterProps {
  onOpenModal?: (source: 'download' | 'playstore') => void;
  onNavigate: (view: 'home' | 'about' | 'privacy' | 'contact' | 'faq') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#050811] border-t border-cyan-950/40 py-8 px-4 text-slate-400 text-xs mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[11px]">
        {/* Left Side: Brand and Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-1.5 text-white cursor-pointer hover:opacity-80 transition-opacity"
          >
            <Brain className="w-4 h-4 text-cyan-400" />
            <span className="font-black text-xs">Elite<span className="text-cyan-400">Mind</span></span>
          </button>
          <span className="hidden sm:inline text-slate-800">|</span>
          <p className="text-slate-500">© 2026 EliteMind. All Rights Reserved.</p>
        </div>

        {/* Right Side: Links for About, Privacy, Contact, FAQ */}
        <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2 text-slate-400 font-medium">
          <button onClick={() => onNavigate('about')} className="hover:text-cyan-400 transition-colors cursor-pointer">About Us</button>
          <button onClick={() => onNavigate('privacy')} className="hover:text-cyan-400 transition-colors cursor-pointer">Privacy Policy</button>
          <button onClick={() => onNavigate('contact')} className="hover:text-cyan-400 transition-colors cursor-pointer">Contact Us</button>
          <button onClick={() => onNavigate('faq')} className="hover:text-cyan-400 transition-colors cursor-pointer">FAQ</button>
        </div>
      </div>
    </footer>
  );
};
