import React, { useState, useEffect, useRef } from "react"
import './Calculator.css'


function App({ setMessage, sendMessage, message }) {
    // const [result, setResult] = useState("")
    //const [calculations, setCalculations] = useState([]);
    const inputRef = useRef(null)

    useEffect(() => inputRef.current.focus())
    function handleClick(e) {
        setMessage(message.concat(e.target.name))

    }
    function backspace() {
        setMessage(message.slice(0, message.length - 1))

    }
    function clear() {
        setMessage("")
    }
    function calculate() {
        try {
            let res = message + "=" + eval(message).toString()
            //console.log(res)
            //setMessage(eval(message).toString())
            setMessage(res) // tostring will also show the error
        }
        catch (error) {
            setMessage("Error")
        }
    }
    return (
        <div className="calc-app">
            <div classname="heading">
                {/* <h1>Calculator</h1> */}
            </div>
            <form type="text">
                {/* <input type="text" value={result} ref={inputRef} /> */}
                <input
                    className="input"
                    type="text"
                    ref={inputRef}
                    placeholder="Enter Calculation here"
                    value={message}
                    onChange={({ target: { value } }) => setMessage(value)}
                    onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
                />
            </form>
            <div className="keypad">
                <button id="clear" on onClick={clear}>Reset</button>
                <button id="backspace" onClick={backspace}>C</button>
                <button name="+" onClick={handleClick}>+</button>
                <button name="-" onClick={handleClick}>-</button>
                <button name="1" onClick={handleClick}>1</button>
                <button name="2" onClick={handleClick}>2</button>
                <button name="3" onClick={handleClick}>3</button>
                <button name="*" onClick={handleClick}>*</button>
                <button name="4" onClick={handleClick}>4</button>
                <button name="5" onClick={handleClick}>5</button>
                <button name="6" onClick={handleClick}>6</button>
                <button name="/" onClick={handleClick}>/</button>
                <button name="7" onClick={handleClick}>7</button>
                <button name="8" onClick={handleClick}>8</button>
                <button name="9" onClick={handleClick}>9</button>
                <button name="." onClick={handleClick}>.</button>
                <button name="0" onClick={handleClick}>0</button>
                <button id="result" onClick={calculate}>Result</button>
            </div>


        </div>
    )
}

export default App;