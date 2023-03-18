import React from 'react';
import './Text.css';

export default function Text(props) {
  return (
    <div className="text-container">
      <div className="left-wrapper">
        <h4 className="heading-one">{props.heading}</h4>
      </div>
      <div className="right-wrapper">
        <h5 className="heading-two">{props.headingOne}</h5>
        <p className="text">{props.textOne}</p>
        <h5 className="heading-two">{props.headingTwo}</h5>
        <p className="text">{props.textTwo}</p>
        <h5 className="heading-two">{props.headingThree}</h5>
        <p className="text">{props.textThree}</p>
        <h5 className="heading-two">{props.headingFour}</h5>
        <p className="text">{props.textFour}</p>
        <h5 className="heading-two">{props.headingFive}</h5>
        <p className="text">{props.textFive}</p>
      </div>
    </div>
  );
}
