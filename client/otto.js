import React, { PropTypes } from 'react';

export default function Otto(props) {
  return (
    <div className="otto">
      {props.isLooking ? <img src="./Bismark.png" /> : null}
    </div>
  );
}

Otto.propTypes = {
  isLooking: PropTypes.bool.isRequired,
};
