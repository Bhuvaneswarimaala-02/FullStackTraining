// import { useEffect, useState } from "react";


// var UseEffect=()=>{
//     var [text, setText] = useState("Kongu"); //in case we use string inside usestate function
//     useEffect(()=>{
//         setText("KEC")
//     },[]) //Initial state "KEC", try passing [text]
//     return(
//         <section>
//             <h1>Use Effect Example</h1>
//             <input type="text" placeholder="Enter your text" value={text} onChange={(e)=>{setText(e.target.value)}}/>
//             <h2>Text typed is {text}</h2>
//         </section>
//     )
// }
// export default UseEffect;

import { useEffect, useState} from "react";
import axios from 'axios';

var UseEffect=()=>{
    var [post, setPost] = useState([]); 
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then((res)=>{console.log(res)
            setPost(res.data)
        })
        .catch((err)=>{console.log(err);
        })
    },[]); 
    return(
        <section>
            <h1>Fetching data from Json Placeholder API</h1>
            <h2>Posts are </h2>
            <ol>
                {post.map((element)=>(<li key={element.id}>{element.title}</li>))}
            </ol>
        </section>
    );
};
export default UseEffect;