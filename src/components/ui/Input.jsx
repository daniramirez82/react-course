/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import classes from './Input.module.css';

function Input({
  label, name, type, onChange, value, placeholder, validateState,
}) {
  return (
    <div className={classes['input-cont']}>
      <label htmlFor={name}>
        {' '}
        {label}
        {' '}
      </label>
      <input
        name={name}
        id={name}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
      <small>{validateState}</small>
    </div>
  );
}

Input.defaultProps = {
  placeholder: 'Type Here',
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  validateState: PropTypes.string.isRequired,

};

export default Input;
