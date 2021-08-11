import React, {useState} from 'react'
//we want tyo have 2 input fields
//we will have a button
//one of the input field should accept username
//email
//we want to accept the data from user and store it in a variable
//initial state is empty
function Forms() {
    const [firstName,setFirstName]= useState(" ");
    const[email, setEmail]= useState(" ");
     
    const handleSubmit = (e) => {
        e.preventDefault(); // this is to prevent the default nature of browser
        console.log("Hello");
    }
    return (
        <>
            <article>
                <form className='form' onSubmit={handleSubmit}>
                    <div className='form-control'>
                        <lable htmlFor= "firstName">Name</lable>
                        <input type="text" id="firstName" name='firstname' value={firstName} onChange={(e)=> setFirstName(e.target.value)}></input>
                    </div>
                    <div className='form-control'>
                        <lable htmlFor= "email">Email:</lable>
                        <input type="text" id='email' value={email} onChange={(e)=>  setEmail(e.target.value)}></input>
                    </div>
                    <button type= "submit"> Submit</button>
                </form>

            </article>
        </>
    )
}

export default Forms
