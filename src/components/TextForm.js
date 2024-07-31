import React, {useState}  from 'react'

export default function TextForm(props) {
    const handelUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to uppercase","success");
    }
    const handelLowClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to lowercase","success");
    }
    const handelCopy = ()=> {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Has been Coped","success");
    }
    const handelSpaces = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space has been removed form text","success");
    }
    const handelOnChange = (event)=> {
        setText(event.target.value);
    }
    const [text,setText] = useState("");
  return (
    <>
        <div className="container" style={{color: props.mode=== "dark"?"white":"black"}} >
        <div className="mb-3 container">

            <h1 className='my-3'>Enter the Text below to analize</h1>
            <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor: props.mode=== "light"?"white":"#371f60", color: props.mode=== "dark"?"white":"black"}} id="exampleFormControlTextarea1" rows="8"></textarea>
            <button disabled={text.length===0} className="btn btn-primary  my-2" onClick={handelLowClick}>click to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handelCopy}>Copy text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handelUpClick}>click to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handelSpaces}>Remover Extra Spaces</button>
        </div>
        <div className="container">
            <h1>Your Text Summary</h1>
            <h4>Words: {text.split(/\s+/).filter((element)=> {return element.length!==0}).length} Charcter:{text.length}</h4>
            <h4>{0.008*60 * text.split(" ").filter((element)=> {return element.length!==0}).length} sec take to read that you write</h4>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter text in the above textarea to see the preview of Your text"}</p>
        </div>
        </div>
    </>
  )
}
