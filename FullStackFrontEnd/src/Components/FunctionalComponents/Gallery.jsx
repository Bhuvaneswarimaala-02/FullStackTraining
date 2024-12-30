// const Gallery=()=>{
//     var counter = 10;
//     return (
//     <section>
//         <h1>Thi is my Gallery Page</h1>
//         <h2 style={{textAlign:"center"}}>Learning State</h2>
//         <h3>The state of my variable counter is {counter}</h3>
//     </section>
//     );
// };
// export default Gallery;
// The above is for constant state 


// Changable state
import {useState} from 'react';
const Gallery=()=>{
    var [counter, setCount] = useState(0);
    function increment(){
        setCount(counter+1)
    }
    return (
    <section>
        <h1>Thi is my Gallery Page</h1>
        <h2 style={{textAlign:"center"}}>Learning State</h2>
        <h3>The state of my variable counter is {counter}</h3>
        <button onClick={increment}>Increment</button>
        {/* <button onClick={()=>{setCount(counter+1)}}>Increment, Decrement, Reset</button> */} 
        {/* onDoubleClick, onMouseOver, onChange */}
    </section>
    );
};
export default Gallery;