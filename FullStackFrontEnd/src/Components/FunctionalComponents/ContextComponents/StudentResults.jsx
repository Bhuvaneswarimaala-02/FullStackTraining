import { useContext } from "react";
import { ThemeProvider } from "../UseContext";


var StudentResult=()=>{
    var result = useContext(ThemeProvider);
    return(
        <section>
            <h3>Your SGPA Result is: {result.sgpa} and CGPA Result is: {result.cgpa}</h3>
        </section>
    )
}
export default StudentResult;