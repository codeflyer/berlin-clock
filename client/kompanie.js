import React, { PropTypes } from 'react';

export default function Kompanie(props) {
  return (
    <div className="kompanie">
      {props.children}
    </div>
  );
}

Kompanie.propTypes = {
  children: PropTypes.node.isRequired,
};
