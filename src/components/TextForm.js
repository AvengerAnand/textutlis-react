import React, { useState } from 'react';
import PropTypes from 'prop-types'


export default function TextForm(props) {
     // Declare a new state variable, which we'll call "count"

     const handleClick = () =>{
      // console.log('UpperCase Was Clicked'+ text);
      let newText = text.toUpperCase();
      setText(newText);
     }

    const handleOnChange = (event) => {
      // console.log('OnChange Was Clicked');
      setText(event.target.value);

    }

  const [text, setText] = useState();

  return (
    <div>
    <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea onChange={handleOnChange} className="form-control" placeholder='Enter your Text Here to Conver to Uppercase' value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
    </div>
    <button onClick={handleClick} className='btn btn-primary'>Convert to UPPERCASE</button>
    </div>
  )
}

TextForm.protoTypes = {
    heading: PropTypes.string.isRequired,
}
