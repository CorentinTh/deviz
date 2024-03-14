import { createQuestionGenerator } from '../../quiz.usecases';
import { regexTokens } from './regex.constants';

export { getRegexQuestions };

const getRegexQuestions = createQuestionGenerator({
  elements: regexTokens,
  createAnswer: ({ element }) => ({
    label: element.description,
    explanation: `${element.token} - ${element.description}`,
  }),
  createQuestion: ({ element }) => ({
    question: 'What does this regex token correspond to?',
    heading: element.token,
    explanation: {
      title: element.token,
      description: element.description,
    },
  }),
});
