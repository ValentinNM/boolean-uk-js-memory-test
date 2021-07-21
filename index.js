// Description
// Test the user's memory with this simple little game. This will also put your
//skills up to the test!

// Instructions
// - Show the user 4 random numbers between 1 and 100 using an alert
// - Ask them to enter the numbers in the right order using a prompt
//     - Delay the prompt by 15 seconds (so they have time to forget)
// - Check how many numbers they entered correctly
// - Show the user their result

// Challenge 1
// Turn your whole program into a function that will allow you to change the
//number of numbers displayed and asked for by just entering the desired number as
//an argument when calling the function

// For example:
// playMemoryTest(4) should show and ask for 4 numbers
// playMemoryTest(10) should show and ask for 10 numbers
// And so on...

// Challenge 2
// When asking the user for the numbers, add ordinality to each number you ask. i.e.:
// - Enter the 1st number // - Enter the 2nd number  // Etc...

// - Show the user 4 random numbers between 1 and 100 using an alert
// just one
// const min = 1;
// const max = 100;
// const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log("randomNumber: ", randomNumber);

// function generateRandomInteger(max) {
//   return Math.floor(Math.random() * max) + 1;
// }

// let randomInteger = generateRandomInteger(100);
// console.log("randomInteger value: ", randomInteger);

function generateRandomNumbers() {
  let randomSelectedInteger = [];
  for (let i = 0; i < 4; i++) {
    console.log("Index value: ", i);
    const randomInteger = Math.floor(Math.random() * 100) + 1;
    console.log("randomInteger: ", randomInteger);
    randomSelectedInteger.push(randomInteger);
    console.log("randomSelectedInteger: ", randomSelectedInteger);
  }
  return randomSelectedInteger;
}

const checkRandomNumbers = generateRandomNumbers();
console.log("the generateRandomNumbers are :", checkRandomNumbers);
alert(
  "Wellcome to today's win prize \n The unique numbers for this run are: ",
  checkRandomNumbers
);

// take an input of an array and return ONe  string.

function buildAlertMessage(array) {
  console.log();
  let alertMessage;
}

buildAlertMessage(checkRandomNumbers);
// console.log()

// let randomNumbers = [];
// for( let i < 0; i )

// var arr = [];
// function randomNumber() {
//     var num = Math.floor((Math.random() * 100) + 1);
//     arr.push(num);
//     console.log(arr);
// }

// randomNumber();

// alert("These are the 4 random numbers of the day: ", randomNumber);
// - Ask them to enter the numbers in the right order using a prompt

// let allNumbers = null;

// for (let i = 0; i < randomNumber.length; i++) {
//   allNumbers = randomNumber[i];
//   console.log(allNumbers);
//   allNumbers += allNumbers;
//   const oneNumber = randomNumber[i];
//   console.log(" this are allNumbers value: ", allNumbers);
//   console.log("this is oneNumber: ", oneNumber);
// }

// const userInput = parseInt(prompt("Please enter the first number: "));

//     - Delay the prompt by 15 seconds (so they have time to forget)
// setTimeout(userInput, 15000)
