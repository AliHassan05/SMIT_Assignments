// Chapter Number 14 To 16

// Question Number 1
// Declare an empty array using JS literal notation to store
// student names in future.
// let studentNames = [];


// Question Number 2
// Declare and initialize a strings array.
// let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];


// Question Number 3
// Declare and initialize a numbers array.
// let numbers = [1, 2, 3, 4, 5];


// Question Number 4
// Declare and initialize a boolean array.
// let isTrue = [true, false, true, false, true];


// Question Number 5
// Declare and initialize a mixed array.
// let mixed = [1, 'apple', true, 2, 'banana', false, 3, 'cherry'];


// Question Number 6
// Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// let qualifications = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];
// document.write(`<h1>Qualifications :</h1>`);
// document.write(`<h4>1) ${qualifications[0]}</h4>`);
// document.write(`<h4>2) ${qualifications[1]}</h4>`);
// document.write(`<h4>3) ${qualifications[2]}</h4>`);
// document.write(`<h4>4) ${qualifications[3]}</h4>`);
// document.write(`<h4>5) ${qualifications[4]}</h4>`);
// document.write(`<h4>6) ${qualifications[5]}</h4>`);
// document.write(`<h4>7) ${qualifications[6]}</h4>`);
// document.write(`<h4>8) ${qualifications[7]}</h4>`);


// Question Number 7
// Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// let studentNames = ['Michael', 'Jhon', 'Tony'];
// let studentScores = [320, 230, 480];
// let total = 500;
// let percentage1 = (studentScores[0] / total) * 100;
// let percentage2 = (studentScores[1] / total) * 100;
// let percentage3 = (studentScores[2] / total) * 100;

// document.write(`Score of ${studentNames[0]} is ${studentScores[0]} and percentage : ${percentage1}% </br>`);
// document.write(`Score of ${studentNames[1]} is ${studentScores[1]} and percentage : ${percentage2}% </br>`);
// document.write(`Score of ${studentNames[2]} is ${studentScores[2]} and percentage : ${percentage3}%`);


// Question Number 8
// Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// let colors = ['Red', 'Green', 'Blue', 'Yellow', 'Orange', 'Purple'];
// document.write(`Original array is : ${colors} </br>`);

// A
// let addColor = prompt("Which Color Add To The Beginning Of The Array :");
// colors.unshift(addColor);
// document.write(`Array after adding color to the beginning : ${colors}`);

// B
// let addColor = prompt("Which Color Add To The End Of The Array :");
// colors.push(addColor);
// document.write(`Array after adding color to the end : ${colors} </br>`);

// C
// let addColor = prompt("Which Two Colors Add To The Beginning Of The Array :");
// colors.unshift(addColor);
// document.write(`Array after adding two color to the beginning : ${colors} </br>`);

// colors.unshift("Brown", "Gray");
// document.write(`Original array is : ${colors} </br>`);

// D
// colors.shift();
// document.write(`Delete the first color in the array : ${colors}`);

// E
// colors.pop();
// document.write(`Delete the last color in the array : ${colors} </br>`);

// F
// colors.splice(1, 0, "Pink");
// document.write(colors);

// G
// colors.splice(1, 2);
// document.write(colors);



// Question Number 9
// Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.
// let studentScores = [7, 5, 1, 3, 9];
// let newArr = studentScores.sort();
// document.write(`Sorted array of student scores in ascending order : ${newArr} </br>`);


// Question Number 10
// Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.
// let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// let newArr = cities.slice(1, 3);
// document.write(`Selected cities array : ${newArr} </br>`);


// Question Number 11
// Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method).

// var arr = ["This", "is", "my", "cat"];
// var str = arr.join(" ");
// document.write(str);


// Question Number 12
// Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out).

// var devices = ["keyboard", "mouse", "printer", "monitor"];
// document.write("Devices:<br>" + devices.join(", ") + "<br><br>");

// document.write("out:<br>" + devices.shift() + "<br>");
// document.write("out:<br>" + devices.shift() + "<br>");
// document.write("out:<br>" + devices.shift() + "<br>");
// document.write("out:<br>" + devices.shift() + "<br>");


// Question Number 13
// Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)
// var devices = ["keyboard", "mouse", "printer", "monitor"];
// document.write("Devices:<br>" + devices.join(", ") + "<br><br>");

// document.write("out:<br>" + devices.pop() + "<br>");
// document.write("out:<br>" + devices.pop() + "<br>");
// document.write("out:<br>" + devices.pop() + "<br>");
// document.write("out:<br>" + devices.pop() + "<br>");


// Question Number 14
// Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:

// let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write('<select>');
// document.write('<option>Select a manufacturer</option>');
// document.write('<option>' + manufacturers[0] + '</option>');
// document.write('<option>' + manufacturers[1] + '</option>');
// document.write('<option>' + manufacturers[2] + '</option>');
// document.write('<option>' + manufacturers[3] + '</option>');
// document.write('<option>' + manufacturers[4] + '</option>');
// document.write('<option>' + manufacturers[5] + '</option>');
// document.write('</select>');