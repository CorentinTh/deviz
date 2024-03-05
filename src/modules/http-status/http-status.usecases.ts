import _ from 'lodash';
import type { Question } from '../quiz/quiz.types';
import { takeUniqueRandoms } from '../shared/random.models';
import { getHttpStatus } from './http-status.services';

export { getHttpCodeQuestions, getHttpNameQuestions, getHttpQuestions };

function getHttpQuestions({ questionCount }: { questionCount: number }): Question[] {
  const codeQuestions = getHttpCodeQuestions({ questionCount });
  const nameQuestions = getHttpNameQuestions({ questionCount });

  return _.chain([...codeQuestions, ...nameQuestions])
    .shuffle()
    .take(questionCount)
    .value();
}

function getHttpCodeQuestions({ questionCount }: { questionCount: number }): Question[] {
  const httpStatuses = getHttpStatus();

  const httpStatusForQuestions = _.sampleSize(httpStatuses, questionCount);

  return httpStatusForQuestions.map((httpStatus) => {
    const correctAnswer = {
      label: httpStatus.name,
      isCorrect: true,
    };

    const wrongAnswers = takeUniqueRandoms(httpStatuses, { count: 3, excludeBy: (status) => status.code === httpStatus.code }).map((status) => ({
      label: status.name,
      isCorrect: false,
    }));

    return {
      question: 'Which of the following is the correct HTTP status for this code?',
      heading: httpStatus.code.toString(),
      answers: _.shuffle([correctAnswer, ...wrongAnswers]),
      explanation: {
        title: `${httpStatus.code} - ${httpStatus.name}`,
        description: httpStatus.description,
      },
    };
  });
}

function getHttpNameQuestions({ questionCount }: { questionCount: number }): Question[] {
  const httpStatuses = getHttpStatus();

  const httpStatusForQuestions = _.sampleSize(httpStatuses, questionCount);

  return httpStatusForQuestions.map((httpStatus) => {
    const correctAnswer = {
      label: httpStatus.code.toString(),
      isCorrect: true,
    };

    const wrongAnswers = takeUniqueRandoms(httpStatuses, { count: 3, excludeBy: (status) => status.code === httpStatus.code }).map((status) => ({
      label: status.code.toString(),
      isCorrect: false,
    }));

    return {
      question: 'Which of the following is the correct HTTP code for this status?',
      heading: httpStatus.name,
      answers: _.shuffle([correctAnswer, ...wrongAnswers]),
      explanation: {
        title: `${httpStatus.code} - ${httpStatus.name}`,
        description: httpStatus.description,
      },
    };
  });
}
