import React from 'react';
import PropTypes from 'prop-types';
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
  );
}

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string
};

export default Input;