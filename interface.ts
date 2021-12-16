interface Player {
    name: string,
    club: string,
    salary: number,
    wife?: string,
    previousClubs?: []
}

const messy: Player = {
    name: 'L messy',
    club: 'Abahoni',
    salary: 12000,
    wife: 'Nosimon ara begam'
}

const hannan: Player = {
    name: 'Hannan',
    club: 'Abahoni',
    salary: 2000
}

interface Employee{
    name: string,
    designation: string,
    salary: number,
    age: number 
}

interface Developer extends Employee{
    language: string,
    codeEditor: string,
    typeSpeed: number
}

const zuku:Developer = {
    name: 'Zuku',
    designation: 'Facebooker',
    salary: 2000,
    age: 65,
    language: 'js',
    codeEditor: 'VS code',
    typeSpeed: 65
}