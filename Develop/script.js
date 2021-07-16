// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;
  
}
//start main generate password function
function generatePassword(){
  var passwordRules = prompt("how many characters woulds you like in your password?");

  //check for validation 
  if(isNaN(passwordRules)){
    alert("please enter a number between 8-128 long");
    return;
  } else if(passwordRules < 8 || passwordRules > 128){
    alert("please enter a number between 8-128");
    return;
  } else{ 
    var includeLowerCase = confirm("Would you like the password to contain lower case letters?");
    var includeUpCase = confirm("Would you like the password to contain upper case letters?");
    var includeNumeric = confirm("Would you like the password to contain numberic values?");
    var includeSpecial = confirm("Would you like the password to contain special characters?");
  }

  var lowerCaseLetters = "a b c d e f g h i j k l m n o p q r s t u v w u x y z";
  var lowerCaseLettersArrey = lowerCaseLetters.split(" ");
  console.log(lowerCaseLettersArrey);
  var upperCased = lowerCaseLetters.toUpperCase();
  var upperCasedArray = upperCased.split(" ");
  console.log(upperCasedArray);
  var numbers = "1 2 3 4 5 6 7 8 9";
  var numberArray = numbers.split(" ");
  console.log(numberArray);
  var specialCharacters = "! @ # $ % & * _ - + = ( ) ? / > . < , ' ; : ] { [ }";
  var specialCharactersArray = specialCharacters.split(" ");
  console.log(specialCharactersArray);


  var mainArray = [];

  if(includeLowerCase) mainArray = mainArray.concat(lowerCaseLettersArrey);

  if(includeUpCase) mainArray = mainArray.concat(upperCasedArray);
  console.log("the total data set in our array is " + mainArray);
  //if user picks nothing 
  if(!includeLowerCase && !includeUpCase){
    alert("please pick one character type");
    return;
  }
  if(includeNumeric) mainArray = mainArray.concat(numberArray);

  if(includeSpecial) mainArray = mainArray.concat(specialCharactersArray);

  var password = [];

  for (var i = 0; i < passwordRules; i++) {
    var char = mainArray[Math.floor(Math.random() * mainArray.length)];
    
    password += char;
    
  }
  console.log("the generated password is " + password);
  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
