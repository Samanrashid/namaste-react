function reduce(nums, fn, init) {
  for (let i = 0; i < nums.length; i++) {
    init = fn(init, nums[i]);
  }
  return init;
}
console.log();
const nums = [2, 3, 4];
const fn = (acc, curr) => acc * curr;
const init = 1;

console.log(reduce([], (acc, curr) => acc + curr, 5));
