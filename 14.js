let arr = ["Pappya", "Water Melon", "Apple", "Nancy", "Dancing"];

function FilterArray(arr) {
  return arr.filter((item) => item.startsWith("A"));
}

console.log("Original Array : ", arr);
console.log("Filter Array Strings Starting With A : ", FilterArray(arr));
