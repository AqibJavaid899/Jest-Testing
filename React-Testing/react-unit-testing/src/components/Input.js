import React, {useState} from 'react'

const Input = ({ conditionalText }) => {

    const [input, setInput] = useState('')

    return (
        <div>
            <h3>Enter your Text</h3><br />
            <input 
                style={{margin: '20px', padding: '5px', width: '600px'}} 
                type='text' data-testid="textBar" 
                onChange={(e) => setInput(e.target.value)} 
            />

            <div>
                <h3 style={{marginBottom: '50px' }} data-testid="userInput">The Text is : {input}</h3>
                {conditionalText && <h2 data-testid='conditional'>Alert: This is the Conditional Text!</h2>}
            </div>

        </div>
    )
}

export default Input
