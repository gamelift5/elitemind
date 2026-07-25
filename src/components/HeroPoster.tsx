import React from 'react';
import { Download } from 'lucide-react';
import { motion } from 'motion/react';
import posterImg from '../assets/images/elitemind_official_poster_1784906992672.jpg';

interface HeroPosterProps {
  onOpenModal: (source: 'download' | 'playstore') => void;
}

export const HeroPoster: React.FC<HeroPosterProps> = ({ onOpenModal }) => {
  return (
    <section id="hero" className="relative pt-6 pb-8 text-left overflow-x-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-yellow-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Dynamic Slogan & Enhanced Content (Think Smarter, Become Faster) */}
      <div className="px-4 max-w-4xl mx-auto pt-4 pb-8 text-center flex flex-col items-center justify-center space-y-4">
        <div className="space-y-3 flex flex-col items-center text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span>COMING SOON</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight font-mono leading-[1.1] md:leading-[1.05] text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-yellow-300">
              Think Smarter.
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-500 to-cyan-400">
              Become Faster.
            </span>
          </h1>
        </div>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium max-w-2xl text-center mx-auto">
          EliteMind is the ultimate digital arena for cognitive speed and reflex agility. Train your brain with daily 5-minute mental exercises to sharpen your focus and memory.
        </p>
      </div>

      {/* DOWNLOAD APK & PLAYSTORE BUTTONS WITH INTENSIFIED GLOW & BOUNDARY LINES */}
      <div className="px-4 max-w-4xl mx-auto mb-12 text-left">
        <div className="flex flex-col items-start">
          <div className="flex flex-row items-center gap-3 w-full max-w-md">
            {/* Left Button: Download APK */}
            <button
              onClick={() => onOpenModal('download')}
              className="w-1/2 relative group overflow-hidden rounded-xl p-[1px] transition-transform transform active:scale-95 cursor-pointer shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:shadow-[0_0_35px_rgba(234,179,8,0.45)] duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-400 rounded-xl" />
              <div className="relative px-3 py-3 bg-[#0d1322] group-hover:bg-[#121a2d] rounded-[11px] flex items-center justify-center space-x-2 transition-colors text-white">
                <div className="p-1.5 rounded-lg bg-amber-500/20 text-yellow-400 group-hover:scale-105 transition-transform shrink-0">
                  <Download className="w-4.5 h-4.5" />
                </div>
                <div className="text-left min-w-0">
                  <p className="text-[8px] sm:text-[9px] font-bold text-amber-400 tracking-wide uppercase font-mono truncate">DIRECT INSTALL</p>
                  <p className="text-xs sm:text-sm font-black text-white tracking-wide truncate">Download APK</p>
                </div>
              </div>
            </button>

            {/* Right Button: PlayStore Coming Soon */}
            <button
              onClick={() => onOpenModal('playstore')}
              className="w-1/2 relative group overflow-hidden rounded-xl p-[1px] transition-transform transform active:scale-95 cursor-pointer shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_35px_rgba(6,182,212,0.45)] duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff] via-[#ff3d00] via-[#ffc107] to-[#4caf50] rounded-xl animate-pulse" />
              <div className="relative px-3 py-3 bg-[#0d1322] group-hover:bg-[#121a2d] rounded-[11px] flex items-center justify-center space-x-2 transition-colors text-white">
                <div className="p-1.5 rounded-lg bg-slate-800/80 group-hover:bg-slate-700/80 group-hover:scale-105 transition-transform shrink-0 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 20.2857V3.71429C3 3.12571 3.32 2.60571 3.82 2.34286L12.5 11L3.82 19.6571C3.32 19.3943 3 18.8743 3 18.2857Z" fill="#00f0ff" />
                    <path d="M12.5 11L16.5 15L20.18 12.9143C21.27 12.2857 21.27 11.7143 20.18 11.0857L16.5 9L12.5 11Z" fill="#ffc107" />
                    <path d="M12.5 11L3.82 2.34286C4.19 2.14857 4.63 2.13143 5.06 2.38286L16.5 9L12.5 11Z" fill="#ff3d00" />
                    <path d="M12.5 11L16.5 15L5.06 21.6171C4.63 21.8686 4.19 21.8514 3.82 21.6571L12.5 11Z" fill="#4caf50" />
                  </svg>
                </div>
                <div className="text-left min-w-0">
                  <p className="text-[8px] sm:text-[9px] font-bold text-[#00f0ff] tracking-wide uppercase font-mono truncate">PLAYSTORE</p>
                  <p className="text-xs sm:text-sm font-black text-white tracking-wide truncate">Coming Soon</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* POSTER BANNER IMAGE - LOADS INSTANTLY WITHOUT DELAY */}
      <div className="w-full my-0 p-0 border-t border-b border-cyan-950/40 relative overflow-hidden bg-[#050811]">
        <div className="w-full relative overflow-hidden p-0 border-0 outline-none pointer-events-none select-none">
          <img
            src={posterImg}
            alt="EliteMind Official Poster - Train Faster, Think Smarter"
            className="w-full h-auto max-h-[600px] object-cover border-0 outline-none p-0 shadow-2xl block mx-auto"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
};


