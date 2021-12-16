"use strict";
const city = 'Dhaka';
const fruits = ['mango', 'apple', 'banana'];
const student = {
    name: 'Kamal',
    age: 20,
    salary: 4500
};
const employee = {
    name: 'Solaiman',
    age: 29,
    salary: 1000000
};
function getSalary(player) {
    return player.salary;
}
getSalary({ name: 'kuddus', salary: 50 });
