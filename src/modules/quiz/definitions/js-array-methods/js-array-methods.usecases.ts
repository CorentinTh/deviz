import { createQuestionGenerator } from '../../quiz.usecases';
import { jsArrayMethods } from './js-array-methods.constants';

export const getJsArrayManipulationQuestions = createQuestionGenerator({
  elements: jsArrayMethods,
  areElementsEqual: (a, b) => a.method === b.method,
  questionsCreators: [
    {
      createAnswer: ({ element }) => ({
        label: element.description,
      }),
      createQuestion: ({ element }) => ({
        question: 'What does this array method do?',
        heading: element.method,
        explanation: {
          title: element.method,
          description: element.explanation,
        },
      }),
    },
    {
      createAnswer: ({ element }) => ({
        label: element.method,
      }),
      createQuestion: ({ element }) => ({
        question: 'Which array method corresponds to this description?',
        heading: element.description,
        explanation: {
          title: element.method,
          description: element.explanation,
        },
      }),
    },
  ],
});
