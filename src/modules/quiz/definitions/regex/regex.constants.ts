export const regexTokens = [
  {
    token: '[abc]',
    description: 'A single character of: a, b, or c',
  },
  {
    token: '[^abc]',
    description: 'Any single character except: a, b, or c',
  },
  {
    token: '[a-z]',
    description: 'Any single character in the range a-z',
  },
  {
    token: '[a-zA-Z]',
    description: 'Any single character in the range a-z or A-Z',
  },
  {
    token: '^',
    description: 'Start of line',
  },
  {
    token: '$',
    description: 'End of line',
  },
  {
    token: '\\A',
    description: 'Start of string',
  },
  {
    token: '\\z',
    description: 'End of string',
  },
  {
    token: '.',
    description: 'Any single character',
  },
  {
    token: '\\s',
    description: 'Any whitespace character',
  },
  {
    token: '\\S',
    description: 'Any non-whitespace character',
  },
  {
    token: '\\d',
    description: 'Any digit',
  },
  {
    token: '\\D',
    description: 'Any non-digit',
  },
  {
    token: '\\w',
    description: 'Any word character (letter, number, underscore)',
  },
  {
    token: '\\W',
    description: 'Any non-word character',
  },
  {
    token: '\\b',
    description: 'Any word boundary',
  },
  {
    token: '\\B',
    description: 'Any non-word boundary',
  },
  {
    token: '(...)',
    description: 'Capture everything enclosed',
  },
  {
    token: '(a|b)',
    description: 'Either a or b',
  },
  {
    token: 'a?',
    description: 'Zero or one of a',
  },
  {
    token: 'a*',
    description: 'Zero or more of a',
  },
  {
    token: 'a+',
    description: 'One or more of a',
  },
  {
    token: 'a{3}',
    description: 'Exactly 3 of a',
  },
  {
    token: 'a{3,}',
    description: '3 or more of a',
  },
  {
    token: 'a{3,6}',
    description: 'Between 3 and 6 of a',
  },
];
