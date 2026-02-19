let arr = [2, 5, 3, 1, 4, 21, 7, 41];

function Sorting(arr) {
  return arr.sort((a, b) => a - b);
}

console.log("Original array:", arr);
let sortedArr = Sorting(arr);
console.log("Sorted array:", sortedArr);
