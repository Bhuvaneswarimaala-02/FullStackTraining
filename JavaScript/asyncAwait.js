// async

// ex.1
// async function funName() {
//     console.log("Hello")
// }
// fun = async()=>{
//     console.log("KEC")
// }
// funName()
// fun()
// if you use return inside function, use console.log when calling that function
// only "Hello" and "KEC" is printed


// async function funName() {
//     return "Hello"
// }
// fun = async()=>{
//     return "KEC"
// }
// console.log(funName())
// console.log(fun())
// op is: Promise { 'Hello' }     Promise { 'KEC' }
// whenever you are returning a function, a prompt will be added by default


// setTimeout

// async function funName() {
//     setTimeout(()=>{
//         return "Hello"
//     },2000)
// }
// fun = async()=>{
//     return "KEC"
// }
// console.log(funName())
// console.log(fun())
// op: Promise { undefined }   Promise { 'KEC' }
// to remove undefined -- use await


// using await
async function funName() {
    setTimeout(()=>{
        console.log("hello")
    },5000)
    return("HELLO")
}

fun = async()=>{
    setTimeout(()=>{
        console.log("kec")
    },4000)
    console.log(await "KEC")
}

funName().then((a)=>{
    console.log(a)
}) // annonymous function - print without promise
console.log(fun())
// notice return - await and console.log

// Search: Promise { <pending> }
// STUDY PROMISE AND COMEBACK