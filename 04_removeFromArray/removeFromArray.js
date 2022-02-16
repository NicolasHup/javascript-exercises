const removeFromArray = function(theArray) {
   
    for (i = 1; i <= arguments.length -1; i++){// to loop through additional arguments
        let indexToRemove = theArray.indexOf(arguments[i]);
        if (indexToRemove > - 1) {// to check if the index num is positive
            theArray.splice(indexToRemove, 1);
        }
    }
    return theArray;
};

// Do not edit below this line
module.exports = removeFromArray;
