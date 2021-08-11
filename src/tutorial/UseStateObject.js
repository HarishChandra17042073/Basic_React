import React, {useState} from 'react'

function UseStateObject() {
    const [person,setPerson] = useState({
     name: "StarLord",
     age: 50,
     message: "I am God",
    });
    const changeMessage = () =>{
        setPerson({...person, message:"Not Anymore"})
    }
    return (
        <div>
            <>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h3>{person.message}</h3>
            <button className="btn" onClick={changeMessage}>
                Change my message
            </button>
            </>
        </div>
    )
} // this will only change the "message" instead of all fields 

export default UseStateObject
