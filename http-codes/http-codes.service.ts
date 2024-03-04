import _ from 'lodash';
import { codesQuestionPool } from './http-codes.constants';

export { getHttpCodeQuestions };

function getHttpCodeQuestions(): {
  question: string;
  heading: string;
  answers: {
    label: string;
    isCorrect: boolean;
  }[];
  explanation?: {
    title: string;
    description: string;
  };
}[] {
  const sampleSize = 5;

  const codes = _.sampleSize(codesQuestionPool, sampleSize);
  const getRandomCodes = ({ exclude, count = 3 }: { exclude: number; count?: number }) => {
    return _.chain(codesQuestionPool)
      .shuffle()
      .filter(({ code }) => code !== exclude)
      .take(count)
      .value();
  };

  return codes.map((httpStatus) => {
    const correctAnswer = {
      label: httpStatus.name,
      isCorrect: true,
    };

    const wrongAnswers = getRandomCodes({ exclude: httpStatus.code }).map(({ name }) => ({
      label: name,
      isCorrect: false,
    }));

    return {
      question: 'Which of the following is the correct HTTP status code for this code?',
      heading: httpStatus.code.toString(),
      answers: _.shuffle([correctAnswer, ...wrongAnswers]),
      explanation: {
        title: `${httpStatus.code} - ${httpStatus.name}`,
        description: httpStatus.description,
      },
    };
  });
}
