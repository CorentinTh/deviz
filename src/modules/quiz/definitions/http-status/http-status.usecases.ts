import _ from 'lodash';
import type { Question } from '../../../quiz/quiz.types';
import { takeUniqueRandoms } from '../../../shared/random.models';
import { getHttpStatus } from './http-status.services';

export { getHttpCodeQuestions, getHttpNameQuestions, getHttpQuestions };

function getHttpQuestions({ questionCount }: { questionCount: number }): Question[] {
  const httpStatuses = getHttpStatus();

  const [statusForCodeQuestions, statusForNameQuestions] = _.chain(httpStatuses)
    .shuffle()
    .chunk(questionCount / 2)
    .value();

  const codeQuestions = getHttpCodeQuestions({ questionCount, httpStatusesQuestionPool: statusForCodeQuestions });
  const nameQuestions = getHttpNameQuestions({ questionCount, httpStatusesQuestionPool: statusForNameQuestions });

  return _.chain([...codeQuestions, ...nameQuestions])
    .shuffle()
    .take(questionCount)
    .value();
}

function getHttpCodeQuestions({
  questionCount,
  httpStatuses = getHttpStatus(),
  httpStatusesQuestionPool = httpStatuses,
}: {
  questionCount: number;
  httpStatuses?: { code: number; name: string; description: string }[];
  httpStatusesQuestionPool?: { code: number; name: string; description: string }[];
}): Question[] {
  const httpStatusForQuestions = _.sampleSize(httpStatusesQuestionPool, questionCount);

  return httpStatusForQuestions.map((httpStatus) => {
    const correctAnswer = {
      label: httpStatus.name,
      isCorrect: true,
      explanation: `${httpStatus.code} - ${httpStatus.name}`,
    };

    const wrongAnswers = takeUniqueRandoms(httpStatuses, { count: 3, excludeBy: (status) => status.code === httpStatus.code }).map((status) => ({
      label: status.name,
      isCorrect: false,
      explanation: `${status.code} - ${status.name}`,
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

function getHttpNameQuestions({
  questionCount,
  httpStatuses = getHttpStatus(),
  httpStatusesQuestionPool = httpStatuses,
}: {
  questionCount: number;
  httpStatuses?: { code: number; name: string; description: string }[];
  httpStatusesQuestionPool?: { code: number; name: string; description: string }[];
}): Question[] {
  const httpStatusForQuestions = _.sampleSize(httpStatusesQuestionPool, questionCount);

  return httpStatusForQuestions.map((httpStatus) => {
    const correctAnswer = {
      label: httpStatus.code.toString(),
      isCorrect: true,
      explanation: `${httpStatus.code} - ${httpStatus.name}`,
    };

    const wrongAnswers = takeUniqueRandoms(httpStatuses, { count: 3, excludeBy: (status) => status.code === httpStatus.code }).map((status) => ({
      label: status.code.toString(),
      isCorrect: false,
      explanation: `${status.code} - ${status.name}`,
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
