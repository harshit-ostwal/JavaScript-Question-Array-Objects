let arr1 = [2, 5, 3, 1, 4];
let arr2 = [14, 5, 9, 1, 24];

function MergeArray(arr1, arr2) {
  let mergerdArr = arr1.concat(arr2).sort((a, b) => a - b);

  let newArr = mergerdArr.filter((val, idx) => {
    return val != mergerdArr[idx + 1];
  });

  return newArr;
}

console.log("Original Array : ", arr1);
console.log("Original Array : ", arr2);

let mergeArr = MergeArray(arr1, arr2);
console.log("Merged Array Remove Duplicates : ", mergeArr);
