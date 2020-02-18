describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    expect(JSON.stringify(split([1, 2, 3, 4]))).toBe(JSON.stringify([[1,2], [3, 4]]));
    expect(JSON.stringify(split([1, 2, 3, 4, 5]))).toBe(JSON.stringify([[1,2,3], [4, 5]]));
    expect(JSON.stringify(split([1, 2]))).toBe(JSON.stringify([[1], [2]]));
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect(JSON.stringify(merge([1, 3], [2, 4]))).toBe(JSON.stringify([1,2,3,4]));
    expect(JSON.stringify(merge([3, 6, 9], [1, 2, 4]))).toBe(JSON.stringify([1, 2, 3, 4, 6, 9]));

  });
});


describe('Merge Sort', function() {
  // it('Checks if it returns an empty array', function() {
  //   expect(mergeSort([])).toBe([]);
  // });

  it('Checks if it returns the SAME array with 1 element', function() {
    // expect(JSON.stringify(mergeSort([2]))).toBe(JSON.stringify([2]));
    // expect(JSON.stringify(mergeSort([2,3]))).toBe(JSON.stringify([2, 3]));

    expect(JSON.stringify(mergeSort([1, 3, 5, 7, 2, 4, 6, 8]))).toBe(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8]))
    expect(JSON.stringify(mergeSort([8,7,6,5,4,3,2,1]))).toBe(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8]))
    expect(JSON.stringify(mergeSort([8,7,3,4,2,5,6,1]))).toBe(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8]))
    expect(JSON.stringify(mergeSort([1, 3, 5, 7, 2, 4, 6, 8]))).toBe(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8]))
  });

  it('Checks if MergeSort2 splits arrays properly', function () {
    expect(JSON.stringify(mergeSort2([8,7,6,5,4,3,2,1]))).toBe(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8]))
    expect(JSON.stringify(mergeSort2([8,7,6,5,4,3,2]))).toBe(JSON.stringify([2, 3, 4, 5, 6, 7, 8]))

  })
  //   it('Checks if it returns the SAME array with 1 element', function() {
  //   expect(JSON.stringify(mergeSort([2,3]))).toBe(JSON.stringify([2, 3]));
  // });


});
