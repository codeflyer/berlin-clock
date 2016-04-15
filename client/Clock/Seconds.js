import React, { PropTypes } from 'react';
import moment from 'moment';

export default function Seconds(props) {
  const currentSeconds = moment(props.time).format('ss');
  const doShow = parseInt(currentSeconds) % 2 === 0 ? 'on' : 'off';
  return (<div className={`seconds-tick ${doShow}`}>
    <div className="time">
      {moment(props.time).format('hh:mm:ss')}
    </div>
  </div>);
}

Seconds.propTypes = {
  time: PropTypes.number.isRequired,
}
