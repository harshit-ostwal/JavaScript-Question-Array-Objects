const arr = [
  12, 32, 1, 43, 54, 65, 76, 34, 87, 98, 109, 120, 131, 23, 153, 164, 175, 16,
  97, 208, 219, 30,
];

function FindGreaterThan100(arr) {
  return arr.find((val) => val > 100);
}

console.log("Original Array : ", arr);
console.log("First Element Greater Than 100 : ", FindGreaterThan100(arr));
