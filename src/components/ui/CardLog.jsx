/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Avatar, { genConfig } from 'react-nice-avatar';
import classes from './CardLog.module.css';
// generate random config
const config = genConfig({ shape: 'square', sex: 'woman' });

function CardLog({
  user, hour, password,
}) {
  return (
    <div className={classes.wrap}>
      <div className={classes.avatar}>
        <Avatar style={{ width: '8rem', height: '8rem' }} {...config} />
      </div>
      <div className={classes.content}>
        <div className={classes.topRow}>
          <div className={classes.userName}>{user}</div>
          <div className={classes.hour}>{hour}</div>
        </div>
        <div className={classes.bottomRow}>
          {' '}
          {password}
        </div>

      </div>
    </div>
  );
}

CardLog.defaultProps = {
  hour: Date.now(),
};

CardLog.propTypes = {
  user: PropTypes.string.isRequired,
  hour: PropTypes.string,
  password: PropTypes.string.isRequired,
};

export default CardLog;
