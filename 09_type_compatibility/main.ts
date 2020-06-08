// interface Named {
//   name: string;
// }
//
// class Person {
//   name: string;
// }
//
// let p: Named;
// p = new Person();

interface Named {
  name: string;
}

let x: Named;
let y = { name: "Alice", location: "seattle" };
x = y;

function greet(n: Named) {
  console.log("Hello, " + n.name);
}

greet(y);

let compare_x = (a: number) => 0;
let compare_y = (b: number, s: string) =>0;

compare_y = compare_x;
// compare_x = compare_y;

let some_items = [ 1, 2, 3 ];

// some_items.forEach((item, index, array) => console.log(item);
some_items.forEach(item => console.log(item));

let return_type_x = () => ({name: "Alice"});
let return_type_y = () => ({name: "Alice", location: "Seattle"});

return_type_x = return_type_y;
// return_type_y = return_type_x;

// enum EventType {
//   Mouse,
//   Keyboard,
// }
//
// interface Event {
//   timestamp: number;
// }
//
// interface MouseEvent extends Event {
//   x: number,
//   y: number,
// }
//
// interface KeyEvent extends Event {
//   keyCode: number
// }
//
// function listenEvent(eventType: EventType, handler: (n: Event) => void) {
//
// }
//
// listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.x + "," + e.y));
// listenEvent(EventType.Mouse, ((e: Event) => console.log((e as MouseEvent).x + "," + e.y)) as (e: Event) => void);
// listenEvent(EventType.Mouse, (e: number) => console.log(e));

function invokeLater(args: any[], callback: (...args: any[]) => void) {

}

invokeLater([1, 2], (x, y) => console.log(x + ", " + y));
invokeLater([1, 2], (x?, y?) => console.log(x + ", " + y));

enum Status {
  Ready,
  Waiting,
};

let some_status = Status.Ready;
// some_status = Color.Green;

class Animal {
  feet: number;
  constructor(name: string, numFeet: number) { }
}

class Size {
  feet: number;
  constructor(numFeet: number) { }
}

let class_a: Animal;
let class_s: Size;

class_a = class_s;
class_s = class_a;

interface Empty<T> {
}

let generic_x: Empty<number>;
let generic_y: Empty<string>;

generic_x = generic_y;

// interface NotEmpty<T> {
//   data: T;
// }
//
// let not_empty_x: NotEmpty<number>;
// let not_empty_y: NotEmpty<string>;
//
// not_empty_x = not_empty_y;
