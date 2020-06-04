// boolean
let isDone : boolean = false;

console.log("Boolean :", isDone)

// number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

console.log("decimal :", decimal);
console.log("hex :", hex);
console.log("binary :", binary);
console.log("octal :", octal);

// string
let color: string = "blue";

console.log("color :", color);

color = 'red';

console.log("color :", color);

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentance: string = `Hello, my name is ${ fullName }`;

console.log("Name :", fullName);
console.log("Age :", age);
console.log(`I'll be ${ age + 1 } years old next month.`);

// array
let list: number[] = [1, 2, 3];

console.log("list is :", list);

let another_list: Array<number> = [1, 2 ,3];

console.log("another_list is :", another_list)

// tuple
let x: [string, number];
x = ["hello", 10];

console.log("tuple is :", x);
console.log("first element is :" ,x[0]);
console.log("second element is :", x[1]);

// enum
enum Color { Red, Green, Blue };
let c: Color = Color.Green;
console.log("c is position :", c);

let green: string = Color[1];
console.log("the color is :", green);

// any
let notSure: any = 4;
console.log("any? : ", notSure)

notSure = "maybe a string instead";
console.log("any? :", notSure);

notSure = "false",
console.log("any? :", notSure);

let any_list: any[] = [1, true, "free"];
any_list[1] = 100;

console.log("list :", any_list[1]);

// void
function warnUser(): void {
  console.log("This is my warning message");
}

warnUser();

let unusable: void = undefined;
console.log(unusable);
unusable = null;
console.log(unusable);


// null and undefined
let u: undefined = undefined;
console.log(u);

let n: null = null;
console.log(n);

// never
function error(message: string): never {
  throw new Error(message);
}

// error("hi");
function fail() {
  return error("Something failed!");
}

// fail();

function infiniteLoop(): never {
  while (true) {
  }
}

// infiniteLoop();

// object
function create(o: object | null): void{}

create({ prop: 0 });
create(null);
// create(42);
// create("string");
// create(false);
// create(undefined);

// type assertions
let someValue: any = "this is a string";
console.log("some value :", someValue);

let strLength: number = (<string>someValue).length;
console.log(strLength);

let strLength_as: number = (someValue as string).length;
console.log(strLength_as);
