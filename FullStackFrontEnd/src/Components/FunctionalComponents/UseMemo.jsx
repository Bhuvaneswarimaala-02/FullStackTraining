import { useState, useMemo } from "react"

// slow function
var slowFunction=(number)=>{
    for (let i=0; i<10000000000; i++)
    {
        return number*2
    }
}

// Theme toggling
var UseMemo=()=>{
    var [num, setNum] = useState(0);
    var [theme, updateTheme] = useState(true);
    var darkLight={
        backgroundColor: (theme)?"black":"white",
        color :(theme)?"white":"black",
    };

    var doublingNumber=useMemo(()=>{
        return slowFunction(num)
    },[num])

    return(
        <section>
            <h2>This is UseMemo Example</h2>
            <input type="number"  value={num} onChange={(e)=>setNum(e.target.value)}/>
            <button onClick={()=>updateTheme(theme =! theme)}>Toggle Theme</button>
            <h2 style={darkLight}>{doublingNumber}</h2>
        </section>
    );
};

export default UseMemo;