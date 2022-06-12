/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import './ButtonClear.css';

export default function ButtonClear({ type, disabled, label }) {
  return <button className="button-clear" type={type} disabled={disabled}>{label}</button>;
}
ButtonClear.propTypes = {
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};
