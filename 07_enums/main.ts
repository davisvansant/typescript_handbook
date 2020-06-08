enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

enum SomeEnum {
  No = 0,
  Yes = 1,
}

function respond(recipient: string, message: SomeEnum): void {

}

let some_response = respond("Princess Caroline", SomeEnum.Yes);

console.log(some_response);

// enum E { X }
// enum E1 { X, Y, Z }
// enum E2 {
//   A = 1, B, C
// }

enum FileAccess {
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  G = "123".length
}

let file_access: FileAccess = FileAccess.ReadWrite;
console.log(file_access);

enum ShapeKind {
  Circle,
  Square,
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

let c: Circle = {
  kind: ShapeKind.Circle,
  radius: 100,
}

console.log(c);

enum E {
  X, Y, Z
}

function f(obj: { X: number }) {
  return obj.X;
}

console.log(f(E));

enum LogLevel {
  ERROR,
  WARN,
  INFO,
  DEBUG,
}

type LogLevelStrings = keyof typeof LogLevel;

function printImportant(key: LogLevelStrings, message: string) {
  const num = LogLevel[key];
  if (num <= LogLevel.WARN) {
    console.log('Log level key is: ', key);
    console.log('Log level value is: ', num);
    console.log('Log level message is: ', message);
  }
}

printImportant('ERROR', 'This is a message');

enum Enum {
  A
}

let a = Enum.A;
let name_of_a = Enum[a];

console.log(name_of_a);

const enum Controller {
  Up,
  Down,
  Left,
  Right
}

let some_controller = [ Controller.Up, Controller.Down, Controller.Left, Controller.Right ];
console.log(some_controller);

declare enum Enum {
  L = 1,
  M,
  N = 2,
}
