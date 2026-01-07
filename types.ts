
export enum AppState {
  LOCKED = 'LOCKED',
  GREETING = 'GREETING',
  GALLERY = 'GALLERY',
  QUIZ = 'QUIZ',
  LOVE_MESSAGE = 'LOVE_MESSAGE',
  LETTER = 'LETTER'
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
}

export interface GalleryItem {
  id: number;
  url: string;
  label: string;
  description: string;
}
