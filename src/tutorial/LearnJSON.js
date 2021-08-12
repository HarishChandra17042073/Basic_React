import React from 'react'
import axios from 'axios'

function LearnJSON() {
    const handleClick = (b) => {
        const promise = axios.post("http://localhost:4000/users", { //setting the port code 
            name: "Harry"
        }, { headers: { ['content-type']: 'application/json' 
        }}
        )

        promise.then(response=> {
            console.log(response)
        })
        promise.catch(error=> {
            console.error(error);
        })
        let c = b;
        console.log(c);
    }
    const getUsers = () => {
        axios.get("http://localhost:4000/users").then(users => {
            {/* we are getting the data from our json server then storing it in users and then consoling the array of objects */ }
            console.log(users);
        })
    }
    return (
        <>
            <h2>Random Title</h2>
            <button type="button" className='btn' onClick={handleClick}>Send user</button>
            <button type="button" className='btn' onClick={getUsers}>Get Users</button> 
        </>
    )
}

export default LearnJSON
