
import React, { useState } from 'react';
import { QuizQuestion } from '../types';

interface Props {
  onNext: () => void;
}

const quizData: QuizQuestion[] = [
  {
    id: 1,
    question: "Mera favourite color kaunsa hai? (Don't mess this up!)",
    options: ["Blue 💙", "Black 🖤", "Pink 💗", "Red ❤️"],
    correctIndex: 1
  },
  {
    id: 2,
    question: "Main sabse zyada kya karta hoon? 🤔",
    options: ["Gaming 🎮", "Gymming 💪", "Bakchodi 😂", "Sona 😴"],
    correctIndex: 2
  },
  {
    id: 3,
    question: "Mera favourite actor kaun hai? (Old school charm)",
    options: ["Sallu Bhai", "Akshay Kumar", "SRK", "Hrithik Roshan"],
    correctIndex: 2
  }
];

const QuizScreen: React.FC<Props> = ({ onNext }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showError, setShowError] = useState(false);

  const handleAnswer = (idx: number) => {
    if (idx === quizData[currentIdx].correctIndex) {
      if (currentIdx < quizData.length - 1) {
        setCurrentIdx(prev => prev + 1);
      } else {
        onNext();
      }
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 1500);
    }
  };

  const question = quizData[currentIdx];

  return (
    <div className="w-full text-center animate-in slide-in-from-right duration-500">
      <div className="mb-8">
        <span className="bg-rose-200 text-rose-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
          Question {currentIdx + 1} of {quizData.length}
        </span>
      </div>

      <h2 className="text-2xl font-semibold text-rose-800 mb-8 px-4 leading-tight">
        {question.question}
      </h2>

      <div className="space-y-4">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(idx)}
            className="w-full py-4 px-6 bg-white hover:bg-rose-50 text-rose-700 border-2 border-rose-100 rounded-2xl font-medium shadow-sm transition-all active:scale-95 text-left flex items-center justify-between group"
          >
            <span>{option}</span>
            <i className="fas fa-chevron-right opacity-0 group-hover:opacity-100 transition-opacity"></i>
          </button>
        ))}
      </div>

      {showError && (
        <div className="mt-8 text-rose-500 font-bold animate-bounce flex items-center justify-center gap-2">
           <i className="fas fa-circle-xmark"></i>
           <span>Oye! Wrong answer. Try again baby ❤️</span>
        </div>
      )}
    </div>
  );
};

export default QuizScreen;
