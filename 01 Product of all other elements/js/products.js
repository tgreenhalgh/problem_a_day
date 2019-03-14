const products = nums => {
  let results = [];

  // build before array
  let before = [];

  before.push(nums[0]);
  for (let i = 1; i < nums.length; i++) {
    before.push(nums[i] * before.slice(-1));
  }

  // build after array
  let after = [];

  after.push(nums.reverse()[0]);
  for (let i = 1; i < nums.length; i++) {
    after.push(nums[i] * after.slice(-1));
  }
  after = after.reverse();

  for (let i = 0; i < nums.length; i++) {
    if (i == 0) results.push(after[i + 1]);
    else if (i < nums.length - 1) results.push(before[i - 1] * after[i + 1]);
    else results.push(before[i - 1]);
  }

  return results;
};

console.log(products([1, 2, 3, 4, 5]));
