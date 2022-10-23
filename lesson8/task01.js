'use strict';


const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Пупкин', 'Козлов'];
const failedStudents = ['Петров', 'Пупкин'];

const filter = (arr1, arr2) =>  arr1.filter(elem => !arr2.includes(elem));


console.log(`Общий список скудентов: ${allStudents}`);
console.log(`Из них завалившие экзамен: ${failedStudents}`);
console.log(`Из них сдавшие экзамен: ${filter(allStudents,failedStudents)}`);
