const ftoc = function() {
  let calc = (arguments[0]-32)* 5/9;
  let rounded = Math.round(calc * 10) / 10; // round to one decimal place
  return rounded;
};

const ctof = function() {
  let calc = (arguments[0])* 9/5 + 32;
  let rounded = Math.round(calc * 10) / 10; // round to one decimal place
  return rounded; 
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
