
import React, { useState } from 'react';
import { GalleryItem } from '../types';

interface Props {
  onNext: () => void;
}

const galleryData: GalleryItem[] = [
  {
    id: 1,
    url: 'https://i.postimg.cc/JnytHBZc/IMG-20260107-020908.jpg',
    label: 'My Fav',
    description: 'Ye wali meri favourite hai kyunki isme tum hadd se zyada pyaari aur khubsurat lag rahi ho. Heera kya, tum khud heere se bhi zyada chamakti ho.'
  },
  {
    id: 2,
    url: 'https://i.postimg.cc/fRxJv3Wh/Snapchat-1334601280.jpg',
    label: 'Cutie',
    description: 'Is photo ko dekh kar mera dil ruk jaata hai. Itni zyada cuteness… sach me too much.'
  },
  {
    id: 3,
    url: 'https://i.postimg.cc/15w0V3qc/Snapchat-1338824188.jpg',
    label: 'The One',
    description: 'Is photo ko dekh kar lagta hai bhagwan ne kya hi perfect biwi di hai. One & only.'
  },
  {
    id: 4,
    url: 'https://i.postimg.cc/G2zDx4jg/IMG-20260107-213933.jpg',
    label: 'Goofy',
    description: 'Pagli si, goofy si… aur mujhe pagal karne wali. Humari bakchodi eternal hai!'
  }
];

const GalleryScreen: React.FC<Props> = ({ onNext }) => {
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  return (
    <div className="w-full flex flex-col items-center animate-in fade-in duration-500">
      <h2 className="text-3xl font-romantic text-rose-700 mb-6">Our Golden Memories 💕</h2>
      
      <div className="grid grid-cols-2 gap-4 mb-10 w-full">
        {galleryData.map((item) => (
          <div 
            key={item.id}
            onClick={() => setSelected(item)}
            className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg aspect-square bg-rose-200"
          >
            <img 
              src={item.url} 
              alt={item.label}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
              <span className="text-white text-xs font-semibold">{item.label}</span>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={onNext}
        className="px-8 py-3 bg-rose-500 text-white rounded-full font-bold shadow-lg hover:bg-rose-600 transition-all flex items-center gap-2"
      >
        <span>Test My Knowledge</span>
        <i className="fas fa-brain"></i>
      </button>

      {/* Popup Modal */}
      {selected && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div 
            className="bg-white rounded-3xl p-6 max-w-sm w-full animate-in zoom-in duration-300 shadow-2xl overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <img 
              src={selected.url} 
              alt={selected.label} 
              className="w-full h-56 object-cover rounded-2xl mb-4 shadow-md"
            />
            <h3 className="text-2xl font-romantic text-rose-600 mb-2">{selected.label}</h3>
            <p className="text-gray-600 italic leading-relaxed mb-6">"{selected.description}"</p>
            <button 
              onClick={() => setSelected(null)}
              className="w-full py-3 bg-rose-100 text-rose-600 rounded-xl font-bold hover:bg-rose-200 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryScreen;
