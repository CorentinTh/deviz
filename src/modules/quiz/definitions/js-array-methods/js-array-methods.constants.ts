export const jsArrayMethods = [
  {
    method: 'array.push',
    description: 'Adds element to the end of the array',
    explanation: 'The push() method adds one or more elements to the end of an array and returns the new length of the array.',
  },
  {
    method: 'array.pop',
    description: 'Removes and return the last element of the array',
    explanation: 'The pop() method removes the last element from an array and returns that element. This method changes the length of the array.',
  },
  {
    method: 'array.shift',
    description: 'Removes and return the first element of the array',
    explanation: 'The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.',
  },
  {
    method: 'array.unshift',
    description: 'Adds element to the beginning of the array',
    explanation: 'The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.',
  },
  {
    method: 'array.concat',
    description: 'Merges two or more arrays',
    explanation: 'The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.',
  },
  {
    method: 'array.slice',
    description: 'Returns a new array from a given index',
    explanation: 'The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.',
  },
  {
    method: 'array.splice',
    description: 'Adds or removes elements from the array',
    explanation: 'The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.',
  },
  {
    method: 'array.reverse',
    description: 'Reverses the order of the elements in the array',
    explanation: 'The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.',
  },
  {
    method: 'array.sort',
    description: 'Sorts the elements of an array',
    explanation:
      'The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.',
  },
  {
    method: 'array.find',
    description: 'Returns the first element that satisfies the condition',
    explanation:
      'The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.',
  },
  {
    method: 'array.filter',
    description: 'Returns an array of elements that satisfy the condition',
    explanation: 'The filter() method creates a new array with all elements that pass the test implemented by the provided function.',
  },
  {
    method: 'array.map',
    description: 'Transforms each element using a mapping function',
    explanation: 'The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.',
  },
  {
    method: 'array.reduce',
    description: 'Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value',
    explanation: 'The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.',
  },
  {
    method: 'array.forEach',
    description: 'Executes a provided function once for each array element',
    explanation: 'The forEach() method executes a provided function once for each array element.',
  },
  {
    method: 'array.every',
    description: 'Checks if all elements satisfy the condition',
    explanation: 'The every() method tests whether all elements in the array pass the test implemented by the provided function.',
  },
  {
    method: 'array.some',
    description: 'Checks if any element satisfies the condition',
    explanation: 'The some() method tests whether at least one element in the array passes the test implemented by the provided function.',
  },
  {
    method: 'array.includes',
    description: 'Checks if an array includes a certain element',
    explanation: 'The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.',
  },
  {
    method: 'array.indexOf',
    description: 'Returns the first index at which a given element can be found',
    explanation: 'The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.',
  },
  {
    method: 'array.lastIndexOf',
    description: 'Returns the last index at which a given element can be found',
    explanation:
      'The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.',
  },
  {
    method: 'array.join',
    description: 'Joins all elements of an array into a string',
    explanation: 'The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.',
  },
  {
    method: 'array.fill',
    description: 'Fills all the elements with a static value',
    explanation: 'The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.',
  },
  {
    method: 'array.flat',
    description: 'Flattens a nested array',
    explanation: 'The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.',
  },
  {
    method: 'array.flatMap',
    description: 'Transforms each element using a mapping function, then flattens the result',
    explanation:
      'The flatMap() method first maps each element using a mapping function, then flattens the result into a new array. It is identical to a map followed by a flat of depth 1, but flatMap is often quite useful, as merging both into one method is slightly more efficient.',
  },
  {
    method: 'Array.from',
    description: 'Creates a new array from an array-like or iterable object',
    explanation: 'The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.',
  },
  {
    method: 'Array.isArray',
    description: 'Checks if the passed value is an array',
    explanation: 'The Array.isArray() method determines whether the passed value is an Array.',
  },
  {
    method: 'Array.of',
    description: 'Creates a new array with a variable number of arguments',
    explanation: 'The Array.of() method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.',
  },
  {
    method: 'array.copyWithin',
    description: 'Copies array elements to another position in the array, overwriting the existing values',
    explanation: 'The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.',
  },
];
