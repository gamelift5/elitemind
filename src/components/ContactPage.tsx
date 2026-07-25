import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, ArrowLeft, Send, CheckCircle, MessageSquare, MapPin } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (view: 'home' | 'about' | 'privacy' | 'contact' | 'faq') => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactName && contactEmail && contactMessage) {
      setFormSubmitted(true);
      setContactName('');
      setContactEmail('');
      setContactMessage('');
      setTimeout(() => {
        setFormSubmitted(false);
      }, 6000);
    }
  };

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
            <Mail className="w-3.5 h-3.5" />
            <span>CONNECT</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight font-mono">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-yellow-400">Us</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed font-medium">
            Have thoughts, bug reports, or feature recommendations for the EliteMind beta? Write to Sameer directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-cyan-950/50 pt-8">
          
          {/* Contact Details */}
          <div className="md:col-span-5 space-y-6">
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider">Direct Channels</h3>
              <p className="text-xs text-slate-500">We respond to support queries and feedback within 24–48 hours.</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs font-mono">SUPPORT EMAIL</h4>
                  <a href="mailto:sameerchoudhary3690@gmail.com" className="text-sm text-cyan-400 hover:underline">
                    sameerchoudhary3690@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs font-mono">ONLINE COMMUNITY</h4>
                  <p className="text-sm text-slate-400">Discord channels & active community forums (Launch soon)</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 rounded-lg bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs font-mono">OFFICE HQ</h4>
                  <p className="text-sm text-slate-400">New Delhi, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-7 bg-[#050811] p-6 rounded-2xl border border-cyan-950/60">
            <h3 className="text-lg font-bold text-white font-mono mb-4 flex items-center space-x-2">
              <Send className="w-4 h-4 text-cyan-400" />
              <span>SEND A DIGITAL DIRECTIVE</span>
            </h3>

            <AnimatePresence mode="wait">
              {formSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-emerald-500/10 border border-emerald-500/30 p-5 rounded-xl flex items-start space-x-3 text-emerald-400 text-sm font-semibold"
                >
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-mono text-xs uppercase font-bold">Transmit Successful</p>
                    <p className="text-slate-400 font-medium text-xs mt-1">Thank you! Your message has been sent successfully. Sameer will respond to you shortly.</p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase font-mono tracking-wider">YOUR NAME</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sameer Choudhary"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className="w-full bg-[#0b101f] text-white border border-cyan-900/40 rounded-xl px-4 py-2.5 text-xs focus:border-cyan-400 focus:outline-none placeholder-slate-600 font-medium"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase font-mono tracking-wider">YOUR EMAIL ADDRESS</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. developer@elitemind.com"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        className="w-full bg-[#0b101f] text-white border border-cyan-900/40 rounded-xl px-4 py-2.5 text-xs focus:border-cyan-400 focus:outline-none placeholder-slate-600 font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase font-mono tracking-wider">TRANSMIT MESSAGE</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Write your feedback, questions or issues here..."
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      className="w-full bg-[#0b101f] text-white border border-cyan-900/40 rounded-xl px-4 py-3 text-xs focus:border-cyan-400 focus:outline-none placeholder-slate-600 font-medium resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-5 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-mono font-bold text-xs rounded-xl flex items-center justify-center space-x-2 cursor-pointer transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>TRANSMIT MESSAGE</span>
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>

        </div>

      </motion.div>
    </div>
  );
};
