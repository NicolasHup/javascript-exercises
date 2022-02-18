const sumAll = function(a, b) {
    let sum = 0;
    let smallest = a;
    let biggest = b;

    if (typeof arguments[0] != 'number'){ // checks if the passed argument is a num
        return 'ERROR';
    }
    if (typeof arguments[1] != 'number'){ // checks if the passed argument is a num
        return 'ERROR';
    }
    if (arguments[0] < 0){ // checks if the passed argument is not < 0
        return 'ERROR';
    }
    if (arguments[1] < 0){ // checks if the passed argument is not < 0
        return 'ERROR';
    }
    if (arguments[0] > arguments[1]){ //determines which argument is bigger
        biggest = arguments[0];
        smallest = arguments[1];
    }else{
        smallest = arguments[0];
        biggest = arguments[1];
    }

    for (let i = smallest; i <= biggest; i ++){
        sum += i;

    }

     return sum;

};

// Do not edit below this line
module.exports = sumAll;
