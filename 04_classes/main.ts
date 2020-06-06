class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("world");
console.log(greeter.greet());

// inheritence
class Animal {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}.m`);
  }
}

class Dog extends Animal {
  bark() {
    console.log('Woof! Woof!');
  }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();

class ComplexAnimal {
  name: string;
  constructor(theName: string) { this.name = theName; }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}`);
  }
}

class Snake extends ComplexAnimal {
  constructor(name: string) { super(name); }
  move(distanceInMeters = 5) {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}

class Horse extends ComplexAnimal {
  constructor(name: string) { super(name); }
  move(distanceInMeters = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}

let sam = new Snake("Sammy the Python");
let tom: ComplexAnimal = new Horse("Tommy the Palomino");

sam.move();
tom.move();

// public, private, and protected modifiers

class ModifiedAnimal {
  private name: string;
  constructor(theName: string) { this.name = theName; }
}

class ModifiedRhino extends ModifiedAnimal {
  constructor() { super("Rhino"); }
}

class ModifiedEmployee {
  private name: string;
  constructor(theName: string) { this.name = theName; }
}

let some_animal = new ModifiedAnimal("Goat");
let some_rhino = new ModifiedRhino();
let some_employee = new ModifiedEmployee("Bob");

some_animal = some_rhino;
// some_animal = some_employee;

class ProtectedPerson {
  protected name: string;
  protected constructor(name: string) { this.name = name; }
}

class ProtectedEmployee extends ProtectedPerson {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new ProtectedEmployee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name);
// 04_classes/main.ts(105,20): error TS2445: Property 'name' is protected and only accessible within class 'ProtectedPerson' and its subclasses.
// let john = new ProtectedPerson("John");
// 04_classes/main.ts(107,12): error TS2674: Constructor of class 'ProtectedPerson' is protected and only accessible within the class declaration.

class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor (theName: string) {
    this.name = theName;
  }
}

let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit";
// 04_classes/main.ts(119,5): error TS2540: Cannot assign to 'name' because it is a read-only property.

// accessors
const fullNameMaxLength = 10;

class AccessorEmployee {
  private _fullName: string;

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (newName && newName.length > fullNameMaxLength) {
      throw new Error("fullname has a max length of " + fullNameMaxLength);
    }
    this._fullName = newName;
  }
}

let employee = new AccessorEmployee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
  console.log(employee.fullName);
}

// static properties
class Grid {
  static origin = { x: 0, y: 0 };
  calculateDistanceFromOrigin(point: { x: number; y: number; }) {
    let xDist = (point.x - Grid.origin.x);
    let yDist = (point.y - Grid.origin.y);
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
  constructor (public scale: number) { }
}

let grid1 = new Grid(1.0);
let grid2 = new Grid(5.0);

console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));

// abstract classes

abstract class AbstractAnimal {
  abstract makeSound(): void;
  move(): void {
    console.log("roaming the earth...");
  }
}

abstract class AbstractDepartment {
  constructor(public name: string) { }
    printName(): void {
      console.log("Department name: " + this.name);
    }
  abstract printMeeting(): void;
}

class AccountingDepartment extends AbstractDepartment {
  constructor() {
    super("Accounting and Auditing");
  }

  printMeeting(): void {
    console.log("The Accounting Department meets each monday at 10am");
  }

  generateReports(): void {
    console.log("Generating account reports...");
  }
}

let department: AbstractDepartment;
// department = new AbstractDepartment;
department = new AccountingDepartment();
department.printName();
department.printMeeting();
// department.generateReports

// advanced techniques
class AdvancedGreeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}

let an_advanced_greeter: AdvancedGreeter;
an_advanced_greeter = new AdvancedGreeter("world");
console.log(an_advanced_greeter.greet());

let constructor_greeter = (function() {
  function constructor_greeter(message) {
    this.greeting = message;
  }
  constructor_greeter.prototype.greet = function() {
    return "Hello, " + this.greeting;
  }
  return constructor_greeter;
})();

let another_greeter;
another_greeter = new constructor_greeter("world");
console.log(another_greeter.greet());

class StaticGreeter {
  static standardGreeting = "hello, there";
  greeting: string;
  greet() {
    if (this.greeting) {
      return "Hello, " + this.greeting;
    } else {
      return StaticGreeter.standardGreeting;
    }
  }
}

let a_static_greeter: StaticGreeter;
a_static_greeter = new StaticGreeter();
console.log(a_static_greeter.greet());

let greeterMaker: typeof StaticGreeter = StaticGreeter;
greeterMaker.standardGreeting = "Hey there!";

let another_static_greeter: StaticGreeter = new greeterMaker();
console.log(another_static_greeter.greet());

class InterfacePoint {
  x: number;
  y: number;
}

interface Point3d extends InterfacePoint {
  z: number;
}

let point3d: Point3d = { x:1, y:2, z:3 };
