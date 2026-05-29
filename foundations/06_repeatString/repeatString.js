const repeatString = function (str, x) {
    if (x < 0) { return "ERROR"; }
    let output = "";
    for (i = 0; i < x; i++) {
        output = output.concat(str);
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
