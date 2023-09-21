// Assignment Code
var generateBtn = document.querySelector("#generate"); //saving reference to the generate button

var upper = []; //google uppcase letter arrays and copy paste
var lower = [];
var special = []; //can put a backslash in front of quotes or exclamations to avoid bugs. or if its not working, just take them out
var numbers = [];

function generatePassword() {
  //Acceptance Criteria
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
var lengthPrompt = prompt("How many characters would you like your password to be?")
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
//if userChoice is < 8 or >= 129 we need an alert

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //doesn't exist yet, need to make generatePassword function
  var passwordText = document.querySelector("#password");

  passwordText.value = password; //the password textbox will show generated password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //when I click the button, then run write password function


