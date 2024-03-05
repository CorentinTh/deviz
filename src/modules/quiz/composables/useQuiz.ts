import { get } from '@vueuse/core';
import type { Question, QuestionAnswer } from '../quiz.types';

export { useQuiz };

function useQuiz({ questionsBuilder: createQuestions, questionCount = 10 }: { questionsBuilder: (args: { questionCount: number }) => Question[]; questionCount?: MaybeRef<number> }) {
  const questions = ref<Question[]>(createQuestions({ questionCount: get(questionCount) }));
  const currentQuestionIndex = ref(0);
  const currentQuestion = computed<Question>(() => questions.value[currentQuestionIndex.value]);
  const selectedAnswer = ref<QuestionAnswer | undefined>(undefined);
  const state = ref<'answering' | 'answered' | 'finished'>('answering');
  const score = ref(0);

  const selectAnswer = ({ answer }: { answer: QuestionAnswer }) => {
    if (answer.isCorrect) {
      score.value++;
    }

    selectedAnswer.value = answer;
    state.value = 'answered';
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex.value < questions.value.length - 1) {
      currentQuestionIndex.value++;
      selectedAnswer.value = undefined;
      state.value = 'answering';
    } else {
      state.value = 'finished';
    }
  };

  return {
    questions,
    currentQuestion,
    selectedAnswer,
    state,
    score,
    selectAnswer,
    goToNextQuestion,
    isAnswered: computed(() => state.value === 'answered'),
    isFinished: computed(() => state.value === 'finished'),
    isAnswering: computed(() => state.value === 'answering'),
  };
}
