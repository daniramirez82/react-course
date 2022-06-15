/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'react-nice-avatar';
import classes from './CardLog.module.css';

function CardLog({
  user, hour, password, avatarConf,
}) {
  console.log(avatarConf);
  return (
    <div className={classes.wrap}>
      <div className={classes.avatar}>
        <Avatar style={{ width: '3rem', height: '3rem' }} {...avatarConf} />
      </div>
      <div className={classes.content}>
        <div className={classes.topRow}>
          <div className={classes.userName}>{user}</div>
          <div className={classes.hour}>{hour}</div>
        </div>
        <div className={classes.bottomRow}>
          {' '}
          <span>Your password: </span>
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
  avatarConf: PropTypes.any.isRequired,
};

export default CardLog;
