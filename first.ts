/* const myNumber = 5;
const myName = 'Borshon'
console.log('Hello from typescript', myNumber, myName) */
/* let money = 500;
let honey = '';
let kony = false; */
let money: number = 5;
let honey: string = "Oh my sweet heart";
let funny: boolean = true;
const age: number = 20;

// function add(first:number, second:number): number{
//           const result = first + second;
//           return result;
// }

// const output: number = add(45, 87)

//multipurpose
// function add(first:number | string, second:number | string): number | string{
//           const result: string | number = first + second;
//           return result;
// }

// const output: number = add(45, 87);
// const fullName = add('Adam', 'Sandlar')

function doubleConcole(number: number): void {
  console.log(2 * number);
}
