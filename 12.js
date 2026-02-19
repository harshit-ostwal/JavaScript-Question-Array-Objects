let arr = ["Pappya", "Water Melon", "Apple", "Nancy", "Dancing"];

function CheckVal(arr, val) {
  return arr.some((item) => {
    if (item === val) {
      return true;
    }
    return false;
  });
}

console.log("Original Array : ", arr);
console.log(
  "Check Existing Value of Pappsya Array : ",
  CheckVal(arr, "Pappsya"),
);
console.log("Check Existing Value of Apple Array : ", CheckVal(arr, "Apple"));
