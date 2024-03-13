import _ from 'lodash';
import { feedbackSentencesPerScore } from './quiz.constants';

export { getFeedbackSentence };

function getFeedbackSentence({ scorePercentage }: { scorePercentage: number }) {
  const clampedScore = scorePercentage <= 25 ? 25 : scorePercentage <= 50 ? 50 : scorePercentage <= 75 ? 75 : 100;
  const feedbackSentences = feedbackSentencesPerScore[clampedScore];

  const sentenceTemplate = _.sample(feedbackSentences);

  const sentence = _.replace(sentenceTemplate, '{score-percentage}', scorePercentage.toString());

  return sentence;
}
