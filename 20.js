const obj = {
  name: "Harshit Jain",
  age: 22,
  city: "Chennai",
  gender: "Male",
  hobbies: ["Coding", "Traveling", "Cooking"],
  greet: function () {
    console.log("Hello, I am " + this.name + " from " + this.city);
  },
};

function convertObjToArr(obj) {
  return Object.entries(obj);
}

console.log("Original Object : ", obj);
console.log("Converted Array : ", convertObjToArr(obj));
