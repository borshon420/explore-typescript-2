"use strict";
const salary = 7500;
const friendSalary = [7500, 12300, 17200, 9400, 8300];
const friends = ["sakib", "Rakib", "Nakib", "Dakib"];
friendSalary[0] = 8500;
friendSalary.push(13100);
// friendSalary[4] = '9800'
friends.push("Bakib");
friends[2] = "Quakib";
// friends.push(5400)
let max = 0;
for (const salary of friendSalary) {
    if (salary > max) {
        max = salary;
    }
}
