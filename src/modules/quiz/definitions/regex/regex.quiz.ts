import { defineQuiz } from '../../quiz.usecases';
import { getRegexQuestions } from './regex.usecases';

export const regexQuiz = defineQuiz({
  name: 'Regex Tokens Quiz',
  description: 'Test your knowledge of regex tokens with this online quiz.',
  slug: 'regex-tokens',
  icon: 'i-tabler-regex',
  difficulty: 'easy',
  questionsGenerator: getRegexQuestions,
});
