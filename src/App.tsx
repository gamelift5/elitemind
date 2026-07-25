import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroPoster } from './components/HeroPoster';
import { AboutPage } from './components/AboutPage';
import { PrivacyPage } from './components/PrivacyPage';
import { ContactPage } from './components/ContactPage';
import { FaqPage } from './components/FaqPage';
import { Footer } from './components/Footer';
import { ComingSoonModal } from './components/ComingSoonModal';
import { Brain } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'about' | 'privacy' | 'contact' | 'faq'>('home');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState<'download' | 'playstore' | null>(null);

  const handleOpenModal = (source: 'download' | 'playstore') => {
    setTimeout(() => {
      setModalSource(source);
      setModalOpen(true);
    }, 1000);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalSource(null);
  };

  return (
    <div className="min-h-screen bg-cyber-dark text-slate-100 font-sans selection:bg-cyan-500 selection:text-black antialiased overflow-x-hidden">
      {/* Header Navigation */}
      <Navbar onOpenModal={handleOpenModal} onNavigate={setCurrentView} />

      {/* Main Content Areas */}
      <main>
        {currentView === 'home' && (
          <>
            {/* Main Hero & Big Poster with Centered Download & Coming Soon Buttons */}
            <HeroPoster onOpenModal={handleOpenModal} />

            {/* Clean & Elegant Unboxed "About EliteMind" Section */}
            <section id="info-section" className="py-16 px-4 max-w-4xl mx-auto border-t border-cyan-900/20 text-left space-y-10">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight font-mono">
                  About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-yellow-400">EliteMind</span>
                </h2>
              </div>
              
              <div className="space-y-8 text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white font-mono uppercase tracking-wide border-b border-cyan-950/40 pb-2">
                    1. The Cognitive Renaissance: Gamifying Human Intellect
                  </h3>
                  <p>
                    EliteMind represents a fundamental shift in how we approach cognitive fitness, mental longevity, and brain performance. For decades, brain training has been perceived as either dry academic exercises or overly simplistic digital puzzles that fail to simulate real-world cognitive stressors. EliteMind bridges this gap by introducing a state-of-the-art cognitive training suite designed specifically for the modern digital generation. Our system redefines mental exercise by converting complex cognitive neuro-assessment methods into immersive, highly engaging multiplayer game formats. We believe that training your mind should be as thrilling as participating in an esports tournament, where every millisecond count, every correct pattern gives a rush of focus, and strategic clarity determines global leadership ranking.
                  </p>
                  <p>
                    By blending the precision of neuropsychological testing protocols with the addictive adrenaline loops of high-performance gaming, EliteMind builds a continuous cycle of positive mental reinforcement. Players are no longer forced to undergo tedious, repetitive drills. Instead, they are placed in dynamic visual arenas where memory pathways, fast-reflex motors, and mathematical computations are integrated into tactical challenges. The ultimate objective is simple yet profoundly ambitious: to democratize high-level cognitive enhancement, making it free from intrusive advertisements, globally accessible across mobile operating systems, and functional under complete offline status.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white font-mono uppercase tracking-wide border-b border-cyan-950/40 pb-2">
                    2. The Four Vertices of Brain Agility
                  </h3>
                  <p>
                    To establish a balanced, high-fidelity map of your cognitive capabilities, EliteMind focuses its entire ecosystem around four key neurological pillars. Each pillar represents a critical functional domain of the human brain, working in tandem to support quick decision-making, creative problem-solving, and continuous productivity under high stress:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-slate-400 text-xs sm:text-sm">
                    <li>
                      <strong className="text-white font-mono">Memory Matrix:</strong> Focuses on stretching the active working memory limits. By utilizing spatial-visual sequence boards and progressive grid retention tasks, EliteMind forces the brain to encode, store, and quickly retrieve fluid data sequences. This targets the prefrontal cortex, expanding your capability to hold complex multi-layered variables simultaneously in active working memory.
                    </li>
                    <li>
                      <strong className="text-white font-mono">Inhibition Focus:</strong> Centers on training the brain's selective attention and executive inhibition capabilities. Inspired by classic conflict interference models, these exercises require players to suppress automatic, rapid-fire responses in favor of slower, highly controlled logical analysis. It trains the mind to filter out background noise and maintain intense, unwavering vigilance.
                    </li>
                    <li>
                      <strong className="text-white font-mono">Quantitative Logic:</strong> Stimulates your numerical fluid intelligence and symbolic speed. Players must rapidly solve complex mathematical equations, perform fast estimation matrices, and recognize abstract logic patterns in sequence under strict temporal constraints. This exercise enhances your natural ability to make accurate, calculated deductions in high-pressure financial or professional situations.
                    </li>
                    <li>
                      <strong className="text-white font-mono">Reflex Velocity:</strong> Evaluates and accelerates the visual motor loop and motor response times. Speed is nothing without accuracy, so this vertex maps how quickly your visual receptors capture incoming on-screen stimuli, translate the data through neural networks, and execute precise physical taps. Over time, this decreases reaction times to a sub-millisecond level.
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white font-mono uppercase tracking-wide border-b border-cyan-950/40 pb-2">
                    3. The Adaptive Neuro-plasticity Difficulty Engine
                  </h3>
                  <p>
                    One of the main challenges in cognitive conditioning is the "plateau effect." When brain-training software offers stagnant difficulty scales, the human mind rapidly adapts, creating efficient mental shortcuts that reduce cognitive demand. Once an exercise becomes easy, neuro-plasticity slowing occurs, and training effectiveness drops. To combat this, EliteMind is powered by an advanced Adaptive Neuro-plasticity Difficulty Engine. This custom algorithm operates in the background, measuring performance metrics down to individual millisecond response intervals.
                  </p>
                  <p>
                    If the system detects that you are solving N-back matrix paths or logic grids with high accuracy and low reaction times, it immediately scales the visual complexity, shortens countdown thresholds, and introduces strategic interference variables. Conversely, if you encounter a mental block and performance drops, the engine smoothly scales back the difficulty to prevent cognitive fatigue and frustration. This maintains the brain in a perpetual state of "desirable difficulty"—the exact zone of optimal challenge where synaptic pathways are stretched, new connections are formed, and cognitive growth is maximized.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white font-mono uppercase tracking-wide border-b border-cyan-950/40 pb-2">
                    4. From Clinical Neuro-Assessment to Competitive Esports
                  </h3>
                  <p>
                    EliteMind does not invent pseudo-scientific exercises. Instead, our design team curates well-established, peer-reviewed clinical cognitive assessment methodologies and translates them into competitive, fun game mechanics. We draw direct inspiration from legendary neuropsychological tasks such as the Stroop Color-Word Interference Test, the Dual N-Back Working Memory Protocol, the Corsi Block-Tapping Span, and the Trail Making visual tracking procedures. By stripping away the sterile, intimidating design of clinical lab tests and overlaying futuristic cyberpunk themes, neon visual indicators, and explosive kinetic feedback, we make cognitive scientific testing deeply engaging.
                  </p>
                  <p>
                    Furthermore, EliteMind is engineered with a competitive esport infrastructure in mind. Your scores across memory grids, focus speeds, logic matrices, and reflex taps are synthesized into a single, unified global metric known as the EliteMind Index. This indicator allows users to analyze their intellectual performance across standard gamer percentiles. You can compare your specific spatial memory or cognitive inhibition velocity against friends, colleagues, or professional gamers around the globe, pushing yourself to claim grandmaster titles in our public multiplayer battle arenas.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white font-mono uppercase tracking-wide border-b border-cyan-950/40 pb-2">
                    5. Privacy-First Sovereignty: Your Data Remains Yours
                  </h3>
                  <p>
                    In an era dominated by predatory monetization structures, micro-transactions, and persistent tracking networks that trade personal profiles for profit, EliteMind takes a stand for digital sovereignty. We believe your cognitive performance indicators, neurological reaction speeds, and gameplay history are deeply private. This is why the application utilizes a strict local-first data paradigm. All high score records, unlocked achievements, daily energy parameters, and synaptic mapping logs are processed and saved locally on your physical device.
                  </p>
                  <p>
                    We do not embed tracking pixels, third-party analytics SDKs, or invasive commercial advertising banners that interrupt your focus and drain device battery. When you choose to participate in online global leagues, EliteMind only transmits an anonymous player nickname along with score data points to ensure fair play, keeping your personal profile entirely private. Your brain data belongs to you alone, and EliteMind is engineered to protect that right unconditionally.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white font-mono uppercase tracking-wide border-b border-cyan-950/40 pb-2">
                    6. The Daily Synaptic Cycle and Regeneration
                  </h3>
                  <p>
                    High-level brain training is closely related to physical muscle building; it requires intense focused exertion followed by deep neurological rest. To prevent mental burnout and foster healthy cognitive growth habits, EliteMind implements a gamified Synaptic Energy System. Each cognitive challenge consumed during your daily routine costs a designated amount of mental energy points. Players start with a standard daily limit of energy that regenerates gradually over time.
                  </p>
                  <p>
                    This gamified friction ensures that users do not over-train in single marathon sessions, which leads to diminished cognitive returns and mental fatigue. Instead, it promotes a consistent daily ritual of 5 to 10 minutes of training. This structured cadence ensures your synapses are stimulated at regular intervals, allowing your brain to rest, consolidate memory connections during sleep cycles, and regenerate for the next day's challenge. EliteMind is not just a game; it is your lifelong partner in maintaining visual speed, mental agility, and permanent cognitive sharpness.
                  </p>
                </div>
              </div>
            </section>
          </>
        )}

        {currentView === 'about' && (
          <AboutPage onNavigate={setCurrentView} />
        )}

        {currentView === 'privacy' && (
          <PrivacyPage onNavigate={setCurrentView} />
        )}

        {currentView === 'contact' && (
          <ContactPage onNavigate={setCurrentView} />
        )}

        {currentView === 'faq' && (
          <FaqPage onNavigate={setCurrentView} />
        )}
      </main>

      {/* Footer */}
      <Footer onOpenModal={handleOpenModal} onNavigate={setCurrentView} />

      {/* Coming Soon Release Modal */}
      <ComingSoonModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        source={modalSource}
      />
    </div>
  );
}
