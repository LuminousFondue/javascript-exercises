const removeFromArray = function (arr, argsIn) {
    let args = Array.from(arguments);
    for (let i = 1; i < args.length; i++) {
        let valToRemove = args[i];
        arr = arr.filter((val) => (val != valToRemove) || (typeof valToRemove != typeof val));
    }
    return arr
};

let array = [1, 2, 3, 4]
console.log(array);

console.log(removeFromArray(array, "1", 2));

// Do not edit below this line
module.exports = removeFromArray;
