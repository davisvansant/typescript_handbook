// variable declarations

var a = 10;
console.log(a);

function f() {
  var message = "hello, world";

  return message;
}

console.log(f());

function another_f() {
  var a = 100;
  return function g() {
    var b = a + 10;
    return b;
  }
}

var g = another_f();
console.log(g());

function yet_another_f() {
  var a = 1;
  a = 2;
  var b = g();
  a = 3;

  return b;

  function g() {
    return a;
  }
}

console.log(yet_another_f());

// scoping rules

function scoped_f(shouldInitialize: boolean) {
  if (shouldInitialize) {
    var x = 10;
  }
  return x ;
}

console.log(scoped_f(true));
console.log(scoped_f(false));

function sumMatrix(matrix: number[][]) {
  var sum = 0;
  for (var i = 0; i < matrix.length; i++) {
    var currentRow = matrix[i];
    for (var i = 0; i < currentRow.length; i++) {
      sum += currentRow[i];
    }
  }
  return sum;
}

// variable capturing quirks
for (var i = 0; i < 10; i++) {
  setTimeout(function() { console.log(i); }, 100 * i);
}

for (var i = 0; i < 10; i++) {
  (function(i) {
    setTimeout(function() { console.log(i); }, 100 * i);
  })(i);
}

// let
let hello = "Hello!";
console.log(hello);

// block scoping

// function let_f(input: boolean) {
//   let a = 100;
//
//   if (input) {
//     let b = a + 1;
//     return b;
//   }
//   return b;
// }

// try {
//   throw "oh no!";
// }
// catch (e) {
//   console.log("oh well");
// }
//
// console.log(e);

// scoped_a++;
// let scoped_a;

function foo() {
  return another_scoped_a;
}

foo();

let another_scoped_a;

// re-dclarations and shadowing

function vared_f() {
  var x;
  var x;

  if (true) {
    var x;
  }
}

let letted_x = 10;
// let letted_x = 20;

// function broken_f(x) {
//   let x = 100;
// }

// function letted_g() {
//   let x = 100;
//   let x = 100;
// }

function scoped_fuction(condition, x) {
  if (condition) {
    let x = 100;
    return x;
  }
  return x;
}

scoped_fuction(true, 0);
scoped_fuction(false, 0);

function correct_sumMatrix(matrix: number[][]) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    var currentRow = matrix[i];
    for (let i = 0; i < currentRow.length; i++) {
      sum += currentRow[i];
    }
  }
  return sum;
}

// block scoped variable capturing
function theCityThatAlwaysSleeps() {
  let getCity;

  if (true) {
    let city = "Seattle";
    getCity = function() {

    }
  }
  return getCity();
}

for (let i = 0; i < 10; i++) {
  setTimeout(function() { console.log(i); }, 100 * i);
}

// const

const numLivesForCat = 9;
const kitty = {
  name: "Aurora",
  numLives: numLivesForCat,
}

// kitty = {
//   name: "Danielle",
//   numLives: numLivesForCat
// };

kitty.name = "Rory";
kitty.name = "kitty";
kitty.name = "cat";
kitty.numLives--;

// let vs const
// it depends

// destructuring
let input = [1, 2];
let [first, second] = input;
console.log(first);
console.log(second);

first = input[0];
second = input[1];
[first, second] = [second, first];

function deconstructed_f([first, second]: [number, number]) {
  console.log(first);
  console.log(second);
}

deconstructed_f([1000, 20000]);

let [another_first, ...rest] = [123423429091, 21231, 34236, 4845632];
console.log(another_first);
console.log(rest);

let [only_the_first] = [3263, 1092, 5029, 203680]
console.log(only_the_first);

let [, could_be_the_second, , its_the_fourth] = [11111111, 22222222, 333333333, 44444444];
console.log(could_be_the_second);
console.log(its_the_fourth);

let tuple: [number, string, boolean] = [72010483290482048230482, "hey", true];

let [tuple_a, tuple_b, tuple_c] = tuple
console.log(tuple_a);
console.log(tuple_b);
console.log(tuple_c);

// let [t_a, t_b, t_c, t_d] = tuple

let [t_a, ...bc] = tuple;
let [some_tuple_a] = tuple;
let [, this_is_a_string] = tuple;

let ob = {
  ob_a: "foo",
  ob_b: 12,
  ob_cc: "bar",
};
let { ob_a, ob_b } = ob

console.log(ob_a);
console.log(ob_b);

({ob_a, ob_b } = { ob_a: "baz", ob_b: 101 });

// let { ob_a, ...passthrough } = ob;
// let total = passthrough.ob_b + passthrough.ob_cc.length;

function keepWholeObject(wholeObject: { a: string, b?: number}) {
  let { a, b = 1001 } = wholeObject;
}

type C = { a: string, b?: number }
function voided_f({ a, b }: C): void {
  console.log("hi from dectructed voided_f");
}

voided_f({ a: "a_string", b: 9032193 });

function default_destructed_f({ a = "", b = 0 } = {}): void {
  console.log("hi from default_destructed_f");
}

default_destructed_f();

let spread_first = [1, 2];
let spread_second = [3, 4];
let spreadboth = [0, ...spread_first, ...spread_second, 5];
console.log(spreadboth);

let spread_defaults = { food: "spicy", price: "$$$$", ambiance: "noises" };
let spread_search = { food: "rich", ...spread_defaults };
console.log(spread_search);

class Z {
  p = 12;
  m() {
  }
}

let class_z = new Z();
let clone_of_class_z = { ...class_z };
clone_of_class_z.p;
// clone_of_class_z.m();
