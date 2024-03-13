import _ from 'lodash';
import type { Question } from '../quiz/quiz.types';
import { takeUniqueRandoms } from '../shared/random.models';
import { regexTokens } from './regex.constants';

export { getRegexQuestions };

function getRegexQuestions({ questionCount }: { questionCount: number }): Question[] {
  const regexTokensForQuestions = _.sampleSize(regexTokens, questionCount);

  return regexTokensForQuestions.map((token) => {
    const correctAnswer = {
      label: token.description,
      isCorrect: true,
      explanation: `${token.token} - ${token.description}`,
    };

    const wrongAnswers = takeUniqueRandoms(regexTokens, { count: 3, excludeBy: (regexToken) => regexToken.token === token.token }).map((regexToken) => ({
      label: regexToken.description,
      isCorrect: false,
      explanation: `${regexToken.token} - ${regexToken.description}`,
    }));

    return {
      question: 'What does this regex token correspond to?',
      heading: token.token,
      answers: _.shuffle([correctAnswer, ...wrongAnswers]),
      explanation: {
        title: token.token,
        description: token.description,
      },
    };
  });
}
