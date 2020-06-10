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

// interfaces vs type aliases

type Alias = { num: number }
interface Interface {
  num: number;
}

declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;

// string literal types

type Easing = "ease-in" | "ease-out" | "ease-in-out";
class UIElement {
  animate(dx: number, dy: number, easing: Easing) {
    if (easing === "ease-in") {
      console.log("ease-in");
    } else if (easing === "ease-out") {
      console.log("ease-out");
    } else if (easing === "ease-in-out") {
      console.log("ease-in-out");
    } else {
      console.log("nope");
    }
  }
}

let button = new UIElement();
button.animate(0, 0, "ease-in");
// button.animate(0, 0, "uneasy");

// numeric literal types

// function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
//
// }
//
// function numeric_foo(x: number) {
//   if (x !== 1 || x !== 2) {
//
//   }
// }

// enum member types

// discriminated unions

interface SomeSquare {
  kind: "square";
  size: number;
}

interface SomeRectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

interface SomeCircle {
  kind: "circle";
  radius: number;
}

type SomeShape = SomeSquare | SomeRectangle | SomeCircle;

function area(s: SomeShape) {
  switch (s.kind) {
    case "square": return s.size * s.size;
    case "rectangle": return s.height * s.width;
    case "circle": return Math.PI * s.radius ** 2;
  }
}

let a_square: SomeShape = { kind: "square", size: 5 };
let a_rectangle: SomeShape = { kind: "rectangle", width: 20, height: 50 };
let a_circle: SomeShape = { kind: "circle", radius: 50 };
console.log(area(a_square));
console.log(area(a_rectangle));
console.log(area(a_circle));

// polymorphic 'this' types

class BasicCalculator {
  public constructor(protected value: number = 0) { }
  public currentValue(): number {
    return this.value;
  }

  public add(operand: number): this {
    this.value += operand;
    return this;
  }

  public multiply(operand: number): this {
    this.value += operand;
    return this;
  }
}

let some_calculations = new BasicCalculator(2).multiply(5).add(1).currentValue();
console.log(some_calculations)

class ScientificCalculator extends BasicCalculator {
  public constructor(value = 0) {
    super(value);
  }

  public sin() {
    this.value = Math.sin(this.value);
    return this;
  }
}

let doing_science = new ScientificCalculator(2).multiply(5).sin().add(1).currentValue();
console.log(doing_science);

// index types

function pluck<T, K extends keyof T>(o: T, propertyNames: K[]): T[K][] {
  return propertyNames.map(n => o[n]);
}

interface Car {
  manufacturer: string;
  model: string;
  year: number;
}

let some_taxi: Car = {
  manufacturer: 'Toyota',
  model: 'Camery',
  year: 2014,
};

let taxi_make_and_model: string[] = pluck(some_taxi, ['manufacturer', 'model']);
let taxi_model_year = pluck(some_taxi, ['model', 'year']);

console.log(taxi_make_and_model);
console.log(taxi_model_year);

// index types and index signatures

interface Dictionary<T> {
  [key: string]: T;
}

let some_index_keys: keyof Dictionary<number>;
let some_index_value: Dictionary<number>['foo'];

console.log(some_index_keys);
console.log(some_index_value);

// mapped types

// interface SomePersonPartial {
//   name?: string;
//   age?: number;
// }
//
// interface SomePersonReadonly {
//   readonly name: string;
//   readonly age: number;
// }

type SomeReadOnly<T> = {
  readonly [P in keyof T]: T[P];
}

type SomePartial<T> = {
  [P in keyof T]?: T[P];
}

type PersonPartial = SomePartial<Person>;
type ReadonlyPerson = SomeReadOnly<Person>;

type PartialWithNewMember<T> = {
  [P in keyof T]?: T[P];
} & { newMember: boolean }

type SomeKeys = 'option1' | 'option2';
type Flags = { [K in SomeKeys]: boolean };

type moreFlags = {
  option1: boolean;
  option2: boolean
}

type Nullable<T> = { [P in keyof T]: T[P] | null }
type SomeOtherPartial<T> = { [P in keyof T]?: T[P] }

type Proxy<T> = {
  get(): T;
  set(value: T): void;
}

type Proxify<T> = {
  [P in keyof T]: Proxy<T[P]>;
}

// function proxify<T>(o: T): Proxify<T> {
//
// }

// inference from mapped types

// function unproxify<T>(t: Proxify<T>): T {
//   let result = {} as T;
//   for (const k in t) {
//     result[k] = t[k].get();
//   }
//   return result;
// }
//
// let some_original_props = unproxify

// conditional types

// declare function f<T extends boolean>(x: T): T extends true ? string : number;
//
// let some_new_x = f(Math.random() < 0.5 );
//
// console.log(some_new_x);

type TypeName<T> =
  T extends string ? "string" :
  T extends number ? "number" :
  T extends boolean ? "boolean" :
  T extends undefined ? "undefined" :
  T extends Function ? "function" :
  "object";

type T0 = TypeName<string>;
type T1 = TypeName<"a">;
type T2 = TypeName<true>;
type T3 = TypeName<() => void>;
type T4 = TypeName<string[]>;

interface FooFighter {
  propA: boolean;
  propB: boolean;
}

declare function some_other_f<T>(x: T): T extends FooFighter ? string : number;

// function yet_another_foo<U>(x: U) {
//   // let a = f(x);
//   let b: string | number = a;
// }

// distributive contional types

type FunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T];
type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>;

type NonFunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? never : K }[keyof T];
type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;

interface Part {
  id: number;
  name: string;
  subparts: Part[];
  updatePart(newName: string): void;
}

type T40 = FunctionPropertyNames<Part>;
type T41 = NonFunctionPropertyNames<Part>;
type T42 = FunctionProperties<Part>;
type T43 = NonFunctionProperties<Part>;

// type inference in condtional types

type Unpacked<T> =
  T extends (infer U)[] ? U :
  T extends (...args: any[]) => infer U ? U :
  T extends Promise<infer U> ? U:
  T;

type T1000 = Unpacked<string>;
type T1001 = Unpacked<string[]>;
type T1002 = Unpacked<() => string>;
type T1003 = Unpacked<Promise<string>>;
type T1004 = Unpacked<Promise<string>[]>;
type T1005 = Unpacked<Unpacked<Promise<string>[]>>;

// prefered conditional types

type T00 = Exclude<"a" | "b" | "c" | "d", "a" | "c" | "f">;
type T01 = Extract<"a" | "b" | "c" | "d", "a" | "c" | "f">;

type T02 = Exclude<string | number | (() => void), Function>;
type T03 = Extract<string | number | (() => void), Function>;

type T04 = NonNullable<string | number | undefined>;
type T05 = NonNullable<(() => string) | string[] | null | undefined>;

function f1(s: string) {
  return { a:1, b: s };
}

class another_C {
  x = 0;
  y = 0;
}

type T10 = ReturnType<() => string>;
type T11 = ReturnType<(s: string) => void>;
type T12 = ReturnType<(<T>() => T)>;
type T13 = ReturnType<(<T extends U, U extends number[]>() => T)>;
type T14 = ReturnType<typeof f1>;
type T15 = ReturnType<any>;
type T16 = ReturnType<never>;
// type T17 = ReturnType<string>;
// type T18 = ReturnType<Function>;

type T20 = InstanceType<typeof another_C>;
type T21 = InstanceType<any>;
type T22 = InstanceType<never>;
// type T23 = InstanceType<string>;  
// type T24 = InstanceType<Function>;
