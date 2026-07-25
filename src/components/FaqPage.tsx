import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ArrowLeft, Plus, Minus } from 'lucide-react';

interface FaqPageProps {
  onNavigate: (view: 'home' | 'about' | 'privacy' | 'contact' | 'faq') => void;
}

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const faqData: FaqItem[] = [
    {
      category: 'general',
      question: 'Is EliteMind completely free to download?',
      answer: 'Yes! EliteMind is 100% free to download and use. We believe in providing clear cognitive exercises without locking essential training games or performance metrics behind premium subscription paywalls.'
    },
    {
      category: 'gameplay',
      question: 'How do brain games actually benefit cognitive agility?',
      answer: 'Our games are based on standard clinical and neuropsychological assessment tests (like N-Back matrices, Stroop color-word interference, and response timing tasks). Regular practice forces the brain to adapt by creating more robust neural pathways, leading to faster response speeds and heightened focused states.'
    },
    {
      category: 'technical',
      question: 'Can I play EliteMind without internet or cellular access?',
      answer: 'Yes, EliteMind was built offline-first. All level records, energy states, and training profiles are stored locally on your device. You only need internet connectivity if you wish to participate in public multiplayer leagues or live global leaderboards.'
    },
    {
      category: 'general',
      question: 'How often should I train with EliteMind?',
      answer: 'Scientific studies suggest that consistency is key to synaptic performance. We recommend practicing for 5-10 minutes once per day. Doing multiple short, daily sessions is far more beneficial than marathon sessions once a week.'
    },
    {
      category: 'technical',
      question: 'What is the &quot;12/20 Energy&quot; indicator about?',
      answer: 'In the gamified universe, EliteMind uses an Energy metric to prevent mental fatigue and overtraining. Each mental game consumed uses a set amount of energy. Energy automatically regenerates over time, allowing players to space out their training optimally.'
    },
    {
      category: 'gameplay',
      question: 'How is my Brain Score calculated?',
      answer: 'Your global EliteMind index is compiled across four key cognitive vertices: Memory, Focus, Logic, and Reflex speed. Our scoring model evaluates both your accuracy rate and response times in milliseconds to establish standard competitive gamer percentiles.'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'general', name: 'General' },
    { id: 'gameplay', name: 'Gameplay' },
    { id: 'technical', name: 'Technical' }
  ];

  const filteredFaq = activeCategory === 'all' 
    ? faqData 
    : faqData.filter(item => item.category === activeCategory);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
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
        className="space-y-10"
      >
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>KNOWLEDGEBASE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight font-mono">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-yellow-400">Questions</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-medium">
            Everything you need to know about the EliteMind application, game mechanics, download procedures, and cognitive metrics.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 border-t border-cyan-950/50 pt-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setExpandedIndex(null);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-cyan-500 text-black shadow-lg'
                  : 'bg-[#050811] text-slate-400 border border-cyan-950 hover:text-white'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaq.map((faq, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div 
                key={index}
                className="bg-[#050811] border border-cyan-950/75 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left cursor-pointer hover:bg-slate-900/10"
                >
                  <span className="font-bold text-white text-sm sm:text-base font-mono">
                    {faq.question}
                  </span>
                  <div className="p-1 rounded-lg bg-slate-900 text-cyan-400 shrink-0 ml-3">
                    {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-5 pt-1 text-slate-400 text-xs sm:text-sm leading-relaxed border-t border-cyan-950/40 font-medium">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </motion.div>
    </div>
  );
};
