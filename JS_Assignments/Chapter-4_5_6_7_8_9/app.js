// Chapter Number 4

// Question Number 1
// var firstName = "John", lastName = "Doe", let age = 25;
// console.log(firstName, lastName, age);


// Question Number 2
// Legal Names
// userName
// _privateVariable
// $price
// age23
// camelCaseExample

// illegal Names
// 2ndPlace
// user-name
// var
// my name
// @invalid


// Question Number 3
// document.write("<h2>A heading stating “Rules for naming JS variables</h2>");
// document.write("<p>Variable names can only contain letters, numbers, $ and _. For example : $my_1stVariable.</p>");
// document.write("<p>Variables must begin with a letter, $ or _. For example $name, _name or name</p>");
// document.write("<p>Variable names are case sensitive.</p>");
// document.write("<p>Variable names should not be JS Keywords.</p>");


// Chapter Number 5

// Question Number 1
// var num1 = 3;
// var num2 = 5;
// console.log("Sum of 3 and 5 is " + (num1 + num2));


// Question Number 2
// var num1 = 3;
// var num2 = 5;
// console.log("Sum of 3 and 5 is " + (num1 + num2));
// console.log("Subtraction of 3 and 5 is " + (num1 - num2));
// console.log("Multiplication of 3 and 5 is " + (num1 * num2));
// console.log("Division of 3 and 5 is " + (num1 / num2));
// console.log("Modulus of 3 and 5 is " + (num1 % num2));


// Question Number 3
// Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.

// let value;
// value = 5;
// value++;
// value += 7;
// value--;

// document.write(`Value after variable declaration is : ${value} <br>`);
// document.write(`Initialize Value : ${value} <br>`);
// document.write(`Value After Increment is : ${value} <br>`);
// document.write(`Value After Addition is : ${value} <br>`);
// document.write(`Value After Decrement is : ${value} <br>`);
// document.write(`Remainder After Dividing The Variables : ${value} <br>`);


// Question Number 4
// Cost of one movie ticket is 600 PKR. Write a script to store
// ticket price in a variable & calculate the cost of buying 5
// tickets to a movie. Example output:

// let ticketPrice = 600;
// let totalCost = ticketPrice * 5;
// document.write(`Total cost to buy 5 tickets to movie is : ${totalCost}PKR`);


// Question Number 5
// Write a script to display multiplication table of any
// number in your browser. E.g

// let num = +prompt("Enter Any Number To Print The Table : ");
// document.write(`Table of ${num} is : <br>`);
// document.write(`${num} x 1 = ${num * 1} <br>`);
// document.write(`${num} x 2 = ${num * 2} <br>`);
// document.write(`${num} x 3 = ${num * 3} <br>`);
// document.write(`${num} x 4 = ${num * 4} <br>`);
// document.write(`${num} x 5 = ${num * 5} <br>`);
// document.write(`${num} x 6 = ${num * 6} <br>`);
// document.write(`${num} x 7 = ${num * 7} <br>`);
// document.write(`${num} x 8 = ${num * 8} <br>`);
// document.write(`${num} x 9 = ${num * 9} <br>`);
// document.write(`${num} x 10 = ${num * 10}`);


// Question Number 6
// The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// Conversion Formulae:

// let celsiusTemperature = 25;
// let fahrenheitTemperature = (celsiusTemperature * 9 / 5) + 32;
// document.write(`25°C is ${fahrenheitTemperature}F <br>`);
// let fahrenheit = 86;
// let celsius = (fahrenheit - 32) * 5 / 9;
// document.write(`${fahrenheit}F is ${celsius}C`);


// Question Number 7
// Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables.
// a. Price of item 1
// b. Price of item 2
// c. Ordered Quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

// let item1 = 650;
// let item2 = 100;
// let item1_quantity = 3;
// let item2_quantity = 7;
// let shipping_charge = 100;
// let totalcost = (item1 * item1_quantity) + (item2 * item2_quantity) + shipping_charge;
// document.write(`Price of item 1 is : ${item1}<br>`);
// document.write(`Quantity of item 1 is : ${item1_quantity}<br>`);
// document.write(`Price of item 2 is : ${item2}<br>`);
// document.write(`Quantity of item 2 is : ${item2_quantity}<br>`);
// document.write(`Shipping charges is : ${shipping_charge}<br>`);
// document.write(`Total Cost of your order is : ${totalcost}<br>`);


// Question Number 8
// Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser.

// let total_marks = +prompt("Enter Total Marks");
// let obtained_marks = +prompt("Enter Obtained Marks");
// let percentage = (obtained_marks / total_marks) * 100;
// document.write(`Percentage is ${percentage}%`);


// Question Number 9
// Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee).

// let US = 10;
// let SR = 25;
// let exchange_rate_US = 104.80;
// let exchange_rate_SR = 28;
// let total_currency = (US * exchange_rate_US) + (SR * exchange_rate_SR);
// console.log(` Total currency in PKR is ${total_currency}`);


// Question Number 10
// Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression.

// let number = 10;
// result = (number + 5) * 10 / 2;
// console.log(result);


// Question Number 11
// The Age Calculator: Forgot how old someone is ? Calculate it!
// a.Store the current year in a variable.
// b.Store their birth year in a variable.
// c.Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NN
// years old”.

// let birth_year = +prompt("Birth Year : ");
// let current_year = +prompt("Current Year : ");
// let age = current_year - birth_year;
// console.log(`You ${age + 1} years old`);


// Question Number 12
// The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142).

// let radius = 5;
// let pi = 3.142;
// let circumference = 2 * pi * radius;
// let area = pi * radius ** 2;
// console.log(`Radius of a Circle: ${radius}`);
// console.log(`The circumference is: ${circumference}`);
// console.log(`The area is: ${area}`);


// Question Number 13
// The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

// let favorite_snack = "Choclate";
// let current_age = 24;
// let maximum_age = 70;
// let estimated_amount = 2;
// let total_snacks = (maximum_age - current_age) * estimated_amount;
// console.log(`You will need ${total_snacks} to last you until the ripe old age of ${maximum_age}`);


// Chapter Number 6,7,8,9

// Question Number 1
// Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your browser:

// let a = 10;

// console.log(`The value of a is : ${a}`);
// console.log(`The value of ++a is : ${++a}`);
// console.log(`Now the value of a is : ${a}`);

// console.log(`The value of a++ is : ${a++}`);
// console.log(`Now the value of a is : ${a}`);

// console.log(`The value of --a is : ${--a}`);
// console.log(`Now the value of a is : ${a}`);

// console.log(`The value of a-- is : ${a--}`);
// console.log(`Now the value of a is : ${a}`);


// Question Number 2
// What will be the output in variables a , b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// let a = 2;
// let b = 1;
// var result = --a - --b + ++b + b--;
// console.log(result);


// Question Number 3
// Write a program that takes input a name from user &
// greet the user.

// let fname = prompt("Enter Your Name :");
// console.log(`Hello ${fname} Good Evening.`);


// Question Number 4
// Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

// let userNumber = +prompt("Enter The Number To Create A Table : ");
// if (!userNumber) {
//     userNumber = 5;
// }

// console.log(`${userNumber} x 1 = ${userNumber * 1}`);
// console.log(`${userNumber} x 2 = ${userNumber * 2}`);
// console.log(`${userNumber} x 3 = ${userNumber * 3}`);
// console.log(`${userNumber} x 4 = ${userNumber * 4}`);
// console.log(`${userNumber} x 5 = ${userNumber * 5}`);
// console.log(`${userNumber} x 6 = ${userNumber * 6}`);
// console.log(`${userNumber} x 7 = ${userNumber * 7}`);
// console.log(`${userNumber} x 8 = ${userNumber * 8}`);
// console.log(`${userNumber} x 9 = ${userNumber * 9}`);
// console.log(`${userNumber} x 10 = ${userNumber * 10}`);


// Question Number 5
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

// let subject1 = prompt("Enter Subject 1 Name :");
// let subject2 = prompt("Enter Subject 2 Name :");
// let subject3 = prompt("Enter Subject 3 Name :");

// let totalMarks = 100;
// let subject1Marks = +prompt(`Enter Marks For ${subject1} : `);
// let subject2Marks = +prompt(`Enter Marks For ${subject2} : `);
// let subject3Marks = +prompt(`Enter Marks For ${subject3} : `);
// let obtainedMarks = subject1Marks + subject2Marks + subject3Marks;
// // console.log(obtainedMarks);

// let percentage = (obtainedMarks / (totalMarks * 3)) * 100;
// document.write(`
//     <table border="1">
//       <tr>
//         <th>Subject</th>
//         <th>Total Marks</th>
//         <th>Obtained Marks</th>
//       </tr>
//       <tr>
//         <td>${subject1}</td>
//         <td>${totalMarks}</td>
//         <td>${subject1Marks}</td>
//       </tr>
//       <tr>
//         <td>${subject2}</td>
//         <td>${totalMarks}</td>
//         <td>${subject2Marks}</td>
//       </tr>
//       <tr>
//         <td>${subject3}</td>
//         <td>${totalMarks}</td>
//         <td>${subject3Marks}</td>
//       </tr>
//       <tr>
//         <td colspan="2">Total Marks</td>
//         <td>${obtainedMarks}</td>
//       </tr>
//       <tr>
//         <td colspan="2">Percentage</td>
//         <td>${percentage.toFixed(2)}%</td>
//       </tr>
//     </table>
//   `);
