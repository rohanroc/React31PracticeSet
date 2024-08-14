import React, { useState } from 'react'

const Two = () => {
    const [input, setInput] = useState('start writing to detect');
    return (
        <div>
            <h1>Project 2</h1>
            <input type="text" placeholder='write here' onChange={(e) => setInput(e.target.value)} />
            <p>Your input is: {input}</p>
        </div>
    )
}

export default Two
