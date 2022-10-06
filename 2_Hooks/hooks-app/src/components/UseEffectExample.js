{ /* https://jsonplaceholder.typeicode.com/comments */ }


import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

let UseEffectExample = ()=>{

    const[data, setData] = useState("");

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typeicode.com/comments ")
            .then((response)=>{
                setData(response.data[0].email);
                console.log("API CAll")
            })
    })

    return(
        <>
        <div>
            <h1>
              Hello World
            </h1>
        </div>
        </>
    )
}



export default UseEffectExample;