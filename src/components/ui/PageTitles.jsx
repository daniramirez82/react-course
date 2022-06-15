import React from 'react';
import PropTypes from 'prop-types';
import classes from './PageTitles.module.css';

function Titles({ title }) {
  return <h1 className={classes['page-title']}>{title}</h1>;
}

Titles.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Titles;
