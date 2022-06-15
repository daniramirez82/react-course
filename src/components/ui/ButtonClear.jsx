/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import './ButtonClear.css';

export default function ButtonClear({ type, disabled, children }) {
  // eslint-disable-next-line react/prop-types
  return <button className="button-clear" type={type} disabled={disabled}>{ children }</button>;
}
ButtonClear.propTypes = {
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
