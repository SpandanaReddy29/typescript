let studId: number | string;

type CoordPoint = {
  x: number;
  y: number;
};
type Loc = {
  lat: number;
  long: number;
};
let coordinates: Point | Loc;
coordinates = { x: 1, y: 22 };
coordinates = { lat: 232.34, long: 3433.43 };

//Type Narrowing - is type check before working with value
//conditional check because we cannot perform string methods on number and vice versa
function calculateTax(price: number | string, tax: number) {
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }
  return price * tax;
}

//Literal Type
type DayOfWeek =
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday";

let currentDay: DayOfWeek = "Thursday";
