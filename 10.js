let arr1 = [2, 5, 3, 1, 4];
let arr2 = [14, 53, 9, 32, 24];

function MergeArray(arr1, arr2) {
  return arr1.concat(arr2);
}

console.log("Original Array : ", arr1);
console.log("Original Array : ", arr2);

let mergeArr = MergeArray(arr1, arr2);
console.log("Merged Array Using Concat : ", mergeArr);
