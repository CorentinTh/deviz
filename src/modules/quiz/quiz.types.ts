import type { defineQuiz } from './quiz.usecases';

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

export type QuizDefinition = ReturnType<typeof defineQuiz>;

export type QuizDifficulty = 'easy' | 'medium' | 'hard';
