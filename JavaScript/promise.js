// location finder

// example 1

// function locationFinder(){
//     train = 8
//     return new Promise((resolve, reject)=>{
//         if(train==8){
//             resolve("Train has arrived")
//         }
//         else{
//             reject("Train hasn't arrived yet")
//         }
//     })
// }

// locationFinder().then((resolvedMsg)=>{
//     console.log(resolvedMsg);
// }).catch(function(rejectedMsg){
//     console.log(rejectedMsg)
// })
// //console.log(locationFinder())




// example 2

function isTimeConsumption(t){
    time = 999
    return time<=t;
}

function isValidLocation(loc){
    location = "Ooty"
    return loc == location;
}

function locationFinder(){
    loc = "Ooty"
    time=1000
    return new Promise((locFound, locNotFound)=>{
        setTimeout(()=>{
            if(isValidLocation(loc) && isTimeConsumption(time)){
                            locFound("Location found")
                        }
                        else{
                            locNotFound("Location not found")
                        }
        })
    })
}

locationFinder().then((resolvedMsg)=>{
    console.log(resolvedMsg);
}).catch(function(rejectedMsg){
    console.log(rejectedMsg)
})