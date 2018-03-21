//Lecture: variables
/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/


// Lecture: variables 2
// var name = 'John';
// var age = 26 ;

// console.log(name + age);
// console.log(age + age);

// var job, isMarried;
//
// console.log(job);
//
// job = 'teacher';
// isMarried = false;
//
// console.log(name + ' is a ' + age + ' year old ' + job + '. Is he Married? ' + isMarried);
//
// age = 'Thirty Six';
// job = 'driver';
//
// console.log(name + ' is a ' + age + ' year old ' + job + '. Is he Married? ' + isMarried);
//
//
// var lastName = prompt('What is the last name?');
//
// console.log(lastName);
//
// alert(name + ' is a ' + age + ' year old ' + job + '. Is he Married? ' + isMarried);


// Lecture: operators

// var now = 2016;
// var birthYear = now - 26;
// birthYear = now - 26 * 2;
// //2016 - 52
// //1964
//
// console.log(birthYear);
//
// var ageJohn = 30;
// var ageMark = 30;
//
// ageJohn = ageMark = (3 + 5) * 4 - 6;
// //ageJohn = ageMark = 26
//
//
// //ageJohn = ageJohn + 1;
// ageJohn++;
//
// //ageMark = ageMark * 2;
// ageMark *= 2;
//
// console.log(ageJohn);
// console.log(ageMark);

/////////////////////////////////////////
//lecture: if/else statements

// var name = 'John';
// var age = 26;
// var isMarried = 'yes';
//
// if (isMarried === 'yes') {
//   console.log(name + ' is married!');
// } else {
//   console.log(name + ' will hopefully marry soon :) ');
// }
//
// isMarried = true;
//
// if(isMarried) {
//   console.log('YES');
// }
//
// //converts 23 to string
// if (23 == "23"){
//   console.log('something to print...');
// }
//
// ///usually always use === and not == because you avoid type conversion.

////////////////////////////////////
// //Lecture: boolean logic and switch
//
// var age = 20;
//
// if(age <= 19) {
//   console.log('John is a teenager');
// } else if(age >= 20 && age < 30){
//   console.log('John is a Young Man');
// } else {
//   console.log('John is a man');
// }
//
// var job = 'driver';
// job = prompt('What does john do?')
//
// switch (job) {
//     case 'teacher':
//       console.log('John teaches kids.');
//       break;
//     case 'driver':
//       console.log('John drives a cab in Lisbon');
//       break;
//     case 'cop':
//       console.log('John helps fight crime.');
//       break;
//     default:
//       console.log('John does something else.');
// }

////////////////////////////
// Coding Challenge 1

// var johnHeight = 143;
// // johnHeight = prompt('How tall is John?');
// var johnAge = 5;
// // johnHeight = prompt('How old is John?');
// var friendHeight = 120;
// // friendHeight = prompt('How tall is John\'s friend?');
// var friendAge = 6;
// // friendHeight = prompt('How old is John\'s friend?');
// var eHeight = 198;
// // eHeight = prompt('How tall is John\'s other friend?');
// var eAge = 2;
// // eHeight = prompt('How old is John\'s other friend?');
//
//
// var johnScore = (johnHeight + (johnAge * 5));
// console.log('John\'s score is: ' + johnScore);
// var friendScore = friendHeight + (friendAge * 5);
// console.log('John\'s friend has a score of: ' + friendScore);
// var eScore = eHeight + (eAge * 5);
// console.log('John\'s other friend has a score of: ' + eScore);
//
// if (johnScore > (friendScore && eScore)) {
//   console.log('John wins!');
// } else if (friendScore > (johnScore && eScore)){
//    console.log('Friend wins!');
// }
//   else if (eScore > (johnScore && friendScore)){
//   console.log('The third friend wins!');
// }
//   else {
//     console.log('We have a tie!')
//   }

//////////////////////////////////
// Lecture: Functions
//// code that we will use over and over again. Like a machine. It helps keep our code dry.

// function calculateAge(yearOfBirth) {
//     var age = 2016 - yearOfBirth;
//     return age;
// }
//
// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1969);
// var ageMary = calculateAge(1948);
// console.log(ageJohn);
//
// function yearsUntilRetirement(name, year){
//     var age = calculateAge(year);
//     var retirement = 65 - age;
//
//     if (retirement >= 0) {
//         console.log(name + ' retires in ' + retirement + ' years.');
//     } else {
//         console.log(name + ' is already retired.');
//     }
// }
//
// yearsUntilRetirement('John', 1990);
// yearsUntilRetirement('Mike', 1969);
// yearsUntilRetirement('Mary', 1948);


///////////////////////////////
// Lecture: Statements and Expressions

// //function statement
// function someFunction(parameters) {
//   //code
// }
// //function expression
// var someFunction = function(par) {
//   //code
// }
//
// //expression produces a value while a statement just performs an action.
//
// //Expressions - produces as output or outcome
// 3 + 4; //produces value that is 7
// var x = 3; //variable which is 3
//
// //statements - just performs an action, but it doesn't perform an immediate value
// // it just does an action to performs something
// if (x===5) {
//   //do something
// }


// ///////////////////////////////
// // Lecture: Arrays
//
// //common array:
// var names = ['John', 'Jane', 'Mark'];
// //other method:
// var years = new Array(1990, 1969, 1948);
//
// //if you want the thing inside do [] and write inside the one you want. Starts with 0.
// console.log(names[0]);
// names[1] = 'Ben';
// console.log(names[1])
// var john = ['John', 'Smith', 1990, 'teacher', 'false'];
//
// john.push('blue');
// john.unshift('Mr.')
// var x = john.pop(); //removes last and returns
// john.shift(); //removes first and returns
//
// console.log(john);
// console.log(x);
//
// // alert(john.indexOf('Smith'));
//
// // if the indexOf is incorrect it will output -1. So this
// // reads "If John is NOt a teacher put message out to the console"
// if (john.indexOf('teacher') === -1 ) {
//   console.log('John is NOT a teacher.');
// }

// //////////////////////////////////////////
// // Lecture: Objects
//
// //The order does not matter like it does with arrays.
//
// var john = {
//     name: 'John',
//     lastName: 'Smith',
//     yearofBirth: 1990,
//     job: 'teacher',
//     isMarried: false
// };
//
// //main ways that you read values out of object
// console.log(john);
// console.log(john.lastName);
// console.log(john['lastName']);
//
// var xyz = 'job';
// console.log(john[xyz]);
//
// john.lastName = 'Miller';
// john['job'] = 'programmer';
//
// console.log(john);
//
// var jane = new Object();
// jane.name = 'Jane';
// jane.lastName = 'Smith';
// jane['yearOfBirth'] = 1969;
// jane['job'] = 'retired';
// jane['isMarried'] = true;
//
// console.log(jane);

///////////////////////////////////////
// Lecture: Objects and methods

/* version 1.0
var john = {
    name: 'John',
    lastName: 'Smith',
    yearofBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function(yearOfBirth){
        return 2016 - this.yearofBirth;
    }
};

console.log(john);
console.log(john.family);
console.log(john.family[2]);
console.log(john.calculateAge());

var age = john.calculateAge();
console.log(age)
john.age = age;
console.log(john);

// Function expression is written like this when outside of an object:
// var calculateAge = function(yearOfBirth){
//
// }

*/

//v 2.0

// var john = {
//     name: 'John',
//     lastName: 'Smith',
//     yearOfBirth: 1990,
//     job: 'teacher',
//     isMarried: false,
//     family: ['Jane', 'Mark', 'Bob'],
//     calculateAge: function() {
//         this.age = 2016 - this.yearOfBirth;
//     }
// };
//
// john.calculateAge();
// console.log(john);
// console.log(john.age)


///////////////////////////
// Lecture: Loops

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

/*
0, true, print 0, update i to 1
1, true, print 1, update i to 2
.
.
.
9, true, print 9, update i to 10
10, FALSE, end loop!
*/

// var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];
//
// name[0];
// names[1];
//  //or we can
//  for (var i = 0; i < names.length; i++) {
//     console.log(names[i]);
//  }
//
// console.log(names.length);
//
// //ba