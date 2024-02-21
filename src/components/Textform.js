import React, {useState} from 'react'

export default function Textform(props) {

    const handleOnChange = (event)=>{
        // console.log("on Change");
        setText(event.target.value);
    }

    const handleOnUpperClick = ()=>{
        // console.log("on upper click"+text)
        let upperText = text.toUpperCase();
        setText(upperText);
        props.showAlert("Converted to Upper Case", "success")
    }

    const handleOnLowerClick = ()=>{
        // console.log("on lower click"+text)
        let lowerText = text.toLowerCase();
        setText(lowerText);
        props.showAlert("Converted to Lower Case", "success")
    }

    const handleOnTitleClick = ()=>{
        // console.log("on lower click"+text)
        let titleCase = text.replace(
            /\w\S*/g,
            function(txt) {
              return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
          );
        
        setText(titleCase);
        props.showAlert("Converted to Title Case", "success")
    }

    const handleOnClearClick = ()=>{

        setText('');
        props.showAlert("Text Cleared", "success")
    }

    const [text, setText] = useState("Enter Text Here");
    return (
        <>
        <div className="container" style={{color:props.mode === 'light'?'black':'white'}}>
            <div className="container my-3">
                <div className="mb-3">
                    <h2>{props.heading}</h2>
                    <textarea value={text} style={{backgroundColor:props.mode === 'light'?'white':'#172150',color:props.mode === 'light'?'black':'white'}} className="form-control" onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleOnUpperClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleOnLowerClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleOnTitleClick}>Title Case</button>
                <button className="btn btn-primary mx-1" onClick={handleOnClearClick}>Clear Case</button>
            </div>
        </div>
        <div className="container" style={{color:props.mode === 'light'?'black':'white'}}>
            <h2>Your text Summary:</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{.008*text.split(" ").length} Minutes Read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}
