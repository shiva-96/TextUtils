import React,{useState} from 'react'

export default function TextForm(props) {

    
    function converTextUpper(e){
        setText(text.toUpperCase());
        props.alert("Text is converted to upper case.", "success")
    }
    
    const handleChangeText = (event)=>{
        setText(event.target.value);
    } 

    function converTextlower(params) {
        setText(text.toLowerCase());
        props.alert("Text is converted to lower case.", "success")
    }
    
    const [text,setText] = useState("Enter your text here ...");

    function clearText() {
        setText("");
    }

    function copyText() {
        let selText = document.getElementById("myText");
        selText.select()
        navigator.clipboard.writeText(text)
        console.log(selText);

    }
    let handleExtraSpaces =()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }
    return (
        <div className='container my-3' style={{color:props.mode==="dark"?"white":"black"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleChangeText} id="myText" rows="8"></textarea>
            </div>
            <div className="btn btn-primary" onClick={converTextUpper}>Convert to uppercase</div>
            <div className="btn btn-primary mx-2" onClick={converTextlower}>Convert to lowercase</div>
            <div className="btn btn-primary mx-2" onClick={clearText}>Clear</div>
            <div className="btn btn-primary mx-2" onClick={copyText}>Copy Text</div>
            <div className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Spaces</div>
            <div className="my-3">
                <h1>Your text summary</h1>
                <p>{text.split(' ').includes("")?(text.split(' ').length)-1:text.split(' ').length} Words, {text.length} characters.</p>
            </div>
            <h2>Preview Your text</h2>
            <p>{text.length>0?text:"Please enter some note to preview it here !"}</p>
        </div>
    )
}
