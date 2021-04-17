import React, { useState } from 'react'

function Body() {
    const [paragraph, setParagraph] = useState('Hello World')
    const [number, setNumber] = useState(0)

    const buttonHandlerParagraph = () => {
        setParagraph('GoodBye World')
    } 
    const buttonHandlerNumber = () => {
        setNumber(number + 1)
    }

        return (
            <div className='d-flex flex-column'>
                <button onClick={buttonHandlerParagraph}>Click to update paragraph</button>
                {paragraph}
                <button onClick={buttonHandlerNumber}>Click for a new number</button>
                {number}
            </div>
        )
    }

    export default Body;