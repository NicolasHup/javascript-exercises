// theres three condition: a year divisible by 4 "is a leap yeah"
                        // 
                        // a yeah divisible by 100 is not a leap year // unless disible by 400


const leapYears = function() {


    if (arguments[0] % 4 === 0 && arguments[0] % 100 === 0 && arguments[0] % 400 === 0){
        return true;
    } 
    if (arguments[0] % 4 === 0 && arguments[0] % 100 === 0) {
        return false;
    } 
    if (arguments[0] % 4 === 0) {
        return true;
    } 
    if (arguments[0] % 400 === 0) {
        return true;
    } 
  
   if (arguments[0] % 100 === 0){
        return false;
    }
     else {
        return false;
    }
};


// Do not edit below this line
module.exports = leapYears;
