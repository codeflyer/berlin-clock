import React, { PropTypes } from 'react';

export default function Otto(props) {
  return (
    <div className="otto">
      {props.isLooking ?
        <div>
          <img src="./Bismark.png" />
          <cite>There are two things you don't want to be seeing made. Code and sausages &mdash; Otto von Bismarck</cite>
        </div> : null}
    </div>
  );
}

Otto.propTypes = {
  isLooking: PropTypes.bool.isRequired,
};
