import React from 'react';
import { Zap, Brain, Calculator, Trophy, ShieldCheck, Flame, Cpu } from 'lucide-react';

interface FeaturesProps {
  onOpenModal: (source: 'download' | 'playstore') => void;
}

export const Features: React.FC<FeaturesProps> = () => {
  const featureList = [
    {
      icon: <Zap className="w-6 h-6 text-amber-600" />,
      title: "Lightning Reflexes",
      description: "Sub-millisecond reaction speed exercises that sharpen brain synaptic response time.",
      bgIcon: "bg-amber-100",
    },
    {
      icon: <Brain className="w-6 h-6 text-purple-600" />,
      title: "Memory Power Matrix",
      description: "Spatial and pattern grid memory games designed to expand short-term and working memory retention.",
      bgIcon: "bg-purple-100",
    },
    {
      icon: <Calculator className="w-6 h-6 text-cyan-600" />,
      title: "Rapid Math Logic",
      description: "Fast-paced mathematical mental puzzles that build quick problem-solving abilities.",
      bgIcon: "bg-cyan-100",
    },
    {
      icon: <Trophy className="w-6 h-6 text-amber-600" />,
      title: "Live Battle Arena",
      description: "Multiplayer tournament rooms (up to 100 players) to challenge friends and global players.",
      bgIcon: "bg-amber-100",
    },
    {
      icon: <Flame className="w-6 h-6 text-orange-600" />,
      title: "Streak & XP Levels",
      description: "Gamified leveling system with XP rewards, 7-day streak bonuses, and Grandmaster badges.",
      bgIcon: "bg-orange-100",
    },
    {
      icon: <Cpu className="w-6 h-6 text-emerald-600" />,
      title: "Adaptive Difficulty",
      description: "Smart algorithms adjust puzzle complexity dynamically to keep your brain constantly challenged.",
      bgIcon: "bg-emerald-100",
    },
  ];

  return (
    <section id="stats" className="py-12 px-4 max-w-7xl mx-auto">
      <div className="text-left max-w-3xl mb-10">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold mb-3 shadow-xs">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>COGNITIVE TRAINING FEATURES</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight font-mono">
          WHY TRAIN WITH <span className="text-emerald-600">EliteMind</span>?
        </h2>
        <p className="mt-2 text-slate-600 text-sm font-medium">
          Scientifically inspired cognitive brain training exercises designed to train focus, memory, speed, and logical reasoning.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featureList.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
          >
            <div className={`p-3 rounded-xl ${feature.bgIcon} w-fit mb-4 group-hover:scale-110 transition-transform`}>
              {feature.icon}
            </div>
            <h3 className="text-lg font-bold text-slate-900 tracking-wide">{feature.title}</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed font-medium">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
