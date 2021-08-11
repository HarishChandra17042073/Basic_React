import React from 'react'
import { data } from './data'

function UseStateArray() {
    const [people, setPeople] = React.useState(data) // this is how we can use useState without importing it specifically
    const removeItem= (id) => {
        let newPeople= people.filter((person) => person.id !== id);
        setPeople(newPeople);
    }
   return (
        <>
            {
                people.map((person) => {
                    const {id, name}= person;
                    return(
                        <div key={id} className ='item'> {/*className adds CSS class for styling named 'item' here */}
                            <h4>{name}</h4>
                            <button onClick={() => removeItem(id)}>
                                remove
                            </button>
                        </div>
                    )
                }
                )}
                <button className="btn" onClick={()=> setPeople([])}> {/*Passing empty array to clear the data in people */}
                    clear the data
                </button>

        </>
    )
}

export default UseStateArray
