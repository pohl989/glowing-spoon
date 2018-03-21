////// I don't think I fully picked up all the JS principles before so I'm doing a rinse and repease.

//// Function constructor
//
// var tim = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };
//
// //// Let's create a blueprint for this with a funciton constructor.
// //// Function constructors use a capital letter
// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     // This will create the function in ALL child records
//     // Lets save some time and use it as a prototype see below
//     // this.calculateAge = function() {
//     //     console.log(2016 - this.yearOfBirth)
//     // }
// }
//
// Person.prototype.calculateAge = function() {
//     console.log(2016 - this.yearOfBirth);
// }
//
// // All of them will inherit the last name Smith, but it is NOT directly in the object it is in
// // the prototype of
// Person.prototype.lastName = 'Smith';
//
// //// called instantiation because this object are instances of the person object
// // first an empty object is createed, hence 'new', then the constructor function 'Person'
// // is called with the arguements that we specified
// var john = new Person('John', 1990, 'teacher');
// var jane = new Person('Jane', 1969, 'designer');
// var mark = new Person('Mark', 1948, 'retired');
//
// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();


//// Object.create another way to create!

//// first define an object that will act as the prototype THEN create the new object.  The other way around

// we do this naming because it is NOT a function constructor like before.
// this is the object.create way. Simply a different way.
// var personProto = {
//     calculateAge: function() {
//         console.log(2016 - this.yearOfBirth);
//     }
// };
// //created and blank
// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';
//
// //lets try a different way becasue Object.create accepts second parameters
//
// var jane = Object.create(personProto,
// {
//     name: {value: 'Jane' },
//     yearOfBirth: {value: 1969 },
//     job: { value: 'designer' }
// });

///////////////////////
//// Primitives verse Objects
//// numbers, strings, boolean, undefined, and null are primitives the rest are Objects
//// variable containting primitives hold the data in the variable itself
//// variables associated with objects do NOT contain the data it just points to the objects
//
//
// //// primitives
// var a = 23;
// var b = a;
// a = 46;
// console.log(a);
// console.log(b);
// //// each hold their own data YAY!
//
//
//
// ////objexts
// var obj1 = {
//     name: 'John',
//     age: 26,
// };
//
// var obj2 = obj1;
//
// obj1.age = 30;
//
// console.log(obj1);
// console.log(obj2);
//
//
//
// //// functions
// var age = 27;
// var obj = {
//     name: 'Jonas',
//     city: 'Lisbon'
// };
//
// function change(a, b) {
//     a = 30;
//     b.city = 'San Francisco'
//     console.log(a)
// }
//
// change(age, obj);
// console.log(age);
// console.log(obj.city);
//
//
// function change(a) {
//   a = 5;
//   console.log(a);
// }
//
// var a = 10;
//
// change(a);
//
// console.log(a); // value of 'a' has not been changed here
//////////////////
//////// functions are also objects

//// a function is an instance of the object type, can store them in a variable
//// we can pass them as an argument to another function, return a function from a function
//// so we have first class functions!!!! Woot! Woot!

// var years = [1990, 1965, 1937, 2017, 1998];
//
// // generic function that loops over input array
// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }
//
// function calculateAge(el) {
//     return 2018 - el;
// }
//
// function isFullAge(el) {
//     return el >= 18;
// }
//
// function maxHeartRate(el) {}
//
// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isFullAge);
//
// console.log(ages);
// console.log(fullAges);

/////////// so those functions accepted functions as inputs now lets return functions
/// skipped
/////////// Lecture: IIFE

// for (var i = 0; i < 5; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, i * 1000 );
// }
//
// for (var i = 0; i < 5; i++) {
//   (function(x) {
//       setTimeout(function() { // anonymous function
//         console.log(x);
//       }, x * 1000 );
//   })(i);
// }

//
// (function () {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// })();
//
// console.log(score)

// function interviewQuestion(job) {
//     return function(name) {
//         if (job==='designer') {
//             console.log('boo');
//         } else if (job ==='teacher'){
//             console.log('boo hoo');
//         } else {
//             console.log('meh');
//         }
//     }
// }
//
// interviewQuestion('teacher')('john');


var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlmen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        }  else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
}
var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');
//method borrowing. Call method allows us to set the 'this' variable. Here it is emily
john.presentation.call(emily, 'friendly', 'afternoon');

// call is for general // apply is for array .apply(emily, []), but this one doesn't call for an array

//bind generates a copy of the function and assign to a variable

var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('totes');

var emilyAfternoon = john.presentation.bind(emily, 'friendly');
emilyAfternoon('formal');
