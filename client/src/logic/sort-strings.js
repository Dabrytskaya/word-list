/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/**
 * Sorts an array of strings in different ways.
 * It does not modify the argument (no side-effects).
 *
 * @param {string[]} [toSort=''] - The array of strings to sort.
 * @param {string} [sortType='oldest'] - How to sort the strings, 6 options.
 * - oldest: from oldest to newest.
 * - newest: from newest to oldest.
 * - shortest: from shortest to longest.
 * - longest: from longest to shortest.
 * - a: alphabetical order.
 * - z: reverse alphabetical order.
 * If the sortType is not one of these 6 options, a copy of toSort is returned.
 * @returns {string[]} A new sorted array containing the same strings as toSort.
 * @example
 *
 * // ... write this!
 */
export const sortStrings = (toSort = '', sortType = 'oldest') => {
  const sortedList = [...toSort];
  if (sortType === 'newest') {
    return sortedList.reverse();
  }
  if (sortType === 'a') {
    return sortedList.sort();
  }
  if (sortType === 'z') {
    return sortedList.sort().reverse();
  }
  if (sortType === 'shortest') {
    return sortedList.sort((a, b) => a.length - b.length);
  }
  if (sortType === 'longest') {
    return sortedList.sort((a, b) => a.length - b.length).reverse();
  }

  return sortedList;
};
