//JS for kids part2 page45 "Cinema PG13"

/*let age = 15;
let accompanied = false;
const rightToPass = age >= 13 || age <13 && accompanied;
console.log(rightToPass);
if (rightToPass === true) {
    alert("You can pass")
} else {
    alert("Pass is forbiden")
}*/

// Part 3, p.75

let randomBodyParts = ["leg", "chest", "fingers"];
let randomAdjectives = ["fat","ugly","wry"];
let randomWords = ["bull","rhinoceros","frog","camel","parrot"];

let randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
let randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

//let randomOffensiveWord = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!!!";
let randomOffensiveWord = ["Your", randomBodyPart, "is", "like", "a", randomAdjective, randomWord + "!!!"].join(" ");
console.log(randomOffensiveWord);

const fallingNumbers = [3,2,1];
console.log(fallingNumbers.join(" is bigger than "));