
import React, { useState, useEffect } from 'react';
import { generateRomanticPoem } from '../services/geminiService';

interface Props {
  onNext: () => void;
}

const LoveMessageScreen: React.FC<Props> = ({ onNext }) => {
  const [aiPoem, setAiPoem] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const fetchPoem = async () => {
    setLoading(true);
    const text = await generateRomanticPoem();
    setAiPoem(text);
    setLoading(false);
  };

  useEffect(() => {
    fetchPoem();
  }, []);

  return (
    <div className="w-full text-center space-y-10 animate-in zoom-in duration-700">
      <div className="floating">
        <i className="fas fa-heart text-8xl text-rose-500 drop-shadow-lg"></i>
      </div>

      <h2 className="text-4xl font-romantic text-rose-700">I Love You, Jaan</h2>

      <div className="bg-white/40 glass-morphism p-6 rounded-3xl border border-white/50 shadow-inner">
        <h4 className="text-rose-600 font-bold text-xs uppercase tracking-widest mb-4">A special AI poem for us</h4>
        {loading ? (
          <div className="flex flex-col items-center gap-3 py-6">
            <div className="w-8 h-8 border-4 border-rose-300 border-t-rose-500 rounded-full animate-spin"></div>
            <p className="text-rose-400 text-sm animate-pulse">Summoning romance from the clouds...</p>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-lg text-rose-900 italic font-medium leading-relaxed">
              {aiPoem}
            </p>
            <button 
              onClick={fetchPoem}
              className="text-rose-400 text-xs hover:text-rose-600 transition-colors flex items-center justify-center gap-1 mx-auto"
            >
              <i className="fas fa-rotate"></i>
              <span>Generate another one?</span>
            </button>
          </div>
        )}
      </div>

      <button
        onClick={onNext}
        className="w-full py-5 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-3xl font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-3"
      >
        <span>Open My Heart 💌</span>
        <i className="fas fa-envelope-open-heart text-xl"></i>
      </button>
    </div>
  );
};

export default LoveMessageScreen;
