// First topic, first task 
/*const user = prompt ("Please, enter your name to login");
const userEmail = prompt ("Insert your email address");
const userPassword = prompt ("Enter your password"); 
alert (`Dear ${user}, your email is ${userEmail}, your password is ${userPassword}`);*/

// First topic, second task
const secMin = 60;
const minHour = 60;
const oursDay = 24;
const dayMonth = 30;
const secH = secMin * minHour;
const secD = secH * oursDay;
const secM = secD * dayMonth;

// First topic, third task
//alert ("Hello, my name is Yudjin!");

// First topic, fourth task
// const isAdult = confirm ("Are you over 18 years old?");

// First topic, fifth task 
let betterPractice;
const dataTypes = {
    String : "some string",
    Number : 4,
    Boolean : true,
    Undefined : betterPractice, 
    Null : null,
    Big_Int : 1n
};

// Second topic, first task

// 1 step - write condition with "if" keyword, that if the age >= 18 -- console log - 1 case/
// 2 step - if age < 18 -- console log - 2 case. 
  const age = 17;
/*if (age >= 18) {
    console.log("You are of legal age");
  } else {
    console.log("You are too young");
  }*/

  // additional way - use conditional operator - condition ? what will be if true : what will be if false
age >= 18 ? console.log("You are of legal age") : console.log("You are too young");

// Second topic, second task

// Step 1 -- to filter the array and find out the most often number
const numsArr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
const counter = numsArr.reduce(function(counter, counterNumber) {
  if (!counter[counterNumber]) {
    counter[counterNumber] = 1;
  } else {
    counter[counterNumber]++;
  }
  return counter; 
},{}); /*working with array using reduce method and return the velue like an object to variable that shows each number reiteration*/

let mostOftenIteration = 0;
for (const objectNumber in counter) {
  if (counter[objectNumber] > mostOftenIteration) {
    mostOftenIteration = counter[objectNumber];      /* Choosing the most often iteration*/
  } 
}

// Step 2 -- put this number into new array
const mostOftenNumber = []; 
for (const objectNumber in counter) {
  if (counter[objectNumber] === mostOftenIteration) {
    mostOftenNumber.push(+objectNumber); 
  }
}

// Step 3 -- creat a new array without this number
// const someNewArr = numsArr.filter(function(el) {
//   return el !== mostOftenNumber[0]; /*filtering first array and return elemnts wich are not "most often number" to a new array*/ 
// });
let someNewArr = [];
someNewArr = numsArr.filter(function(el) {
  return el !== mostOftenNumber[0];
});
//Practical using -- for ex. searching the product that the most saleable. Could be?