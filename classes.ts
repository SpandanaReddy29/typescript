//By default every method is public in TS or JS
//Private is not accessible in any class other than in its own
//Protected makes accessible only in child class

class Player {
  // public readonly first: string;
  // public last: string;
  // private score: number = 0; // score = 0

  // constructor(first: string, last: string) {
  //   this.first = first;
  //   this.last = last;
  // }

  //Above code can be re-written as
  constructor(
    public first: string,
    public last: string,
    // private _score: number
    protected _score: number
  ) {}

  private secretMethod(): void {
    console.log("SECRET METHOD");
  }

  //Getter function is readonly property
  get fullName(): string {
    return `${this.first} ${this.last}`;
  }

  get score(): number {
    return this._score;
  }

  //Setter Function, should not have any return type annotation
  set score(newScore: number) {
    if (newScore > 0) {
      throw new Error("Score cannot be negative!");
    }
    this._score = newScore;
  }
}

class SuperPlayer extends Player {
  public isAdmin: boolean = true;
  maxScore() {
    this._score = 9999999;
  }
}

const player1 = new Player("Ushika", "Reddy", 100);
player1.fullName;

//Abstract Class
//We cannot create new instance of abstract class
//define the methods that must be implemented by child class
abstract class Employee {
  constructor(public fName: string, public lName: string) {}
  abstract getPay(): number; //must implemet this method for extending this class
  greet() {
    console.log("HELLO");
  }
}
class FullTimeEmp extends Employee {
  constructor(fName: string, lName: string, private salary: number) {
    super(fName, lName);
  }
  getPay(): number {
    return this.salary;
  }
}
class ContractEmp extends Employee {
  constructor(
    fName: string,
    lName: string,
    private hrRate: number,
    private hrWorked: number
  ) {
    super(fName, lName);
  }
  getPay(): number {
    return this.hrRate * this.hrWorked;
  }
}

const ushikaReddy = new FullTimeEmp("Ushika", "Reddy", 2200000);
const sravdanaReddy = new ContractEmp("Sravdana", "Reddy", 48, 80);
