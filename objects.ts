const obj = {
  name: "Ushika",
  age: 0.7,
  gender: "female",
};

//Function accepting object as parameter
function printName(person: { fName: string; age: number }): void {
  console.log(`My name is ${person.fName}, I am ${person.age} years old`);
}

let coordinate: { x: number; y: number } = { x: 22, y: 90 };

//To annotate the return value in function
function withReturnValueType(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

//Type Alias
//Instead of writing out obj types as an annotation, we can declare them separetly in type alias
type Point = {
  x: number;
  y: number;
};
function doublePoint(point: Point): Point {
  return {
    x: point.x * 2,
    y: point.y * 2,
  };
}

//Nested Objects
type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: { producer: string; writer: string };
};
function calculatePayout(song: Song): number {
  return song.numStreams * 0.003;
}
function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}
const mySong: Song = {
  title: "Jaya Jayanardhana",
  artist: "string",
  numStreams: 123456789,
  credits: { producer: "string", writer: "string" },
};
calculatePayout(mySong);
printSong(mySong);

//Optional Properties
type Points = {
  x: number;
  y: number;
  z?: number; //?makes properties optional
};
const myPoints: Points = { x: 9, y: 10 };
const validPoints: Points = { x: 10, y: 20, z: 30 };

//ReadOnly Properties
type User = {
  readonly id: number;
  userName: string;
};
const user: User = {
  id: 12,
  userName: "Ushika",
};

//Intersection Types
type Circle = {
  radius: number;
};
type Colorful = {
  color: string;
};
type ColorfulCircle = Circle & Colorful;
const happyFaces: ColorfulCircle = {
  radius: 4,
  color: "pink",
};

//Adding new type in intersection types
type Cat = {
  numLives: number;
};
type Dog = {
  breed: string;
};
type Animals = Cat &
  Dog & {
    age: number;
  };
