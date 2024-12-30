import React from "react";
class ClassCompEg extends React.Component{
    render(){
        return(<div>
            <h1>This is Class Component Example</h1>
        </div>
        );
    }
}
export default ClassCompEg;

// why use 'default' keyword?

// The advantage of using default in such scenarios is that other files can name if whatever they want 
// and don't need to explicitly import it with the same name as exported and without using curly braces

// to import exactly whatever im exporting