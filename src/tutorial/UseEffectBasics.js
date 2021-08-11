import React, {useState, useEffect} from 'react'

function UseEffectBasics() {
    const [value,setValue] = useState(0);
    // useEffect((value>1)); we cannot pass the condition through useEffect somehow we can use  if else statement inside the useEffect
    useEffect(()=>{
        console.log("call useEffect")
        if(value>=1){
            document.title= `New Messages(${value}")`
        }
        
    },[value]);
    console.log("Render Component")
    return (
        <>
         <h2>{value}</h2>
         <button className="btn" onClick={()=> setValue(value+1)}>
             click me
         </button>
            
        </>
    )
}

export default UseEffectBasics
