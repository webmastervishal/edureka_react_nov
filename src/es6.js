// let a = 10; //global scope
// const pi = 3.14;

// function display() {
//   let a = 30;
//   //functional scope
//   console.log("inside function", a);
// }

// if (true) {
//   let a = 40;
//   //block scope
//   console.log("inside block scope", a);
// }

// console.log("outside function", a);
// display();

//Arrow functions

// function sum(a, b) {
//   return a + b;
// }

// const sum = (a, b) => a + b;

// console.log("sum of 10 & 20", sum(10, 20));

//template literals

// let name = "Guest";
// // const msg = "Welcome" + name;
// const msg = `Welcome ${name}`;

// console.log("msg:", msg);

//objects

// const name = 'vishal';
// const age = 31;
// const address = 'pune';

const user = {
  name: "vishal",
  age: 31,
};

const address = {
  city: "pune",
};

// const obj = Object.assign(user, address); //es5 combining the object
const obj = { ...user, ...address }; //es6

console.log("user", obj);
