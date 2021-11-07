// // //////////////////////////////////////////////////////////////////////
// //              Chapter 31 - 34 SMIT assginment                       //
// ////////////////////////////////////////////////////////////////////////

//globally date object:
let today_Date = new Date();

//Assignment #01: Write a program that displays current date and time in your browser.

let currentDate = new Date();
console.log(currentDate);

//Assignment #02: Write a program that alerts the current month in words. For example December

let month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
alert(`Current Month: ${month[new Date().getMonth()]}`);

//Assignment #03: Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

console.log(`Today is : ${new Date().toString().slice(4, 7)}`);

//Assignment #04: Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
if (
  weekDays[new Date().getDay()] === "Saturday" ||
  weekDays[new Date().getDay()] === "Sunday"
) {
  console.log("Its A Fun Day");
}

//Assignment #05: Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.

new Date().getDate() < 16
  ? console.log("First fifteen days of the month")
  : console.log("Last days of the month");

/*Assignment #06: . Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.
 */
let milisecond = new Date().getTime();
let seconds = (milisecond / 1000) | 0;
let minutes = (seconds / 60) | 0;
console.log(`Current Date : ${new Date()}.
Elapsed miliseconds since January 1, 1970 : ${milisecond}
Elapsed minutes since January 1, 1970 :${minutes}`);

//Assignment #07: Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

new Date().getHours() < 12 ? alert(`Its AM`) : alert(`Its PM`);

//Assignment #08: Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.

let laterDate = new Date("Dec 31 2020");
console.log(`Later Date: ${laterDate}`);

//Assignment #09: Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on Tuesday, 13 April 2021
// minuts in a day is 1440.

let diffBetweenMilliSecond =
  today_Date.getTime() - new Date("april 13,2021").getTime();
let totalDaySinceRamadan = (diffBetweenMilliSecond / 1000 / 60 / 1440) | 0;
console.log(`${totalDaySinceRamadan} days have passed since 1st Ramadan, 2020`);

//Asiignment #10: Write a program that displays in your browser the  seconds that elapsed between the reference date and the  beginning of 2015.

var date = new Date();
var setDate = new Date("jan 1, 2021, 00:00:00");
console.log(setDate);
var cal = date - setDate;
var call = cal / (1000 * 60);
call = Math.floor(call);

console.log(`On reference Date: ${setDate}`);
console.log(`${call} second has passed since beginning 2020`);

//Assignment #11: Create a Date object for the current date and time.Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.

var date_2 = new Date();
date_2.setHours(date_2.getHours() - 1);
console.log(`current time: ${new Date()}`);
console.log(`1 hour previouse time: ${date_2}`);

//Assginment #12: Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

let dayAndDate = today_Date.toDateString().slice(4, 10);
let year100Back = new Date(
  ` ${dayAndDate} , ${today_Date.getFullYear() - 100}`
);
console.log(`Current Date: ${today_Date}
100 years back it was: ${year100Back}`);

//Assignment #13: Write a program to ask the user about his age. Calculate and show his birth year in your browser.

let yourAge = +prompt("What Is Your Age?");
let birthYear;
if (yourAge) {
  birthYear = new Date().getFullYear() - yourAge;
  console.log(`Your age is : ${yourAge}
Your birth Year is: ${birthYear}`);
}

//Assignment #14: Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

let customer_Name = prompt("Customer Name?");
let bill_Month = prompt("Bill Month?");
let number_units = +prompt("Number of Units");
let chargePerUnit = +prompt("Charge per unit");
let latePaymentSurcharge = 350;
let grossAmountPayable;
let netAmountPayableWithinDuaDate = number_units * chargePerUnit;
if (netAmountPayableWithinDuaDate) {
  grossAmountPayable = netAmountPayableWithinDuaDate + latePaymentSurcharge;
}
console.log("K-Electric Bill");
console.log(`customer Name: ${customer_Name}
Month: ${bill_Month}
Number of  Units: ${number_units}
Charges for Unit: ${chargePerUnit}
Net Amount Payable (within Due Date): ${netAmountPayableWithinDuaDate}
late Payment Surcharge: ${latePaymentSurcharge}
Groess Amount Payable (after dua Date): ${grossAmountPayable}`);

// // //////////////////////////////////////////////////////////////////////
// //              Chapter 35 - 38 SMIT assginment    function            //
// ////////////////////////////////////////////////////////////////////////

//Assignment #01: Write a function that displays current date & time in your browser.

function dispalyTime() {
  console.log(new Date());
}
dispalyTime();

//Asiignment #02: . Write a function that takes first & last name and then it greets the user using his full name.

let greetFullname = function () {
  let first_name = prompt("Enter Your first Name");
  let last_name = prompt("Enter Your first Name");
  console.log(`Welcome Mr.${first_name} ${last_name}`);
};
greetFullname();

//Assignment #03: 3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.

let addTwoNumbers = function () {
  let firstNumber = +prompt("Enter first Number ");
  let secondNumber = +prompt("Enter Second Number ");
  if (!(isNaN(firstNumber) && isNaN(secondNumber))) {
    return `${firstNumber + secondNumber}`;
  }
  console.log(`The Sum is ${firstNumber + secondNumber}`);
};
console.log(addTwoNumbers());

//Assignment #04:Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.

let myCalculetor = function (num_1, num_2, operator) {
  //   debugger;
  //   let result;
  switch (true) {
    case operator === "+":
      return num_1 + num_2;
    case operator === "-":
      return num_1 - num_2;
    case operator === "*":
      return num_1 * num_2;
    case operator === "/":
      return num_1 / num_2;
    default:
      break;
  }
};

let result = myCalculetor(2, 3, "/");
console.log(`Result = ${result}`);

// Assignment #05: Write a function that squares its argument

let squareArgument = function (num) {
  console.log(`The number is ${num} And Its square is ${num * num}`);
};
squareArgument(100);

//Assignment # 06: Write a function that computes factorial of a number.

let factorial = function (factorailNumber) {
  let flag = factorailNumber;
  let factorialResult = 1;
  while (flag) {
    console.log(flag);
    factorialResult *= flag;
    flag--;
  }
  console.log(`Factorial of ${factorailNumber} is: ${factorialResult}`);
};
factorial(5);

//Assignment #07:Write a function that take start and end number as inputs & display counting in your browser.

let start = +prompt("Starting number?");
let end = +prompt("ending number?");

let letCounting = function (startingPoint, endingPoint) {
  if (startingPoint < endingPoint) {
    for (let index = startingPoint; index <= endingPoint; index++) {
      console.log(index);
    }
  }
};
letCounting(start, end);

/*
Assignment #08. Write a nested function that computes hypotenuse of a right angle triangle.
Hypotenuse2 = Base2 + Perpendicular2
Take base and perpendicular as inputs.
Outer function : calculateHypotenuse()
Inner function: calculateSquare()
*/

let hypotenuse;
let calculateHypotenuse = function (base, perpendicular) {
  hypotenuse = calculateSquare(
    calculateSquare(base) + calculateSquare(perpendicular)
  );
  // hypotenuse = calculateSqaure(hypotenuse);
  function calculateSquare(para) {
    return para ** 2;
  }
  return hypotenuse;
};
console.log(calculateHypotenuse(2, 2));

/*
Assignment #09:  Write a function that calculates the area of a rectangle.
A = width * height
Pass width and height in following manner:
    i. Arguments as value
    ii. Arguments as variables
*/
let width, height, area;
let calculateAreaOfRectsngle = function (h, w) {
  return (area = w * h);
};
//Arguments as variables
console.log(
  `The area is: ${calculateAreaOfRectsngle((width = 20), (height = 30))}`
);
// Arguments as value
console.log(`The area is: ${calculateAreaOfRectsngle(20, 20)}`);

/*
Assignment #10: Write a JavaScript function that checks whether a passed string is palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam
*/

let checkPalindrome = function (str) {
  let newString = str.split("");
  newString = newString.reverse().join("");
  if (str === newString) {
    console.log(` ${str}: Yes Its is palindrome.`);
  } else {
    console.log(`${str}: NO its not palindrome.`);
  }
};
checkPalindrome("madam");
/*
Assignment #11: Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
EXAMPLE STRING : 'the quick brown fox'
EXPECTED OUTPUT : 'The Quick Brown Fox'
*/
let sentances = "",
  firstcharactor = "",
  remainningLetters = "";
let exampleString = "the quick brown fox";
let mianConverFirstletterFunction = function (str) {
  str = str.split(" ");
  for (const iterator of str) {
    sentances += firstLetter(iterator);
  }
  return sentances;
};
let firstLetter = function (revFirstLetter) {
  firstcharactor = revFirstLetter.slice(0, 1);
  remainningLetters = revFirstLetter.slice(1);
  return `${firstcharactor.toUpperCase() + remainningLetters} `;
};
console.log(`Example String: ${exampleString}
Expected output: ${mianConverFirstletterFunction(exampleString)}`);

/*Assignment #12: Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
EXAMPLE STRING : 'Web Development Tutorial'
EXPECTED OUTPUT : 'Development'
*/
let word,
  longestWord,
  longestWordlength = 0;
let findLongestWord = function (str) {
  word = str.split(" ");
  for (const key of word) {
    key.length > longestWordlength
      ? ((longestWordlength = key.length), (longestWord = key))
      : "";
  }
  return `Example String: ${str}
  Expected Output: ${longestWord}`;
};
console.log(findLongestWord("Web Development Tutoriale"));

/* Assignment #13: Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
Sample arguments : 'JSResourceS.com', 'o'
*/
let counter = 0;
let occurrenceLetterString = function (str, letter) {
  // str.toLowerCase();
  for (const key of str.toLowerCase()) {
    key === letter ? counter++ : "";
  }
  console.log(
    `The Number of occurrences of: ${letter} in String: ${str} is: ${counter}`
  );
};
occurrenceLetterString("JSResourceS.com", "s");

/*
Assignment #14. The Geometrizer
Create 2 functions that calculate properties of a circle, using the definitions here.
Create a function called calcCircumference:
• Pass the radius to the function.
• Calculate the circumference based on the radius, and output "The circumference is NN".
Create a function called calcArea:
• Pass the radius to the function.
• Calculate the area based on the radius, and output "The area is NN".
Circumference of circle = 2πr
Area of circle = πr2
*/

let calcCircumference = function (radius) {
  return `The Circumference is : ${2 * Math.PI * radius}`;
};
let calcArea = function (radius) {
  return `The Area is : ${Math.PI * radius ** 2}`;
};
console.log(calcCircumference(4));
console.log(calcArea(10));
