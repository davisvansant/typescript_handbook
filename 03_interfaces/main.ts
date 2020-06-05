// our first interface

// function printLabel(labeledObj: { lable: string }) {
//   console.log(labeledObj.lable);
// }
//
// let myObj = { size: 10, lable: "Size 10 object"};
// printLabel(myObj);

interface LabeledValue {
  label: string;
}

function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object"};
printLabel(myObj);

// optional properties
// interface SquareConfig {
//   color?: string;
//   width?: number;
// }
//
// function createSquare(config: SquareConfig): { color: string; area: number} {
//   let newSquare = { color: "white", area: 100 };
//   if (config.color) {
//     newSquare.color = config.color;
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width;
//   }
//   return newSquare;
// }
//
// let mySquare = createSquare({ color: "black"});

// readonly properties
interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
// p1.x = 5;

let a: number[] = [ 1, 2, 3, 4, 5 ];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12;
// ro.push(5);
// ro.length = 100;
// a = ro;

// excess property checks
interface SquareConfig {
  color?: string;
  width?: number;
  // [propName: string]: any;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

// let mySquare = createSquare({ colour: "red", width: 100 });
// let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);
// let squareOptions = { colour: "red" };
// let mySquare = createSquare(squareOptions);
// 03_interfaces/main.ts(77,29): error TS2559: Type '{ colour: string; }' has no properties in common with type 'SquareConfig'.

// function types
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
}

mySearch("hi", "hey");

// indexable types

interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

// class Animal {
//   name: string;
// }
//
// class Dog extends Animal {
//   breed: string;
// }
//
// interface NotOkay {
//   [x: number]: Animal;
//   [x: string]: Dog;
// }

// interface NumberDictionary {
//   [index: string]: number;
//   length: number;
//   name: string;
// }

interface NumberorStringDictionary {
  [index: string]: number | string;
  length: number;
  name: string;
}

let thingy: NumberorStringDictionary = { length: 10, name: "Hi" };
console.log(thingy);

interface ReadonlyStringArray {
  readonly [ index: number ]: string;
}

let myArray_again: ReadonlyStringArray = ["Alice", "bob"];
// myArray_again[2] = "Mallory";

// class types

interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {}
}

interface AnotherClockConstructor {
  new (hour: number, minute: number): AnotherClockInterface;
}

interface AnotherClockInterface {
  tick(): void;
}

function createClock(ctor: AnotherClockConstructor, hour: number, minute: number): AnotherClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements AnotherClockInterface {
  constructor(h: number, m: number) { }
    tick() {
      console.log("beep beep");
    }
}

class AnalogClock implements AnotherClockInterface {
  constructor(h: number, m: number) { }
    tick() {
      console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
digital.tick();
analog.tick();

// interface AnotherAnotherClockConstructor {
//   new (hour: number, minute: number);
// }
//
// interface AnotherAnotherClockInterface {
//   tick();
// }
//
// const Clock: AnotherAnotherClockConstructor = class Clock implements AnotherAnotherClockInterface {
//   constructor(h: number, m: number) { }
//   tick() {
//     console.log("beep beep beep");
//   }
// }

// class AnotherClock implements AnotherClockConstructor {
//   currentTime: Date;
//   constructor(h: number, m: number) {}
// }

// extending interfaces
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;

console.log(square.color, square.sideLength);

interface AnotherShape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface AnotherSquare extends AnotherShape, PenStroke {
  sideLength: number;
}

let another_square = {} as AnotherSquare;
another_square.color = "blue";
another_square.sideLength = 10;
another_square.penWidth = 5.0;

console.log(another_square.color, another_square.sideLength, another_square.penWidth);

// hybrid types

interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = (function (start: number) { }) as Counter;
  counter.interval = 123;
  counter.reset = function () { };
  return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

// interfaces extending classes
// class Control {
//   private state: any;
// }
//
// interface SelectableControl extends Control {
//   select(): void;
// }
//
// class Button extends Control implements SelectableControl {
//   select() { }
// }
//
// class TextBox extends Control {
//   select() { }
// }
//
// class Image implements SelectableControl {
//   private state: any;
//   select() { }
// }
//
// class Location {
//
// }
