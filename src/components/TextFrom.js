import React, { useState } from "react";



export default function TextFrom(props) {
  const handleUpClick = () => {
    // console.log("handel was clicked");
    let newText = text.toUpperCase();
    setText(newText); //this is convert toUppercase
    // setText("you have clicked handleUpClick");
    props.showAlert("text convert to upperCase","success")
  }

  const lowerCase = () => {
    let lower = text.toLowerCase();
    setText(lower)
    props.showAlert("text convert to lowerCase","success")
  }

  const clearText = () => {
    let clear = " ";  // this function is use to clear the text from the input
    setText(clear);
    props.showAlert("your text has been clear","success")
  }

  const handelCopy = () => {
    let text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value);  // copy the text
    document.getSelection().removeAllRanges();  // remove the copy from copy text
    props.showAlert("your text has been copied","success")
  }



  const handleOnChange = (event) => {
    // console.log("on change")
    setText(event.target.value) // use this to write text in textarea
  }





  const [text, setText] = useState("Enter your text");
  // text = "enter your text2"; //wrong way to change the state
  // setText("enter your text 2") // correct way to change the state
  return (
    <>
      <div className="container" style={{color: props.mode=== "light" ? "black" : "white"}}>

        <div className="mb-3">
          <h1> {props.heading}</h1>
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== "light" ? "white" : "black",color: props.mode=== "light" ? "black" : "white"}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary ms-1" onClick={handleUpClick}>Convert To Uppercase</button>
        <button disabled={text.length===0} className="btn btn-secondary ms-1 my-1" onClick={lowerCase}>Convert To Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary ms-1 my-1" onClick={clearText}>Clear</button>
        <button disabled={text.length===0} className="btn btn-primary ms-1 my-1" onClick={handelCopy}>Copy Text</button>
      </div>

      <div className="container" style={{color: props.mode=== "light" ? "black" : "white"}}>
        <h2>Your Text Summery</h2>
        <p>{text.split(" ").filter((element)=>{return element=element.length!==0}).length} words and {text.length} charecters</p>
        <p>{0.08 * text.split(" ").filter((element)=>{return element=element.length!==0}).length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text:"Nothing to Preview"}</p>
      </div>
    </>
  );
}
