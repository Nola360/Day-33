// Destructuring Assignment

let a, b;

[a, b] = [100, 200];


console.log(a); //Logs 100
console.log(b); // Logs 200

// Rest Pattern
[a, b, c, ...rest] = [100, 200, 300, 400, 500];

console.log(c);
console.log(rest);

({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
({ a, b, c, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });

console.log(a, b, c);
console.log(rest);

// ARRAY DESTRUCTURING

// const people = ['James', 'Kobe', 'Michael', 'Penny'];

// const [person1, person2, person3, person4] = people;

// console.log(person1, person2, person3, person4);



// Parse Array returned from function
function getPeople() {
  return ['James', 'Kobe', 'Michael', 'Penny'];
}

let person1, person2, person3;
[person1, person2, person3] = getPeople();
console.log(person1, person2, person3);


// OBJECT DESTRUCTURING

const person = {
  name: 'James Bond',
  age: 64,
  city: 'MI6',
  gender: 'Male',
  greeting: function () {
    console.log('The names Bond..., James Bond!')
  }
}

console.log(person.name);
// NEW ES6

const { name, age, city, greeting } = person;

console.log(name, age, city);

greeting();;


