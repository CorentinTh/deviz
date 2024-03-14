import type { QuizDefinition } from '../quiz.types';
import { httpStatusQuiz } from './http-status/http-status.quiz';
import { regexQuiz } from './regex/regex.quiz';

export const quizDefinitions: QuizDefinition[] = [httpStatusQuiz, regexQuiz] as const;
