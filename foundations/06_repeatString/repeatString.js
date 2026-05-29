const repeatString = function(str, x) {
    let output = "";
    for(i = 0; i < x; i++){
        output = output.concat(str);
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
