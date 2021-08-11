import React, { useState } from 'react'
//we want tyo have 2 input fields
//we will have a button
//one of the input field should accept username
//email
//we want to accept the data from user and store it in a variable
//initial state is empty
function Forms() {
    const [firstName, setFirstName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [people, setPeople] = useState("[]");

    const handleSubmit = (e) => {
        e.preventDefault(); // this is to prevent the default nature of browser

        if (firstName && email) {
            console.log("Submit the Value");
           
            const person = { id:new Date().getTime().toString(),firstName, email };
            console.log(person);
            setPeople((people) => {
                return [...people, person]

            });
            setFirstName('');
            setEmail('');

        }
        else {
            console.log('Empty Value');
        }
    }
    return (
        <>
            <article>
                <form className='form' onSubmit={handleSubmit}>
                    <div className='form-control'>
                        <lable htmlFor="firstName">Name :</lable>
                        <input type="text" id="firstName" name='firstname' value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
                    </div>
                    <div className='form-control'>
                        <lable htmlFor="email">Email:</lable>
                        <input type="text" id='email' value={email} onChange={(e) => setEmail(e.target.value)} ></input>
                    </div>
                    <button type="submit"> Submit</button>
                </form>
                { people.map((person, index) => {
                    const { id, firstName, email } = person;
                    return (
                        <div className="item" key={id}>
                            <h4>{firstName}</h4>
                            <p>{email}</p>
                        </div>
                    );


                })}

            </article>
        </>
    )
}

export default Forms
