/* eslint-disable no-console */
import React, { useReducer } from 'react';
import formReducer from './helpers/formLoginRedurcer';
import { validPassRegex, validUserRegex } from './helpers/validators';

import './input.css';

const initialFormState = {
  user: '',
  password: '',
  hasConsented: false,
  errors: {
    user: ' ',
    password: ' ',
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

export default function Input() {
  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  const changeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const { errors } = formState;
    if (name === 'user') {
      errors.user = validUserRegex.test(value) ? '' : 'Invalid user Name';
    }
    if (name === 'password') {
      errors.password = validPassRegex.test(value) ? '' : 'Invalid Password';
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
    validateForm(formState.errors) ? console.log('Valid Form') : console.log('Invalid Form');
  };

  return (
    <div className="wrapper">

      <div className="form-wrapper">
        <form onSubmit={submitHandler}>
          <input name="user" type="text" onChange={changeHandler} value={formState.user} placeholder="Introduzca su Usuario: " />
          <p>{formState.user}</p>
          <span>{formState.errors.user}</span>
          <input name="password" type="password" onChange={changeHandler} value={formState.password} placeholder="Introduzca su contraseña" />
          <p>
            {' '}
            {formState.password}
            {' '}
          </p>
          <span>{formState.errors.password}</span>
          <button type="submit" disabled={formState.errors.user || formState.errors.password}>Enviar</button>

        </form>

      </div>
    </div>
  );
}
