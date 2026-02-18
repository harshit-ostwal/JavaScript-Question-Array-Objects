const arr = [
  12, 32, 43, 54, 65, 76, 87, 98, 109, 120, 131, 142, 153, 164, 175, 186, 197,
  208, 219, 230,
];

let sum = 0;

// Method 1: Using forEach
arr.forEach((item) => {
  sum += item;
});

// Method 2: Using map (not recommended for summing, but included as per request)
arr.map((item) => (sum += item));

// Method 3: Using for loop
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log("Total Sum of Array : ", sum);
