// Starter Assignment Code
var generateBtn = document.querySelector("#generate"); //saves reference to the generate button

var lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"]; //can put a backslash in front of quotes or exclamations to avoid bugs. or if its not working, just take them out
var defaultPassword = "";

function generatePassword() {
	var lengthChoice = prompt("How many characters would you like your password to be?");
	if (lengthChoice < 8 || lengthChoice > 128) {
		alert("Password length must be between 8 and 128 characters.");
	  }
	
	  var lowercaseChoice = confirm("Would you like to include lowercase characters?");
	  var uppercaseChoice = confirm("Would you like to include uppercase characters?");
	  var numbersChoice = confirm("Would you like to include numbers?");
	  var specialChoice = confirm("Would you like to include special characters?");

	  if (!lowercaseChoice && !uppercaseChoice && !numbersChoice && !specialChoice) {
		alert("At least one character type must be selected.");
		return defaultPassword;
	  }

	//   var allChoices = [lowercaseChoice, uppercaseChoice, numbersChoice, specialChoice]
	if (lowercaseChoice === true) {
		allChoices += lowercaseChoice
	}

	  var gotLower = false
	  var gotUpper = false
	  var gotNumber = false
	  var gotSpecial = false


	  for (var i=0; i<lengthChoice; i++) {
		if (lowercaseChoice === true && !gotLower) {
			var passwordChar = (lowerArr[Math.floor(Math.random() * lowerArr.length)]);
			gotLower = true;
		} 
		else if (uppercaseChoice === true && !gotUpper) {
			var passwordChar = (upperArr[Math.floor(Math.random() * upperArr.length)]);
			gotUpper = true;
		}
		else if (numbersChoice === true && !gotNumber) {
			var passwordChar = (numbers[Math.floor(Math.random() * numbers.length)]);
			gotNumber = true;
		  }
		else if (specialChoice === true && !gotSpecial) {
			var passwordChar = (special[Math.floor(Math.random() * special.length)]);
			gotSpecial = true;
		} else {
			var passwordChar = (allArray[Math.floor(Math.random() * allArray.length)]);
		}

	  defaultPassword += passwordChar; 
	}

	return defaultPassword;
}

// Starter - Write password to the #password input
function writePassword() {
  var password = generatePassword(); //doesn't exist yet, need to make generatePassword function - done line 9
  var passwordText = document.querySelector("#password"); //selects the password textbox

  passwordText.value = password; //the password textbox value will be the password that comes from generatePassword

}

// Starter - Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //when I click the button, then run write password function
