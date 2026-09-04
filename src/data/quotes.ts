export type Quote = {
  text: string;
  author: string;
  source?: string;
  lines?: string[];
  lang?: "bn";
};

export const quotes: Quote[] = [
  {
    text: "The first principle is that you must not fool yourself — and you are the easiest person to fool.",
    author: "Richard Feynman",
  },
  {
    text: "Physics is like sex. Sure, it may give some practical results, but that's not why we do it.",
    author: "Richard Feynman",
  },
  {
    text: "I, a universe of atoms, an atom in the universe.",
    author: "Richard Feynman",
  },
  {
    text: "I would rather have questions that can't be answered than answers that can't be questioned.",
    author: "Richard Feynman",
  },
  {
    text: "The very purpose of life is to be happy.",
    author: "Dalai Lama",
  },
  {
    text: "I think, therefore I am.",
    author: "René Descartes",
  },
  {
    text: "Man is condemned to be free.",
    author: "Jean-Paul Sartre",
  },
  {
    text: "কালের যাত্রার ধ্বনি শুনিতে কি পাও?",
    lines: [
      "কালের যাত্রার ধ্বনি শুনিতে কি পাও?",
      "তারি রথ নিত্য উধাও।",
      "জাগিছে অন্তরীক্ষে হৃদয়স্পন্দন",
      "চক্রে পিষ্ট আধারের বক্ষ-ফাটা তারার ক্রন্দন।",
    ],
    author: "রবীন্দ্রনাথ ঠাকুর",
    source: "শেষের কবিতা",
    lang: "bn",
  },
];
