// 1. variable

// var, let, const


// 2. Arrow Functions

// function arrowFun()=>{    ---> can also be used}

// arrowFun=(studentDept)=>{
//     console.log (studentDept);
// }
// arrowFun(["AIML","CSE","IT"]);

// const arrowFun = (studentDept) => {
//     console.log(studentDept);
// };
// arrowFun(["AIML", "CSE", "IT"]);

// arrowFun=()=>{
//     console.log("Hello KEC")
// }
// arrowFun()


// 3. Destructuring Operator   ---> Ex: Accessing each element of the array individualy

// var  marks = [90, 95, 93]
// var[m1, m2] = marks
// console.log(m1, m2);


// 4. Ternary Operator

// a = 10
// out = (a%2 == 0)? "Even":"Odd"
// console.log(a,"is",out)


// 5. Spread Operator

// studentList = ["baba", "mama", "mimi", "nini", "nana", "kiki", "jiji"]
// // newStudent = ["GAMA", "BETA", "ALPHA",...studentList]
// newStudent = ["GAMA", "BETA", "ALPHA"]
// combinedStudentList=[...studentList, ...newStudent]
// console.log(combinedStudentList)


// 6. Rest operator

// function restop(...arr1){
//     console.log(arr1)
// }
// console.log(restop(['a', 'b', 'c']))


// 7. Scope

// const pi = 3.14
// var a=5
// console.log(pi)
// console.log(a)
// {
//     a = 10
//     let b = 10
//     console.log(a)
//     console.log(b)
// }
// console.log(a)
// var,const - global scope and let - local scope


// 8. Hoisting

// console.log(a)
// var a = 10
// console.log(10)  // o/p: undefined    10

// console.log(a)
// const a = 3.14
// console.log(a)  // o/p: Reference error

// console.log(a)
// let a = 10
// console.log(a)   // o/p: Refernce error