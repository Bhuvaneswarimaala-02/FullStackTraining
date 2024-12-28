array = [10, 20, 30, [40.5, 50.5], "a", "KEC", true]
console.log(array);

// for...in loop --> index
// for(var a in array)
// {
//     console.log(a)
//     console.log("Element present in index",a,"is",array[a])
// }

// for...of loop --> value
for(var b of array)
{
    console.log(b)
}