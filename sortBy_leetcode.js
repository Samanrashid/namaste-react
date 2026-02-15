function sortBy(arr, fn) {
  return arr.sort((a, b) => {
    return fn(a) - fn(b);
  });
}

console.log(sortBy([{ x: 1 }, { x: 0 }, { x: -1 }], (obj) => obj.x));
