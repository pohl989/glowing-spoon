// Lecture: let and const


// // ES5
// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';
// console.log(name5);
//
// // ES6
// const name6 = 'Jane Smith';
// let age6 = 23;
// name6 = 'Jane Miller'
// console.log(name6);


// // ES5
// function driversLicense5(passedTest) {
//
//     console.log(firstName);
//     if (passedTest) {
//         var firstName = 'John';
//         var yearOfBirth = 1990;
//     }
//     console.log(firstName + ', born in ' + yearOfBirth)
// }
//
// driversLicense5(true);
//
// // ES6
//
// function driversLicense6(passedTest) {
//
//     // console.log(firstName);
//     let firstName;
//     const yearOfBirth = 1990;
//
//     if (passedTest) {
//         firstName = 'John';
//     }
//     console.log(firstName + ', born in ' + yearOfBirth)
//
// }
//
// driversLicense6(true);
//
// let i = 23;
//
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
//
// console.log(i);

////////////////////////////////
// // Lecture: Blocks and IIFEs
// // ES6
// // blocks can be used to replace IIFEs, but be careful with the syntax
// {
//   const a = 1;
//   let b = 2;
//   var c = 3; // can be used outside block
// }
// // won't work becuase a is outside of the block
// // console.log(a);
// // var is function scoped NOT block scoped so it works
// // console.log(c);
//
// //ES5
// (function() {
//     var d = 4;
// })();
// // it can't work because it is in the IIFE
// console.log(d);

// ///////////////////////
// // Lecture: Strings
//
// let firstName = 'John';
// let lastName = 'Smith';
// const yearOfBirth = 1990;
//
// function calcAge(year) {
//     return 2018 - year;
// }
//
// // ES5
// console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.')
//
// // ES6
// // Template literals
// console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`)
//
// const n = `${firstName} ${lastName}`;
// console.log(n.startsWith('j'));
// console.log(n.endsWith('s'));
// console.log(n.includes('oh'));
// console.log(`${firstName} `.repeat(5)); // Use a template literal to get the best out of this repeat


////////////////////
// // Lecture: Arrow functions
//
// const years = [1990, 1965, 1982, 1937];
//
// // ES5
// var ages5 = years.map(function(el) {
//     return 2016 - el;
// });
// console.log(ages5);
//
// // ES6
//
// let ages6 = years.map(el => 2016 - el);
// console.log(ages6);
//
// ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`)
// console.log(ages6);
//
// ages6 = years.map((el, index) => {
//     const now = new Date().getFullYear();
//     const age = now - el;
//     return `Age element ${index + 1}: ${age}.`
// });
// console.log(ages6);


//test
/////////////////////
// Lecture: Arrow functions 2

// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {

    }
}
