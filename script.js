// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p",
"q","r","s","t","u","v","w","x","y","z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!","#","$","%","&","'","(",")","*","+","-",",",".","/",":",";","<","=",">","?","@","`","{","|","}"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log("Password is", password)
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function randomNumber(array) {
  return Math.floor(Math.random() * array.length);
}

function generatePassword() {
  var guaranteedCharacters = [];
  var possibleCharacters = [];
  var generatedPassword = "";
  var finalPassword = [];
  var length = window.prompt(
    "How many characters would you like for your password?"
  );

  if (length < 8 || length > 128) {
    window.alert("The password must be within 8-128 characters!");
    generatePassword();
  } else {
    var uppercaseInput = window.confirm(
      "Would you like your password to have uppercase letters?"
    );
    var lowercaseInput = window.confirm(
      "Would you like your password to have lowercase letters?"
    );
    var numbersInput = window.confirm(
      "Would you like your password to have numbers?"
    );
    var specialInput = window.confirm(
      "Would you like your password to have special characters?"
    );

    if (uppercaseInput) {
      var RNG = randomNumber(uppercase);
      possibleCharacters.push(...uppercase);
      guaranteedCharacters.push(uppercase[RNG]);
    }
    if (lowercaseInput) {
      var RNG = randomNumber(lowercase);
      possibleCharacters.push(...lowercase);
      guaranteedCharacters.push(lowercase[RNG]);
    }
    if (numbersInput) {
      var RNG = randomNumber(numbers);
      possibleCharacters.push(...numbers);
      guaranteedCharacters.push(numbers[RNG]);
    }
    if (specialInput) {
      var RNG = randomNumber(special);
      possibleCharacters.push(...special);
      guaranteedCharacters.push(special[RNG]);
    }
  }
  console.log(guaranteedCharacters);

  // for loop add line 46, pull from array, push using return statement
  for (let i = 0; i < length; i++) {
    var RNG = randomNumber(possibleCharacters);
    generatedPassword += possibleCharacters[RNG];
  }
  console.log(generatedPassword);

  finalPassword = generatedPassword.split("");
  for (let i = 0; i < guaranteedCharacters.length; i++) {
    finalPassword[i] = guaranteedCharacters[i];
  }
  console.log(finalPassword.join(""));

  return finalPassword.join("");
}