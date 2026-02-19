let arr = ["Pappya", "Water Melon", "Apple", "Nancy", "Dancing"];

function ReverseArr(arr) {
  let newArr = [];
  arr.forEach((item) => {
    newArr.unshift(item);
  });
  return newArr;
}

console.log("Original Array : ", arr);
console.log("Reverse Array : ", ReverseArr(arr));
