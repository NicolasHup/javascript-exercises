const reverseString = function(normalstring) {
  let reversedString = "";
  let holder = normalstring.split("");
  for (let i = holder.length - 1; i >= 0; i--){
    reversedString += holder[i];
  }
  return reversedString;
};

reverseString('hello there');

// Do not edit below this line
module.exports = reverseString;
