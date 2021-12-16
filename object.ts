const city:string = 'Dhaka';
const fruits:string[] = ['mango', 'apple', 'banana'];

type Person = {
    name:string, 
    age:number, 
    salary:number
}

const student: Person = {
    name: 'Kamal',
    age: 20,
    salary: 4500
}

const employee: Person = {
    name: 'Solaiman',
    age: 29,
    salary: 1000000
}

function getSalary(player: {name: string, salary: number}):
number{
    return player.salary 
}

getSalary({ name: 'kuddus', salary:50})