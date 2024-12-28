// rest operator is used to compress parameters

function average(...args) {
    console.log(args);
    var avg =
        args.reduce(function (a, b) {
            return a + b;
       }, 0) / args.length;
    return avg;
}
console.log("average of numbers is : "
    + average(1, 2, 3, 4, 5));
console.log("average of numbers is : "
    + average(1, 2, 3));