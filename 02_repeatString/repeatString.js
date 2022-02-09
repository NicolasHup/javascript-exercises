const repeatString = function(string, times) {
    var repeatedString = "";
    if (times < 0){
        return 'ERROR';
    }
    while (times > 0) {
        repeatedString = repeatedString + string;
        times--;
    }
    
    return repeatedString;
};

repeatString('hey',10);

// Do not edit below this line
module.exports = repeatString;
