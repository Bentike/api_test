import React from 'react';
import './button.css';

function Button({text, bg, handleClick}) {
  return (
     <button 
      className='btn'
      onClick={handleClick} 
      style={{background: `${bg}`}}>{text}</button>
  )
}

export default Button;