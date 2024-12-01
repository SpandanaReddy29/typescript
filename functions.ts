function square(num: number) {
  return num * num;
}

function greet(name: string, age: number) {
  return `Hi my name is ${name} and I am ${age} years old`;
}

greet("Ushika Reddy", 0.7);
square(5);

//Default Values
function defaultValues(name: string = "Sravdana") {
  return `Hi ${name}, How are you ?`;
}

//Void type - will not return anything
function voidType(): void {
  console.log("Hi");
}

//Never Type - Doesnt finishes execution or which throws exception
function makeError(msg: string): never {
  throw new Error(msg);
}

function gameLoop(): never {
  while (true) {
    console.log("GAME LOOP RUNNING");
  }
}
