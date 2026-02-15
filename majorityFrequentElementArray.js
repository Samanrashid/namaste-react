function majorityElement(nums) {
  let freq = [];
  let maxCount = 0;
  let freqElement = nums[0];
  for (let i = 0; i < nums.length; i++) {
    freq[nums[i]] = (freq[nums[i]] || 0) + 1;
  }
  for (let i = 0; i < nums.length; i++) {
    if (freq[nums[i]] > maxCount) {
      maxCount = freq[nums[i]];
      freqElement = nums[i];
    }
  }
  return freqElement;
}
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
