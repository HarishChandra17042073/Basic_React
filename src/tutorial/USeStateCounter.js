import React, { useState } from 'react'

function USeStateCounter() {
    const [value, setValue] = useState(0);
    const complexIncrease = () => {
        setTimeout(() => {
            setValue(value+1)
        }, 1000)
    }
    return (
        <>
            <section style={{ margin: '4rem 0' }}>
                <h2>A Regular Counter</h2>
                <h1>{value}</h1>
                <button className="btn" onClick={() => setValue(value - 1)}>Decrease</button>
                <button className="btn" onClick={() => setValue(value + 1)}>Increase</button>
                <button className="btn" onClick={() => setValue(0)}>Reset</button>
            </section>
            <section style={{ margin: '4rem 0' }}>
                <h2>A Complex Counter</h2>
                <h1>{value}</h1>
                <button className="btn" onClick={(complexIncrease)}>Increase Later</button>
                </section>
        </>
    )
}

export default USeStateCounter
