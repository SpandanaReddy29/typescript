//allows to describe the shapes of objects
//only for objects

interface Point {
  x: number;
  y: number;
}
let pt: Point = { x: 298, y: 98 };

//Optional Properties and ReadOnly
interface Person {
  readonly id: number;
  name: String;
  age: number;
  contactNumber?: number;
}
let p1: Person = { id: 1234, name: "Ushika", age: 0.7 };
let p2: Person = {
  id: 123445,
  name: "Ushika",
  age: 0.7,
  contactNumber: 9604332151,
};

//Interface Methods
interface studInfo {
  readonly id: number;
  name: String;
  age: number;
  sayHi: () => string; //sayHi() : string --> Other way of decalaring method
}
let studInfo1: studInfo = {
  id: 123,
  name: "Ushika",
  age: 0.7,
  sayHi: () => {
    return "Hello";
  },
};

//Interface Methods with Parameter
interface ProductInfo {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}
let shoes: ProductInfo = {
  name: "Puma",
  price: 1056,
  applyDiscount(amount: number) {
    const newPrice = this.price * (1 - amount);
    return newPrice;
  },
};

//Reopening Interface
//We can new property for an already declared interface which is not possible in type declarations
//we can get error as duplicate types

interface reopeningInterface {
  name: string;
}
interface reopeningInterface {
  isValid: boolean;
}
const checking: reopeningInterface = {
  name: "Hello",
  isValid: true,
};

//Extending Interface
interface Dog {
  name: string;
  age: number;
  breed: string;
  bark(): string;
}
interface ServiceDog extends Dog {
  job: "bombsquard dog" | "guide dog" | "drug sniffer dog";
}

const chewy: ServiceDog = {
  name: "Chewy",
  age: 1,
  breed: "Lab",
  bark() {
    return "Bark!";
  },
  job: "guide dog",
};

//Interface Multiple Inheritance
interface PersonInfo {
  name: string;
}
interface EmpInfo {
  readonly id: number;
  email: string;
}
interface Engineer extends PersonInfo, EmpInfo {
  designation: string;
  skillSet: string[];
}
const ushikaEngineer: Engineer = {
  name: "UshikaReddy",
  id: 12,
  email: "ushikareddy@gmail.com",
  designation: "Sr Software Engineer",
  skillSet: ["JavaScript", "React.js", "TypeScript", "Redux", "HTML", "CSS"],
};

//Classes and Interface
interface Colorful {
  color: string;
}
interface Printable {
  print(): void;
}

class Bike implements Colorful {
  constructor(public color: string) {}
}
class Jacket implements Colorful, Printable {
  constructor(public brand: string, public color: string) {}
  print(): void {
    console.log(`${this.brand} ${this.color}`);
  }
}
const bike1 = new Bike("Red");
const jacket1 = new Jacket("Jawa", "Black");
