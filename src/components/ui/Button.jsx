/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export default function Button({ type, disabled, children }) {
  // eslint-disable-next-line react/prop-types
  return <button type={type} disabled={disabled}>{ children }</button>;
}
Button.propTypes = {
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
