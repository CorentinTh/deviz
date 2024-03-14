import _ from 'lodash';
import { describe, expect, test } from 'vitest';
import { quizDefinitions } from './quiz.definitions';

describe('Quiz Definitions', () => {
  describe('quizDefinitions', () => {
    test('quiz slugs are unique', () => {
      const slugs = _.map(quizDefinitions, 'slug');
      const uniqueSlugs = _.uniq(slugs);

      expect(slugs).to.deep.equal(uniqueSlugs);
    });

    test('quiz slugs are letters only kebab-case and do not start or end with a dash', () => {
      _.forEach(quizDefinitions, (quiz) => {
        expect(quiz.slug).to.match(/^([a-z]+-)*[a-z]+$/, `Quiz slug "${quiz.slug}" should be letters only kebab-case`);
      });
    });

    test('quiz slugs should not end with -quiz', () => {
      _.forEach(quizDefinitions, (quiz) => {
        expect(quiz.slug).not.to.match(/-quiz$/, `Quiz slug "${quiz.slug}" should not end with -quiz`);
      });
    });
  });
});
