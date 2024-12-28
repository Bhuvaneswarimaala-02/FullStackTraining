// calling the submitForm function at the begining is called Functional hoisting ig

// Ex. 1
// databaseSharing=()=>{
//     console.log("Data Stored Successfully");
// }

// function submitForm(formMsg, dbs){ //function passed as argument
//     setTimeout(()=>{
//     dbs()
//     console.log(formMsg)
//     },1000)
// }
// submitForm("Form Submitted Successfully", databaseSharing) 


// Ex. 2
// Function that takes a number and a callback function
function processNumber(number, callback) {
    console.log(`Processing the number: ${number}`);
    callback(number);
}

// Callback function to double the number
function doubleNumber(num) {
    console.log(`The double of ${num} is ${num * 2}`);
}

// Calling the function with a number and the callback
processNumber(5, doubleNumber);
