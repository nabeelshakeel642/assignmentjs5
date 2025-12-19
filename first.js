var secretNumber = 7; 
var userGuess = +prompt("1 se 10 ke beech number guess karo:");

if (userGuess === secretNumber) {
  alert("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
  alert("Close enough to the correct answer");
} else {
  alert("Wrong guess");
}


//
var num = +prompt("Ek number likho:");

if (num % 2 === 0) {
  alert("Ye EVEN number hai");
} else {
  alert("Ye ODD number hai");
}
//        
//

var T = +prompt("Temperature likho:");

if (T > 40) {
  alert("It is too hot outside.");
} else if (T > 30) {
  alert("The Weather today is Normal.");
} else if (T > 20) {
  alert("Today’s Weather is cool.");
} else if (T > 10) {
  alert("OMG! Today’s weather is so Cool.");
} else {
  alert("Temperature bohat zyada thandi hai");
}


//
var ch = prompt("Ek character enter karo:");
var code = ch.charCodeAt(0);

if (code >= 48 && code <= 57) {
  alert("Ye number hai");
} else if (code >= 65 && code <= 90) {
  alert("Ye CAPITAL letter hai");
} else if (code >= 97 && code <= 122) {
  alert("Ye small letter hai");
} else {
  alert("Ye na number hai na letter");
}
//



var a = +prompt("Pehla number likho:");
var b = +prompt("Dosra number likho:");

if (a > b) {
  alert(a + " bara hai");
} else if (b > a) {
  alert(b + " bara hai");
} else {
  alert("Dono numbers equal hain");
}


//
//
var num = +prompt("Ek number likho:");

if (num > 0) {
  alert("Number positive hai");
} else if (num < 0) {
  alert("Number negative hai");
} else {
  alert("Number zero hai");
}


//
//
var correctPassword = "abc123";
var userPassword = prompt("Password enter karo:");

if (userPassword === "") {
  alert("Please enter your password");
} else if (userPassword === correctPassword) {
  alert("Correct! The password you entered  the original password");
} else {
  alert("Incorrect password");
}


//
//
var greeting;
var hour = 13;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

alert(greeting);


//
//
var time = +prompt("Time likho (24-hour format, jaise 1900):");

if (time >= 0 && time < 1200) {
  alert("Good Morning");
} else if (time >= 1200 && time < 1700) {
  alert("Good Afternoon");
} else if (time >= 1700 && time < 2100) {
  alert("Good Evening");
} else {
  alert("Good Night");
}

//
var greeting;
var hour = 13;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

alert(greeting);
//
//
var students = [];


var students = new Array();

var fruits = ["Apple", "Banana", "Mango", "Orange"];

var numbers = [10, 20, 30, 40, 50];

var booleanArray = [true, false, true, false];

var mixedArray = ["Ali", 18, true, "Karachi"];
//
//
//
var correctPassword = "abc123";
var userPassword = prompt("Password enter karo:");

if (userPassword === "") {
  alert("Please enter your password");
} else if (userPassword === correctPassword) {
  alert("Correct! The password you entered  the original password");
} else {
  alert("Incorrect password");
}



