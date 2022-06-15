/* eslint-disable no-console */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import CardLog from './ui/CardLog';
import classes from './ListOfLogs.module.css';

function ListOfLogs({ logs }) {
  const logsLis = logs.reverse().map((log) => (
    <li key={log.id}>
      <CardLog
        user={log.user}
        hour={log.timeStamp}
        password={log.password}
        avatarConf={log.avatarConfig}
      />
    </li>
  ));
  return (
    <ul className={classes.ul}>
      {logsLis}
    </ul>
  );
}

ListOfLogs.defaultProps = {
  logs: [],
};

ListOfLogs.propTypes = {
  logs: PropTypes.array,
};
export default ListOfLogs;
