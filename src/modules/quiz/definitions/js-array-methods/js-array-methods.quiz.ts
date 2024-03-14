import { defineQuiz } from '../../quiz.usecases';
import { getJsArrayManipulationQuestions } from './js-array-methods.usecases';

export const jsArrayManipulationQuiz = defineQuiz({
  name: 'JS Array Methods Quiz',
  description: 'Test your knowledge of JavaScript array manipulation methods.',
  slug: 'js-array-methods',
  icon: 'i-tabler-brackets',
  difficulty: 'easy',
  questionsGenerator: getJsArrayManipulationQuestions,
});
