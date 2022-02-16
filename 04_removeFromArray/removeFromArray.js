const removeFromArray = function(theArray) {
   
    for (i = 1; i <= arguments.length -1; i++){
        let indexToRemove = theArray.indexOf(arguments[i]);
        if (indexToRemove > - 1) {
            theArray.splice(indexToRemove, 1);
        }
    }
    return theArray;
};

// Do not edit below this line
module.exports = removeFromArray;
