import { quizDefinitions } from './definitions/quiz.definitions';
import type { QuizDefinition } from './quiz.types';

export { getQuiz, getQuizzes };

function getQuiz({ slug }: { slug: string }): QuizDefinition {
  const quiz = quizDefinitions.find((quiz) => quiz.slug === slug);

  if (!quiz) {
    throw createError({
      statusCode: 404,
      message: `Quiz with slug "${slug}" not found.`,
    });
  }

  return quiz;
}

function getQuizzes(): QuizDefinition[] {
  return quizDefinitions;
}
