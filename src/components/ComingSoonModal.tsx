import React from 'react';
import { X, Sparkles, Download, Play, Rocket, Brain, Cpu, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
  source: 'download' | 'playstore' | null;
}

export const ComingSoonModal: React.FC<ComingSoonModalProps> = ({ isOpen, onClose, source }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-[2px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-sm bg-[#02050e] border border-cyan-500/20 rounded-3xl p-5 shadow-2xl text-slate-100 overflow-hidden"
        >
          {/* Top Background Glow Effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-36 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-transparent blur-3xl pointer-events-none -z-10" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-900/60 hover:bg-slate-800 rounded-full border border-cyan-950 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header Icon - Still/Stationary */}
          <div className="flex justify-center mb-4">
            <div className="relative p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 shadow-lg">
              {source === 'download' ? (
                <Download className="w-8 h-8 text-cyan-400" />
              ) : (
                <Play className="w-8 h-8 text-purple-400" />
              )}
            </div>
          </div>

          {/* Title & Description */}
          <div className="text-center space-y-2 mb-6">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>OFFICIAL ANNOUNCEMENT</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black uppercase font-mono tracking-wide text-white">
              {source === 'download' ? (
                <span>THE APP WILL <span className="text-cyan-400">COME SOON!</span></span>
              ) : (
                <span>PLAY STORE <span className="text-purple-400">COMING SOON!</span></span>
              )}
            </h3>

            <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed max-w-sm mx-auto">
              {source === 'download' ? (
                <span>EliteMind APK test build is currently under final optimization. Official download link will be live very soon!</span>
              ) : (
                <span>EliteMind is currently undergoing Google Play Store verification. Pre-registration & official launch are coming soon!</span>
              )}
            </p>
          </div>

          {/* Beautiful Custom Generated Cyberpunk Mini-Poster */}
          <div className="mb-6 p-4 rounded-2xl bg-[#050811] border border-cyan-950/60 relative overflow-hidden flex flex-col justify-between h-48 select-none">
            {/* Tech background matrix grid styling */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/10 via-transparent to-purple-950/10 pointer-events-none" />
            
            {/* Poster Header */}
            <div className="relative flex justify-between items-start z-10">
              <div>
                <span className="text-[10px] font-mono font-black text-cyan-400 tracking-wider uppercase block">PROJECT REVELATION</span>
                <span className="text-base font-black font-mono tracking-tight text-white mt-0.5 block">ELITEMIND V1.0</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[9px] font-mono font-bold text-emerald-400">BUILD ACTIVE</span>
              </div>
            </div>

            {/* Poster Middle Graphic Section */}
            <div className="relative z-10 flex items-center justify-center space-x-4 my-2">
              <div className="p-2 rounded-xl bg-cyan-950/40 border border-cyan-500/20 text-cyan-400">
                <Brain className="w-5 h-5" />
              </div>
              <div className="h-px w-8 bg-gradient-to-r from-cyan-500/50 to-purple-500/50" />
              <div className="p-2 rounded-xl bg-purple-950/40 border border-purple-500/20 text-purple-400">
                <Cpu className="w-5 h-5" />
              </div>
              <div className="h-px w-8 bg-gradient-to-r from-purple-500/50 to-yellow-500/50" />
              <div className="p-2 rounded-xl bg-yellow-950/40 border border-yellow-500/20 text-yellow-400">
                <Zap className="w-5 h-5" />
              </div>
            </div>

            {/* Poster Footer Text */}
            <div className="relative z-10 flex justify-between items-end border-t border-cyan-950/40 pt-2">
              <div>
                <span className="text-[8px] font-mono text-slate-500 tracking-wider block">COGNITIVE LIMIT</span>
                <span className="text-[10px] font-mono font-black text-slate-300">UNLIMITED SPEED</span>
              </div>
              <div className="text-right">
                <span className="text-[8px] font-mono text-slate-500 tracking-wider block">TRAINING FREQUENCY</span>
                <span className="text-[10px] font-mono font-black text-cyan-400">5-MIN DAILY WORKOUT</span>
              </div>
            </div>
          </div>

          {/* Status Progress Indicator */}
          <div className="p-4 rounded-2xl bg-[#050811]/40 border border-cyan-950/40 space-y-2">
            <div className="flex justify-between text-xs font-mono font-bold">
              <span className="text-cyan-400 flex items-center">
                <Rocket className="w-3.5 h-3.5 mr-1" /> Launch Progress
              </span>
              <span className="text-yellow-400">88% Completed</span>
            </div>
            <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden p-0.5 border border-cyan-950">
              <div className="bg-gradient-to-r from-cyan-500 via-purple-500 to-yellow-500 h-full rounded-full w-[88%]" />
            </div>
            <div className="flex justify-between text-[9px] text-slate-500 font-mono font-semibold">
              <span>✓ UI Design</span>
              <span>✓ Core Games</span>
              <span className="text-cyan-400 font-bold">🚀 Final APK Build</span>
            </div>
          </div>

          {/* Modal Footer Note */}
          <div className="mt-5 pt-3 border-t border-cyan-950/40 text-center text-[10px] text-slate-500 font-mono">
            Official Website for <span className="text-cyan-400 font-bold">EliteMind App</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
