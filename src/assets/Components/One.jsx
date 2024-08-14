import React, { useState } from 'react'

function One() {
    const [count, setCount] = useState(0);
    function incriment() {
        setCount(prevCount => prevCount + 1);
    }
    function decrement() {
        setCount(prevCount => prevCount - 1);
    }
    return (
        <div>
            <h1>Project 1</h1>
            <button onClick={incriment}>+</button>
            <span>{count}</span>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default One
