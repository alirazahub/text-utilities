import React, { useState } from 'react'

export default function FormComponents(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClear = () => {
        let newText = "";
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleCopy = () => {
        let copyText = document.getElementById("myBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
    }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const [text, setText] = useState('Enter Text Here');
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className='form-control' id="myBox" rows="8" value={text} style={{ backgroundColor: props.mode === 'dark' ? '	#989898' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleOnChange}></textarea>
                    <p>{text.length === 0 ? 0 : text.trim().split(/\n| /).length} Total Words and {text.length} Total Characters</p>
                    <button className="btn btn-outline-danger my-2 mx-2" onClick={handleUpClick}>Convert to UPPER-CASE</button>
                    <button className="btn btn-outline-danger my-2 mx-2" onClick={handleLoClick}>Convert to Lower-Case</button>
                    <button className="btn btn-outline-danger my-2 mx-2" onClick={handleClear}>Clear</button>
                    <button className="btn btn-outline-danger my-2 mx-2" onClick={handleCopy}>Copy text</button>
                    <button className="btn btn-outline-danger my-2 mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>

                </div>
            </div>
            <div className="container">
            </div>
        </>
    )
}