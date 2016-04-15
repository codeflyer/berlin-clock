import React, { PropTypes } from 'react';
import moment from 'moment';

export default function Hours(props) {
  const currentHours = +moment(props.time).format('HH');
  const topRowLights = Math.floor(currentHours / 5);
  const bottomRowHours = currentHours % 5
  const topRow = [0, 1, 2, 3].map((i) => {
      return i < topRowLights ?
        <div key={i} className="hour on"></div> :
        <div key={i} className="hour off"></div>;
  });

  const bottomRow = [0, 1, 2, 3].map((i) => {
      return i < bottomRowHours ?
        <div key={i} className="hour on"></div> :
        <div key={i} className="hour off"></div>;
  });

  return (<div className={`hours`}>
    <div className="row">
      {topRow}
    </div>
    <div className="row">
      {bottomRow}
    </div>
  </div>);
}

Hours.propTypes = {
  time: PropTypes.number.isRequired,
}
