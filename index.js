const dataTypes = {
    String: "String",
    Number: 77,
    Boolean: true,
    Undefined: undefined,
    Null: null,
    Big_Int: 12345678901234567890n
};

const secMin = 60;
const minOur = 60;
const secH = secMin * minOur;
const ourDay = 24;
const secD = secH * ourDay;
let dayMon = 30;
const secM = secD * dayMon;

//const isAdult = confirm("Are you already 18 years old?");
//alert(isAdult);

/*let logIn = prompt("Write your login name, please.");
let email = prompt("Write your email adress, please.");
let password = prompt("Insert your password, please.");
alert(`Dear ${logIn}, your email is ${email}, your password is ${password}`);*/
//let message = `Dear ${logIn}, your email adress is ${email}, your password is ${password}.`;
//alert(message);

/*const validateAge = +prompt("Enter your age:");
if (validateAge >= 18) { 
    console.log("You are of legal age");
} else {
    console.log("You are too young");
}*/

const filterMostOfNumber = (numsArr) => {
    let someArr = numsArr;
    let biggestNumberOfEntries = 0;

    const mostRepeatedNumberInArray = someArr.reduce(
        (mostRepeatedNumberInArray, currentElement, currentIndex, array) => {
            let numberOfEntriesForCurrentElement =
                array.indexOf(currentElement) < currentIndex
                    ? -1
                    : array.filter((el) => el === currentElement).length;

            if (numberOfEntriesForCurrentElement > biggestNumberOfEntries) {
                biggestNumberOfEntries = numberOfEntriesForCurrentElement;
                return currentElement;
            } else {
                return mostRepeatedNumberInArray;
            }
        }, someArr[0]
    );

    return (someArr = someArr.filter((el) => el !== mostRepeatedNumberInArray));
}


const triangleArea = (a, b, c) => {
    const firstSideOfTriangle = a;
    const secondSideOfTriangle = b;
    const thirdSideOfTriangle = c;

    const semiperimeterOfTriangle = 
    (firstSideOfTriangle + secondSideOfTriangle + thirdSideOfTriangle) / 2;

    const areaOfTriangle = Math.pow(
        semiperimeterOfTriangle *
          (semiperimeterOfTriangle - firstSideOfTriangle) *
          (semiperimeterOfTriangle - secondSideOfTriangle) *
          (semiperimeterOfTriangle - thirdSideOfTriangle),
        1 / 2
    );

    if (Number.isNaN(areaOfTriangle) || areaOfTriangle === 0) {
        return "Incorrect data";
    } else {
        return areaOfTriangle.toFixed(3);
    }
}



/*const greetings = time => {
    if (time >= 23 || time < 5) {
        alert("Good night");
    } else if (time >= 5 && time < 11) {
        alert("Good morning");
    } else if (time >=11 && time < 17) {
        alert("Good afternoon");
    } else if (time >= 17 && time < 23) {
        alert("Good evening");
    }
}*/