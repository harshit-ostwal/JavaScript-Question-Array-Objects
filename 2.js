const arr = [
  12, 32, 43, 54, 65, 76, 87, 98, 109, 120, 131, 142, 153, 164, 175, 186, 197,
  208, 219, 230,
];

// // Method 1: Using Map Function
const squaredArr = arr.map((val) => {
  return val * val;
});

// Method 2: Using For Loop
const squaredArr2 = [];
for (let i = 0; i < arr.length; i++) {
  squaredArr2.push(arr[i] * arr[i]);
}

console.log("Squared Array : ", squaredArr2);
