// // function add(a,b){
// //   return a + b;
// //
// // }
// //
// // console.log(add(3,1));
// //
// // var toAdd=[9,5];
// // console.log(add(...toAdd)); // '...' is the spread operator which spreads out the arguments in the array
//
// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
//
// var final = [...groupB, ...groupA];
//
// console.log(final);


var person = ['Andrew', 25];
var person2 = ['Jen', 29];

//pring "Hi Andrew, you are 25"
function greet(name, age){
  console.log('Hi ' + name + ', you are ' + age);
}
greet(...person);
greet(...person2);


var names = ['Mike', 'Ben'];
var final = ['Andrew', ...names];

final.forEach(function(name){
  console.log("Hi " + name);
});
