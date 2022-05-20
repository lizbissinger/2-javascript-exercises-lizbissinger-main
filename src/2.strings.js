//reverseString: you should be able to reverse a string
// Example: "abc" => "cba"
function reverseString(str) {

  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var reverseString = reverseArray.join("");

  /**
   * can be achieved by combining: 
   *    1. string.prototype.split
   *    2. array.prototype.reverse
   *    3. array.prototype.join
   * 
   * Can even be done on one line
   */
  return reverseString;
}

//capitalize: should return the input in all-caps
// Example: "this is a string" => "THIS IS A STRING"
function capitalize(str) {

  capitalize = str.toUpperCase();

  return capitalize;
}

// splitString: should divide a string into substrings and return an array
// Example: "Jane,Doe,21"  =>  [ "Jane", "Doe", "21" ]
function splitString(str, splitAt = `,`) {

  splitString = str.split(splitAt);

  return splitString;
}
module.exports = {
  reverseString,
  capitalize,
  splitString
};