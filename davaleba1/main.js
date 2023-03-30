

const names = ['levani', 'ana', 'irakli', 'beso'];
const box = ['koba', 'giorgi', 'masho',];
const numbers = [4, 7, 3, 8, 9, 2, 4];
const container= [3, 4, 6, 2,[3 ,4, 4 ,[4] ], 3];

const numbers1 = numbers.sort()
const numbers2 = numbers.reduce((total,currentValue) => total + currentValue);
const numbers3 = numbers.some(n => 6);
const numbers4 = numbers.every((n)=> n > 3);
const combined = names.concat(box);
const names2 = names.push("alex");
const names3 = names.slice(1, 3);
const container1 = container.flat(2);




console.log(numbers1);
console.log(numbers2);
console.log(numbers3);
console.log(numbers4);
console.log(combined);
console.log(names2);
console.log(names3);
console.log(container1);
