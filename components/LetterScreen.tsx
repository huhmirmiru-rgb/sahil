
import React from 'react';

interface Props {
  onReset: () => void;
}

const LetterScreen: React.FC<Props> = ({ onReset }) => {
  return (
    <div className="w-full pb-10 animate-in slide-in-from-bottom-20 duration-1000">
      <div className="bg-white/80 p-8 rounded-[40px] shadow-2xl relative overflow-hidden border border-rose-100">
        <div className="absolute top-0 left-0 w-full h-2 bg-rose-500"></div>
        
        <header className="mb-8 border-b border-rose-100 pb-4 flex justify-between items-center">
            <h2 className="text-2xl font-romantic text-rose-600">My Dear Jaan,</h2>
            <span className="text-rose-300 text-xs font-medium uppercase tracking-tighter">Anniversary One • 2024-2025</span>
        </header>

        <div className="space-y-6 text-gray-700 leading-relaxed font-light text-sm md:text-base">
          <p>
            Happy First Anniversary. Today marks one beautiful year of us. One year may sound small, but within this year, we have lived a lifetime together.
          </p>

          <p>
            This journey was never easy. Long distance tested us every day. Sleepless nights, tears on video calls, and missing each other endlessly… yet we never gave up.
          </p>

          <p>
            You left everything for me—your home, your people, your comfort. I may never fully understand how hard that was, but I promise to honor your sacrifice forever. You are my greatest pride.
          </p>

          <p>
            We fought, we cried, we almost broke—but every time, love won. That is our biggest victory. Each scar in our story has only made us stronger.
          </p>

          <p>
            You are my strength, my peace, and my home. Whenever I feel weak, thinking of your smile gives me courage I never knew I had.
          </p>

          <p>
            I promise to stand by you every single day, protect your heart from the world, and love you until the very end.
          </p>

          <div className="pt-8 text-right">
            <p className="font-romantic text-2xl text-rose-600 mb-1">Love you always,</p>
            <p className="font-bold text-rose-800">Tumhara... ❤️</p>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4">
        <button
          onClick={() => window.print()}
          className="w-full py-4 bg-white text-rose-500 border border-rose-200 rounded-2xl font-semibold shadow-sm flex items-center justify-center gap-2 hover:bg-rose-50 transition-colors"
        >
          <i className="fas fa-print"></i>
          <span>Save as PDF</span>
        </button>

        <button
          onClick={onReset}
          className="w-full py-4 bg-rose-500 text-white rounded-2xl font-semibold shadow-lg hover:bg-rose-600 transition-colors flex items-center justify-center gap-2"
        >
          <i className="fas fa-rotate-left"></i>
          <span>Relive the Memories</span>
        </button>
      </div>
    </div>
  );
};

export default LetterScreen;
