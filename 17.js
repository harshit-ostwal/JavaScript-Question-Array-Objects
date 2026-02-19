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

function addNewProperty(obj, key, val) {
  return {
    ...obj,
    [key]: val,
  };
}

const newObj = addNewProperty(obj, "profession", "Software Engineer");

console.log("Original Object : ", obj);
console.log("New Object : ", newObj);
