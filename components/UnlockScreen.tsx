
import React, { useState } from 'react';

interface Props {
  onUnlock: () => void;
}

const UnlockScreen: React.FC<Props> = ({ onUnlock }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase() === 'jaan123') {
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
      setPassword('');
    }
  };

  return (
    <div className="w-full flex flex-col items-center text-center animate-in fade-in duration-700">
      <div className="mb-8 floating">
        <div className="bg-white p-6 rounded-full shadow-xl">
          <i className="fas fa-lock text-rose-500 text-4xl"></i>
        </div>
      </div>
      
      <h1 className="text-3xl font-bold text-rose-800 mb-2">Our Secret Portal</h1>
      <p className="text-rose-600 mb-8 px-4">Enter the secret code to unlock our 1st-year memories.</p>

      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter our secret... ❤️"
          className={`w-full p-4 rounded-2xl border-2 outline-none transition-all ${
            error ? 'border-red-400 shake animate-bounce' : 'border-rose-200 focus:border-rose-400'
          } shadow-sm bg-white/80`}
        />
        
        <button
          type="submit"
          className="w-full py-4 bg-rose-500 hover:bg-rose-600 text-white rounded-2xl font-semibold shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2"
        >
          <span>Unlock Love</span>
          <i className="fas fa-heart"></i>
        </button>
      </form>

      {error && (
        <p className="mt-4 text-red-500 font-medium">Ouch! Galat password hai 😝</p>
      )}
    </div>
  );
};

export default UnlockScreen;
