
import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { AppState } from './types';
import UnlockScreen from './components/UnlockScreen';
import GreetingScreen from './components/GreetingScreen';
import GalleryScreen from './components/GalleryScreen';
import QuizScreen from './components/QuizScreen';
import LoveMessageScreen from './components/LoveMessageScreen';
import LetterScreen from './components/LetterScreen';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AppState>(AppState.LOCKED);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const navigateTo = (step: AppState) => {
    setCurrentStep(step);
    if (step === AppState.GREETING || step === AppState.LOVE_MESSAGE) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4d6d', '#ff8fa3', '#ffffff']
      });
    }
  };

  const handleUnlock = () => {
    navigateTo(AppState.GREETING);
    if (audioRef.current) {
      audioRef.current.play().catch(err => console.log("Autoplay blocked or failed", err));
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-rose-100 via-pink-200 to-rose-200 overflow-x-hidden relative">
      {/* Background Music */}
      <audio 
        ref={audioRef}
        src="https://www.bensound.com/bensound-music/bensound-love.mp3" 
        loop 
      />

      {/* Music Toggle Button (Visible after Unlock) */}
      {currentStep !== AppState.LOCKED && (
        <button 
          onClick={toggleMute}
          className="fixed top-4 right-4 z-50 bg-white/50 backdrop-blur-md p-3 rounded-full shadow-lg text-rose-500 hover:bg-white transition-all active:scale-90"
          aria-label="Toggle Music"
        >
          <i className={`fas ${isMuted ? 'fa-volume-mute' : 'fa-volume-up'} text-xl`}></i>
        </button>
      )}

      {/* Background Hearts Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <i 
            key={i} 
            className="fas fa-heart absolute text-rose-500 text-2xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `floating ${3 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center p-4 md:p-8 min-h-screen max-w-lg mx-auto">
        {currentStep === AppState.LOCKED && (
          <UnlockScreen onUnlock={handleUnlock} />
        )}
        
        {currentStep === AppState.GREETING && (
          <GreetingScreen onNext={() => navigateTo(AppState.GALLERY)} />
        )}

        {currentStep === AppState.GALLERY && (
          <GalleryScreen onNext={() => navigateTo(AppState.QUIZ)} />
        )}

        {currentStep === AppState.QUIZ && (
          <QuizScreen onNext={() => navigateTo(AppState.LOVE_MESSAGE)} />
        )}

        {currentStep === AppState.LOVE_MESSAGE && (
          <LoveMessageScreen onNext={() => navigateTo(AppState.LETTER)} />
        )}

        {currentStep === AppState.LETTER && (
          <LetterScreen onReset={() => navigateTo(AppState.GREETING)} />
        )}
      </main>

      {/* Decorative Footer */}
      <footer className="fixed bottom-0 left-0 w-full p-2 text-center text-rose-400 text-xs opacity-50 z-20 pointer-events-none">
        Made with ❤️ for Jaan
      </footer>
    </div>
  );
};

export default App;
