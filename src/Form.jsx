/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import formReducer from './helpers/formLoginRedurcer';
import { validPassRegex, validUserRegex } from './helpers/validators';
import './Form.css';
import Button from './components/Button';
import ButtonClear from './components/ButtonClear';

const initialFormState = {
  user: '',
  password: '',
  errors: {
    user: '*You need at least 8 characters',
    password: '*You need at least 8 characters and one number',
  },
};

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => {
    if (val.length > 0) {
      valid = false;
    }
  });
  return valid;
};

export default function Form({ formTitle }) {
  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  const changeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const { errors } = formState;
    if (name === 'user') {
      errors.user = validUserRegex.test(value) ? '' : '*You need at least 8 characters';
    }
    if (name === 'password') {
      errors.password = validPassRegex.test(value) ? '' : '*You need at least 8 characters and one number';
    }
    dispatch({
      type: 'HANDLE_INPUT_TEXT',
      field: name,
      payload: value,
      errors,

    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // const { errors } = formState;
    validateForm(formState.errors) ? console.log('Valid Form') : console.log('Invalid Form');
    dispatch({
      type: 'CLEAR_FORM',
    });
    console.log(formState);
  };

  return (
    <>
      <div className="form-title">{formTitle}</div>
      <div className="wrapper">

        <div className="form-wrapper">
          <form onSubmit={submitHandler}>
            <div className="input-cont">
              <label htmlFor="user">Your user name will be:</label>
              <input name="user" id="user" type="text" onChange={changeHandler} value={formState.user} placeholder="Type here" />
              <small>{formState.errors.user}</small>
            </div>
            <div className="input-cont">
              <label htmlFor="password"> Very secret pass: </label>
              <input name="password" id="password" type="password" onChange={changeHandler} value={formState.password} placeholder="Type here" />
              <small>{formState.errors.password}</small>
            </div>
            <div className="buttons">
              <ButtonClear label="Go Back" />
              <Button label="Login" type="submit" disabled={!(!formState.errors.user && !formState.errors.password)} />
            </div>
          </form>

        </div>
      </div>
    </>
  );
}

Form.propTypes = {
  formTitle: PropTypes.string.isRequired,
};
