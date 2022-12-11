import React from 'react';

const ButtonCalculate = (props) => {
  return (
    <button className='btn-calc' onClick={props.onClick}>
      {props.label}
    </button>
  );
};

export default ButtonCalculate;
