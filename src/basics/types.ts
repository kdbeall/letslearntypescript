/**
   Copy pasted from TypeScript handbook
    https://www.typescriptlang.org/docs/handbook/basic-types.html
*/

/** Boolean type */
let isDone: boolean = false;

/** Number types */
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

/** String types */
let color: string = 'blue';
color = 'red';

/** Template strings */
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}`;

/** Arrays */
let numberArray: number[] = [1, 2, 3];
let arrayGenerics: Array<number> = [1, 2, 3];

/** Tuples */
let x: [string, number];
// Initialize it
x = ['hello', 10];  // OK
// Initialize it incorrectly
/* x = [10, "hello"]; */
// Error


/** Enums */
enum Color {
  Red,
  Green,
  Blue
}
let c: Color = Color.Green;


/** Any type */
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;  // okay, definitely a boolean

/** Void type */
function warnUser(): void {
  alert('This is my warning message');
}

/**
 * Declaring variables of type void is not useful because you can only assign
 * undefined or null to them.
 */
let unusable: void = undefined;


// Function returning never must have unreachable end point
function error(message: string): never {
  throw new Error(message);
}
