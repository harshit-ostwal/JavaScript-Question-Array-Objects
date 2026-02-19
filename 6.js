let arr = [2, 5, 3, 1, 4, 21, 7, 41];

function removeLast(arr) {
  return arr.splice(arr.length - 1);
}

console.log("Original Array : ", arr);
removeLast(arr);
console.log("After Remove Last : ", arr);
