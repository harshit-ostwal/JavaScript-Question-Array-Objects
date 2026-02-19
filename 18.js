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

function updateProperty(obj, key, val) {
  obj[key] = val;
  return obj;
}

console.log("Original Object : ", obj);
const updatedObj = updateProperty(obj, "age", 21);
console.log("Updated Object : ", updatedObj);
const updatedObj2 = updateProperty(obj, "city", "Bangalore");
console.log("Updated Object 2 : ", updatedObj2);
