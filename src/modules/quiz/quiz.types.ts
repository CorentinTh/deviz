export type QuestionAnswer = {
  label: string;
  isCorrect: boolean;
};

export type Question = {
  question: string;
  heading: string;
  answers: QuestionAnswer[];
  explanation?: {
    title: string;
    description: string;
  };
};
