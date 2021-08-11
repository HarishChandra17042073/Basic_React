import React, { useState } from 'react'

function UseStateBasic() {
    const [day, setDay] = useState("Today is Rainy Day");
    const handleClick = () => {
        if(day=="Today is Rainy Day"){
            setDay("Today is Bright and Sunny Day :) ")}
         

        else{
        
            setDay("Today is Rainy Day")
        }
          
    };

    return (
        <div>
            <>
                <h>{day}</h>
                <button type="button" className="btn" onClick={handleClick}> {/*this is a button and this is how we define it in JSX on Click directs to handleClick function*/}
                    Change my Day
                </button>
            </>
        </div>
    )
}

export default UseStateBasic
