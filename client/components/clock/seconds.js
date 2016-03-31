import React from 'react';

const containerStyle = {
  width: '100%'
};

const cellStyle = {
  border: '4px solid black',
  borderRadius: '25px',
  height: '50px',
  width: '50px',
  marginLeft: '85px'
};

export class Seconds extends React.Component {
  render() {
    let currentCellStyle =
      Object.assign({}, cellStyle, { backgroundColor: this.props.time.getSeconds() % 2 ? 'yellow' : 'grey' });
    return <div style={currentCellStyle}></div>;
  }
}
