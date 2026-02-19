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

function checkProperty(obj, key) {
  if (obj.hasOwnProperty(key)) {
    console.log("Key exists in the object.");
    return obj[key];
  } else {
    console.log("Key does not exist in the object.");
    return null;
  }
}

console.log("Original Object : ", obj);
const updatedObj = checkProperty(obj, "hobbies");
console.log("Value : ", updatedObj);
const updatedObj1 = checkProperty(obj, "bodyType");
console.log("Value : ", updatedObj1);
