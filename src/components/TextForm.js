import React, { useState } from "react";

function TextForm(props) {
    const [text, setText] = useState("");

  const handleUPPClick = () =>{
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLowClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleOnChange = (event) =>{
    setText(event.target.value);
  }

  const handleClear = (event) =>{
    let newtext=""
    setText(newtext);
  }
  return (
    <>
    <div className="container"> 
        <h1>Enter your text To Analyze</h1>
      <div className=" mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBOX" rows="8"></textarea>
    </div>
   <button className='btn btn-primary mx-1 mt-2' onClick={handleUPPClick}>convert to Uppercase</button>

   <button className='btn btn-primary mx-1 mt-2' onClick={handleLowClick}>convert to lowercase</button>

   <button className='btn btn-danger mx-1' onClick={handleClear}> Clear Text </button>
    </div>

    <div className="container my-2">
          <h1>Your text summary</h1>
          <p> {text.split(" ").length}words and {text.length} characters</p>
           <p>{0.008 * text.split(" ").length} mintues read</p>
           <h2>Preview</h2>
           <p>{text}</p>
    </div>
    </>
  )
}
export default TextForm;
