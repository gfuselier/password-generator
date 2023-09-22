// Starter Assignment Code
var generateBtn = document.querySelector("#generate"); //saves reference to the generate button

var lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; 
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var special = ["!","\"","#","$","%","&","\'","(",")","*","+","\,","-",".","/",":",";","<","=",">","?","@","[","\\","^","_","`","{","|","}","~"]; //can put a backslash in front of quotes or exclamations to avoid bugs. or if its not working, just take them out

function generatePassword() {
  //Acceptance Criteria
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
var lengthPrompt = prompt("How many characters would you like your password to be?");
console.log(lengthPrompt);
if (lengthPrompt < 8) {
  alert("Password length must be at least 8 characters.")
}
if (lengthPrompt > 128) {
  alert("Password can be no more than 128 characters.")
}

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
confirm("Would you like to include ")

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

  return password;
}

// Starter - Write password to the #password input
function writePassword() {
  var password = generatePassword(); //doesn't exist yet, need to make generatePassword function - done line 9
  var passwordText = document.querySelector("#password"); //selects the password textbox

  passwordText.value = password; //the password textbox value will be the password that comes from generatePassword

}

// Starter - Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //when I click the button, then run write password function


