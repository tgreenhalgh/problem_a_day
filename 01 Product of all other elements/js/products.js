const products = nums => {
  let results = [];
  let before = [1];
  let after = [1];
  // `length - 1` because we're starting our arrays with an element, [1]
  let numsLength = nums.length - 1;

  for (let i = 0; i < numsLength; i++) {
    // build the array going forward
    // last element of before times
    before.push(before[before.length - 1] * nums[i]);
    // before.push(before.slice(-1) * nums[i]);

    // a convenient way to build the after array is
    // going backward starting at the end
    after.push(after[after.length - 1] * nums[numsLength - i]);
    // after.push(after.slice(-1) * nums[numsLength - i]);
  }

  // put the pieces together,
  // matching first of before and last of after
  for (let i = 0; i < numsLength + 1; i++) {
    results.push(before[i] * after[numsLength - i]);
  }

  return [before, after, results];
};

console.log(products([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
