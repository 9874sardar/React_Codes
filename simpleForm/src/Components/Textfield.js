import React,{useState} from 'react'

export default function Textfield(props) {
    const handleUpClick = ()=>{
            console.log("upper case clicked");
            let tex = text.toUpperCase();
            settext(tex);
    }

    const handleLoClick = ()=>{
        console.log("upper case clicked");
        let tex = text.toLowerCase();
        settext(tex);
}

   /* const handleRegisClick = () =>{
        <Link to="<Form></Form>"/>
    }*/

    const handleOnChange = (event) =>{
        console.log("handle on change");
        settext(event.target.value);
    }

    

    const [text, settext] = useState('Enter a text ... AFTER deleting me ...');


    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                 <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="8">

                 </textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Covert to UpperCase</button>
            <button className="btn btn-primary" onClick={handleLoClick}>Covert to LowerCase</button>
        </div>
    )
}
