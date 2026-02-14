function chunk(arr, size) {
  const chunkedArray = [];
  for (let i = 0; i < arr.length; i = i + size) {
    chunkedArray.push(arr.slice(i, i + size));
  }
  return chunkedArray;
}
console.log(chunk([1, 2, 3, 4], 1));
