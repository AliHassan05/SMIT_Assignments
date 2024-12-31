// Chapter Number 9 To 11

// Question Number 1
// Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// let city = prompt("Where are you from ?").toLowerCase();
// if (city === `karachi`) {
//     console.log(`Welcome To City Of Lights`);
// } else {
//     console.log(`${city}`);
// }


// Question Number 2
// Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// let gender = prompt("Enter Your Gender Please !").toLowerCase();
// if (gender === `male`) {
//     console.log(`Good Morning Sir`);
// } else if (gender === `female`) {
//     console.log(`Good Morning Ma’am`);
// } else {
//     console.log(`Please Enter Valid Gender !`);
// }


// Question Number 3
// Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

// let color = prompt("Please Enter Color Of Road Traffic Signal !").toLowerCase();
// if (color === `red`) {
//     console.log(`Must Stop`);
// } else if (color === `yellow`) {
//     console.log(`Ready to move`);
// } else if (color === `green`) {
//     console.log(`Move now`);
// } else if (color === ``) {
//     console.log(`Please Enter Any Traffic Signal Color`);
// } else {
//     console.log(`This is Not a Traffic Signal Color`);
// }


// Question Number 4
// Write a program to take input remaining fuel in car (inlitres) from user.
// If the current fuel is less than 0.25litres, show the message
// “Please refill the fuel in your car”.

// let fuel = +prompt("Please Check Your Fuel First For Driving!");
// if (fuel < 2) {
//     console.log(`Please Refill The Fuel In Your Car.`);
// } else if (fuel > 2) {
//     console.log(`No Need To Refill The Fuel Of Your Car.`);
// } else {
//     console.log(`Please Enter The Valid Fuel Value. `);
// }


// Question Number 5
// Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }

// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }

// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }


// Question Number 6
// Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

// let subject1 = +prompt("Enter the marks of subject 1");
// let subject2 = +prompt("Enter the marks of subject 2");
// let subject3 = +prompt("Enter the marks of subject 3");
// let totalMarks = +prompt("Enter the total marks of three subjects");
// let obtainedMarks = subject1 + subject2 + subject3;
// let percentage = (obtainedMarks / totalMarks) * 100;
// let grade = "";
// let remarks = "";

// if (percentage >= 80) {
//     grade = "A-One";
//     remarks = "Excellent";
// } else if (percentage >= 70) {
//     grade = "A";
//     remarks = "Good";
// } else if (percentage >= 60) {
//     grade = "B";
//     remarks = "You need to improve";
// } else if (percentage < 60) {
//     grade = "Fail";
//     remarks = "Sorry, better luck next time";
// }

// document.write(`Total Marks : ${totalMarks} <br>`);
// document.write(`Marks Obtained : ${obtainedMarks} <br>`);
// document.write(`Percentage : ${percentage}% <br>`);
// document.write(`Grade : ${grade} <br>`);
// document.write(`Remarks : ${remarks}`);


// Question Number 7
// Guess game: Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// let secretNumber = 7;
// let guess = +prompt("Guess the secret number between 1 to 10");
// if (guess === secretNumber) {
//     alert("Bingo! Correct answer");
// } else if (guess + 1 === secretNumber) {
//     alert("Close enough to the correct answer");
// } else {
//     alert("Try again");
// }


// Question Number 8
// Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.
// let givenNum = +prompt("Check Whether The Given Number is Divisible By 3");
// if (givenNum % 3 === 0) {
//     alert(`Given Number is Divisible By 3.`);
// } else {
//     alert(`Given Number is Not Divisible By 3.`);
// }


// Question Number 9
// Write a program that checks whether the given input is an
// even number or an odd number.
// let givenNum = +prompt("check the given input is an even number or an odd number");
// if (givenNum % 2 === 0) {
//     alert(`${givenNum} is an even number.`);
// } else {
//     alert(`${givenNum} is an odd number.`);
// }


// Question Number 10
// Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// let temperature = +prompt("Enter the temperature");
// if (temperature > 40) {
//     console.log("It is too hot outside.");
// } else if (temperature > 30) {
//     console.log("The Weather today is Normal.");
// } else if (temperature > 20) {
//     console.log("Today’s Weather is cool.");
// } else if (temperature > 10) {
//     console.log("OMG! Today’s weather is so Cool.");
// } else if (temperature < 10) {
//     console.log("Today’s Weather is Extremely Cool.");
// }


// Question Number 11
// Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// let firstNumber = +prompt("Enter First number : ");
// let operation = prompt("Enter Operation You want to perform (+, -, *, /, %) : ");
// let secondNumber = +prompt("Enter Second number : ");
// if (operation === "+") {
//     console.log(`${firstNumber + secondNumber}`);
// } else if (operation === "-") {
//     console.log(`${firstNumber - secondNumber}`);
// } else if (operation === "/") {
//     console.log(`${firstNumber / secondNumber}`);
// } else if (operation === "*") {
//     console.log(`${firstNumber * secondNumber}`);
// } else if (operation === "%") {
//     console.log(`${firstNumber % secondNumber}`);
// } else {
//     alert("Invalid Operation");
// }



// Chapter Number 12 To 13

// Question Number 1
// Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

// let character = prompt("Check the given input is a number, uppercase letter or lowercase letter.");
// if (character >= 48 && character <= 57) {
//     console.log("The given input is a number.");
// } else if (character >= 65 && character <= 90) {
//     console.log("The given input is an uppercase letter.");
// } else if (character >= 97 && character <= 122) {
//     console.log("The given input is a lowercase letter.");
// } else {
//     console.log("The given input is neither a number nor a letter.");
// }


// Question Number 2
// Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// let num1 = +prompt("Enter the first integer:");
// let num2 = +prompt("Enter the second integer:");
// if (num1 > num2) {
//     console.log(`The larger number is: ${num1}`);
// } else if (num2 > num1) {
//     console.log(`The larger number is: ${num2}`);
// } else {
//     console.log("Both numbers are equal.");
// }


// Question Number 3
// Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

// let num = +prompt("Enter The Number is Positive, Negative or Zero:");
// if (num > 0) {
//     console.log("The number is Positive.");
// } else if (num < 0) {
//     console.log("The number is Negative.");
// } else if (num === 0) {
//     console.log("The number is Zero.");
// }


// Question Number 4
// Write a program that takes a character (i.e. string of length 1)
// and returns true if it is a vowel, false otherwise.

// let character = prompt("Enter The Word :");
// if (character === 'a' || character === 'e' || character === 'i' || character
//     === 'o' || character === 'u') {
//     console.log("The character is a vowel.");
// } else {
//     console.log("The character is not a vowel.");
// }


// Question Number 5
// Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
//  i. Check if user has entered password. If not, then
// give message “ Please enter your password”
//  ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// let correctPassword = "ali123";
// let enterPassword = prompt("Enter Your Password : ");
// if (enterPassword === "") {
//     console.log("Please enter your password");
// } else if (enterPassword === correctPassword) {
//     console.log("Correct! The password you entered matches the original password");
// } else {
//     console.log("Incorrect password");
// }


// Question Number 6
// This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
//     alert(greeting);
// } else {
//     greeting = "Good evening";
//     alert(greeting);
// }


// Question Number 7
// Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements.

// let time = prompt("Enter time in 24 hours format (HH:MM):");

// if (time >= 0 && time <= 1159) {
//     console.log(`Its ${time} AM Good Morning`);
// } else if (time >= 1200 && time <= 1700) {
//     console.log(`Its ${time} PM Good Afternoon`);
// } else if (time >= 1700 && time <= 2100) {
//     console.log(`Its ${time} PM Good Evening`);
// } else if (time >= 2100 && time <= 2399) {
//     console.log(`Its ${time} PM Good Night`);
// } else {
//     console.log("Invalid Time");
// }

