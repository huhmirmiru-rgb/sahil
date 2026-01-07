
import React from 'react';

interface Props {
  onNext: () => void;
}

const GreetingScreen: React.FC<Props> = ({ onNext }) => {
  return (
    <div className="w-full text-center space-y-8 animate-in slide-in-from-bottom duration-700">
      <div className="relative inline-block">
        {/* Main Anniversary Image provided by user */}
        <div className="relative z-10">
          <img 
            src="https://i.postimg.cc/ZKy10TMX/1767207424283-removebg-preview.png" 
            alt="Happy Anniversary Jaan" 
            className="w-64 h-auto md:w-80 drop-shadow-[0_20px_50px_rgba(255,77,109,0.3)] transform hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        {/* Decorative Floating Element */}
        <div className="absolute -top-4 -right-4 bg-rose-500 text-white p-3 rounded-full shadow-lg floating z-20">
          <i className="fas fa-cake-candles text-xl"></i>
        </div>

        {/* Soft radial glow behind the transparent image */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-rose-300/30 blur-3xl rounded-full -z-10"></div>
      </div>

      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-romantic text-rose-700 drop-shadow-sm">Happy 1st Anniversary!</h1>
        <p className="text-lg text-rose-600 italic px-4 font-light leading-relaxed max-w-xs mx-auto">
          "One year down, forever to go. You are the best thing that ever happened to me, Jaan."
        </p>
      </div>

      <button
        onClick={onNext}
        className="group relative px-10 py-4 bg-white text-rose-600 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center justify-center gap-3 mx-auto overflow-hidden active:scale-95"
      >
        <div className="absolute inset-0 bg-rose-50 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        <span className="relative z-10">Explore Our Journey</span>
        <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform relative z-10"></i>
      </button>
    </div>
  );
};

export default GreetingScreen;
