import React from "react";
import useState from 'react'

let InputFrom = ()=> {
    const [state, setState] = useState("put")
    
    let onChange = (event) =>{
        const newValue = event.target.value;
       setState(state)
    }

return(
    <>
    <input type = "tesxtbox" placeholder="type something" onChange = {onChange}>Abc</input>
    {state}
    </> 
    );
};

export default InputFrom;


