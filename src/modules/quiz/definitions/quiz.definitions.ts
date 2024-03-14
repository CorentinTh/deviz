import type { QuizDefinition } from '../quiz.types';
import { httpStatusQuiz } from './http-status/http-status.quiz';
import { jsArrayManipulationQuiz } from './js-array-methods/js-array-methods.quiz';
import { regexQuiz } from './regex/regex.quiz';

export const quizDefinitions: QuizDefinition[] = [httpStatusQuiz, regexQuiz, jsArrayManipulationQuiz] as const;
