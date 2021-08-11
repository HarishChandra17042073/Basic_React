import React from 'react'
import { data } from './data'

function UseStateArray() {
    const [people, setPeople] = React.useState(data) // this is how we can use useState without importing it specifically
    return (
        <>
            {
                people.map((person) => {
                    const {id, name}= person;
                    return(
                        <div key={id} className ='item'>
                            <h4>{name}</h4>
                        </div>
                    )
                }
                )}
                <button className="btn" onClick={()=> setPeople([])}>
                    clear the data
                </button>

        </>
    )
}

export default UseStateArray
