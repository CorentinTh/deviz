import _ from 'lodash';
import { takeUniqueRandoms } from '../shared/random.models';
import type { Question, QuestionAnswer, QuestionsGenerator, QuizDifficulty } from './quiz.types';

export { createQuestionGenerator, defineQuiz };

function defineQuiz({
  name,
  description,
  questionsGenerator,
  icon,
  difficulty,
  slug,
}: {
  name: string;
  description: string;
  questionsGenerator: QuestionsGenerator;
  icon: string;
  difficulty: QuizDifficulty;
  slug: string;
}) {
  return {
    name,
    description,
    questionsGenerator,
    icon,
    difficulty,
    slug,
    route: `/${slug}-quiz`,
  };
}

function createQuestionGenerator<DataSource>({
  elements,
  createAnswer,
  createQuestion,
  areElementsEqual = (a, b) => a === b,
}: {
  elements: DataSource[];
  createAnswer: (args: { element: DataSource }) => Omit<QuestionAnswer, 'isCorrect'>;
  createQuestion: (args: { element: DataSource }) => Omit<Question, 'answers'>;
  areElementsEqual?: (a: DataSource, b: DataSource) => boolean;
}): QuestionsGenerator {
  return ({ questionCount }) => {
    const elementsForQuestions = _.sampleSize(elements, questionCount);

    return elementsForQuestions.map((element) => {
      const correctAnswer = {
        ...createAnswer({ element }),
        isCorrect: true,
      };

      const wrongAnswers = takeUniqueRandoms(elements, { count: 3, excludeBy: (e) => areElementsEqual(e, element) }).map((e) => ({
        ...createAnswer({ element: e }),
        isCorrect: false,
      }));

      return {
        ...createQuestion({ element }),
        answers: _.shuffle([correctAnswer, ...wrongAnswers]),
      };
    });
  };
}
