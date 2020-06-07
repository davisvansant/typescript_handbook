// intro

// generics - being able to create a component that can work over a variety of types rather than a single one

function identity(arg: number): number {
  return arg;
}

let whats_my_identity: number = identity(10);
console.log(whats_my_identity);

function generic_identity<T>(arg: T): T {
  return arg;
}

let string_identity: string = generic_identity("hi");
console.log(string_identity);

let number_identity: number = generic_identity(30);
console.log(number_identity);

let array_identity: Array<number> = generic_identity([100, 200, 300, 400]);
console.log(array_identity);

let boolean_identity: Boolean = generic_identity(true);
console.log(boolean_identity);

function loggingIdentity<T>(arg: Array<T>): Array<T> {
  console.log(arg.length);
  return arg;
}

interface GenericIdentityFn {
  <T>(arg: T): T;
}

function generic_identity_interface<T>(arg: T): T {
  return arg;
}

let interface_identity: GenericIdentityFn = generic_identity_interface;
console.log(interface_identity);

class GenericClass<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let my_generic_number = new GenericClass<number>();
my_generic_number.zeroValue = 0;
my_generic_number.add = function(x, y) { return x + y; };

let string_numeric = new GenericClass<string>();
string_numeric.zeroValue = "";
string_numeric.add = function(x, y) { return x + y; };
console.log(string_numeric.add(string_numeric.zeroValue, "test"));

interface Lengthwise {
  length: number;
}

function another_logging_identity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

let generic_interface: Lengthwise = another_logging_identity({ length: 10, value: 3 });
console.log(generic_interface);

function get_property<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4};
get_property(x, "a");
// get_property(x, "m");

// class BeeKeeper {
//   hasMask: boolean;
// }
//
// class ZooKeeper {
//   nametag: string;
// }
//
// class Animal {
//   haslegs: number;
// }
//
// class Bee extends Animal {
//   keeper: BeeKeeper;
// }
//
// class Lion extends Animal {
//   keeper: ZooKeeper;
// }
//
// function create_instance<A extends Animal>(c: new () => A): A {
//   return new c();
// }
//
// create_instance(Lion).keeper.nametag;
// create_instance(Bee).keeper.hasMask;
