const {
    inverseArray,
    sumArray,
    maxElement,
    filterEvenNumbers,
    countOccurrences,
    uniqueElements,
    mergeArrays,
    cleanArray,
    chunkArray,
    intersection
  } = require('./arrayFunctions'); // Assurez-vous que le chemin est correct
  
  test('inverseArray', () => {
    expect(inverseArray([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
  });
  
  test('sumArray', () => {
    expect(sumArray([1, 2, 3, 4])).toBe(10);
  });
  
  test('maxElement', () => {
    expect(maxElement([1, 2, 3, 4])).toBe(4);
  });
  
  test('filterEvenNumbers', () => {
    expect(filterEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
  });
  
  test('countOccurrences', () => {
    expect(countOccurrences([1, 2, 2, 3, 4, 2], 2)).toBe(3);
  });
  
  test('uniqueElements', () => {
    expect(uniqueElements([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
  
  test('mergeArrays', () => {
    expect(mergeArrays([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
  
  test('cleanArray', () => {
    expect(cleanArray([1, null, 2, undefined, "", 3, 4, "hello"])).toEqual([1, 2, 3, 4, "hello"]);
  });
  
  test('chunkArray', () => {
    expect(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8]]);
  });
  
  test('intersection', () => {
    expect(intersection([1, 2, 3, 4], [3, 4, 5, 6])).toEqual([3, 4]);
  });