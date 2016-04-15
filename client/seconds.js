import React from 'react';

export class Seconds extends React.Component {

  render() {
    let style = {
      background: this.props.value % 2 === 0 ? 'red' : 'yellow'
    };

    return (
      <div className="box seconds" style={style}></div>
    );
  }
}
