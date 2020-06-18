interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: 'organize desk',
  description: 'clear clutter',
};

console.log(todo1);

const todo2 = updateTodo(todo1, { description: 'throw out trash' });

console.log(todo2);

interface SomeReadOnlyTodo {
  title: string;
}

const read_only_todo: Readonly<SomeReadOnlyTodo> = {
  title: 'Delete inactive users',
};

// read_only_todo.title = 'Hello';
console.log(read_only_todo);


interface PageInfo {
  title: string;
}

type Page = 'home' | 'about' | 'contact';

const some_awesome_page: Record<Page, PageInfo> = {
  about: { title: 'about' },
  contact: { title: 'contact' },
  home: { title: 'home' },
}

console.log(some_awesome_page);
console.log(some_awesome_page.about);
console.log(some_awesome_page.contact);
console.log(some_awesome_page.home);

interface PickedTodo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<PickedTodo, 'title' | 'completed'>;

const some_picked_todo: TodoPreview = {
  title: 'clean room',
  completed: false,
}

console.log(some_picked_todo);
console.log(some_picked_todo.title);
console.log(some_picked_todo.completed);

interface OmitedTodo {
  title: string;
  description: string;
  completed: boolean;
}

type OmittedTodoPreview = Omit<OmitedTodo, 'description'>;

const some_omited_todo: OmittedTodoPreview = {
  title: 'I feel left out',
  completed: true,
}

console.log(some_omited_todo);
console.log(some_omited_todo.title);
console.log(some_omited_todo.completed);

type Exclude0 = Exclude<"a" | "b" | "c", "a">;
type Exclude1 = Exclude<"a" | "b" | "c", "a" | "b">;
type Exclude2 = Exclude<string | number | (() => void), Function>;

const excluded_i: Exclude0 = 'b';
const excluded_ii: Exclude1 = 'c';
const excluded_iii: Exclude2 = 'hi';

console.log(excluded_i);
console.log(excluded_ii);
console.log(excluded_iii);

type Extract1 = Extract<"a" | "b" | "c", "a" | "f">;
type Extract2 = Extract<string | number | (() => void), Function>;

const extracted_i: Extract1 = 'a';
const extracted_ii: Extract2 = Function;

console.log(extracted_i);
console.log(extracted_ii);

type NonNullabler0 = NonNullable<string | number | undefined>;
type NonNullabler1 = NonNullable<string[] | null | undefined>;

let some_awesome_nn: NonNullabler0 = "I'm not null!";
let some_other_awesome_nn: NonNullabler1 = ["I'm a non-null string array!"];

console.log(some_awesome_nn);
console.log(some_other_awesome_nn);

declare function f1(arg: { a: number, b: string }): void;
type Parameter1 = Parameters<() => string>;
type Parameter2 = Parameters<(s: string) => void>;
type Parameter3 = Parameters<(<T>(arg: T) => T)>;
type Parameter4 = Parameters<typeof f1>;
type Parameter5 = Parameters<any>;
type Parameter6 = Parameters<never>;
// type Parameters7 = Parameters<string>;
// type Parameters8 = Parameters<Function>;

let some_p1: Parameter1 = [];
let some_p2: Parameter2 = ["something goes here"];
let some_p3: Parameter3 = [1];
let some_p4: Parameter4 = [{ a: 100, b: "cool" }];

console.log(some_p1);
console.log(some_p2);
console.log(some_p3);
console.log(some_p4);

type Constructor0 = ConstructorParameters<ErrorConstructor>;
type Constructor1 = ConstructorParameters<FunctionConstructor>;
type Constructor2 = ConstructorParameters<RegExpConstructor>;

let some_c0: Constructor0 = [("hi")];
let some_c1: Constructor1 = ["a constructor for strings"];
let some_c2: Constructor2 = ["another"];

console.log(some_c0);
console.log(some_c1);
console.log(some_c2);

declare function some_racer(): { a: number, b: string };
type Racer0 = ReturnType<() => string>;
type Racer1 = ReturnType<(s: string) => void>;
type Racer2 = ReturnType<(<T>() => T)>;
type Racer3 = ReturnType<(<T extends U, U extends number[]>() => T)>;
type Racer4 = ReturnType<typeof some_racer>;
type Racer5 = ReturnType<any>;
// type Racer6 = ReturnType<never>;

let some_r0: Racer0 = "something fast";
let some_r1: Racer1 = void {};
let some_r2: Racer2 = {};
let some_r3: Racer3 = [10];
let some_r4: Racer4 = { a: 300, b: "lalalala" };
let some_r5: Racer5 = "could be anything!";

console.log(some_r0);
console.log(some_r1);
console.log(some_r2);
console.log(some_r3);
console.log(some_r4);
console.log(some_r5);

class SomethingGreat {
  x = 0;
  y = 0;
}

type Great0 = InstanceType<typeof SomethingGreat>;
type Great1 = InstanceType<any>;
type Great2 = InstanceType<never>;

let g_0: Great0 = new SomethingGreat;
let g_1: Great1 = 1000;

console.log(g_0);
console.log(g_1);

interface Props {
  a?: number;
  b?: string;
}

const some_obj: Props = { a: 5 };
console.log(some_obj);

const some_obj2: Required<Props> = { a: 5, b: "required stuff" };

console.log(some_obj2);

function toHex(this: Number) {
  return this.toString(16);
}

function numberToString(n: ThisParameterType<typeof toHex>) {
  return toHex.apply(n);
}

console.log(numberToString(25));
