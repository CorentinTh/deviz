import { createQuestionGenerator } from '../../quiz.usecases';
import { getHttpStatuses } from './http-status.services';

export { getHttpQuestions };

const getHttpQuestions = createQuestionGenerator({
  elements: getHttpStatuses(),
  questionsCreators: [
    {
      createAnswer: ({ element }) => ({
        label: element.name,
        explanation: `${element.code} - ${element.name}`,
      }),
      createQuestion: ({ element }) => ({
        question: 'Which of the following is the correct HTTP status for this code?',
        heading: element.code.toString(),
        explanation: {
          title: `${element.code} - ${element.name}`,
          description: element.description,
        },
      }),
    },
    {
      createAnswer: ({ element }) => ({
        label: element.code.toString(),
        explanation: `${element.code} - ${element.name}`,
      }),
      createQuestion: ({ element }) => ({
        question: 'Which of the following is the correct HTTP code for this status?',
        heading: element.name,
        explanation: {
          title: `${element.code} - ${element.name}`,
          description: element.description,
        },
      }),
    },
  ],

  areElementsEqual: (a, b) => a.code === b.code,
});
