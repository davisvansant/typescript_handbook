// intersection types
function extend<First, Second>(first: First, second: Second): First & Second {
  const result: Partial<First & Second> = {};
  for (const prop in first) {
    if (first.hasOwnProperty(prop)) {
      (result as First)[prop] = first[prop];
    }
  }
  for (const prop in second) {
    if (second.hasOwnProperty(prop)) {
      (result as Second)[prop] = second[prop];
    }
  }
  return result as First & Second;
}

class Person {
  constructor(public name: string) { }
}

interface Loggable {
  log(name: string): void;
}

class ConsoleLogger implements Loggable {
  log(name) {
    console.log(`Hello, I'm ${name}.`);
  }
}

const jim = extend(new Person('Jim'), ConsoleLogger.prototype);
jim.log(jim.name);

// union types
function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

console.log(padLeft("Hello world", 4));
// let broken_union = padLeft("Hello world", true);

interface Bird {
  fly();
  layEggs();
}

interface Fish {
  swim();
  layEggs();
}

// function getSmallPet(): Fish | Bird {
//   return Fish | Bird;
// }
//
// let pet = getSmallPet();
// pet.layEggs();
// pet.swim();

// type guards and differentiating types
// if ((pet as Fish).swim) {
//   (pet as Fish).swim();
// } else if ((pet as Bird).fly) {
//   (pet as Bird).fly();
// }

// type predicates
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

// if (isFish(pet)) {
//   pet.swim();
// } else {
//   pet.fly();
// }

// in operator
// function move(pet: Fish | Bird) {
//   if ("swim" in pet) {
//     return pet.swim();
//   }
//   return pet.fly();
// }

// typeof type guards
// function isNumber(x: any): x is number {
//   return typeof x === "number";
// }
//
// function isString(x: any): x is string {
//   return typeof x === "string";
// }

function typeof_padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

// instanceof

interface Padder {
  getPaddingString(): string
}

// class SpaceRepeatingPadder implements Padder {
//   constructor(private numSpaces: number) { }
//   getPadddingString() {
//     return Array(this.numSpaces + 1).join(" ");
//   }
// }

class StringPadder implements Padder {
  constructor(private value: string) { }
  getPaddingString() {
    return this.value;
  }
}

// function getRandomPadder() {
//   return Math.random() < 0.5 ?
//     // new SpaceRepeatingPadder(4) :
//     new StringPadder("  "):
// }

// let some_padder: Padder = getRandomPadder();
// // if (some_padder instanceof SpaceRepeatingPadder) {
// //   some_padder;
// // }
// if (some_padder instanceof StringPadder) {
//   some_padder;
// }

// nullable types
let s = "foo";
s = null;
let sn: string | null = "bar";
sn = null;
sn = undefined;

// optional parameters and properties

function f(x: number, y?: number) {
  return x + ( y || 0 );
}

f(1, 2);
f(1);
f(1, undefined);
f(1, null);

class C {
  a: number;
  b?: number;
}

let nulled_c = new C();
nulled_c.a = 12;
nulled_c.a = undefined;
nulled_c.b = 13;
nulled_c.b = undefined;
nulled_c.b = null;

function another_f(sn: string | null): string {
  if (sn == null) {
    return "default";
  } else {
    return sn;
  }
}

function another_another_f(sn: string | null): string {
  return sn || "default";
}

function broken(name: string | null): string {
  function postfix(epithet: string) {
    return name.charAt(0) + '. the ' + epithet;
  }
  name = name || "Bob";
  return postfix("great");
}

function fixed(name: string | null): string {
  function postfix(epithet: string) {
    return name!.charAt(0) + '. the ' + epithet;
  }
  name = name || "Bob";
  return postfix("great");
}

// type aliases

type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getname(n: NameOrResolver): Name {
  if (typeof n === "string") {
    return n;
  } else {
    return n();
  }
}

type Container<T> = { value: T };
type Tree<T> = {
  value: T;
  left: Tree<T>;
  right: Tree<T>;
}

type LinkedList<T> = T & { next: LinkedList<T> };

interface Person {
  name: string;
}

let people: LinkedList<Person>;
// let some_s = people.name;
// let some_s = people.next.name;
// let some_s = people.next.next.name;
// let some_s = people.next.next.next.name;
