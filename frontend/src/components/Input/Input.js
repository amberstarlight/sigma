import React from 'react';
import './Input.css';

function Input(props) {
  return (
    <>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        {...props}
      ></input>
    </>
  )
};

export default Input;