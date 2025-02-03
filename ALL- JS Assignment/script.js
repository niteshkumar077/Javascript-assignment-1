// 1. Write a script to greet your website visitor using JS alert box.
alert("Welcome To Our Website");

// 2. Write a script to display following message on your webpage:
alert("Error! Please enter a valid password")

// 3. Write a script to display following message on your web page: (Hint : Use line break)

alert("Welcome to JS Land... \nHappy Coding!");

// 4. Write a script to display following messages in sequence:

alert("Welcome to JS Land...");
alert("Happy Coding!\nPrevent this page from creating additional dialogs.");

// 5. Generate the following message through browser’s developer console:

console.log( "Hello... I can run JS through my web browser's console" );

// 6. Make use of alerts in your new/existing HTML & CSS project.
// Done!

// 7. Practice placement of <script></script> element in following sections of your project in exercise 6:
// a. Head
// b. Body (before your page’s HTML)
// c. Body (inside your page’s HTML)
// d. Body (after your page’s HTML)
// Done!


// VARIABLES FOR STRINGS
// 1. Declare a variable called username.
let username;

// 2. Declare a variable called myName & assign to it a string that represents your Full Name.
let myName = "Nitesh Kumar"

// 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.
let message = "Hello World"
alert(message)

// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
let StudentName = "Johne Doe" 
let StudentAge = "15 years old"
let StudentQualification = "Certified Mobile Application Development" 
alert(StudentName);
alert(StudentAge);
alert(StudentQualification);

// 5. Write a script to display the following alert using one JS variable:
let food = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(food);

// 6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the below mentioned message in an alert box.(Hint: use string concatenation)
let email = "nitesh@gmail.com"
alert("My email address is"+" "+email);

// Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:
let book = "A Smarter Way To Learn JavaScript"
alert("Iam Trying To Learn From The Book"+" "+ book)

// 8. Write a script to display this in browser through JS
document.write("Yah! I can write HTML content through JavaScript <br>")

// 9. Store following string in a variable and show in alert and browser through JS
let webdesign = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
alert(webdesign);
document.write(webdesign);

// VARIABLES FOR NUMBERS
// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.
let age = 19
alert("i am"+" "+ age +" " + "years" + " "+ "old");

// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.
let visitorvisits = 14;
alert(`You have visited this site ${visitorvisits} times`);

// 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
let birthYear = 2005
document.write(`My birth year is ${birthYear} <br>`)

// 4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to order
// Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
let VisitorsName = "John Doe"
let Producttitle = "T-shirts"
let Quantity = 5
document.write(`${VisitorsName} ordered ${Quantity} ${Producttitle} on XYZ Clothing Store`);