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

function displayObject(obj) {
  const newObj = [];

  for (let key in obj) {
    newObj.push(key);
  }
  return newObj;
}

const displayedObj = displayObject(obj);

console.log("Object : ", displayedObj);
