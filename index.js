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
  String: "some string",
  Number: 4,
  Boolean: true,
  Undefined: betterPractice,
  Null: null,
  Big_Int: 1n
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
const counter = numsArr.reduce(function (counter, counterNumber) {
  if (!counter[counterNumber]) {
    counter[counterNumber] = 1;
  } else {
    counter[counterNumber]++;
  }
  return counter;
}, {}); /*working with array using reduce method and return the velue like an object to variable that shows each number reiteration*/

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
let someNewArr = [];
someNewArr = numsArr.filter(function (el) {
  return el !== mostOftenNumber[0];
}); /*filtering first array and return elemnts wich are not "most often number" to a new array*/
//Practical using -- for ex. searching the product that the most saleable. Could be?

// Second topic third task
// Create a new array and put inside fitered old array with help of a loop
const numsArray = [13, 2, 4, 7, 12, 2, 4, 87, 26, 22, 44, 49, 122, 424, 43, 16];
let someStrainedArr = [];
for (const i in numsArray) {
  if (numsArray[i] % 3 === 0 || numsArray[i] % 5 === 0 || numsArray[i] % 7 === 0 || numsArray[i] % 11 === 0 || numsArray[i] % 13 === 0) {
    someStrainedArr.push(numsArray[i]);
  }
};

// Second topic, forth task

const triangleArea = (a, b, c) => {
  // Code here
  const firstTriangleSide = a;
  const secondTriangleSide = b;
  const thirdTriangleSide = c;

  const trianglePerimetr = a + b + c;
  const triangleSemiPerimetr = trianglePerimetr / 2;
  let triangleArea = (triangleSemiPerimetr *
    (triangleSemiPerimetr - firstTriangleSide) *
    (triangleSemiPerimetr - secondTriangleSide) *
    (triangleSemiPerimetr - thirdTriangleSide)) ** (1 / 2);

  // return Number.isNaN(triangleArea) || triangleArea === 0
  //   ? "Incorrect data"
  //   : +triangleArea.toFixed(3);
  if (Number.isNaN(triangleArea) || triangleArea === 0) {
    return "Incorrect data";
  } else {
    return +triangleArea.toFixed(3);
  }
}

// Second topic, fifth task
let time = 23;
const greetings = time => {
  switch (true) {
    case (time >= 23 || time < 5): return alert("Good night");
    case (time >= 5 && time < 11): return alert("Good morning");
    case (time >= 11 && time < 17): return alert("Good afternoon");
    case (time >= 17 && time < 23): return alert("Good evening");
  }
}


// Fourth topic, first task
// const arr = [1, 2, 3, 4, 5, 6, 7];
function sumSliceArray(arr, first, second) {
  const sum = arr[first - 1] + arr[second - 1];
  if (isNaN(first) || isNaN(second)) {
    throw new TypeError("First or second value not a number");
  } else if (first < 1 || second < 1 || first >= arr.length || second >= arr.length) {
    throw new RangeError("Inserted numbers are out of range");
  }
  return sum;
}

// try {
//   let result = sumSliceArray(arr, "three", 5);
//   console.log(result);
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
// }

// Fourth topic, second task
function checkAge() {
  const name = prompt("Insert user name");
  const age = prompt("Insert your age");
  if (age < 18 || age > 70) {
    throw new RangeError;
  } else if (isNaN(age)) {
    throw new TypeError;
  }
  const status = prompt("Insert your status");
  if (status !== "admin" && status !== "moderator" && status !== "user") {
    throw new EvalError;
  } else if (status === null || status === "" || name === null || name === "" || age === null || age === "") {
    throw new Error("The field is empty!");
  }
  return alert("You can watch a movie!");
}



