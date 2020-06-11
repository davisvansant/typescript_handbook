// symbols

let sym1 = Symbol();

let sym2 = Symbol("key");

console.log(sym1);
console.log(sym2);

let sym3 = Symbol("key");

sym2 === sym3;

const sym = Symbol();
let obj = {
  [sym]: "value"
};

console.log(obj[sym]);

const getClassNameSymbol = Symbol();

class C {
  [getClassNameSymbol]() {
    return "C";
  }
}

let c = new C();
let className = c[getClassNameSymbol]();
