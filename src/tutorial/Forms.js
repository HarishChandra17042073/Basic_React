import React, {useState} from 'react'
//we want tyo have 2 input fields
//we will have a button
//one of the input field should accept username
//email
//we want to accept the data from user and store it in a variable
//initial state is empty
function Forms() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Hello");
    }
    return (
        <>
            <article>
                <form className='form' onSubmit={handleSubmit}>
                    <div className='form-control'>
                        <lable htmlFor= "FirstName">Name</lable>
                        <input type="text" id='firstName'></input>
                    </div>
                    <div className='form-control'>
                        <lable htmlFor= "Email">Email:</lable>
                        <input type="text" id='Email'></input>
                    </div>
                    <button type= "submit"> Submit</button>
                </form>

            </article>
        </>
    )
}

export default Forms
