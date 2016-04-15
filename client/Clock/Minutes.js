import React, { PropTypes } from 'react';
import moment from 'moment';

export default function Minutes(props) {
  const currentMinutes = +moment(props.time).format('mm');
  const topRowLights = Math.floor(currentMinutes / 5);
  const bottomRowLights = currentMinutes % 5
  let topRow = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
      const color = i % 3 === 0 ? 'red' : 'yellow';
      const show = i < topRowLights ? 'on' : 'off';
      return <div key={i} className={`minute ${show} ${color}`} />
  });

  let bottomRow = [0, 1, 2, 3].map((i) => {
    const show = i < bottomRowLights ? 'on' : 'off';
    return <div key={i} className={`minute ${show}`} />
  });

  return (<div className={`minutes`}>
    <div className="row top">
      {topRow}
    </div>
    <div className="row">
      {bottomRow}
    </div>
  </div>);
}

Minutes.propTypes = {
  time: PropTypes.number.isRequired,
}
