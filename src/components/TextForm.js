import React, { useState } from 'react';
import PropTypes from 'prop-types'


export default function TextForm(props) {

     // Declare a new state variable, which we'll call "count"
     const UpperCase = () =>{
      // console.log('UpperCase Was Clicked'+ text);
      let newText = text.toUpperCase();
      setText(newText);
     }

    //  Convert  to Lower Case
    const LowerCase = () =>{
      // console.log('UpperCase Was Clicked'+ text);
      let newText = text.toLowerCase();
      setText(newText);
     }

    const handleOnChange = (event) => {
      // console.log('OnChange Was Clicked');
      setText(event.target.value);

    }

  const [text, setText] = useState();

  return (
    <>
    <div className='conatiner'>
    <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea onChange={handleOnChange} className="form-control" placeholder='Enter your Text Here to Conver to Uppercase' value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
    </div>
    <button onClick={UpperCase} className='btn btn-primary'>Convert to UPPERCASE</button>
    <button onClick={LowerCase} className='btn btn-primary mx-2'>Convert to LowerCase</button>
   
    </div>

    <div className='conatiner my-3'>
      <h1 className='text-center'>Your Text Summery</h1>
      <p className='text-center'>
        {text.split(" ").length}  Words, {text.length} Characters
       </p>
       <h1>Priview</h1>
       <p>{text}</p>
    </div>
    
    </>
  )
}

TextForm.protoTypes = {
    heading: PropTypes.string.isRequired,
}



