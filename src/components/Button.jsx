/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export default function Button({ type, disabled, label }) {
  return <button type={type} disabled={disabled}>{label}</button>;
}
Button.propTypes = {
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};
