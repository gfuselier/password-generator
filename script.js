// Starter Assignment Code
var generateBtn = document.querySelector("#generate"); //saves reference to the generate button

var lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"]; 

	
function generatePassword() {
	var defaultPassword = "";
	var lengthChoice = prompt("How many characters would you like your password to be?");
	if (lengthChoice < 8 || lengthChoice > 128) {
		alert("Password length must be between 8 and 128 characters.");
		return defaultPassword;
	  } 
	
	  var lowercaseChoice = confirm("Would you like to include lowercase characters?");
	  var uppercaseChoice = confirm("Would you like to include uppercase characters?");
	  var numbersChoice = confirm("Would you like to include numbers?");
	  var specialChoice = confirm("Would you like to include special characters?");

	  if (!lowercaseChoice && !uppercaseChoice && !numbersChoice && !specialChoice) {
		alert("At least one character type must be selected.");
		return defaultPassword;
	  }

	  // makes an array combining each array they chose
	var allChoices = []
	if (lowercaseChoice === true) {
		allChoices = allChoices.concat(lowerArr);
	}
	if (uppercaseChoice === true) {
		allChoices = allChoices.concat(upperArr);
	}
	if (numbersChoice === true) {
		allChoices = allChoices.concat(numbers);
	}
	if (specialChoice === true) {
		allChoices = allChoices.concat(special);
	}


	//sets values to false before they are included in password
	  var gotLower = false
	  var gotUpper = false
	  var gotNumber = false
	  var gotSpecial = false


	//loops through each choice to pick a random character from the array
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
			var passwordChar = (allChoices[Math.floor(Math.random() * allChoices.length)]);
		}

	  defaultPassword += passwordChar; //defaultPassword = defaultPassword + passwordChar
	}

	return defaultPassword;
}

// Starter - Write password to the #password input
function writePassword() {
  var password = generatePassword();  
  var passwordText = document.querySelector("#password"); 
  passwordText.value = password; 
}

// Starter - Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
