import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, ArrowLeft, Lock, Database, EyeOff, FileText } from 'lucide-react';

interface PrivacyPageProps {
  onNavigate: (view: 'home' | 'about' | 'privacy' | 'contact' | 'faq') => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
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
        className="space-y-10"
      >
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>SECURITY CHARTER</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight font-mono">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-yellow-400">Policy</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-medium">
            Your trust is our absolute priority. We are committed to safeguarding your personal information, diagnostic profiles, and gaming metrics.
          </p>
        </div>

        {/* Highlight points */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-cyan-950/50 pt-8">
          <div className="bg-[#050811] p-5 rounded-xl border border-cyan-950/60 space-y-3">
            <Lock className="w-6 h-6 text-cyan-400" />
            <h3 className="font-bold text-white font-mono text-xs uppercase">No Ad Trackers</h3>
            <p className="text-slate-400 text-xs font-medium">We do not integrate tracking SDKs, pixels, or intrusive commercial advertisements inside the application.</p>
          </div>

          <div className="bg-[#050811] p-5 rounded-xl border border-cyan-950/60 space-y-3">
            <Database className="w-6 h-6 text-purple-400" />
            <h3 className="font-bold text-white font-mono text-xs uppercase">Local-First Storage</h3>
            <p className="text-slate-400 text-xs font-medium">All high scores, levels, and cognitive performance logs are saved securely and locally on your device.</p>
          </div>

          <div className="bg-[#050811] p-5 rounded-xl border border-cyan-950/60 space-y-3">
            <EyeOff className="w-6 h-6 text-yellow-400" />
            <h3 className="font-bold text-white font-mono text-xs uppercase">Zero Data Sale</h3>
            <p className="text-slate-400 text-xs font-medium">We do not share, sell, or rent your cognitive performance parameters or logs with third-party brokers.</p>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-6 text-slate-300 text-sm leading-relaxed font-medium pt-4">
          <div className="space-y-2">
            <h2 className="text-lg font-bold text-white font-mono flex items-center space-x-2">
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>1. Information We Collect</span>
            </h2>
            <p className="text-slate-400">
              EliteMind processes minimal user data. In our current release, the application functions primarily in offline mode. If you participate in online global tournaments, the only data transmitted is an anonymous gamer ID (or custom username) along with your tournament high scores and reaction time logs to compile fair leaderboards.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-lg font-bold text-white font-mono flex items-center space-x-2">
              <Database className="w-4 h-4 text-cyan-400" />
              <span>2. Storage and Data Retention</span>
            </h2>
            <p className="text-slate-400">
              Because of our local-first database paradigm, your cognitive history diagrams, daily energy levels, and unlocked mental badges reside exclusively on your physical hardware. We do not maintain server-side records of your daily mental exercises unless explicitly backed up under your registered account credentials.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-lg font-bold text-white font-mono flex items-center space-x-2">
              <Lock className="w-4 h-4 text-cyan-400" />
              <span>3. Data Security Measures</span>
            </h2>
            <p className="text-slate-400">
              For online operations, EliteMind utilizes secure, encrypted communication protocols (HTTPS/TLS) to transmit high scores and multiplayer lobbies. We maintain rigorous controls to prevent unauthorized access, manipulation, or interception of gaming databases.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-lg font-bold text-white font-mono flex items-center space-x-2">
              <ShieldAlert className="w-4 h-4 text-cyan-400" />
              <span>4. Children's Privacy Guidelines</span>
            </h2>
            <p className="text-slate-400">
              EliteMind is designed as a brain training platform safe for audiences of all ages. We do not knowingly or purposefully collect identifiable personal data from minors. If you believe your child has submitted personal details, please contact us immediately to purge them from our score systems.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-lg font-bold text-white font-mono flex items-center space-x-2">
              <EyeOff className="w-4 h-4 text-cyan-400" />
              <span>5. Updates to This Policy</span>
            </h2>
            <p className="text-slate-400">
              We may periodically revise our Privacy Policy to integrate new platform updates or safety standards. We encourage you to check this page to stay informed about our data handling commitments.
            </p>
          </div>
        </div>

      </motion.div>
    </div>
  );
};
