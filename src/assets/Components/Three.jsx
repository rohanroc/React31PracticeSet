import React, { useState } from 'react'

function Three() {
    const [isToggle, setIsToggle] = useState(false);
    return (
        <div>
            <h1>Project 3</h1>
            <input type="checkbox" onChange={() => setIsToggle(!isToggle)} />
            <p>{isToggle ? "On" : "Off"}</p>
        </div>
    )
}

export default Three
