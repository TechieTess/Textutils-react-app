import React, { useState } from 'react'

export default function Textform(props){
    const handleUpclick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","success")
    }
    const handleLoclick = () => {
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!","success")
    }
    const handleClearclick = () => {
        console.log("Lowercase was clicked" + text);
        let newText = '';
        setText(newText)
        props.showAlert("Text cleared!","success")
    }
    const handleOnChange = (event) => {
        console.log("OnChange");
        setText(event.target.value);
    }
    const handleCopy = () => {
        console.log("I am copy");
        var text =document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!","success")
    }
    const handleExtraSpaces =() => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(""))
        props.showAlert("Removed Extra Spaces!","success")
    }
    const[text, setText] = useState('Enter text here2');
    // text = "new text";wrong way to change the state
    // setText("new text/"); //correct way to set the text.
    return(
        <>
        <div className="container" style={{color : props.mode === 'dark' ? 'white' :'#042743'}}>
           <h1>{props.heading}</h1>
           <div className="mb-3">
           <textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark' ? 'grey' :'white',color:props.mode ==='dark'?'white':'#042743'}}id="myBox" rows="8"></textarea>
           </div>
           <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to uppercase</button>
           <button className="btn btn-primary mx-2" onClick={handleLoclick}>Convert to lowercase</button>
           <button className="btn btn-primary mx-2" onClick={handleClearclick}>Clear Text</button>
           <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
           <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
           </div>
           <div className="container my-3"  style={{color : props.mode === 'dark' ? 'white' :'#042743'}}>
            <h1>Your text summary</h1>
            <p>{text.split("").length} words and {text.length} character</p>
            <p>{0.008 * text.split("").length}Minutes read </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
           </div>
        </>
    )
}