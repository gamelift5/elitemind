import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Users, Target, Rocket, Award, Shield, ArrowLeft } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (view: 'home' | 'about' | 'privacy' | 'contact' | 'faq') => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="py-12 px-4 max-w-4xl mx-auto min-h-[70vh]">
      {/* Back navigation */}
      <button 
        onClick={() => onNavigate('home')}
        className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-mono text-xs font-bold uppercase mb-8 group cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        <span>Back to Home</span>
      </button>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-12"
      >
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold">
            <Users className="w-3.5 h-3.5" />
            <span>WHO WE ARE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight font-mono">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-yellow-400">Us</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed font-medium">
            EliteMind is a cutting-edge cognitive training suite built to transform mental exercises into immersive, competitive game experiences.
          </p>
        </div>

        {/* Brand Story / Mission */}
        <div className="space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed font-medium border-t border-cyan-950/50 pt-8">
          <p>
            Welcome to <strong>EliteMind</strong>, the ultimate gamified brain-training platform engineered to stretch your cognitive boundaries, sharpen memory pathways, and accelerate neural synapse speeds. 
          </p>
          <p>
            Developed by game designer and developer <strong>Sameer Choudhary</strong>, EliteMind was born out of a simple vision: to turn cognitive science into an engaging, high-adrenaline mobile multiplayer esport. We believe that brain training shouldn’t feel like taking a school test—it should feel like an immersive tournament.
          </p>
          <p>
            By combining clinical research in brain performance and synaptic plasticity with modern arcade game mechanics, EliteMind offers a scientifically structured &quot;gym for the mind.&quot; Our mission is to democratize brain agility training, making it highly competitive, free of intrusive advertisements, and globally accessible both online and offline.
          </p>
        </div>

        {/* Pillars / Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-cyan-400">
              <Target className="w-5 h-5" />
              <h3 className="font-bold text-white font-mono uppercase text-sm">Gamified Science</h3>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium">
              We translate cognitive testing methodologies into action-packed mobile games that keep users engaged while training core executive functions.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-purple-400">
              <Rocket className="w-5 h-5" />
              <h3 className="font-bold text-white font-mono uppercase text-sm">Peak Performance</h3>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium">
              A dynamic adaptive difficulty engine that responds to your personal metrics, keeping you at the optimal edge of cognitive challenge.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-yellow-400">
              <Award className="w-5 h-5" />
              <h3 className="font-bold text-white font-mono uppercase text-sm">Global Rankings</h3>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium">
              Compete against other players worldwide, earn grandmaster titles, and test your mental capabilities in multiplayer battle arenas.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-emerald-400">
              <Shield className="w-5 h-5" />
              <h3 className="font-bold text-white font-mono uppercase text-sm">Privacy-First</h3>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium">
              Full offline capability with local on-device database storage ensures your cognitive profile and gameplay history remain completely yours.
            </p>
          </div>
        </div>

        {/* Developer Bio */}
        <div className="bg-[#050811] p-6 rounded-2xl border border-cyan-950/60 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center font-mono text-white font-black shrink-0 text-lg">
            SC
          </div>
          <div className="text-left">
            <h4 className="font-bold text-white text-sm font-mono">SAMEER CHOUDHARY</h4>
            <p className="text-xs text-cyan-400 font-mono mt-0.5">Founder & Lead Architect</p>
            <p className="text-xs text-slate-500 mt-2 font-medium">
              Pioneering high-performance gamified brain tools to redefine cognitive fitness and esports brain metrics.
            </p>
          </div>
        </div>

      </motion.div>
    </div>
  );
};
