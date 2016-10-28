/* eslint react/jsx-filename-extension: 'warn' */
/* b03901108 webPro hw5 ver 1.0 */
/* 10/28, 2016, 13:08 */
import React from 'react';
import './countDisplay.css';

const CountDisplay = ({ displayNum }) => (
  <div className="todoLeft">
    <p><span className="todoCount">{displayNum}</span><br />left</p>
  </div>
);
CountDisplay.propTypes = {
  displayNum: React.PropTypes.number,
};

export default CountDisplay;
