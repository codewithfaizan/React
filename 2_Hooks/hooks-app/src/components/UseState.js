import React from "react";

import { useState } from "react";


// --------------------------------------------------------
const UseState = () =>{

    let start = 2
    let [counter , setCounter] = useState(start);
    // console.log(counter);
    
    // updating 
    counter++;
    let increment =() =>{
        setCounter(counter++) }

    let decrement =() =>{
        setCounter(counter--) }

    let reset =() =>{
        setCounter(start)}


    // ------------------------------------------
    // let start1 = 2
    let[multiply, setMultiply] = useState(start);
    let mult = () =>{
    // let result = 
        setMultiply(multiply*2)
    }

    // ------------------------------------------

let value = "Hello"
    let [String, Change] = useState(value);
    let call = () => {
        Change(String)
    }

    // ----------------------------------------------
let [toggle, setToggle] = useState(true)

let toggleswitch =()=> { 
    // (!toggle)
setToggle(!toggle)
     
}

// -------------------------------------------------
// ["apple", "orange","mango", "pineapple"]
let array = ["apple", "orange","mango", "pineapple"]

return(
    <>
        <h1>I am from UseState</h1>

        {/* //   create a dynamic JS counter */}
        {counter} <br/>
        {String}<br/>
        {toggle}<br/>

        <button onClick={increment}>Increment</button>

        <button onClick={decrement}>Decrement</button>

        <button onClick={reset} >Reset</button>

        <button onClick={mult} >Multiply</button>

        <button onClick={call} >call</button>
            
        {toggle?<h1>Bahuth jagah hai</h1>:<h1>Nahi jagah hai</h1>}
        <button onClick={toggleswitch} >Boolean</button>

<br/>
    {/* <p>["apple", "orange","mango", "pineapple"]</p> */}

{/* {} */}
        {/* <button onClick={fruit} >Change</button>     */}

    </>
)
}

export default UseState;