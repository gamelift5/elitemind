import React from 'react';
import { X, Sparkles, Download } from 'lucide-react';
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 10 }}
          className="relative w-full max-w-[280px] bg-[#030712] border border-cyan-500/30 rounded-2xl p-6 shadow-2xl text-slate-100 text-center overflow-hidden"
        >
          {/* Subtle Top Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-16 bg-cyan-500/20 blur-2xl pointer-events-none -z-10" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-1 text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-800 rounded-full border border-cyan-950 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Dynamic Icon based on source */}
          <div className="flex justify-center mb-3">
            {source === 'download' ? (
              <div className="p-3 rounded-xl bg-amber-500/20 border border-amber-500/30 text-yellow-400">
                <Download className="w-6 h-6 text-yellow-400" />
              </div>
            ) : source === 'playstore' ? (
              <div className="p-3 rounded-xl bg-slate-800/90 border border-cyan-500/30 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 20.2857V3.71429C3 3.12571 3.32 2.60571 3.82 2.34286L12.5 11L3.82 19.6571C3.32 19.3943 3 18.8743 3 18.2857Z" fill="#00f0ff" />
                  <path d="M12.5 11L16.5 15L20.18 12.9143C21.27 12.2857 21.27 11.7143 20.18 11.0857L16.5 9L12.5 11Z" fill="#ffc107" />
                  <path d="M12.5 11L3.82 2.34286C4.19 2.14857 4.63 2.13143 5.06 2.38286L16.5 9L12.5 11Z" fill="#ff3d00" />
                  <path d="M12.5 11L16.5 15L5.06 21.6171C4.63 21.8686 4.19 21.8514 3.82 21.6571L12.5 11Z" fill="#4caf50" />
                </svg>
              </div>
            ) : (
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" />
              </div>
            )}
          </div>

          {/* Text: Coming Soon */}
          <h3 className="text-xl font-black font-mono tracking-wider text-white uppercase">
            Coming Soon
          </h3>
          <p className="text-xs text-slate-400 font-mono mt-1 font-medium">
            Stay tuned!
          </p>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

