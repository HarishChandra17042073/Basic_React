import React, {useState} from 'react'

function UseStateObject() {
    const [person,setPerson] = useState({
     name: "StarLord",
     age: 50,
     message: "I am God",
    });
    const changeMessage = () =>{
        setPerson({...person, message:"Not Anymore"});
        setMessage("Hello");
    }
    const [name,setName]= useState("Harish")
    const [age, setAge]= useState("21")
    const [message, setMessage]= useState("I am a Student")
    return (
        <div>
            <>
            <h3>{name}</h3>
            <h3>{age}</h3>
            <h3>{message}</h3>
            <button className="btn" onClick={changeMessage}>
                Change my message
            </button>
            </>
        </div>
    )
} // this will only change the "message" instead of all fields 

export default UseStateObject
