// array = [10, 20, 30, [40.5, 50.5], "a", "KEC", true]
// console.log(array);

// for...in loop --> index
// for(var a in array)
// {
//     console.log(a)
//     console.log("Element present in index",a,"is",array[a])
// }

// for...of loop --> value
// for(var b of array)
// {
//     console.log(b)
// }

// for each loop  -- index need not be initialized or incremented
// array.forEach((element, index)=>{
//     console.log("Element is",element,"it's index is", index)
// })

// even if you interchange the order of index and element, element is the one that get's passed first
// forEach(element, index)

// for each example 2
objType1 = {
    "firstname": "Jai",
    "lastname": "kumar",
    "age": 20
}
// objType1.forEach((value)=>{
//     console.log(value);
// }) ----? ERROR

// for(const {key,value} of objType1)
// {
//     console.log(key,value);
// } // error: not iterable


// printing objects using for each loop
Object.keys(objType1).forEach(function(key) {

    console.log(key, objType1[key]);
  
  });