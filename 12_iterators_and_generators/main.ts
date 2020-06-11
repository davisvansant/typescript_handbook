// iterables

let some_array = [1, "string", false];

for (let entry of some_array) {
  console.log(entry);
}

let list = [4, 5, 6];

for (let i in list) {
  console.log(i);
}

for (let i of list) {
  console.log(i);
}

let pets = new Set(["Cat", "Dog", "Hamster"]);

for (let pet in pets) {
  console.log(pet);
}

for (let pet of pets) {
  console.log(pet);
}
