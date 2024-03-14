import { defineQuiz } from '../../../quiz/quiz.usecases';
import { getHttpQuestions } from './http-status.usecases';

export const httpStatusQuiz = defineQuiz({
  name: 'HTTP Status Quiz',
  description: 'Test your knowledge of HTTP status codes and their meaning.',
  questionsGenerator: getHttpQuestions,
  icon: 'i-tabler-server',
  difficulty: 'hard',
  slug: 'http-status',
});
