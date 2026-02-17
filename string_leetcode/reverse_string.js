function reverseString(str) {
  let cleanerStr = str.trim().replace(/[^a-z0-9]/g);
  return cleanerStr.split("").reverse().join("");
}
console.log(reverseString("saman"));
