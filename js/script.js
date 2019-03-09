/*eslint-env browser*/
//STEP 1
/*
var someMonth;
function theMonth();
var currentMonth;
var summerMonth;
var myLibraryFunction

//STEP 2
var numLit = 9.2;

//string literal expression
var strLit = "A Literal Expression;

//Boolean literal expression
var boolLit = true;

//null literal expression 
var nullLit;

//STEP 3
var numOut = 2 + 3 + 5;
var strField = "A series " + "of words.";

//STEP 4
var strFirstName;
var strLastName;
var strAddress;
var strCity;
var strZipCode; // including alpha numeric Canadian zipcodes
var nYourAge;
var bMayWeContactYou;  //  coded as a boolean

//STEP 5
var strFirstName= "Mark";
var strLastName = "Sykes";
var strAddress = "1234 Front Street";
var strCity = "San Diego";
var strZipCode = "92104"; 
var nYourAge = 65;
var bMayWeContactYou = true;

var strFirstName;
var strLastName;
var strAddress;
var strCity;
var strZipCode;
var nYourAge;
var bMayWeContactYou;
var strFirstName;
var strLastName;
var strAddress;
var strCity;
var strZipCode;
nYourAge;
bMayWeContactYou;
strFirstName= "Mark";
strLastName = "Sykes";
strAddress = "1234 Front Street";
strCity = "San Diego";
strZipCode = "92104"; 
nYourAge = 65;
bMayWeContactYou = true;

var strFirstName, 
    strLastName,
    strAddress,
    strCity,
    strZipCode,
    nYourAge,
    bMayWeContactYou;
strFirstName = prompt("What is your First Name?"); 
strLastName = prompt("What is your Last Name?");
strAddress = prompt("What is your Address?");
strCity = prompt("What is your City?");
strZipCode = prompt("What is your Zip Code?");
nYourAge = prompt("What is your Age?");
bMayWeContactYou = prompt("May we contact you?"); // should convert all truthy/falsey values and then outputting the values as true Boolean data types

//STEP 6
var strCoerce0 = 2010 + " at the end";
window.console.log(strCoerce0);

//STEP 7
var strCoerce1 = true + " stuff" ;
window.console.log(strCoerce1);
var strCoerce2 = 1999 + false;
window.console.log(strCoerce2);

//STEP 8 - not valid
var someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."';
window.console.log(someString);


//Step 9
var noVal;
window.console.log(noVal);
var aVar = null;
window.console.log(aVar);


//STEP 10
window.console.log(typeof "A string");
window.console.log(typeof 10.5);
window.console.log(typeof true);
window.console.log(typeof object);
window.console.log(typeof undefined);


//STEP 11
window.alert("Hello " + "Mark Sykes" + ", welcome to the JavaScript class!");

//STEP 12

var name = "Mark Sykes";
window.alert("Hello " + name + ", welcome to the JavaScript class!");


//STEP 13
var name = "Mark Sykes";
var course = "JavaScript";
window.alert("Hello " + name + ", welcome to the " + course + " class!");


//STEP 14
var name = "Mark Sykes";
var course = "JavaScript";
window.alert("Hello " + name + ".\nWelcome to the " + course + " class!");

//STEP 15
var name = window.prompt("What is your name?");
var course = "JavaScript";
window.alert("Hello " + name + ".\nWelcome to the " + course + " class!");

//STEP 16
var name = window.prompt("What is your name?");
var course = window.prompt("What class are taking?");
window.alert("Hello " + name + ".\nWelcome to the " + course + " class!");


//Step 17
var x = 10;
var y = 20;
window.console.log(y + x);

//STEP 18
var x = 20;
x += 20;
window.console.log(x);


//STEP 19
var x = 20;
x *= 5;
window.console.log(x);


//STEP 20
var x = 20 % 3;
window.console.log(x);


//STEP 21
window.console.log((3 > 5) || true);


//STEP 22
window.console.log((3 + 10 > 5) && false);

//STEP 23
var widget = {shape: "round", size: 20};
window.console.log(typeof widget);
*/

//STEP 24
var widget = {shape: "round", size: 20};
window.console.log((typeof widget) === "object");

//STEP 25
var widget = {shape: "round", size: 20};
window.console.log((typeof widget) !== "object");