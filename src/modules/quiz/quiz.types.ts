export type QuestionAnswer = {
  label: string;
  isCorrect: boolean;
  explanation?: string;
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

export type QuestionsGenerator = (options: { questionCount: number }) => Question[];
